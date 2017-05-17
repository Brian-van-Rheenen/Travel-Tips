<?php
require '../config.php';

//Haal de data uit de POST
$email = $_POST["email"];
$wachtwoord = $_POST["wachtwoord"];

//Als het wachtwoord niet leeg is
if ($wachtwoord != NULL)
{
	//Encrypt het wachtwoord met MD5
	$enc_password = md5($wachtwoord);
}

//Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM accounts WHERE email = '$email' AND wachtwoord = '$enc_password' AND activated = '1'");

//Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	//Start een sessie aan
	session_start();
	
	//Maak dan een session aan
	$_SESSION['email'] = $email;
	
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