var args = arguments[0] || {};
var from_help = args.from_help;

var current_guidescreen = 1;

if (from_help) {
	$.skipbutton.text = 'Sluiten';
}


function submitLogin(e) {  
	// login button was clicked
	// In a future working version check login details here
	
	// Open home controller controller
	homeWindow = Alloy.createController('home').getView();
	homeWindow.open();
	
	Ti.App.user = $.username.value;
}

function submitRegister(e) {  

}

$.username.addEventListener('return', function(e) {
	//detects when the return button on the username field was hit
    $.password.focus();
});


function prevScreen(e) {
	
	if (current_guidescreen>1) {
		
		current_guidescreen--;
		updateViews();
		
	}
	
}


function nextScreen(e) {
	
	current_guidescreen++;
	updateViews();
}

function updateViews() {
	
	$.current_dot.left = (current_guidescreen * 20) - 20;
	//titanium wont support image arrays or dynamically calling based on dynamic element names
	if (current_guidescreen > 1) {
		$.prevbutton.show();
	} else {
		$.prevbutton.hide();
	}
	
	if (current_guidescreen == 1) {
		$.screen1.animate({
			left:20
		});
	}
	
	if (current_guidescreen == 2) {
		$.screen2.animate({
			left:20
		});
		$.screen1.animate({
			left:-640
		});
	}

	if (current_guidescreen == 3) {
		$.screen3.animate({
			left:20
		});
		$.screen2.animate({
			left:-640
		});
	}
	
	if (current_guidescreen == 4) {
		$.screen4.animate({
			left:20
		});
		$.screen3.animate({
			left:-640
		});
	}
	
	if (current_guidescreen == 5) {
		$.screen5.animate({
			left:20
		});
		$.screen4.animate({
			left:-640
		});
	}
	
	if (current_guidescreen == 6) {
		$.screen6.animate({
			left:20
		});
		$.screen5.animate({
			left:-640
		});
	}
	
	if (current_guidescreen == 7) {
		closeScreens();
	}
	
}

function swipe(e) {
  if (e.direction == 'left'){
    nextScreen();
  }
  if (e.direction == 'right'){
    prevScreen();
  }
}

function closeScreens(e) {
	
	$.guidingscreens.animate({
		left:-640
	});

	if (from_help) {
		$.loginwin.close();
	} else {
		$.guidingscreens.hide();
	}

}
