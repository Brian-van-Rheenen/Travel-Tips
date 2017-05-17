$(document).ready(function(){
	
	$('.wachtwoord').keypress (function(e) {
		
		//Als er op enter geklikt wordt
		if (e.which == 13)
		{
			//Reset wachtwoord
			resetWachtwoord();
		}
	});
	
	//Als de form gesubmit wordt
	$('.submit').click(function(){ 
		//Reset wachtwoord
		resetWachtwoord();
	});
	
	//Als de form gesubmit wordt
	function resetWachtwoord()
	{
		//Maak variabelen aan met de ingevoerde gegevens
		var errors	   = false;
		var wachtwoord = $('input[name=wachtwoord]').val();
		var formData   = { wachtwoord: wachtwoord };
		
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
		
		if (errors == false)
		{
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
					errors = true;
					var toast = new maakToastWachtwoordFout();
				}
				
				else if (data == "false")
				{
					//Laat een melding zien
					var toast = new maakToastWachtwoordVeranderd();
					$('.verify').text ("Uw wachtwoord is succesvol veranderd.");
				}
			});
		}
	}
});