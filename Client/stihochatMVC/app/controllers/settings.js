

function clickOption(e) {
	
	if (e.rowData.title == "Help") {
		guideWindow = Alloy.createController('login', {from_help: true}).getView();
		guideWindow.open();
	}
	
	if (e.rowData.title == "Over") {
		aboutWindow = Alloy.createController('about').getView();
		Alloy.CFG.tabgroup.activeTab.open(aboutWindow);
	}	
	
	if (e.rowData.title == "Deel met vrienden") {
		shareWindow = Alloy.createController('share').getView();
		Alloy.CFG.tabgroup.activeTab.open(shareWindow);
	}
	
	if (e.rowData.title == "Vragen en suggesties") {
		var emailDialog = Titanium.UI.createEmailDialog();
		emailDialog.subject = "Vragen en suggesties";
		emailDialog.toRecipients = ['testemail@gmail.com'];
		emailDialog.messageBody = '';
		
		emailDialog.open();
	}
}
