function maakToastTipGelukt() {

	//Opties voor de toast
	var shortCutFunction = 'success';
	var msg = 'Het toevoegen van de tip is gelukt!';
	var title = 'Succes!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: 'checked',
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastTipNietGelukt() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Het toevoegen van de tip is niet gelukt!';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: 'checked',
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastTipBeschrijving() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Typ een beschrijving in.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: 'checked',
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastTipLand() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Kies een land uit.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: 'checked',
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastTipStaat() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Kies een staat uit.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: 'checked',
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastTipStad() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Kies een stad uit.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastGeenWachtwoord() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Typ een wachtwoord in.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastKortWachtwoord() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Uw wachtwoord is te kort.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastWachtwoordGoed() {

	//Opties voor de toast
	var shortCutFunction = 'success';
	var msg = 'Er is een e-mail naar uw opgegeven e-mailadres verstuurd. Klik op de link in de e-mail om uw wachtwoord te veranderen.';
	var title = 'Success!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastWachtwoordFout() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Er is iets fout gegaan met het veranderen van uw wachtwoord.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastGeenEmail() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Typ een emailadres in.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastKortEmail() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Uw emailadres is te kort.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastBestaatEmail() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Dit emailadres bestaat al.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastBestaatNietEmail() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Dit emailadres bestaat niet.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastEmailGelukt() {

	//Opties voor de toast
	var shortCutFunction = 'success';
	var msg = 'Er is een e-mail naar uw opgegeven e-mailadres verstuurd. Daarin vind u een tijdig wachtwoord, waarmee u kunt inloggen.';
	var title = 'Success!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastGeldigEmail() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Typ een geldig emailadres in.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastGegevens() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Uw gegevens kloppen niet of uw account is nog niet bevestigd.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastRateGelukt() {

	//Opties voor de toast
	var shortCutFunction = 'success';
	var msg = 'U heeft succesvol gestemd op deze tip.';
	var title = 'Success!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastRateNietGelukt() {

	//Opties voor de toast
	var shortCutFunction = 'error';
	var msg = 'Er is iets fout gegaan met het stemmen op deze tip.';
	var title = 'Helaas!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}

function maakToastWachtwoordVeranderd() {

	//Opties voor de toast
	var shortCutFunction = 'success';
	var msg = 'Uw wachtwoord is succesvol veranderd.';
	var title = 'Success!';
	var $showDuration = 300;
	var $hideDuration = 1000;
	var $timeOut = 5000;
	var $extendedTimeOut = 1000;
	var $showEasing = 'swing';
	var $hideEasing = 'linear';
	var $showMethod = 'fadeIn';
	var $hideMethod = 'fadeOut';

	//Meer opties
	toastr.options = {
		closeButton: 'checked',
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		preventOpenDuplicates: true
	};

	//Maak de toast
	var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists		
}