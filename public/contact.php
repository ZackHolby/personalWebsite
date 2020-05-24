<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Holbyland@test.com';

    $email_subject = "Testing this php message";

    $email_body = "UserName: $name. \n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";

    $to = "zackholbrook44@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject, $email_body, $headers);

    header("Location: index.html");

?>
