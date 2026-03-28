import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Type to represent a corporate quote/inquiry request
  type CorporateRequest = {
    companyName : Text;
    contactPerson : Text;
    email : Text;
    phone : Text;
    interest : Text; // Product/service interest
    message : Text;
    timestamp : Int;
  };

  module CorporateRequest {
    public func compare(request1 : CorporateRequest, request2 : CorporateRequest) : Order.Order {
      Int.compare(request1.timestamp, request2.timestamp);
    };
  };

  let requests = Map.empty<Int, CorporateRequest>();

  // Public shared function for users to submit quotes/inquiries
  // No authorization check - allows all users including guests (anonymous principals)
  public shared ({ caller }) func submitRequest(request : CorporateRequest) : async () {
    let timestamp = Time.now();
    let newRequest : CorporateRequest = {
      request with
      timestamp;
    };
    requests.add(timestamp, newRequest);
  };

  // Admin-only query to fetch all requests
  public query ({ caller }) func getAllRequests() : async [CorporateRequest] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all requests");
    };
    requests.values().toArray().sort();
  };

  // Get single request (for admin review)
  public query ({ caller }) func getRequest(id : Int) : async CorporateRequest {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view requests");
    };
    switch (requests.get(id)) {
      case (null) { Runtime.trap("Request not found") };
      case (?request) { request };
    };
  };
};
