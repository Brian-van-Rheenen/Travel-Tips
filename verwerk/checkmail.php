<?php
require '../config.php';

//Haal de data uit de POST
$email = $_POST["email"];

//Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM accounts WHERE email = '$email'");

//Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	//Echo false
	echo "false";
}

//Als er niks gevonden is
else
{
	//Echo true
	echo "true";
}
?>