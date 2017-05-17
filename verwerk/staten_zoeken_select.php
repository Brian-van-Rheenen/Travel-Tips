<?php
require '../config.php';

//Lees het id uit
$id = $_GET['id'];

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM states WHERE `country_id` = $id");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	echo "<label class='input_label'>Staten:</label>";
	echo "<select class='select_staten' name='staten' onchange='alleSteden(); alleStatenTips(); reset()'>";
	echo "<option disabled selected value> -- Kies een staat -- </option>";
		
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{		
		//Pak alle staten uit de database
		echo "<option value=" . $row['id'] . ">" . $row['name'] . "</option>";
	}
	
	echo "</select>";
}

//Als er geen staten gevonden zijn
else
{
	//Laat dan een melding zien
	echo "<p>Er zijn geen staten gevonden.</p>";
}