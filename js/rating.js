$(document).on('change', '.rating input', function(){
	
	//Sla de gekozen radio button op
	var $radio = $(this);
	
	//Haal bij de radio button de class 'selected' weg
	$('.rating .selected').removeClass('selected');
	
	//Zet bij de radio button de class 'selected' erbij
	$radio.closest('label').addClass('selected');
	
	//Maak een variabel van de keuze
	var aantal = $radio.val();
	var id = $('input[type=radio][name=rating]:checked').attr("id");
	var formData = { id: id, aantal: aantal };
	
	//Maak een ajax request
	$.ajax({
		url: "verwerk/rating.php",
		type: "POST",
		data: formData
	})
	
	.done(function (data) {
		//Als de teruggestuurde data gelijk is aan 'false'
		if (data == "false")
		{
			//Laat dan een foutmelding zien
			var toast = new maakToastRateNietGelukt();
		}
		
		//Als de teruggestuurde data gelijk is aan 'true'
		else if (data == "true")
		{
			//Laat dan een melding zien
			details(id);
			var toast = new maakToastRateGelukt();
		}
	});
});