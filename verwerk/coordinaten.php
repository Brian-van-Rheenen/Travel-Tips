<?php
require '../config.php';

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM coordinaten");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{
		// Zoek in de database voor de beschrijving
		$beschrijving = mysqli_query($mysqli, "SELECT `Beschrijving` FROM tips WHERE ID = " . $row['ID']);
		
		// Zijn er records gevonden?
		if (mysqli_num_rows($beschrijving) > 0)
		{
			// Lees alle gevonden records
			while ($row_beschrijving = mysqli_fetch_array($beschrijving))
			{
				// Voeg toe aan de array
				$locations[] = array("0" => $row['Latitude'], "1" => $row['Longitude'], "2" => "<h3>Beschrijving:</h3> <br> <hr> <br> " . $row_beschrijving['Beschrijving']);
			}
		}
	}
	
	// Stuur de array terug
	echo json_encode($locations);
}