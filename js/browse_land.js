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

function alleTips() 
{
	//Maak variabelen aan met de ingevoerde gegevens
	var errors	   = false;
	var land 	   = $('.select_landen option:selected').text();
	
    // Maak een XHR object
    var xmlHttp = InitAJAX();
	
	// Maak de URL voor het AJAX request
	var url = '../verwerk/alle_tips.php?' . land;

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