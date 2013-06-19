	$.hometabgroup.setActiveTab(1);
	
	Alloy.CFG.tabgroup = $.hometabgroup;
	
	var profileWindow = Alloy.createController('profile', {title: "Brian Sahertian", stiho: true, edit: true}).getView();
	
	var saveButton = Ti.UI.createButton({
	    title:"Opslaan"
	});
	saveButton.addEventListener('click', function(){
	    alert('Uw instellingen zijn opgeslagen');
	});
	
	profileWindow.setRightNavButton(saveButton);
	
	// link dynamically loaded profile window to the profile tab 
	$.tab_profile.setWindow(profileWindow);
	
	
	var archivewindow = Alloy.createController('archive').getView();
	$.tab_archive.setWindow(archivewindow);
	
	function openWindows(e) {
		
		// show custom underlaying contact tabgroup 
		
		if (e.index == 2) {
			var contactsWindow = Alloy.createController('contacts', {home: $.hometabgroup}).getView();
			$.tab_contacts.setWindow(contactsWindow);
		}
		if (e.index == 3) {
			
	
	
		}
		
	}
