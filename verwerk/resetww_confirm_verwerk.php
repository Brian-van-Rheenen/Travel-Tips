<?php
require('../config.php');
		
//Sessie beginnen
session_start();
		
//Lees de gegevens uit de sessie en de header
$email = $_SESSION['email'];
$wachtwoord = $_POST['wachtwoord'];
$enc_wachtwoord = md5($wachtwoord);
		
//Als er geen e-mailadres of code bestaat
if ($email == NULL || $wachtwoord == NULL)
{
	//Echo 'true'
	echo "true";
}

else
{
	//Plaats de gegevens in de database
	$query = "UPDATE `accounts` SET wachtwoord = '$enc_wachtwoord' WHERE `email` = '$email'";

	//Maak een result van de query
	$result = mysqli_query($mysqli, $query);

	//Als het result succesvol verlopen is
	if ($result)
	{
		//Echo 'false'
		echo "false";
	}

	//Als het result niet succesvol verlopen is
	else 
	{
		//Echo 'true'
		echo "true";
	}
}
?>