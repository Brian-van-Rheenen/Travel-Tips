<?php
require '../config.php';

//Lees het id uit
$id = $_GET['id'];

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM cities WHERE `state_id` = $id");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	echo "<label class='input_label'>Steden:</label>";
	echo "<select class='select_steden' name='steden' onchange='alleStedenTips(); resetdetails()'>";
	echo "<option disabled selected value='default'> -- Kies een stad -- </option>";
		
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{		
		//Pak alle steden uit de database
		echo "<option value=" . $row['id'] . ">" . $row['name'] . "</option>";
	}
	
	echo "</select>";
}

//Als er geen steden gevonden zijn
else
{
	//Laat dan een melding zien
	echo "<p>Er zijn geen steden gevonden.</p>";
}