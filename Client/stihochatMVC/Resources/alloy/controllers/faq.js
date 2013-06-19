function Controller() {
    function openQuestion(e) {
        Ti.UI.createAlertDialog({
            message: e.rowData.answer,
            ok: "Okay",
            title: "Antwoord"
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.faq = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "white",
        title: "Dak",
        id: "faq"
    });
    $.__views.faq && $.addTopLevelView($.__views.faq);
    $.__views.categorysearch = Ti.UI.createSearchBar({
        id: "categorysearch"
    });
    $.__views.__alloyId301 = Ti.UI.createTableViewSection({
        headerTitle: "Veelgestelde vragen",
        id: "__alloyId301"
    });
    var __alloyId302 = [];
    __alloyId302.push($.__views.__alloyId301);
    $.__views.__alloyId303 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        question: "Ik moet een vloertje storten wat heb ik nodig als ik een vloer heb van 10 m2 en 4 cm dik moet?",
        answer: "10 x 0.04= 0.4 m3 dus 400 ltr er gaat 12,5 ltr uit een zak dus 400/12,5=32 zakken.\n(deze vraag geld ook voor zand cement)",
        id: "__alloyId303"
    });
    $.__views.__alloyId301.add($.__views.__alloyId303);
    $.__views.__alloyId304 = Ti.UI.createImageView({
        left: 3,
        top: 3,
        image: "images/question.png",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.__alloyId305 = Ti.UI.createLabel({
        left: 32,
        bottom: 10,
        text: "Ik moet een vloertje storten wat heb ik nodig als ik een vloer heb van 10 m2 en 4 cm dik moet?",
        id: "__alloyId305"
    });
    $.__views.__alloyId303.add($.__views.__alloyId305);
    $.__views.__alloyId306 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        question: "Wat is de mengverhouding van metselspecie? Beton? Zand cement?",
        answer: "Metselspecie = 1 deel cement en 3 delen zand\nBeton= 1 deel cement en 2 delen zand en 3 delen grind.\nZand cement= 1 deel cement en 4 delen zand",
        id: "__alloyId306"
    });
    $.__views.__alloyId301.add($.__views.__alloyId306);
    $.__views.__alloyId307 = Ti.UI.createImageView({
        left: 3,
        top: 3,
        image: "images/question.png",
        id: "__alloyId307"
    });
    $.__views.__alloyId306.add($.__views.__alloyId307);
    $.__views.__alloyId308 = Ti.UI.createLabel({
        left: 32,
        bottom: 10,
        text: "Wat is de mengverhouding van metselspecie? Beton? Zand cement?",
        id: "__alloyId308"
    });
    $.__views.__alloyId306.add($.__views.__alloyId308);
    $.__views.__alloyId309 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        question: "Wat is de draairichting van een deur?",
        answer: "Als je gaat staan waar de deur naar je toedraait, aan welke kant dan je scharnieren zitten is je draairichting. Dus als hij naar je toe draait en de scharnieren zitten links dan is de deur links draaiend.",
        id: "__alloyId309"
    });
    $.__views.__alloyId301.add($.__views.__alloyId309);
    $.__views.__alloyId310 = Ti.UI.createImageView({
        left: 3,
        top: 3,
        image: "images/question.png",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.__alloyId311 = Ti.UI.createLabel({
        left: 32,
        bottom: 10,
        text: "Wat is de draairichting van een deur?",
        id: "__alloyId311"
    });
    $.__views.__alloyId309.add($.__views.__alloyId311);
    $.__views.questions = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        filterAttribute: "question",
        data: __alloyId302,
        search: $.__views.categorysearch,
        id: "questions"
    });
    $.__views.faq.add($.__views.questions);
    openQuestion ? $.__views.questions.addEventListener("click", openQuestion) : __defers["$.__views.questions!click!openQuestion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.questions!click!openQuestion"] && $.__views.questions.addEventListener("click", openQuestion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;