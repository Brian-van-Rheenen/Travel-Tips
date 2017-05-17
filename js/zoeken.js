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
	
	//Maak de div leeg
	$('#tips_details').empty();
}

function resetdetails()
{
	//Maak de div leeg
	$('#tips_details').empty();
}

function alleLanden() 
{
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/landen_zoeken_select.php';

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

function alleLandenTips() 
{
	//Lees het id uit
	var id = $(".select_landen").val();
	
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/landen_zoeken.php?id=' + id;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("tips").innerHTML = result;
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
	var url = '../verwerk/staten_zoeken_select.php?id=' + id;

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

function alleStatenTips() 
{
	//Lees het id uit
	var id = $(".select_staten").val();
	
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/staten_zoeken.php?id=' + id;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("tips").innerHTML = result;
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
	var url = '../verwerk/steden_zoeken_select.php?id=' + id;

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

function alleStedenTips() 
{
	//Lees het id uit
	var id = $(".select_steden").val();
	
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/steden_zoeken.php?id=' + id;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("tips").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function typen() 
{
    // Maak een XHR object
    var xmlHttp = InitAJAX();

	//lees de inhoud van het formulierveld
	var zoektekst = $('input[name=input]').val();
	
	if (zoektekst == "")
	{
		//Haal de details van de tips weg
		resetdetails();
		
		//Maak de div leeg
		$('#tips').empty();
	}
	
	else
	{
		//maak de URL coor het AJAX request
		var url = '../verwerk/zoeken_keywords.php?input=' + zoektekst;
		
		// Wat moet er gebeuren bij statuswijzigingen?
		xmlHttp.onreadystatechange = function () 
		{
			// Is het request al helemaal klaar en OK?
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
			{
				// Lees de tekst die is ontvangen
				var result = xmlHttp.responseText;
				
				// Plaats de tekst in de pagina
				document.getElementById("tips").innerHTML = result;
			}
		}

		// Verstuur het request
		xmlHttp.open("GET", url, true);
		xmlHttp.send(null);
	}
}

function leeg() 
{
    // Maak een XHR object
    var xmlHttp = InitAJAX();

	//lees de inhoud van het formulierveld
	var zoektekst = $('input[name=input]').val();

	//maak de URL coor het AJAX request
	var url = '../verwerk/zoeken_keywords.php?input=' + zoektekst;
	
    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("tips").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

function details(id) 
{
    // Maak een XHR object
    var xmlHttp = InitAJAX();

	//maak de URL coor het AJAX request
	var url = '../verwerk/zoeken_keywords_details.php?id=' + id;
	
    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("tips_details").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}