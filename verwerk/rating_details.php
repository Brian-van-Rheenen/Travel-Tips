<?php
require '../config.php';

//Lees het id uit
$id = mysqli_real_escape_string($mysqli, $_GET['id']);

// Zoek in de database
$result = mysqli_query($mysqli, "SELECT * FROM tips	WHERE `ID` = '$id'");

// Zijn er records gevonden?
if (mysqli_num_rows($result) > 0)
{
	// Lees alle gevonden records
	while ($row = mysqli_fetch_array($result))
	{	
		echo "<div class='details'>" . $row['Rating'] . "</div>";
	}
}