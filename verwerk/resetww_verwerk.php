<?php
require "../config.php";
require '../PHPMailer-master/PHPMailerAutoload.php';

//Lees de gegevens uit de sessie en de POST
$email = $_POST['email'];

//Als er een emailadres en een wachtwoord ingevuld is
if($email)
{
	//Maak een random code
	$randomcode = rand();
	
	//Encrypt het wachtwoord met MD5
	$enc_password = md5($randomcode);

	//maak de body van de mail voor mailserver die HTML ondersteunen
	$body .= "Uw tijdelijke wachtwoord is: <strong>" . $randomcode . "</strong>. Hiermee kunt u inloggen om uw wachtwoord te veranderen.";
	
	//maak de body van de mail voor mailserver die HTML niet ondersteunen
	$text_body .= "Uw tijdelijke wachtwoord is: <strong>" . $randomcode . "</strong>. Hiermee kunt u inloggen om uw wachtwoord te veranderen.";
		
	//Maak een PHPMailer aan
	$mail = new PHPMailer;
		
	//Zet de configuratie voor de mailer goed
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'in-v3.mailjet.com';  				  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = '8a9687963370df3f6f034b27db141fa0'; // SMTP username
	$mail->Password = 'c2821078c9bbd073e08ed8f9af6760c7'; // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->setFrom('78558@glr.nl', 'Travel Tips');		  // Sent from
	$mail->addAddress($email, $email);					  // Sent to
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'Wachtwoord veranderen';
	$mail->Body    = $body;
	$mail->AltBody = $text_body;
		
	$mail->addAttachment('../images/logo_mini.png');

	//Als de mail niet verstuurd is
	if(!$mail->send())
	{
		//Echo 'true'
		echo "true";
	} 

	//Als de mail wel verstuurd is
	else 
	{
		//Plaats de gegevens in de database
		$query = "UPDATE `accounts` SET wachtwoord = '$enc_password' WHERE `email` = '$email'";

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
}
?>