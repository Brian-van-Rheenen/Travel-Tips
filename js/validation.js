$(document).ready(function(){
	
	$('.input').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			registreer();
		}
	});
	
	$('.wachtwoord').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			registreer();
		}
	});
	
	
	//Als de form gesubmit wordt
	$('.submit').click(function(){
		registreer();
	});
	
	function registreer()
	{
		//Maak variabelen aan met de ingevoerde gegevens
		var errors	   = false;
		var email 	   = $('input[name=email]').val();
		var wachtwoord = $('input[name=wachtwoord]').val();
		var formData = { email: email };
		
		//Als het emailadres te kort is
		if(email.length < 7)
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastKortEmail();
		}
		
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
		
		//Als het wachtwoord korter is dan 5 tekens
		if(wachtwoord.length < 5)
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastKortWachtwoord();
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
		
		//Maak een ajax request
		$.ajax({
			url: "verwerk/checkmail.php",
			type: "POST",
			data: formData
		})
		
		.done(function (data) {
			//Als de teruggestuurde data gelijk is aan 'false'
			if (data == "false")
			{
				//Laat dan een foutmelding zien
				errors = true;
				var toast = new maakToastBestaatEmail();
			}
			
			//Als de teruggestuurde data gelijk is aan 'true'
			else if (data == "true")
			{
				formData = { email: email, wachtwoord: wachtwoord };
				
				//Maak een ajax request
				$.ajax({
					url: "verwerk/registreer_verwerk.php",
					type: "POST",
					data: formData
				})

				.done(function (data) {
					//Als de teruggestuurde data gelijk is aan 'true'
					if (data == "true")
					{
						//Stuur de gebruiker door
						window.location.replace("../verify.html");
					}
				});
			}
		});
	}
});