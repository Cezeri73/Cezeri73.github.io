<html lang="en">
<head>
    <meta charset="UTF-8">
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    extract($_POST);

    if(isset($name)) {
        echo  "$name<br>";
    }else{
        echo " Name :Not provided"."</br>";
    }

    if(isset($username)) {
        echo "$username<br>";
    }else{
        echo " Username Not provided"."</br>";
    }

    
    if(isset($password)) {
        echo "$password<br>";
    }else{
        echo " Passaword Not provided"."</br>";
    }


    if(isset($address)) {
        echo "$address<br>";
    }else{
        echo " Adress :Not provided"."</br>";
    }


    if(isset($country)) {
        echo "$country<br>"."</br>";
    }
    else{
        echo " Country : Not provided"."</br>";
    }


    if(isset($zipcode)) {
        echo "$zipcode<br>";
    }else{
        echo " Zipcode : Not provided"."</br>";
    }


    if(isset($email)) {
        echo "$email<br>";
    }
    else{
        echo " Email : Not provided"."</br>";
    }


    if(isset($gender)) {
        echo "$gender<br>";
    }else{
        echo " Gender :Not provided"."</br>";
    }


    if(isset($languages)) {
        
        foreach ($languages as $language) {
            echo "$language ";
        }
        echo "<br>";
    }else{
        echo " Languages .: Not provided"."</br>";
    }


    if(isset($about)) {
        echo " $about<br>";
    }else{
        echo " About:Not provided"."</br>";
    }

}
?>

</body>
</html>

