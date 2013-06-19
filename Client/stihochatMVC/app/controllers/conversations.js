


function openChat(e) {
	
	if (Alloy.CFG.chatwindow == null) {
		Alloy.CFG.chatwindow = Alloy.createController('chat').getView();
	}

	//current_tab = Titanium.UI.currentTab;
	//chatWindow.open({modal:true});
	
	Alloy.CFG.tabgroup.activeTab.open(Alloy.CFG.chatwindow);
	
	
	Alloy.CFG.chatwindow.title = e.rowData.name;
}

function newChat() {
	newChatWindow = Alloy.createController('newchat').getView();
	
	Alloy.CFG.tabgroup.activeTab.open(newChatWindow);
}
