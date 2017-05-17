<?php
//Sessie beginnen
session_start();

echo "<ul class='navigation_selection'>";

//Controleer of er geen e-mail is opgeslagen
if (!isset($_SESSION['email']) || strlen($_SESSION['email']) == 0)
{
	//Als de gebruiker NIET ingelogd is, laat dan dit zien
	echo "	<a href='index.html'><li class='navigation_item'>MAP</li></a>";
	echo "	<a href='tip_bladeren.html'><li class='navigation_item'>TIPS BLADEREN</li></a>";
	echo "	<a href='tip_bladeren_keywords.html'><li class='navigation_item'>TIPS ZOEKEN OP KEYWORDS</li></a>";
}

else
{
	//Als de gebruiker WEL ingelogd is, laat dan dit zien
	echo "<a href='index.html'><li class='navigation_item'>MAP</li></a>";
	echo "<a href='tip_bladeren.html'><li class='navigation_item'>TIPS BLADEREN</li></a>";
	echo "<a href='tip_bladeren_keywords.html'><li class='navigation_item'>TIPS ZOEKEN OP KEYWORDS</li></a>";
	echo "<a href='tip_toevoegen.html'><li class='navigation_item'>TIPS TOEVOEGEN</li></a>";
	echo "<a href='resetwachtwoord.html'><li class='navigation_item'>WACHTWOORD VERANDEREN</li></a>";
}

echo "</ul>";

echo "<center>";

//Controleer of er geen e-mail is opgeslagen
if (!isset($_SESSION['email']) || strlen($_SESSION['email']) == 0)
{
	//Als de gebruiker NIET ingelogd is, laat dan dit zien
	echo "<a href='inlog.html'><h1 class='boxed_item boxed_item_smaller'>
		<i class='fa fa-user'></i>
		INLOGGEN
	</h1></a>";

	echo "<a href='registreer.html'><h1 class='boxed_item boxed_item_smaller'>
		<i class='fa fa-user-plus'></i>
		REGISTREREN
	</h1></a>";
}

else
{
	//Als de gebruiker WEL ingelogd is, laat dan dit zien
	echo "<a href='#' onClick='logout();'><h1 class='boxed_item boxed_item_smaller'>
		<i class='fa fa-user'></i>
		UITLOGGEN
	</h1></a>";
}

echo "</center>";
?>