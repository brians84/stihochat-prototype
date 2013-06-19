function Controller() {
    function openShare(e) {
        if ("E-mail bericht" == e.rowData.title) {
            var emailDialog = Titanium.UI.createEmailDialog();
            emailDialog.subject = "Ik wil iets met je delen";
            emailDialog.toRecipients = [ "testemail@gmail.com" ];
            emailDialog.messageBody = "Ik zou je de Stiho Antwoord App willen aanraden...";
            emailDialog.open();
        }
        "SMS bericht" == e.rowData.title && Titanium.Platform.openURL("sms:test");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.share = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Delen",
        id: "share"
    });
    $.__views.share && $.addTopLevelView($.__views.share);
    $.__views.__alloyId368 = Ti.UI.createView({
        id: "__alloyId368"
    });
    $.__views.share.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createTableViewSection({
        headerTitle: "Vertel het een vriend",
        id: "__alloyId369"
    });
    var __alloyId370 = [];
    __alloyId370.push($.__views.__alloyId369);
    $.__views.__alloyId371 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        title: "E-mail bericht",
        id: "__alloyId371"
    });
    $.__views.__alloyId369.add($.__views.__alloyId371);
    $.__views.__alloyId372 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        title: "SMS bericht",
        id: "__alloyId372"
    });
    $.__views.__alloyId369.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createTableViewRow({
        height: 42,
        editable: false,
        backgroundColor: "#fff",
        title: "Facebook bericht",
        id: "__alloyId373"
    });
    $.__views.__alloyId369.add($.__views.__alloyId373);
    $.__views.sharetable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        data: __alloyId370,
        id: "sharetable"
    });
    $.__views.__alloyId368.add($.__views.sharetable);
    openShare ? $.__views.sharetable.addEventListener("click", openShare) : __defers["$.__views.sharetable!click!openShare"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.sharetable!click!openShare"] && $.__views.sharetable.addEventListener("click", openShare);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;