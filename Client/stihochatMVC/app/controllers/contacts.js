
var args = arguments[0] || {};
var home = args.home;
var home = args.home;
var from_chatoptions = args.from_chatoptions;

if ( args.from_skill == 1 || args.from_chatoptions == 1) {
	Ti.API.info('from skill');
	$.stihocontacts.show();
	$.phonecontactswin.navBarHidden = true;
	$.phonecontactswin.tabBarHidden = true;
	$.contactstabgroup.bottom = -50;
	$.stihocontactswin.title = args.title;
	$.phonecontactswin.title = args.title;
	
} else {
	$.contactstabgroup.open();
	Alloy.CFG.contactstabgroup = $.contactstabgroup;

}


$.searchtabs.addEventListener('click', function(e) {
  if (e.index == 1) {
    	$.stihoskills.hide();
		$.stihocontacts.show();
  } else {
    	$.stihoskills.show();
		$.stihocontacts.hide();
  }
});


function letterScrolling(e) {  
	alert('Letter scrollen is niet beschikbaar in het prototype.');
}

function clickPhoneContact(e) {
	// Get the full name from the list
	fullname = e.rowData.name;
	
	if (from_chatoptions) {
		$.contactstabgroup.close();
		Alloy.CFG.selected_name = fullname;
	} else {
		
		// show the profile window (modal)
		profileWindow = Alloy.createController('profile', {title: fullname, stiho:false}).getView();
		$.contactstabgroup.activeTab.open(profileWindow);
	}
	
}

function clickStihoContact(e) {
	// Get the full name from the list
	fullname = e.rowData.title;
	

	// show the profile window (modal)
	profileWindow = Alloy.createController('profile', {title: fullname, stiho:true}).getView();
	$.contactstabgroup.activeTab.open(profileWindow);
			
}

function clickStihoSkills(e) {
	
	contactsWindow = Alloy.createController('contacts', {from_skill: true, title: e.rowData.title}).getView();
	$.contactstabgroup.activeTab.open(contactsWindow);
	//$.stihoskills.hide();
	//$.stihocontacts.show();
}

function goHome(e) {
	// Close this window and go back to the chat window
	home.setActiveTab(1);
	$.contactstabgroup.close();
}

//other option is to show contacts as native option
//Titanium.Contacts.showContacts({ });