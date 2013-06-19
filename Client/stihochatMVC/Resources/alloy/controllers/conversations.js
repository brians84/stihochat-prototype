function Controller() {
    function openChat(e) {
        null == Alloy.CFG.chatwindow && (Alloy.CFG.chatwindow = Alloy.createController("chat").getView());
        Alloy.CFG.tabgroup.activeTab.open(Alloy.CFG.chatwindow);
        Alloy.CFG.chatwindow.title = e.rowData.name;
    }
    function newChat() {
        newChatWindow = Alloy.createController("newchat").getView();
        Alloy.CFG.tabgroup.activeTab.open(newChatWindow);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.conversations = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Thuis",
        id: "conversations"
    });
    $.__views.conversations && $.addTopLevelView($.__views.conversations);
    $.__views.__alloyId269 = Ti.UI.createButton({
        title: "Nieuw",
        id: "__alloyId269"
    });
    newChat ? $.__views.__alloyId269.addEventListener("click", newChat) : __defers["$.__views.__alloyId269!click!newChat"] = true;
    $.__views.conversations.rightNavButton = $.__views.__alloyId269;
    $.__views.chats = Ti.UI.createView({
        id: "chats"
    });
    $.__views.conversations.add($.__views.chats);
    $.__views.__alloyId270 = Ti.UI.createTableViewRow({
        height: 80,
        backgroundColor: "#f5f0eb",
        name: "Hoofdstraat 64",
        id: "__alloyId270"
    });
    var __alloyId271 = [];
    __alloyId271.push($.__views.__alloyId270);
    openChat ? $.__views.__alloyId270.addEventListener("click", openChat) : __defers["$.__views.__alloyId270!click!openChat"] = true;
    $.__views.__alloyId272 = Ti.UI.createView({
        left: 5,
        width: 60,
        id: "__alloyId272"
    });
    $.__views.__alloyId270.add($.__views.__alloyId272);
    $.__views.__alloyId273 = Ti.UI.createImageView({
        image: "images/sample_profileimage1.png",
        id: "__alloyId273"
    });
    $.__views.__alloyId272.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
        top: 10,
        left: 70,
        width: 180,
        id: "__alloyId274"
    });
    $.__views.__alloyId270.add($.__views.__alloyId274);
    $.__views.__alloyId275 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 0,
        height: 20,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "Hoofdstraat 64",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
    $.__views.__alloyId276 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 20,
        height: 20,
        text: "Hans van der Pas",
        id: "__alloyId276"
    });
    $.__views.__alloyId274.add($.__views.__alloyId276);
    $.__views.__alloyId277 = Ti.UI.createLabel({
        color: "#549fa2",
        left: 0,
        top: 43,
        font: {
            fontSize: 12
        },
        text: "Weet je nog die man van vorige ke..",
        id: "__alloyId277"
    });
    $.__views.__alloyId274.add($.__views.__alloyId277);
    $.__views.__alloyId278 = Ti.UI.createView({
        top: 14,
        right: 10,
        width: 105,
        height: 10,
        id: "__alloyId278"
    });
    $.__views.__alloyId270.add($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createImageView({
        image: "images/time_ago.png",
        id: "__alloyId279"
    });
    $.__views.__alloyId278.add($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createLabel({
        color: "#777",
        font: {
            fontSize: 12
        },
        right: 0,
        text: "23 sec",
        id: "__alloyId280"
    });
    $.__views.__alloyId278.add($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createTableViewRow({
        height: 80,
        backgroundColor: "#f5f0eb",
        name: "STIHO Amstel",
        id: "__alloyId281"
    });
    __alloyId271.push($.__views.__alloyId281);
    openChat ? $.__views.__alloyId281.addEventListener("click", openChat) : __defers["$.__views.__alloyId281!click!openChat"] = true;
    $.__views.__alloyId282 = Ti.UI.createView({
        left: 5,
        width: 60,
        id: "__alloyId282"
    });
    $.__views.__alloyId281.add($.__views.__alloyId282);
    $.__views.__alloyId283 = Ti.UI.createImageView({
        image: "images/sample_profileimage2.png",
        id: "__alloyId283"
    });
    $.__views.__alloyId282.add($.__views.__alloyId283);
    $.__views.__alloyId284 = Ti.UI.createView({
        top: 10,
        left: 70,
        width: 180,
        id: "__alloyId284"
    });
    $.__views.__alloyId281.add($.__views.__alloyId284);
    $.__views.__alloyId285 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 0,
        height: 20,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "STIHO Amstel",
        id: "__alloyId285"
    });
    $.__views.__alloyId284.add($.__views.__alloyId285);
    $.__views.__alloyId286 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 20,
        height: 20,
        text: "Bruno Hendriks",
        id: "__alloyId286"
    });
    $.__views.__alloyId284.add($.__views.__alloyId286);
    $.__views.__alloyId287 = Ti.UI.createLabel({
        color: "#549fa2",
        left: 0,
        top: 43,
        font: {
            fontSize: 12
        },
        text: "Afbeelding",
        id: "__alloyId287"
    });
    $.__views.__alloyId284.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createView({
        top: 14,
        right: 10,
        width: 105,
        height: 10,
        id: "__alloyId288"
    });
    $.__views.__alloyId281.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createImageView({
        image: "images/time_ago.png",
        id: "__alloyId289"
    });
    $.__views.__alloyId288.add($.__views.__alloyId289);
    $.__views.__alloyId290 = Ti.UI.createLabel({
        color: "#777",
        font: {
            fontSize: 12
        },
        right: 0,
        text: "51 min",
        id: "__alloyId290"
    });
    $.__views.__alloyId288.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createTableViewRow({
        height: 80,
        backgroundColor: "#f5f0eb",
        name: "Beschikbaarheid materiaal",
        id: "__alloyId291"
    });
    __alloyId271.push($.__views.__alloyId291);
    openChat ? $.__views.__alloyId291.addEventListener("click", openChat) : __defers["$.__views.__alloyId291!click!openChat"] = true;
    $.__views.__alloyId292 = Ti.UI.createView({
        left: 5,
        width: 60,
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createImageView({
        image: "images/sample_profileimage1.png",
        id: "__alloyId293"
    });
    $.__views.__alloyId292.add($.__views.__alloyId293);
    $.__views.__alloyId294 = Ti.UI.createView({
        top: 10,
        left: 70,
        width: 180,
        id: "__alloyId294"
    });
    $.__views.__alloyId291.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 0,
        height: 20,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "Beschikbaarheid materiaal",
        id: "__alloyId295"
    });
    $.__views.__alloyId294.add($.__views.__alloyId295);
    $.__views.__alloyId296 = Ti.UI.createLabel({
        color: "#000",
        left: 0,
        top: 20,
        height: 20,
        text: "Hans van der Pas",
        id: "__alloyId296"
    });
    $.__views.__alloyId294.add($.__views.__alloyId296);
    $.__views.__alloyId297 = Ti.UI.createLabel({
        color: "#549fa2",
        left: 0,
        top: 43,
        font: {
            fontSize: 12
        },
        text: "Gesproken bericht",
        id: "__alloyId297"
    });
    $.__views.__alloyId294.add($.__views.__alloyId297);
    $.__views.__alloyId298 = Ti.UI.createView({
        top: 14,
        right: 10,
        width: 105,
        height: 10,
        id: "__alloyId298"
    });
    $.__views.__alloyId291.add($.__views.__alloyId298);
    $.__views.__alloyId299 = Ti.UI.createImageView({
        image: "images/time_ago.png",
        id: "__alloyId299"
    });
    $.__views.__alloyId298.add($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createLabel({
        color: "#777",
        font: {
            fontSize: 12
        },
        right: 0,
        text: "4 dagen",
        id: "__alloyId300"
    });
    $.__views.__alloyId298.add($.__views.__alloyId300);
    $.__views.conversationtable = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        data: __alloyId271,
        id: "conversationtable"
    });
    $.__views.chats.add($.__views.conversationtable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId269!click!newChat"] && $.__views.__alloyId269.addEventListener("click", newChat);
    __defers["$.__views.__alloyId270!click!openChat"] && $.__views.__alloyId270.addEventListener("click", openChat);
    __defers["$.__views.__alloyId281!click!openChat"] && $.__views.__alloyId281.addEventListener("click", openChat);
    __defers["$.__views.__alloyId291!click!openChat"] && $.__views.__alloyId291.addEventListener("click", openChat);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;