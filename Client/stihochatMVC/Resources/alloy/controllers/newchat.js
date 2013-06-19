function Controller() {
    function createChat() {
        $.newchatwin.close();
    }
    function addParticipant() {
        var contactswindow = Alloy.createController("contacts", {
            from_chatoptions: true
        }).getView();
        Alloy.CFG.tabgroup.activeTab.open(contactswindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newchatwin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Nieuwe groep",
        id: "newchatwin"
    });
    $.__views.newchatwin && $.addTopLevelView($.__views.newchatwin);
    $.__views.__alloyId332 = Ti.UI.createButton({
        title: "Aanmaken",
        id: "__alloyId332"
    });
    createChat ? $.__views.__alloyId332.addEventListener("click", createChat) : __defers["$.__views.__alloyId332!click!createChat"] = true;
    $.__views.newchatwin.rightNavButton = $.__views.__alloyId332;
    $.__views.__alloyId333 = Ti.UI.createView({
        id: "__alloyId333"
    });
    $.__views.newchatwin.add($.__views.__alloyId333);
    $.__views.__alloyId334 = Ti.UI.createTableViewSection({
        headerTitle: "Onderwerp",
        id: "__alloyId334"
    });
    var __alloyId335 = [];
    __alloyId335.push($.__views.__alloyId334);
    $.__views.__alloyId336 = Ti.UI.createTableViewRow({
        height: 42,
        editable: true,
        touchEnabled: true,
        selectionStyle: Titanium.UI.iPhone.TableViewCellSelectionStyle.NONE,
        selectedColor: "transparent",
        backgroundColor: "#fff",
        id: "__alloyId336"
    });
    $.__views.__alloyId334.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createView({
        id: "__alloyId337"
    });
    $.__views.__alloyId336.add($.__views.__alloyId337);
    $.__views.__alloyId338 = Ti.UI.createTextField({
        width: "280",
        height: "40",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    $.__views.__alloyId339 = Ti.UI.createTableViewSection({
        headerTitle: "Deelnemers",
        id: "__alloyId339"
    });
    __alloyId335.push($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createTableViewSection({
        id: "__alloyId340"
    });
    __alloyId335.push($.__views.__alloyId340);
    $.__views.__alloyId342 = Ti.UI.createView({
        width: "300",
        height: "40",
        id: "__alloyId342"
    });
    $.__views.__alloyId343 = Ti.UI.createButton({
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
        id: "__alloyId343"
    });
    $.__views.__alloyId342.add($.__views.__alloyId343);
    addParticipant ? $.__views.__alloyId343.addEventListener("click", addParticipant) : __defers["$.__views.__alloyId343!click!addParticipant"] = true;
    $.__views.__alloyId340.headerView = $.__views.__alloyId342;
    $.__views.participants = Ti.UI.createTableViewSection({
        id: "participants"
    });
    __alloyId335.push($.__views.participants);
    $.__views.newchattable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId335,
        id: "newchattable"
    });
    $.__views.__alloyId333.add($.__views.newchattable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.newchatwin.addEventListener("focus", function() {
        if (null != Alloy.CFG.selected_name) {
            row = Ti.UI.createTableViewRow({
                title: Alloy.CFG.selected_name,
                editable: true,
                backgroundColor: "white"
            });
            $.newchattable.appendRow(row);
            Alloy.CFG.selected_name = null;
        }
    });
    __defers["$.__views.__alloyId332!click!createChat"] && $.__views.__alloyId332.addEventListener("click", createChat);
    __defers["$.__views.__alloyId343!click!addParticipant"] && $.__views.__alloyId343.addEventListener("click", addParticipant);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;