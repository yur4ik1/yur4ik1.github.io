<?php
if (isset($_POST['email']) ) {
    $email = $_POST['email'];
    $to = 'website@tensig.eu';
    $subject = 'Not Quite Ready for Tensig?';
    $body = "nEmail: $email";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, there was a problem sending your message.";
    }
}
?>
