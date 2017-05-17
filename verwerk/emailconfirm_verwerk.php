<?php
require "../config.php";

//Lees de gegevens uit de sessie en de header
$email = $_GET['email'];
$code = $_GET['code'];

//Als de meegestuurde code hetzelfde is als die in de sessie
if ($email == NULL || $code == NULL)
{
	echo "<p class='verify'>Er is iets fout gegaan met het bevestigen van uw e-mailadres.</p>";
}

else
{
	//Plaats de gegevens in de database
	$query = "UPDATE `accounts` SET activated = '1' WHERE `email` = '$email' AND `token` = '$code'";

	//Maak een result van de query
	$result = mysqli_query($mysqli, $query);

	//Als het result succesvol verlopen is
	if ($result)
	{
		echo "<p class='verify'>Uw e-mailadres is succesvol bevestigd.</p>";
		echo "<p class='verify'>Klik <a href='inlog.html'>hier</a> om verder te gaan.</p>";
	}

	//Als het result niet succesvol verlopen is
	else 
	{
		//Laat dan een melding zien
		echo "<p class='verify'>Uw e-mailadres in niet bevestigd. Probeer het opnieuw.</p>";
	}
}
?>