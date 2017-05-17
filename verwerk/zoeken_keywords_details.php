<?php
require '../config.php';

//Lees het id uit
$id = mysqli_real_escape_string($mysqli, $_GET['id']);

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM tips	WHERE `ID` = '$id'");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	echo "<br>";
	echo "<br>";
	
	//Horizontal lijn
	echo "<hr>";
	
	echo "<br>";
	
	//Label van de details
	echo "<label class='details_label'>Details van de tip</label>";
	
	echo "<br>";
	
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{	
		//Laat de informatie van het land zien
		echo "<label class='details_label'>Land:</label>";
		
		echo "<div class='details'>" . $row['Land'] . "</div>";
		echo "<br>";
		echo "<br>";
		
		//Laat de informatie van de staat zien
		echo "<label class='details_label'>Staat:</label>";
		
		//Als de tip geen staat heeft
		if ($row['Staat'] == "")
		{
			echo "<div class='details'>Deze tip heeft geen staat.</div>";
			echo "<br>";
			echo "<br>";
		}
		
		//Als er wel een staat is
		else
		{
			//Laat de informatie van de staat zien
			echo "<div class='details'>" . $row['Staat'] . "</div>";
			echo "<br>";
			echo "<br>";
		}
		
		//Laat de informatie van de stad zien
		echo "<label class='details_label'>Stad:</label>";
		
		//Als de tip geen stad heeft
		if ($row['Stad'] == "")
		{
			//Laat een melding zien
			echo "<div class='details'>Deze tip heeft geen stad.</div>";
			echo "<br>";
			echo "<br>";
		}
		
		//Als er wel een stad is
		else
		{
			//Laat de informatie van de stad zien
			echo "<div class='details'>" . $row['Stad'] . "</div>";
			echo "<br>";
			echo "<br>";
		}
		
		//Laat de informatie van de beschrijving zien
		echo "<label class='details_label'>Beschrijving:</label>";
		
		echo "<div class='details'>" . $row['Beschrijving'] . "</div>";
		echo "<br>";
		echo "<br>";
		
		//Laat de informatie van de rating zien
		echo "<label class='details_label'>Rating:</label>";
		
		echo "<div class='details'>" . $row['Rating'] . "</div>";
		
		//Begin een sessie
		session_start();
		
		//Controleer of niet ingelogd is
		if (!isset($_SESSION['email']) || strlen($_SESSION['email']) == 0)
		{
			echo "<div id='details' class='details'>Log in om te raten.</div>";
		}
		
		//Als er ingelogd is
		else
		{
			// Zoek in de database
			$rating = mysqli_query($mysqli, "SELECT * FROM rating WHERE `ID` = '$id' AND `Email` = '" . $_SESSION['email'] . "' AND `Gestemd` = '0'");
			
			// Zijn er records gevonden?
			if (mysqli_num_rows($rating) > 0)
			{
				echo "	<div class='details'>Rate hier:</div>";
				echo "	<div class='rating'>";
				echo "  <label>";
				echo "	<input type='radio' name='rating' id=" . $row['ID'] . " value='5' title='5 stars'> 5";
				echo "  </label>";
				echo "  <label>";
				echo "	<input type='radio' name='rating' id=" . $row['ID'] . " value='4' title='4 stars'> 4";
				echo "  </label>";
				echo "  <label>";
				echo "	<input type='radio' name='rating' id=" . $row['ID'] . " value='3' title='3 stars'> 3";
				echo "  </label>";
				echo "  <label>";
				echo "	<input type='radio' name='rating' id=" . $row['ID'] . " value='2' title='2 stars'> 2";
				echo "  </label>";
				echo "  <label>";
				echo "	<input type='radio' name='rating' id=" . $row['ID'] . " value='1' title='1 star'> 1";
				echo "  </label>";
				echo "	</div>";
			}
			
			else
			{
				//Laat een melding zien dat de gebruiker al gestemd heeft
				echo "<div id='details' class='details'>U heeft al voor deze tip gestemd.</div>";
			}
		}
	}
}

//Als er geen details gevonden zijn
else
{
	//Laat dan een melding zien
	echo "<p>Er zijn geen details gevonden.</p>";
}