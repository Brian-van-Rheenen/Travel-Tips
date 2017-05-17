$(document).ready(function(){
	
	//Als de form gesubmit wordt
	$('.submit').click(function(){
		
		//Maak variabelen aan met de ingevoerde gegevens
		var errors	   = false;
		var geenSteden = $('#dropdown_steden').text();
		var landen 	   = $('.select_landen option:selected').text();
		var staat 	   = $('.select_staten option:selected').text();
		var stad 	   = $('.select_steden option:selected').text();
		var beschrijving = $('input[name=beschrijving]').val();
		
		if (staat == " -- Kies een staat -- ")
		{
			staat = "";
		}
		
		if (stad == " -- Kies een stad -- ")
		{
			stad = "";
		}
		
		var formData = { landen: landen, staat: staat, stad: stad, beschrijving: beschrijving };
		
		//Als er geen beschrijving ingevoerd is
		if(beschrijving.length == 0)
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastTipBeschrijving();
		}
		
		//Als er geen land gekozen is
		if(landen == ' -- Kies een land -- ')
		{
			//Laat dan een foutmelding zien
			errors = true;
			var toast = new maakToastTipLand();
		}
		
		//Als er een foutmelding is
		if(errors == true)
		{
			//Ga dan niet verder
			return false;
		}
		
		//Maak een ajax request
		$.ajax({
			url: "verwerk/tip_toevoegen_verwerk.php",
			type: "POST",
			data: formData
		})
		
		.done(function (data) {
			//Als de teruggestuurde data gelijk is aan 'false'
			if (data == "false")
			{
				//Laat dan een foutmelding zien
				errors = true;
				var toast = new maakToastTipNietGelukt();
			}
			
			//Als de teruggestuurde data gelijk is aan 'true'
			else if (data == "true")
			{
				//Laat dan een melding zien
				var toast = new maakToastTipGelukt();
			}
		});
	});
});

function InitAJAX() 
{
    var objxml;
    var IEtypes = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];

    try 
    {
        // Probeer het eerst op de "moderne" standaardmanier
        objxml = new XMLHttpRequest();
    } 
    catch (e) 
    {
        // De standaardmanier werkte niet, probeer oude IE manieren
        for (var i = 0; i < IEtypes.length; i++) 
        {
            try 
            {
                objxml = new ActiveXObject(IEtypes[i]);
            } 
            catch (e) 
            {
                continue;
            }
        }
    }

    // Lever het XHR object op
    return objxml;
}

function reset()
{
	//Zet de value terug naar het default
	$('.select_steden').val("default");
	
	//Haal alles uit de select behalve de 1e optie
	$('.select_steden').find('option').not(':first').remove();
}

function alleLanden() 
{
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/landen.php';

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("dropdown_landen").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function alleStaten() 
{
	//Lees het id uit
	var id = $(".select_landen").val();
	
     // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/staten.php?id=' + id;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("dropdown_staten").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function alleSteden() 
{
	//Lees het id uit
	var id = $(".select_staten").val();
	
     // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/steden.php?id=' + id;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("dropdown_steden").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}