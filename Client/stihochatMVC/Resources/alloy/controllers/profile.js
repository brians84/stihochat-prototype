function Controller() {
    function callUser() {
        Titanium.Platform.openURL("tel:0654111111");
    }
    function msgUser() {
        null == Alloy.CFG.chatwindow && (Alloy.CFG.chatwindow = Alloy.createController("chat").getView());
        Alloy.CFG.contactstabgroup.activeTab.open(Alloy.CFG.chatwindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.profilewin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "profilewin"
    });
    $.__views.profilewin && $.addTopLevelView($.__views.profilewin);
    $.__views.__alloyId344 = Ti.UI.createView({
        id: "__alloyId344"
    });
    $.__views.profilewin.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createTableViewSection({
        id: "__alloyId345"
    });
    var __alloyId346 = [];
    __alloyId346.push($.__views.__alloyId345);
    $.__views.__alloyId348 = Ti.UI.createView({
        height: "85",
        id: "__alloyId348"
    });
    $.__views.profileimage = Ti.UI.createImageView({
        id: "profileimage",
        image: "images/default_profile.png",
        left: "10",
        width: "85",
        height: "85",
        borderColor: "#888",
        borderRadius: "5",
        borderWidth: "1"
    });
    $.__views.__alloyId348.add($.__views.profileimage);
    $.__views.calluserbutton = Ti.UI.createButton({
        height: "40",
        borderRadius: 5,
        borderColor: "#548284",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#8cc5c5",
                position: 0
            }, {
                color: "#6d9fa1",
                position: 1
            } ],
            backFillStart: false
        },
        title: "Bel 0654111111",
        id: "calluserbutton",
        width: "180",
        right: "10",
        top: "0"
    });
    $.__views.__alloyId348.add($.__views.calluserbutton);
    callUser ? $.__views.calluserbutton.addEventListener("click", callUser) : __defers["$.__views.calluserbutton!click!callUser"] = true;
    $.__views.msguserbutton = Ti.UI.createButton({
        height: "40",
        borderRadius: 5,
        borderColor: "#548284",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#8cc5c5",
                position: 0
            }, {
                color: "#6d9fa1",
                position: 1
            } ],
            backFillStart: false
        },
        title: "Stuur een bericht",
        id: "msguserbutton",
        width: "180",
        right: "10",
        top: "45"
    });
    $.__views.__alloyId348.add($.__views.msguserbutton);
    msgUser ? $.__views.msguserbutton.addEventListener("click", msgUser) : __defers["$.__views.msguserbutton!click!msgUser"] = true;
    $.__views.__alloyId345.headerView = $.__views.__alloyId348;
    $.__views.__alloyId349 = Ti.UI.createTableViewSection({
        id: "__alloyId349"
    });
    __alloyId346.push($.__views.__alloyId349);
    $.__views.__alloyId350 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        touchEnabled: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "__alloyId350"
    });
    $.__views.__alloyId349.add($.__views.__alloyId350);
    $.__views.__alloyId351 = Ti.UI.createView({
        top: 10,
        layout: "horizontal",
        id: "__alloyId351"
    });
    $.__views.__alloyId350.add($.__views.__alloyId351);
    $.__views.__alloyId352 = Ti.UI.createLabel({
        color: "#999",
        font: {
            fontSize: 14
        },
        width: 80,
        left: 10,
        text: "Naam",
        id: "__alloyId352"
    });
    $.__views.__alloyId351.add($.__views.__alloyId352);
    $.__views.profilename = Ti.UI.createTextField({
        editable: false,
        id: "profilename"
    });
    $.__views.__alloyId351.add($.__views.profilename);
    $.__views.profilefunctionrow = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        touchEnabled: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "profilefunctionrow"
    });
    $.__views.__alloyId349.add($.__views.profilefunctionrow);
    $.__views.__alloyId353 = Ti.UI.createView({
        top: 10,
        layout: "horizontal",
        id: "__alloyId353"
    });
    $.__views.profilefunctionrow.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createLabel({
        color: "#999",
        font: {
            fontSize: 14
        },
        width: 80,
        left: 10,
        text: "Beroep",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    $.__views.profilefunction = Ti.UI.createTextField({
        editable: false,
        id: "profilefunction"
    });
    $.__views.__alloyId353.add($.__views.profilefunction);
    $.__views.__alloyId355 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        touchEnabled: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "__alloyId355"
    });
    $.__views.__alloyId349.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createView({
        top: 10,
        layout: "horizontal",
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createLabel({
        color: "#999",
        font: {
            fontSize: 14
        },
        width: 80,
        left: 10,
        text: "Bedrijf",
        id: "__alloyId357"
    });
    $.__views.__alloyId356.add($.__views.__alloyId357);
    $.__views.profilecompany = Ti.UI.createTextField({
        editable: false,
        id: "profilecompany",
        value: "STIHO"
    });
    $.__views.__alloyId356.add($.__views.profilecompany);
    $.__views.profilelocationrow = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        touchEnabled: false,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "profilelocationrow"
    });
    $.__views.__alloyId349.add($.__views.profilelocationrow);
    $.__views.__alloyId358 = Ti.UI.createView({
        top: 10,
        layout: "horizontal",
        id: "__alloyId358"
    });
    $.__views.profilelocationrow.add($.__views.__alloyId358);
    $.__views.__alloyId359 = Ti.UI.createLabel({
        color: "#999",
        font: {
            fontSize: 14
        },
        width: 80,
        left: 10,
        text: "Locatie",
        id: "__alloyId359"
    });
    $.__views.__alloyId358.add($.__views.__alloyId359);
    $.__views.profilelocation = Ti.UI.createTextField({
        editable: false,
        id: "profilelocation"
    });
    $.__views.__alloyId358.add($.__views.profilelocation);
    $.__views.userskills = Ti.UI.createTableViewSection({
        id: "userskills",
        headerTitle: ""
    });
    __alloyId346.push($.__views.userskills);
    $.__views.profileTable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId346,
        id: "profileTable"
    });
    $.__views.__alloyId344.add($.__views.profileTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.profilewin.title = args.title;
    $.profilename.value = args.title;
    $.profilefunction.value = "Expert (voorbeeld)";
    $.profilelocation.value = "Amsterdam";
    $.profileimage.image = "images/profile.png";
    $.userskills.headerTitle = "Vaardigheden";
    $.userskills.add(Ti.UI.createTableViewRow({
        title: "Gemodificeerd hout",
        backgroundColor: "#fff"
    }));
    $.userskills.add(Ti.UI.createTableViewRow({
        title: "Prefabwerk",
        backgroundColor: "#fff"
    }));
    $.userskills.add(Ti.UI.createTableViewRow({
        title: "Vlakken en Schaven",
        backgroundColor: "#fff"
    }));
    args.edit && $.userskills.add(Ti.UI.createTableViewRow({
        title: "Nieuwe toevoegen..",
        backgroundColor: "#fff"
    }));
    if (args.edit) {
        $.profilename.editable = true;
        $.profilecompany.editable = true;
        $.profilefunction.editable = true;
        $.profilelocation.editable = true;
        $.calluserbutton.hide();
        $.msguserbutton.hide();
    }
    __defers["$.__views.calluserbutton!click!callUser"] && $.__views.calluserbutton.addEventListener("click", callUser);
    __defers["$.__views.msguserbutton!click!msgUser"] && $.__views.msguserbutton.addEventListener("click", msgUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;