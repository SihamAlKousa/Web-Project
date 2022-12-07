<?php
   $name=$_POST['name'];
   $email=$_POST['email'];
   $phone=$_POST['phone'];
   $country=$_POST['country'];
   $msg=$_POST['msg'];
   //database connection

   $conn=new mysqli('localhost','root','','contact_us',3306);

   if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
   }
   else{

    $stmt=$conn->prepare("Insert into contactus(name,email,phone,country,msg) values(?,?,?,?,?)");
    
//datatype for each attribute/ input
    $stmt->bind_param("ssiss",$name,$email,$phone,$country,$msg);

/* Execute the statement */

$stmt->execute();
    echo "Thank you for your message, we will get back to you as soon as we can.";
    $stmt->close();
    $conn->close();

   }

     if(isset($_POST['submit'])){
         $msg = $_POST['msg'];
         if(!empty(msg)){
             $query = "INSERT INTO contactus (msg) VALUES('$msg')";
         
           }
         }
         
    ?>
