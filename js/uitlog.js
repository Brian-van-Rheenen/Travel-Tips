function logout()
{
	//Maak een ajax request
	$.ajax({
		url: "verwerk/logout.php",
		type: "POST"
	})

	.done(function (data) {
		//Als er nog niet is ingelogd
		if (data == "true")
		{
			//Stuur de gebruiker door
			window.location.replace("../index.html");
		}
	});
}