
<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $role = $_POST['role'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $to = 'website@tensig.eu';
    $subject = 'New Contact Request';
    $body = "Name: $name\nEmail: $email\nCompany: $company\nRole: $role\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
?>
