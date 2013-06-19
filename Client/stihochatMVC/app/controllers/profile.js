// Get the parameters that were given to the controller
var args = arguments[0] || {};
$.profilewin.title = args.title;
$.profilename.value = args.title;

//if (args.stiho) {
// add dummy skills programmatically
$.profilefunction.value = "Expert (voorbeeld)";
$.profilelocation.value = "Amsterdam";
$.profileimage.image = "images/profile.png";
$.userskills.headerTitle = "Vaardigheden";
$.userskills.add(Ti.UI.createTableViewRow({
    title: 'Gemodificeerd hout',
    backgroundColor:'#fff'
}));
$.userskills.add(Ti.UI.createTableViewRow({
    title: 'Prefabwerk',
    backgroundColor:'#fff'
}));
$.userskills.add(Ti.UI.createTableViewRow({
    title: 'Vlakken en Schaven',
    backgroundColor:'#fff'
}));
if (args.edit) {
    $.userskills.add(Ti.UI.createTableViewRow({
        title: 'Nieuwe toevoegen..',
    	backgroundColor:'#fff'
    }));
}
///}

if (args.edit) {
    // add dummy skills programmatically
    $.profilename.editable = true;
    $.profilecompany.editable = true;
    $.profilefunction.editable = true;
    $.profilelocation.editable = true;
    $.calluserbutton.hide();
    $.msguserbutton.hide();
}

function goBack(e) {
    // Go back to the previous window
    Titanium.UI.currentWindow.close();
}

function callUser(e) {
    // bel de het opgegeven nummer
    // statisch in prototype
    Titanium.Platform.openURL('tel:0654111111');
}

function msgUser(e) {

    if (Alloy.CFG.chatwindow == null) {
        Alloy.CFG.chatwindow = Alloy.createController('chat').getView();
    }

    Alloy.CFG.contactstabgroup.activeTab.open(Alloy.CFG.chatwindow);
}