<?php

$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$country=$_POST['country'];
$message=$_POST['message'];

if(!empty($email) && !empty($message)){
    if(filter_var($email,FILTER_VALIDATE_EMAIL))
    { // if the email entered by user is valid
        $reveiver = "U20104610@sharjah.ac.ae";
        $subject= "from: $name <$email>";

        $body="Name: $name\nEmail: $email\nPhone: $phone\nCountry: $country\n\nMessage: $message\n\nRegards,\n$name";
        $sender="From: $email";

        if(mail($receiver,$subject,$body,$sender)){
            echo "Your message has been sent";
        }
        else{
            echo "Sorry, failed to send your message!";
        }
    }
    else
    {
    echo "Enter a valid email address!";
    }
}
else{
    echo "Email and password field are required!";
}
?>