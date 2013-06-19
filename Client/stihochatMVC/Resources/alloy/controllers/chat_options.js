function Controller() {
    function addParticipant() {
        var contactswindow = Alloy.createController("contacts", {
            from_chatoptions: true
        }).getView();
        Alloy.CFG.tabgroup.activeTab.open(contactswindow);
    }
    function closeWindow() {
        $.chatoptions.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.chatoptions = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Groep opties",
        id: "chatoptions"
    });
    $.__views.chatoptions && $.addTopLevelView($.__views.chatoptions);
    $.__views.__alloyId135 = Ti.UI.createView({
        id: "__alloyId135"
    });
    $.__views.chatoptions.add($.__views.__alloyId135);
    $.__views.participants = Ti.UI.createTableViewSection({
        id: "participants",
        headerTitle: "Deelnemers"
    });
    var __alloyId136 = [];
    __alloyId136.push($.__views.participants);
    $.__views.__alloyId137 = Ti.UI.createTableViewRow({
        height: 42,
        editable: true,
        touchEnabled: true,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        title: "Hans van de Pas",
        id: "__alloyId137"
    });
    $.__views.participants.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createTableViewRow({
        height: 42,
        editable: true,
        touchEnabled: true,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        title: "Bruno Hendriks",
        id: "__alloyId138"
    });
    $.__views.participants.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createTableViewSection({
        id: "__alloyId139"
    });
    __alloyId136.push($.__views.__alloyId139);
    $.__views.__alloyId141 = Ti.UI.createView({
        width: "300",
        height: "40",
        id: "__alloyId141"
    });
    $.__views.__alloyId142 = Ti.UI.createButton({
        height: 34,
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
        width: "300",
        title: "Deelnemer toevoegen",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    addParticipant ? $.__views.__alloyId142.addEventListener("click", addParticipant) : __defers["$.__views.__alloyId142!click!addParticipant"] = true;
    $.__views.__alloyId139.headerView = $.__views.__alloyId141;
    $.__views.__alloyId143 = Ti.UI.createTableViewSection({
        headerTitle: "Afspeelopties",
        id: "__alloyId143"
    });
    __alloyId136.push($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createTableViewRow({
        height: 42,
        editable: true,
        touchEnabled: true,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        text: "Geluid",
        left: "10",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createSwitch({
        value: "true",
        right: "10",
        id: "__alloyId146"
    });
    $.__views.__alloyId144.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createTableViewRow({
        height: 42,
        editable: true,
        touchEnabled: true,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "__alloyId147"
    });
    $.__views.__alloyId143.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        text: "Speakervolume",
        left: "10",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createSlider({
        width: "150",
        right: "10",
        id: "__alloyId149"
    });
    $.__views.__alloyId147.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createTableViewSection({
        headerTitle: "Meldingen",
        id: "__alloyId150"
    });
    __alloyId136.push($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createTableViewSection({
        id: "__alloyId151"
    });
    __alloyId136.push($.__views.__alloyId151);
    $.__views.__alloyId153 = Ti.UI.createView({
        height: "100",
        id: "__alloyId153"
    });
    var __alloyId155 = [];
    var __alloyId159 = {
        title: "Nooit",
        ns: "Alloy.Abstract"
    };
    __alloyId155.push(__alloyId159);
    var __alloyId160 = {
        title: "Vragen",
        ns: "Alloy.Abstract"
    };
    __alloyId155.push(__alloyId160);
    var __alloyId161 = {
        title: "Altijd",
        ns: "Alloy.Abstract"
    };
    __alloyId155.push(__alloyId161);
    $.__views.notifications = Ti.UI.iOS.createTabbedBar({
        labels: __alloyId155,
        id: "notifications",
        width: "300",
        index: "2",
        top: "0"
    });
    $.__views.__alloyId153.add($.__views.notifications);
    $.__views.__alloyId162 = Ti.UI.createView({
        width: "300",
        height: "40",
        top: "60",
        id: "__alloyId162"
    });
    $.__views.__alloyId153.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createButton({
        height: 34,
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
        width: "300",
        title: "Verlaat Chat",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    closeWindow ? $.__views.__alloyId163.addEventListener("click", closeWindow) : __defers["$.__views.__alloyId163!click!closeWindow"] = true;
    $.__views.__alloyId151.headerView = $.__views.__alloyId153;
    $.__views.groupchattable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId136,
        id: "groupchattable"
    });
    $.__views.__alloyId135.add($.__views.groupchattable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.chatoptions.addEventListener("focus", function() {
        if (null != Alloy.CFG.selected_name) {
            row = Ti.UI.createTableViewRow({
                title: Alloy.CFG.selected_name,
                editable: true,
                backgroundColor: "white"
            });
            $.groupchattable.data[0].add(row);
            Alloy.CFG.selected_name = null;
        }
    });
    __defers["$.__views.__alloyId142!click!addParticipant"] && $.__views.__alloyId142.addEventListener("click", addParticipant);
    __defers["$.__views.__alloyId163!click!closeWindow"] && $.__views.__alloyId163.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;