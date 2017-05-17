<?php
require '../config.php';

//Lees het id uit
$id = $_GET['id'];

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT *
								FROM tips
								WHERE Stad = (
									SELECT name
									FROM cities
									WHERE id = $id
									)");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	//Maak een tabel
	echo "<table>";
	
		//Maak een body voor de tabel
		echo "<tbody>";
	
			//Maak een rij
			echo "<tr>";
			
			//Maak een header voor de rijen
			echo "<th>Beschrijving: (Klik op een tip om verdere informatie te bekijken)</th>";
	
			//Eindig de rij
			echo "<tr>";
	
			// Lees alle gevonden records
			while ($row = mysqli_fetch_array($result))
			{	
				//Maak een rij
				echo "<tr>";
				
					//Vul de rij met gegevens
					echo "<td onClick='details(" . $row['ID'] . ")'>" . $row['Beschrijving'] . "</td>";
				
				//Eindig de rij
				echo "</tr>";
			}
	
		//Eindig de body voor de tabel
		echo "</tbody>";
	
	//Eindig de tabel
	echo "</table>";
}

//Als er geen tips gevonden zijn
else
{
	//Laat dan een melding zien
	echo "<p>Er zijn geen tips bij deze stad gevonden.</p>";
}