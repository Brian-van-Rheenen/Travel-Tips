<?php
//Sessie beginnen
session_start();

//Controleer of er een email is opgeslagen
if (!isset($_SESSION['email']) || strlen($_SESSION['email']) == 0)
{
	//Echo false
	echo "false";
}

//Als er ingelogd is
else
{
	//Echo true
	echo "true";
}
?>