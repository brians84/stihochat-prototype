function Controller() {
    function openClusterArchive(e) {
        if ("Badkamer" == e.rowData.name) {
            var archiveclusterwindow = Alloy.createController("chat", {
                is_archive: true
            }).getView();
            archiveclusterwindow.title = e.rowData.name;
            Alloy.CFG.tabgroup.activeTab.open(archiveclusterwindow);
        } else if ("Dak" == e.rowData.name) {
            var faqwindow = Alloy.createController("faq").getView();
            Alloy.CFG.tabgroup.activeTab.open(faqwindow);
        } else alert('Alle categorieën zijn uitgeschakeld in het prototype, met uitzondering van de categorie "Badkamer" en "Dak"');
    }
    function toggleCategories(e) {
        if (0 == e.index) {
            $.services.show();
            $.products.hide();
        } else {
            $.services.hide();
            $.products.show();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.archive = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "white",
        title: "Archief",
        id: "archive"
    });
    $.__views.archive && $.addTopLevelView($.__views.archive);
    $.__views.searchtabsholder = Ti.UI.createView({
        left: 0,
        height: 35,
        width: 320,
        zIndex: 10,
        top: 0,
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#9ba8b1",
                position: 0
            }, {
                color: "#cad1d5",
                position: 1
            } ],
            backFillStart: false
        },
        id: "searchtabsholder"
    });
    $.__views.archive.add($.__views.searchtabsholder);
    toggleCategories ? $.__views.searchtabsholder.addEventListener("click", toggleCategories) : __defers["$.__views.searchtabsholder!click!toggleCategories"] = true;
    var __alloyId7 = [];
    var __alloyId10 = {
        title: "Diensten",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId10);
    var __alloyId11 = {
        title: "Producten",
        ns: "Alloy.Abstract"
    };
    __alloyId7.push(__alloyId11);
    $.__views.searchtabs = Ti.UI.iOS.createTabbedBar({
        index: 0,
        top: 5,
        width: 300,
        height: 30,
        borderRadius: 0,
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        labels: __alloyId7,
        id: "searchtabs"
    });
    $.__views.searchtabsholder.add($.__views.searchtabs);
    $.__views.categorysearch = Ti.UI.createSearchBar({
        id: "categorysearch"
    });
    $.__views.__alloyId12 = Ti.UI.createTableViewSection({
        headerTitle: "Diensten",
        id: "__alloyId12"
    });
    var __alloyId13 = [];
    __alloyId13.push($.__views.__alloyId12);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        name: "Aan- of opbouw",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#485a4c",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        image: "images/cat_aanopbouw.png",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Aan- of opbouw",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        name: "Badkamer",
        id: "__alloyId18"
    });
    $.__views.__alloyId12.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#6a8870",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "images/cat_badkamer.png",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.label_badkamer = Ti.UI.createLabel({
        left: 80,
        color: "#000",
        text: "Badkamer",
        id: "label_badkamer"
    });
    $.__views.__alloyId18.add($.__views.label_badkamer);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        name: "Dak",
        id: "__alloyId21"
    });
    $.__views.__alloyId12.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#98aa7a",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        image: "images/cat_dak.png",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        left: 80,
        color: "#000",
        text: "Dak",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        name: "Fundering",
        id: "__alloyId25"
    });
    $.__views.__alloyId12.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#899040",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        image: "images/cat_fundering.png",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Fundering",
        id: "__alloyId28"
    });
    $.__views.__alloyId25.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        name: "Keuken",
        id: "__alloyId29"
    });
    $.__views.__alloyId12.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#656b2f",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createImageView({
        image: "images/cat_keuken.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Keuken",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        name: "Kitten",
        id: "__alloyId33"
    });
    $.__views.__alloyId12.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#cd8300",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createImageView({
        image: "images/cat_kitten.png",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Kitten",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        name: "Lijmen en Verfen",
        id: "__alloyId37"
    });
    $.__views.__alloyId12.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#a44100",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createImageView({
        image: "images/cat_verfen.png",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Lijmen en Verfen",
        id: "__alloyId40"
    });
    $.__views.__alloyId37.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        name: "Toilet",
        id: "__alloyId41"
    });
    $.__views.__alloyId12.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#912727",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createImageView({
        image: "images/cat_toilet.png",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Toilet",
        id: "__alloyId44"
    });
    $.__views.__alloyId41.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        name: "Vloer",
        id: "__alloyId45"
    });
    $.__views.__alloyId12.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#9a4443",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createImageView({
        image: "images/cat_vloer.png",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Vloer",
        id: "__alloyId48"
    });
    $.__views.__alloyId45.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        name: "Wand",
        id: "__alloyId49"
    });
    $.__views.__alloyId12.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#6a3e3f",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createImageView({
        image: "images/cat_wand.png",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Wand",
        id: "__alloyId52"
    });
    $.__views.__alloyId49.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createTableViewRow({
        name: "Zagen",
        id: "__alloyId53"
    });
    $.__views.__alloyId12.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#436571",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "images/cat_zagen.png",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Zagen",
        id: "__alloyId56"
    });
    $.__views.__alloyId53.add($.__views.__alloyId56);
    $.__views.services = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        top: 30,
        data: __alloyId13,
        search: $.__views.categorysearch,
        id: "services"
    });
    $.__views.archive.add($.__views.services);
    openClusterArchive ? $.__views.services.addEventListener("click", openClusterArchive) : __defers["$.__views.services!click!openClusterArchive"] = true;
    $.__views.categorysearch = Ti.UI.createSearchBar({
        id: "categorysearch"
    });
    $.__views.__alloyId57 = Ti.UI.createTableViewSection({
        headerTitle: "Producten",
        id: "__alloyId57"
    });
    var __alloyId58 = [];
    __alloyId58.push($.__views.__alloyId57);
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        name: "Afbouwmaterialen",
        id: "__alloyId59"
    });
    $.__views.__alloyId57.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#485a4c",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createImageView({
        image: "images/prod_afbouwmaterialen.png",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Afbouwmaterialen",
        id: "__alloyId62"
    });
    $.__views.__alloyId59.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createTableViewRow({
        name: "Bevestingsmaterialen",
        id: "__alloyId63"
    });
    $.__views.__alloyId57.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#6a8870",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createImageView({
        image: "images/prod_bevestingsmaterialen.png",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Bevestingsmaterialen",
        id: "__alloyId66"
    });
    $.__views.__alloyId63.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        name: "Bouwmaterialen",
        id: "__alloyId67"
    });
    $.__views.__alloyId57.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#98aa7a",
        id: "__alloyId68"
    });
    $.__views.__alloyId67.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createImageView({
        image: "images/prod_bouwmaterialen.png",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Bouwmaterialen",
        id: "__alloyId70"
    });
    $.__views.__alloyId67.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        name: "Deuren en kozijnen",
        id: "__alloyId71"
    });
    $.__views.__alloyId57.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#899040",
        id: "__alloyId72"
    });
    $.__views.__alloyId71.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createImageView({
        image: "images/prod_deuren_en_kozijnen.png",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Deuren en kozijnen",
        id: "__alloyId74"
    });
    $.__views.__alloyId71.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createTableViewRow({
        name: "Gereedschap",
        id: "__alloyId75"
    });
    $.__views.__alloyId57.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#656b2f",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
        image: "images/prod_gereedschap.png",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Gereedschap",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createTableViewRow({
        name: "Gevelbekleding",
        id: "__alloyId79"
    });
    $.__views.__alloyId57.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#cd8300",
        id: "__alloyId80"
    });
    $.__views.__alloyId79.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createImageView({
        image: "images/prod_gevelbekleding.png",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Gevelbekleding",
        id: "__alloyId82"
    });
    $.__views.__alloyId79.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createTableViewRow({
        name: "Hang -en sluitwerk",
        id: "__alloyId83"
    });
    $.__views.__alloyId57.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#a44100",
        id: "__alloyId84"
    });
    $.__views.__alloyId83.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createImageView({
        image: "images/prod_hang-en-sluitwerk.png",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Hang -en sluitwerk",
        id: "__alloyId86"
    });
    $.__views.__alloyId83.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createTableViewRow({
        name: "Hout",
        id: "__alloyId87"
    });
    $.__views.__alloyId57.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#912727",
        id: "__alloyId88"
    });
    $.__views.__alloyId87.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createImageView({
        image: "images/prod_hout.png",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Hout",
        id: "__alloyId90"
    });
    $.__views.__alloyId87.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createTableViewRow({
        name: "Installatiematerialen",
        id: "__alloyId91"
    });
    $.__views.__alloyId57.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#9a4443",
        id: "__alloyId92"
    });
    $.__views.__alloyId91.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createImageView({
        image: "images/prod_installatiematerialen.png",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Installatiematerialen",
        id: "__alloyId94"
    });
    $.__views.__alloyId91.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createTableViewRow({
        name: "Isolatie",
        id: "__alloyId95"
    });
    $.__views.__alloyId57.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#6a3e3f",
        id: "__alloyId96"
    });
    $.__views.__alloyId95.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createImageView({
        image: "images/prod_isolatie.png",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Isolatie",
        id: "__alloyId98"
    });
    $.__views.__alloyId95.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createTableViewRow({
        name: "Persoonlijke bescherming",
        id: "__alloyId99"
    });
    $.__views.__alloyId57.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        left: 0,
        height: 51,
        width: 70,
        backgroundColor: "#436571",
        id: "__alloyId100"
    });
    $.__views.__alloyId99.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createImageView({
        image: "images/prod_persoonlijke-bescherming.png",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createLabel({
        left: 80,
        color: "#777",
        text: "Persoonlijke bescherming",
        id: "__alloyId102"
    });
    $.__views.__alloyId99.add($.__views.__alloyId102);
    $.__views.products = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        top: 30,
        data: __alloyId58,
        search: $.__views.categorysearch,
        id: "products",
        visible: "false"
    });
    $.__views.archive.add($.__views.products);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.searchtabsholder!click!toggleCategories"] && $.__views.searchtabsholder.addEventListener("click", toggleCategories);
    __defers["$.__views.services!click!openClusterArchive"] && $.__views.services.addEventListener("click", openClusterArchive);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;