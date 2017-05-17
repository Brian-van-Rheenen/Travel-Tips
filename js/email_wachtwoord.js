$(document).ready(function(){
	
	$('.input').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			check();
		}
	});
	
	$('.wachtwoord').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Log in
			check();
		}
	});
	
	
	//Als de form gesubmit wordt
	$('.submit').click(function(){
		check();
	});
	
	function check()
	{
		//Maak variabelen aan met de ingevoerde gegevens
		var errors	   = false;
		var email 	   = $('input[name=email]').val();
		var formData = { email: email };
		
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
				formData = { email: email };
				
				//Maak een ajax request
				$.ajax({
					url: "verwerk/resetww_verwerk.php",
					type: "POST",
					data: formData
				})

				.done(function (data) {
					//Als de teruggestuurde data gelijk is aan 'false'
					if (data == "false")
					{
						//Laat een melding zien
						var toast = new maakToastEmailGelukt();
						$('.verify').text ("Er is een e-mail naar uw opgegeven e-mailadres verstuurd. Daarin vind u een tijdig wachtwoord, waarmee u kunt inloggen.");
					}
				});
			}
			
			//Als de teruggestuurde data gelijk is aan 'true'
			else if (data == "true")
			{
				//Laat dan een foutmelding zien
				errors = true;
				var toast = new maakToastBestaatNietEmail();
			}
		});
	}
});