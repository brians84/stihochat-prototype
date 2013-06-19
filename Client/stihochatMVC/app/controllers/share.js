

function openShare(e) {
	
	if (e.rowData.title == 'E-mail bericht') {
		var emailDialog = Titanium.UI.createEmailDialog();
		emailDialog.subject = "Ik wil iets met je delen";
		emailDialog.toRecipients = ['testemail@gmail.com'];
		emailDialog.messageBody = 'Ik zou je de Stiho Antwoord App willen aanraden...';
		
		emailDialog.open();
	}
	
	if (e.rowData.title == 'SMS bericht') {
		Titanium.Platform.openURL('sms:test');
	}
	
}
