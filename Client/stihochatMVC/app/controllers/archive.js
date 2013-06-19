



function openClusterArchive(e) {
	if (e.rowData.name == 'Badkamer') {
		var archiveclusterwindow = Alloy.createController('chat', {is_archive: true}).getView();
			archiveclusterwindow.title = e.rowData.name;
			Alloy.CFG.tabgroup.activeTab.open(archiveclusterwindow);
	} else {
		if (e.rowData.name == "Dak") {
			var faqwindow = Alloy.createController('faq').getView();
			Alloy.CFG.tabgroup.activeTab.open(faqwindow);
		} else {
			alert('Alle categorieën zijn uitgeschakeld in het prototype, met uitzondering van de categorie "Badkamer" en "Dak"')
		}
	}
}

function toggleCategories(e) {
	if (e.index == 0) {
		$.services.show();
		$.products.hide();
	} else {
		$.services.hide();
		$.products.show();
	}
}
