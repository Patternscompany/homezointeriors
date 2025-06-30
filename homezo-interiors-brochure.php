<?php
// Include PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['mobile'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'localhost'; // Replace with your SMTP server address
        $mail->SMTPAuth =false;
        $mail->Username = ''; // Replace with your SMTP username
        $mail->Password = ''; // Replace with your SMTP password
    //   $mail->SMTPSecure = 'ssl'; 
        $mail->Port = 25; // Use 587 for TLS, 465 for SSL

        // Email settings
        $mail->setFrom('', 'Patterns Contact Form'); // Replace with your email and name
        $mail->addAddress('pandureddypatterns@gmail.com'); // Add recipient's email

        $mail->Subject = "Message from $name";
        $mail->isHTML(true);
        $mailContent = "<p><strong>Name:</strong> $name</p>
                        <p><strong>Email:</strong> $email</p>
                        <p><strong>Phone:</strong> $phone</p>";
        $mail->Body = $mailContent;

        // Send the email
        if ($mail->send()) {
            echo "Email has been sent successfully.";
            header('Location: assets/brochure/Company Profile Presentation.pdf'); // Redirect to 'thank-you.html'
            exit;
        } else {
            echo "Email could not be sent.";
        }
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
} else {
    // Redirect to 'index.html' if accessed without POST
    header('Location: index.html');
    exit;
} 