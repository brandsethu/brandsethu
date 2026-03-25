<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Destination Email
    $to = "business@brandsethu.in"; 
    
    // 2. Form Data from your Image
    $company = strip_tags(trim($_POST["company_name"]));
    $name    = strip_tags(trim($_POST["contact_person"]));
    $email   = filter_var(trim($_POST["email_address"]), FILTER_SANITIZE_EMAIL);
    $phone   = strip_tags(trim($_POST["phone_number"]));
    $interest = strip_tags(trim($_POST["service_interest"]));
    $message = strip_tags(trim($_POST["message"]));

    $subject = "New Quote Request: $company";

    // 3. Email Content (HTML Format)
    $email_content = "
    <html>
    <body>
        <h2>New Enquiry from Brand Sethu Website</h2>
        <p><strong>Company Name:</strong> $company</p>
        <p><strong>Contact Person:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Service Interest:</strong> $interest</p>
        <p><strong>Message:</strong><br>$message</p>
    </body>
    </html>";

    // 4. Headers (Required to avoid Spam filters)
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: website@brandsethu.in" . "\r\n"; // Must be a domain email
    $headers .= "Reply-To: $email" . "\r\n";

    // 5. Send Process
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect back to your site with a success message
        header("Location: index.html?status=success#contact");
        exit;
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "There was a problem with your submission, please try again.";
}
?>
