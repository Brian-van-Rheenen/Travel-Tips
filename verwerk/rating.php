<?php
require '../config.php';

//Lees het id uit
$id = mysqli_real_escape_string($mysqli, $_POST['id']);
$aantal = mysqli_real_escape_string($mysqli, $_POST['aantal']);

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM tips	WHERE `ID` = '$id'");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{
		//Maak variabelen met onderstaande gegevens
		$AantalSterren = $row['Aantal Sterren'] += $aantal;
		$AantalStemmen = $row['Aantal Stemmen'] += 1;
		
		// Update de database
		$result2 = mysqli_query($mysqli, "UPDATE `tips` SET 
					`Aantal Stemmen` = $AantalStemmen,
					`Aantal Sterren` = $AantalSterren,
					`Rating` = ROUND(($AantalSterren  / $AantalStemmen), 1)
					WHERE `ID` = '$id'");
					
		//Als het updaten gelukt is
		if ($result2)
		{
			//Start een sessie
			session_start();
			
			// Update de database
			$result3 = mysqli_query($mysqli, "UPDATE `rating` SET 
					`Gestemd` = 1
					WHERE `ID` = '$id' AND `Email` = '" . $_SESSION['email'] . "'");
			
			//Als het updaten gelukt is
			if ($result3)
			{
				//Echo 'true'
				echo 'true';
			}
			
			//Als het updaten niet gelukt is
			else
			{
				//Laat dan een melding zien
				echo 'false';
			}
		}
		
		//Als het updaten niet gelukt is
		else
		{
			//Laat dan een melding zien
			echo 'false';
		}
	}
}

//Als het updaten niet gelukt is
else
{
	//Laat dan een melding zien
	echo 'false';
}