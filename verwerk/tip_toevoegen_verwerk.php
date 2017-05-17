<?php
require '../config.php';

//Haal de data uit de POST
$landen = mysqli_real_escape_string($mysqli, $_POST["landen"]);
$staat = mysqli_real_escape_string($mysqli, $_POST["staat"]);
$stad = mysqli_real_escape_string($mysqli, $_POST["stad"]);
$beschrijving = mysqli_real_escape_string($mysqli, $_POST["beschrijving"]);

//Als er een land, staat en stad meegestuurd is
if ($landen && $staat && $stad)
{
	//Maak het adres
	$address = stripslashes($landen) . ", " . stripslashes($staat) . ", " . stripslashes($stad);
}

//Als er een land en alleen een staat meegestuurd is
else if ($landen && $staat)
{
	//Maak het adres
	$address = $landen . ", " . $staat;
}

//Als er alleen een land meegestuurd is
else
{
	//Maak het adres
	$address = $landen;
}

//Vervang alle spaties met een "+" om het zoek patroon van Google te matchen
$address = str_replace(" ", "+", $address);

//Maak de URL
$url = "http://maps.google.com/maps/api/geocode/json?sensor=false&address=$address";

//Ga naar die URL en vraag het antwoord terug
$response = file_get_contents($url);

//Maak een array object van het antwoord
$json = json_decode($response,TRUE);
	
//Sla de coordinaten op in een variabel
$lat = $json['results'][0]['geometry']['location']['lat'];
$lng = $json['results'][0]['geometry']['location']['lng'];

//Als er goede coordinaten terug gegeven zijn
if ($lat != 0 && $lng != 0)
{
	//Voeg toe aan de database
	$query = "INSERT INTO tips VALUES ('NULL', '$landen', '$staat', '$stad', '$beschrijving', '0', '0', '0')";
	
	//Zet in de database
	$resultTip = mysqli_query($mysqli, $query);
	
	//Haal het ID van de laatst toegevoegde row op
	$id = mysqli_insert_id($mysqli);

	//Is het toevoegen gelukt?
	if ($resultTip)
	{
		//Voeg de coordinaten toe in de database
		$resultCoords = mysqli_query($mysqli, "INSERT INTO coordinaten VALUES ('NULL', '$lat', '$lng')");

		//Is het toevoegen gelukt?
		if ($resultCoords)
		{
			// Zoek in de database
			$result = mysqli_query($mysqli, "SELECT * FROM accounts");

			// Zijn er records gevonden?
			if (mysqli_num_rows($result) > 0)
			{
				// Lees alle gevonden records
				while ($row = mysqli_fetch_array($result))
				{	
					//Voeg toe aan de database
					$rating = "INSERT INTO rating VALUES ('$id', '" . $row['email'] . "', '0')";

					//Zet in de database
					$resultRating = mysqli_query($mysqli, $rating);
				}

				//Echo true
				echo "true";
			}
		}

		//Als er niks toegevoegd is
		else
		{
			//Echo false
			echo "false";
		}
	}

	//Als er niks toegevoegd is
	else
	{
		//Echo false
		echo "false";
	}
}
?>