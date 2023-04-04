<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'yura.kachan27@gmail.com';
$subject = 'New contact form submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

if (mail($to, $subject, $body)) {
  echo 'Email sent successfully.';
} else {
  echo 'An error occurred while sending the email.';
}
?>
