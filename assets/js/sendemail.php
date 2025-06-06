<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'kardamkumar13@gmail.com'; // Your Gmail
    $mail->Password = 'your_app_password';   // Gmail App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('homezointeriors@gmail.com', 'Homezo Website');
    $mail->addAddress('homezointeriors@gmail.com'); // where you want to receive the test mail

    // Content
    $mail->isHTML(false);
    $mail->Subject = $_POST["subject"];
    $mail->Body    = "Name: " . $_POST["name"] . "\n"
                   . "Email: " . $_POST["email"] . "\n"
                   . "Phone: " . $_POST["phone"] . "\n"
                   . "Message:\n" . $_POST["message"];

    $mail->send();
    echo 'Message sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
