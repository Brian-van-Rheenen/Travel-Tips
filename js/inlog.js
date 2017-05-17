$(document).ready(function(){

	$('.input').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			checkInlog();
		}
	});
	
	$('.wachtwoord').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			checkInlog();
		}
	});
	
	//Als de form gesubmit wordt
	$('.submit').click(function(){ 
		//Log in
		checkInlog();
	});
	
	function checkInlog()
	{
		//Maak variabelen aan met de ingevoerde gegevens
		var errors	   = false;
		var email 	   = $('input[name=email]').val();
		var wachtwoord = $('input[name=wachtwoord]').val();
		var formData = { email: email, wachtwoord: wachtwoord };
		
		//Maak een ajax request
		$.ajax({
			url: "verwerk/inlog_check.php",
			type: "POST",
			data: formData
		})
		
		.done(function (data) {
			//Als de teruggestuurde data gelijk is aan 'true'
			if (data == "true")
			{
				//Laat dan een foutmelding zien
				errors = true;
				var toast = new maakToastGegevens();
			}
			
			else if (data == "false")
			{
				//Stuur de gebruiker door
				window.location.replace("../index.html");
			}
		});
		
		//Als het emailadres geen email is
		if(!isEmail(email))
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastGeldigEmail();
		}
		
		//Als het emailadres geen email is
		if(email.length == 0)
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastGeenEmail();
		}
		
		//Als het wachtwoord niet ingetypt is
		if(wachtwoord.length == 0)
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastGeenWachtwoord();
		}
		
		//Als er een foutmelding is
		if(errors == true)
		{
			//Ga dan niet verder
			return false;
		}
		
		function isEmail(email) 
		{
			//Check of het ingevoerde veld een emailadres is
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
	}
});

