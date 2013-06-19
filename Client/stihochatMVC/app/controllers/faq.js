function openQuestion(e) {
	
	var dialog = Ti.UI.createAlertDialog({
	    message:e.rowData.answer,
	    ok: 'Okay',
	    title: 'Antwoord'
	}).show();
	
}
