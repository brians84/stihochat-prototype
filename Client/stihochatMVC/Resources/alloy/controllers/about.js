function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.about = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "white",
        title: "Over",
        id: "about"
    });
    $.__views.about && $.addTopLevelView($.__views.about);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.about.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createTableViewSection({
        id: "__alloyId1"
    });
    var __alloyId2 = [];
    __alloyId2.push($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "300",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createImageView({
        top: "30",
        image: "images/appicon.png",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontColor: "#000"
        },
        text: "Stiho Antwoord (Prototype)",
        top: "160",
        id: "title"
    });
    $.__views.__alloyId4.add($.__views.title);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontColor: "#000"
        },
        text: "Versie 0.4.1",
        top: "178",
        id: "subtitle"
    });
    $.__views.__alloyId4.add($.__views.subtitle);
    $.__views.copyright = Ti.UI.createLabel({
        font: {
            fontColor: "#000",
            fontSize: 12
        },
        textAlign: "center",
        width: 300,
        text: "Copyright MediaLAB Amsterdam 2013\n\nDe inhoud die wordt gegenereerd binnen de Stiho Antwoord app kunnen door Stiho gebruikt worden voor trainingsdoeleinden",
        top: "220",
        id: "copyright"
    });
    $.__views.__alloyId4.add($.__views.copyright);
    $.__views.__alloyId1.headerView = $.__views.__alloyId4;
    $.__views.abouttable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        data: __alloyId2,
        id: "abouttable"
    });
    $.__views.__alloyId0.add($.__views.abouttable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;