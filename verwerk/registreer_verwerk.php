<?php
require "../config.php";
require '../PHPMailer-master/PHPMailerAutoload.php';

//Lees de gegevens uit de POST
$email = mysqli_real_escape_string($mysqli, $_POST['email']);
$password = mysqli_real_escape_string($mysqli, $_POST['wachtwoord']);

//Encrypt het wachtwoord met MD5
$enc_password = md5($password);

//Als er een emailadres en een wachtwoord ingevuld is
if($email && $password)
{
	//Maak een random code
	$confirmcode = rand();

	//Plaats de gegevens in de database
	$query = "INSERT INTO accounts VALUES ('$email', '$enc_password', $confirmcode, 0)";

	//Maak een result van de query
	$result = mysqli_query($mysqli, $query);

	//Als het result succesvol verlopen is
	if ($result)
	{
		//Haal het hoogste ID uit de tabel
		$maxID = "SELECT MAX(ID) AS max_id FROM rating";
		
		//Maak een result van de query
		$maxIDresult = mysqli_query($mysqli, $maxID);
		
		//Haal alle rijen uit de tabel
		$row = mysqli_fetch_assoc($maxIDresult);
		
		//Haal de rij `max_id` uit de tabel
		$maxID = $row['max_id'];
		
		//Haal het hoogste ID uit de tabel
		$minID = "SELECT MIN(ID) AS min_id FROM rating";
		
		//Maak een result van de query
		$minIDresult = mysqli_query($mysqli, $minID);
		
		//Haal alle rijen uit de tabel
		$row = mysqli_fetch_assoc($minIDresult);
		
		//Haal de rij `min_id` uit de tabel
		$minID = $row['min_id'];
		
		//Als het result succesvol verlopen is
		if ($maxIDresult && $minIDresult)
		{
			//Loop door alle IDs heen
			for ($i = $minID; $i <= $maxID; $i++)
			{
				//Kijk of het account al bestaat in de tabel rating
				$ratingzoeken = "SELECT * FROM `rating` WHERE `ID` = '$i' AND `Email` = '$email'";
				
				//Maak een result van de query
				$zoekenresult = mysqli_query($mysqli, $ratingzoeken);
				
				// Zijn er records gevonden?
				if (mysqli_num_rows($zoekenresult) > 0)
				{
					//Doe niks
				}
				
				else
				{
					//Voeg het account toe bij de rating
					$rating = "INSERT INTO rating VALUES ('$i', '$email', '0')";
					
					//Maak een result van de query
					$ratingresult = mysqli_query($mysqli, $rating);
				}
			}
			
			//maak de body van de mail voor mailserver die HTML ondersteunen
			$body .= "<a href=\"http://ap24-19.ict-lab.nl/emailconfirm.html?email=" . $email . "&code=" . $confirmcode . "\">Klik op de link om uw account te bevestigen</a><p>";

			//maak de body van de mail voor mailserver die HTML niet ondersteunen
			$text_body .= "<a href=\"http://ap24-19.ict-lab.nl/emailconfirm.html?email=" . $email . "&code=" . $confirmcode . "\">Klik op de link om uw account te bevestigen</a><p>";

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

			$mail->Subject = 'Bevestig uw account';
			$mail->Body    = $body;
			$mail->AltBody = $text_body;

			$mail->addAttachment('../images/logo_mini.png');

			//Als de mail niet verstuurd is
			if(!$mail->send())
			{
				//Laat een melding zien
				echo 'Er is iets fout gegaan met het versturen van de mail.';
				echo 'Mailer Error: ' . $mail->ErrorInfo;
			} 

			//Als de mail wel verstuurd is
			else 
			{
				//Echo true
				echo "true";
			}
		}
	}
	
	//Als het result niet succesvol verlopen is
	else 
	{
		//Laat dan een melding zien
		echo "Er is iets fout gegaan met de database.";
	}
}
?>