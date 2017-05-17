//Maak een ajax request
$.ajax({
	url: "verwerk/session.inc.php",
	type: "POST"
})

.done(function (data) {
	//Als er nog niet is ingelogd
	if (data == "false")
	{
		//Stuur de gebruiker door
		window.location.replace("../inlog.html");
	}
});