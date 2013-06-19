function Controller() {
    function clickOption(e) {
        if ("Help" == e.rowData.title) {
            guideWindow = Alloy.createController("login", {
                from_help: true
            }).getView();
            guideWindow.open();
        }
        if ("Over" == e.rowData.title) {
            aboutWindow = Alloy.createController("about").getView();
            Alloy.CFG.tabgroup.activeTab.open(aboutWindow);
        }
        if ("Deel met vrienden" == e.rowData.title) {
            shareWindow = Alloy.createController("share").getView();
            Alloy.CFG.tabgroup.activeTab.open(shareWindow);
        }
        if ("Vragen en suggesties" == e.rowData.title) {
            var emailDialog = Titanium.UI.createEmailDialog();
            emailDialog.subject = "Vragen en suggesties";
            emailDialog.toRecipients = [ "testemail@gmail.com" ];
            emailDialog.messageBody = "";
            emailDialog.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settings = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Instellingen",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    $.__views.__alloyId360 = Ti.UI.createView({
        id: "__alloyId360"
    });
    $.__views.settings.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createTableViewSection({
        id: "__alloyId361"
    });
    var __alloyId362 = [];
    __alloyId362.push($.__views.__alloyId361);
    $.__views.__alloyId363 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        hasChild: true,
        title: "Help",
        id: "__alloyId363"
    });
    $.__views.__alloyId361.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        hasChild: true,
        title: "Over",
        id: "__alloyId364"
    });
    $.__views.__alloyId361.add($.__views.__alloyId364);
    $.__views.__alloyId365 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        hasChild: true,
        title: "Deel met vrienden",
        id: "__alloyId365"
    });
    $.__views.__alloyId361.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        hasChild: true,
        title: "Vragen en suggesties",
        id: "__alloyId366"
    });
    $.__views.__alloyId361.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createTableViewSection({
        id: "__alloyId367"
    });
    __alloyId362.push($.__views.__alloyId367);
    $.__views.settingstable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId362,
        id: "settingstable"
    });
    $.__views.__alloyId360.add($.__views.settingstable);
    clickOption ? $.__views.settingstable.addEventListener("click", clickOption) : __defers["$.__views.settingstable!click!clickOption"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.settingstable!click!clickOption"] && $.__views.settingstable.addEventListener("click", clickOption);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;