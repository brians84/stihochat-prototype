

function addParticipant(e) {
	
	var contactswindow = Alloy.createController('contacts', {from_chatoptions: true}).getView();
	Alloy.CFG.tabgroup.activeTab.open(contactswindow);

		
	
	/*
	// prototype show phone contact list here and add the user to the table
	Ti.Contacts.showContacts({animated: true, selectedPerson: function(e) {
		var cn = (e.person.firstName) ? e.person.firstName : ''; 
        var sn  = (e.person.lastName) ? e.person.lastName : '';
        row = Ti.UI.createTableViewRow({title: cn + ' ' + sn});
        $.groupchattable.appendRow(row);
		alert('Om een deelnemer toe te voegen zal in de final app het "Contacten" scherm getoond worden');
	} });
	*/
}

function closeWindow() {
	$.chatoptions.close();
}


$.chatoptions.addEventListener('focus', function() {
	if (Alloy.CFG.selected_name != null) {
		row = Ti.UI.createTableViewRow({title: Alloy.CFG.selected_name, editable: true, backgroundColor: 'white'});
   	 	$.groupchattable.data[0].add(row);
   	 	Alloy.CFG.selected_name = null;
	}
});
