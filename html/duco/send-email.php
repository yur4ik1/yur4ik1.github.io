<?php
$name = $_POST['name'];
$last = $_POST['last'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'yura.kachan27@gmail.com';
$subject = 'New contact form submission';
$body = "Name: $name\nLast name: $last\nEmail: $email\nMessage: $message\nPhone: $phone";

if (mail($to, $subject, $body)) {
  echo 'Email sent successfully.';
} else {
  echo 'An error occurred while sending the email.';
}
?>
