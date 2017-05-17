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

function Emailconfirm() 
{
	//Functie voor het uitlezen van een parameter uit de URL
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}
	
	//Haal de parameter 'email' uit de URL en sla die op
	var email = $.urlParam('email');

	//Haal de parameter 'code' uit de URL en sla die op
	var code = $.urlParam('code');
	
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/emailconfirm_verwerk.php?email=' + email + '&' + 'code=' + code;

    // Wat moet er gebeuren bij statuswijzigingen?
    xmlHttp.onreadystatechange = function () 
    {
        // Is het request al helemaal klaar en OK?
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            // Lees de tekst die is ontvangen
            var result = xmlHttp.responseText;
            
            // Plaats de tekst in de pagina
            document.getElementById("content").innerHTML = result;
        }
    }

    // Verstuur het request
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}