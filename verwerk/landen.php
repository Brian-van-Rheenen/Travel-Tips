<?php
require '../config.php';

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM countries");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	echo "<label class='input_label'>Landen:</label>";
	echo "<select class='select_landen' name='landen' onchange='alleStaten(); reset()'>";
	echo "<option disabled selected value> -- Kies een land -- </option>";
		
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{		
		//Pak alle landen uit de database
		echo "<option value=" . $row['id'] . ">" . $row['name'] . "</option>";
	}
	
	echo "</select>";
}

//Als er geen landen gevonden zijn
else
{
	//Laat dan een melding zien
	echo "<p>Er zijn geen landen gevonden.</p>";
}