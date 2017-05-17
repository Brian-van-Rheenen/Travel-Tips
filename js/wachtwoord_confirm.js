$(document).ready(function(){
	
		//Functie voor het uitlezen van een parameter uit de URL
		$.urlParam = function(name){
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			return results[1] || 0;
		}
		
		//Haal de parameter 'code' uit de URL en sla die op
		var code = $.urlParam('code');
	
		//Maak variabele aan met de opgehaalde code
		var formData = { code: code };
		
		//Maak een ajax request
		$.ajax({
			url: "verwerk/resetww_confirm_verwerk.php",
			type: "POST",
			data: formData
		})

		.done(function (data) {
			//Als de teruggestuurde data gelijk is aan 'true'
			if (data == "true")
			{
				//Laat dan een foutmelding zien
				$('.verify').html ("Er is iets fout gegaan met het veranderen van uw wachtwoord. Klik <a href='index.html'>hier</a> om verder te gaan.");
			}

			else if (data == "false")
			{
				//Laat een melding zien
				$('.verify').html ("Uw wachtwoord is succesvol veranderd. Klik <a href='index.html'>hier</a> om verder te gaan.");
			}
		});
});