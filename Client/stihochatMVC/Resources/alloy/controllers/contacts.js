function Controller() {
    function letterScrolling() {
        alert("Letter scrollen is niet beschikbaar in het prototype.");
    }
    function clickPhoneContact(e) {
        fullname = e.rowData.name;
        if (from_chatoptions) {
            $.contactstabgroup.close();
            Alloy.CFG.selected_name = fullname;
        } else {
            profileWindow = Alloy.createController("profile", {
                title: fullname,
                stiho: false
            }).getView();
            $.contactstabgroup.activeTab.open(profileWindow);
        }
    }
    function clickStihoContact(e) {
        fullname = e.rowData.title;
        profileWindow = Alloy.createController("profile", {
            title: fullname,
            stiho: true
        }).getView();
        $.contactstabgroup.activeTab.open(profileWindow);
    }
    function clickStihoSkills(e) {
        contactsWindow = Alloy.createController("contacts", {
            from_skill: true,
            title: e.rowData.title
        }).getView();
        $.contactstabgroup.activeTab.open(contactsWindow);
    }
    function goHome() {
        home.setActiveTab(1);
        $.contactstabgroup.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.contactstabgroup = Ti.UI.createTabGroup({
        id: "contactstabgroup"
    });
    $.__views.phonecontactswin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "phonecontactswin",
        title: "Mijn contacten"
    });
    $.__views.__alloyId165 = Ti.UI.createButton({
        title: "Thuis",
        id: "__alloyId165"
    });
    goHome ? $.__views.__alloyId165.addEventListener("click", goHome) : __defers["$.__views.__alloyId165!click!goHome"] = true;
    $.__views.phonecontactswin.leftNavButton = $.__views.__alloyId165;
    $.__views.__alloyId167 = Ti.UI.createSearchBar({
        barColor: "#9aa7b0",
        showCancel: "false",
        height: 44,
        top: 0,
        id: "__alloyId167"
    });
    $.__views.__alloyId168 = Ti.UI.createTableViewSection({
        headerTitle: "A",
        id: "__alloyId168"
    });
    var __alloyId169 = [];
    __alloyId169.push($.__views.__alloyId168);
    $.__views.__alloyId170 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Arjen Admiraal",
        id: "__alloyId170"
    });
    $.__views.__alloyId168.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Arjen Admiraal",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId172"
    });
    $.__views.__alloyId170.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Hout",
        id: "__alloyId173"
    });
    $.__views.__alloyId170.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Sven van den Akker",
        id: "__alloyId174"
    });
    $.__views.__alloyId168.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Sven van den Akker",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Enkhuizen",
        id: "__alloyId176"
    });
    $.__views.__alloyId174.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Wanden, Vloeren, Hout",
        id: "__alloyId177"
    });
    $.__views.__alloyId174.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createTableViewSection({
        headerTitle: "D",
        id: "__alloyId178"
    });
    __alloyId169.push($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createTableViewRow({
        height: 42,
        name: "John Doe",
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "John Doe",
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Maastricht",
        id: "__alloyId181"
    });
    $.__views.__alloyId179.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Lijmen, Kitten",
        id: "__alloyId182"
    });
    $.__views.__alloyId179.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Melvin Doe",
        id: "__alloyId183"
    });
    $.__views.__alloyId178.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Melvin Doe",
        id: "__alloyId184"
    });
    $.__views.__alloyId183.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Utrecht",
        id: "__alloyId185"
    });
    $.__views.__alloyId183.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Hout, Kitten, Schilderen",
        id: "__alloyId186"
    });
    $.__views.__alloyId183.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Tiago Duarte",
        id: "__alloyId187"
    });
    $.__views.__alloyId178.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Tiago Duarte",
        id: "__alloyId188"
    });
    $.__views.__alloyId187.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Groningen",
        id: "__alloyId189"
    });
    $.__views.__alloyId187.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Hout, Badkamer, Toilet",
        id: "__alloyId190"
    });
    $.__views.__alloyId187.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Terry van Dreesden",
        id: "__alloyId191"
    });
    $.__views.__alloyId178.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Terry van Dreesden",
        id: "__alloyId192"
    });
    $.__views.__alloyId191.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Nieuw-Vennep",
        id: "__alloyId193"
    });
    $.__views.__alloyId191.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Wanden",
        id: "__alloyId194"
    });
    $.__views.__alloyId191.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createTableViewSection({
        headerTitle: "S",
        id: "__alloyId195"
    });
    __alloyId169.push($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Johan Saft",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Johan Saft",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId198"
    });
    $.__views.__alloyId196.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Hout",
        id: "__alloyId199"
    });
    $.__views.__alloyId196.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createTableViewSection({
        headerTitle: "T",
        id: "__alloyId200"
    });
    __alloyId169.push($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createTableViewRow({
        height: 42,
        name: "John Timmerman",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "John Timmerman",
        id: "__alloyId202"
    });
    $.__views.__alloyId201.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Eindhoven",
        id: "__alloyId203"
    });
    $.__views.__alloyId201.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Badkamer, Toilet, Kitten",
        id: "__alloyId204"
    });
    $.__views.__alloyId201.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Gerrit Treur",
        id: "__alloyId205"
    });
    $.__views.__alloyId200.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Gerrit Treur",
        id: "__alloyId206"
    });
    $.__views.__alloyId205.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId207"
    });
    $.__views.__alloyId205.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Badkamer",
        id: "__alloyId208"
    });
    $.__views.__alloyId205.add($.__views.__alloyId208);
    $.__views.__alloyId166 = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        top: 0,
        searchHidden: false,
        filterAttribute: "name",
        data: __alloyId169,
        search: $.__views.__alloyId167,
        id: "__alloyId166"
    });
    $.__views.phonecontactswin.add($.__views.__alloyId166);
    clickPhoneContact ? $.__views.__alloyId166.addEventListener("click", clickPhoneContact) : __defers["$.__views.__alloyId166!click!clickPhoneContact"] = true;
    $.__views.__alloyId209 = Ti.UI.createImageView({
        right: "5",
        top: "46",
        image: "images/alphabetical_letters.png",
        id: "__alloyId209"
    });
    $.__views.phonecontactswin.add($.__views.__alloyId209);
    letterScrolling ? $.__views.__alloyId209.addEventListener("touchstart", letterScrolling) : __defers["$.__views.__alloyId209!touchstart!letterScrolling"] = true;
    $.__views.tab_phonecontacts = Ti.UI.createTab({
        icon: "images/nav_phonecontacts.png",
        window: $.__views.phonecontactswin,
        id: "tab_phonecontacts",
        title: "Mijn contacten"
    });
    $.__views.contactstabgroup.addTab($.__views.tab_phonecontacts);
    $.__views.stihocontactswin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "stihocontactswin",
        title: "STIHO Contacten"
    });
    $.__views.__alloyId211 = Ti.UI.createButton({
        title: "Home",
        id: "__alloyId211"
    });
    goHome ? $.__views.__alloyId211.addEventListener("click", goHome) : __defers["$.__views.__alloyId211!click!goHome"] = true;
    $.__views.stihocontactswin.leftNavButton = $.__views.__alloyId211;
    $.__views.searchtabsholder = Ti.UI.createView({
        zIndex: 10,
        height: 35,
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
    $.__views.stihocontactswin.add($.__views.searchtabsholder);
    var __alloyId213 = [];
    var __alloyId216 = {
        title: "Expertise",
        ns: "Alloy.Abstract"
    };
    __alloyId213.push(__alloyId216);
    var __alloyId217 = {
        title: "Naam",
        ns: "Alloy.Abstract"
    };
    __alloyId213.push(__alloyId217);
    $.__views.searchtabs = Ti.UI.iOS.createTabbedBar({
        index: 0,
        top: 5,
        width: "300",
        height: 30,
        borderRadius: 0,
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        labels: __alloyId213,
        id: "searchtabs"
    });
    $.__views.searchtabsholder.add($.__views.searchtabs);
    $.__views.skillsearch = Ti.UI.createSearchBar({
        barColor: "#9aa7b0",
        showCancel: "false",
        height: 44,
        top: 0,
        id: "skillsearch"
    });
    $.__views.__alloyId218 = Ti.UI.createTableViewSection({
        headerTitle: "Vaardighedenoverzicht",
        id: "__alloyId218"
    });
    var __alloyId219 = [];
    __alloyId219.push($.__views.__alloyId218);
    $.__views.__alloyId220 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Afwerking",
        id: "__alloyId220"
    });
    $.__views.__alloyId218.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Bevestiging",
        id: "__alloyId221"
    });
    $.__views.__alloyId218.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Hout",
        id: "__alloyId222"
    });
    $.__views.__alloyId218.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Gereedschappen",
        id: "__alloyId223"
    });
    $.__views.__alloyId218.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Keuken",
        id: "__alloyId224"
    });
    $.__views.__alloyId218.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Skill 1",
        id: "__alloyId225"
    });
    $.__views.__alloyId218.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createTableViewRow({
        height: 42,
        title: "Skill 2",
        id: "__alloyId226"
    });
    $.__views.__alloyId218.add($.__views.__alloyId226);
    $.__views.stihoskills = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        top: 34,
        searchHidden: false,
        filterAttribute: "name",
        data: __alloyId219,
        search: $.__views.skillsearch,
        id: "stihoskills"
    });
    $.__views.stihocontactswin.add($.__views.stihoskills);
    clickStihoSkills ? $.__views.stihoskills.addEventListener("click", clickStihoSkills) : __defers["$.__views.stihoskills!click!clickStihoSkills"] = true;
    $.__views.stihosearchbar = Ti.UI.createSearchBar({
        barColor: "#9aa7b0",
        showCancel: "false",
        height: 44,
        top: 0,
        id: "stihosearchbar"
    });
    $.__views.__alloyId227 = Ti.UI.createTableViewSection({
        headerTitle: "C",
        id: "__alloyId227"
    });
    var __alloyId228 = [];
    __alloyId228.push($.__views.__alloyId227);
    $.__views.__alloyId229 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Jerry Cevat",
        id: "__alloyId229"
    });
    $.__views.__alloyId227.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Jerry Cevat",
        id: "__alloyId230"
    });
    $.__views.__alloyId229.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId231"
    });
    $.__views.__alloyId229.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Hout",
        id: "__alloyId232"
    });
    $.__views.__alloyId229.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Eric Cousin",
        id: "__alloyId233"
    });
    $.__views.__alloyId227.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Eric Cousin",
        id: "__alloyId234"
    });
    $.__views.__alloyId233.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Rotterdam",
        id: "__alloyId235"
    });
    $.__views.__alloyId233.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Afwerking, bevestiging",
        id: "__alloyId236"
    });
    $.__views.__alloyId233.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createTableViewSection({
        headerTitle: "K",
        id: "__alloyId237"
    });
    __alloyId228.push($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Yvonne Kuypers",
        id: "__alloyId238"
    });
    $.__views.__alloyId237.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Yvonne Kuypers",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Den Bosch",
        id: "__alloyId240"
    });
    $.__views.__alloyId238.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Kitten, Lijmen",
        id: "__alloyId241"
    });
    $.__views.__alloyId238.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Kenny Kruijer",
        id: "__alloyId242"
    });
    $.__views.__alloyId237.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Kenny Kruijer",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Rotterdam",
        id: "__alloyId244"
    });
    $.__views.__alloyId242.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Badkamer, Toilet",
        id: "__alloyId245"
    });
    $.__views.__alloyId242.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createTableViewSection({
        headerTitle: "S",
        id: "__alloyId246"
    });
    __alloyId228.push($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Marcel Schavemaker",
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Marcel Schavemaker",
        id: "__alloyId248"
    });
    $.__views.__alloyId247.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId249"
    });
    $.__views.__alloyId247.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Afwerking, bevestiging",
        id: "__alloyId250"
    });
    $.__views.__alloyId247.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Rob Seegers",
        id: "__alloyId251"
    });
    $.__views.__alloyId246.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Rob Seegers",
        id: "__alloyId252"
    });
    $.__views.__alloyId251.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Utrecht",
        id: "__alloyId253"
    });
    $.__views.__alloyId251.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Vloeren, Wanden",
        id: "__alloyId254"
    });
    $.__views.__alloyId251.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Tom Schipper",
        id: "__alloyId255"
    });
    $.__views.__alloyId246.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Tom Schipper",
        id: "__alloyId256"
    });
    $.__views.__alloyId255.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Amsterdam",
        id: "__alloyId257"
    });
    $.__views.__alloyId255.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Vloeren",
        id: "__alloyId258"
    });
    $.__views.__alloyId255.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createTableViewSection({
        headerTitle: "V",
        id: "__alloyId259"
    });
    __alloyId228.push($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Dennis Verkuil",
        id: "__alloyId260"
    });
    $.__views.__alloyId259.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Dennis Verkuil",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Haarlem",
        id: "__alloyId262"
    });
    $.__views.__alloyId260.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Lijmen, Schildederen",
        id: "__alloyId263"
    });
    $.__views.__alloyId260.add($.__views.__alloyId263);
    $.__views.__alloyId264 = Ti.UI.createTableViewRow({
        height: 42,
        name: "Lesley van Velzen",
        id: "__alloyId264"
    });
    $.__views.__alloyId259.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        left: 10,
        top: 2,
        text: "Lesley van Velzen",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        left: 10,
        top: 23,
        text: "Hilversum",
        id: "__alloyId266"
    });
    $.__views.__alloyId264.add($.__views.__alloyId266);
    $.__views.__alloyId267 = Ti.UI.createLabel({
        font: {
            fontSize: 13
        },
        color: "#777",
        right: 15,
        top: 23,
        text: "Afwerking",
        id: "__alloyId267"
    });
    $.__views.__alloyId264.add($.__views.__alloyId267);
    $.__views.stihocontacts = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        top: 34,
        searchHidden: false,
        filterAttribute: "name",
        data: __alloyId228,
        search: $.__views.stihosearchbar,
        id: "stihocontacts",
        visible: "false"
    });
    $.__views.stihocontactswin.add($.__views.stihocontacts);
    clickStihoContact ? $.__views.stihocontacts.addEventListener("click", clickStihoContact) : __defers["$.__views.stihocontacts!click!clickStihoContact"] = true;
    $.__views.tab_stihocontacts = Ti.UI.createTab({
        icon: "images/nav_stihocontacts.png",
        window: $.__views.stihocontactswin,
        id: "tab_stihocontacts",
        title: "STIHO Contacten"
    });
    $.__views.contactstabgroup.addTab($.__views.tab_stihocontacts);
    $.__views.contactstabgroup && $.addTopLevelView($.__views.contactstabgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var home = args.home;
    var home = args.home;
    var from_chatoptions = args.from_chatoptions;
    if (1 == args.from_skill || 1 == args.from_chatoptions) {
        Ti.API.info("from skill");
        $.stihocontacts.show();
        $.phonecontactswin.navBarHidden = true;
        $.phonecontactswin.tabBarHidden = true;
        $.contactstabgroup.bottom = -50;
        $.stihocontactswin.title = args.title;
        $.phonecontactswin.title = args.title;
    } else {
        $.contactstabgroup.open();
        Alloy.CFG.contactstabgroup = $.contactstabgroup;
    }
    $.searchtabs.addEventListener("click", function(e) {
        if (1 == e.index) {
            $.stihoskills.hide();
            $.stihocontacts.show();
        } else {
            $.stihoskills.show();
            $.stihocontacts.hide();
        }
    });
    __defers["$.__views.__alloyId165!click!goHome"] && $.__views.__alloyId165.addEventListener("click", goHome);
    __defers["$.__views.__alloyId166!click!clickPhoneContact"] && $.__views.__alloyId166.addEventListener("click", clickPhoneContact);
    __defers["$.__views.__alloyId209!touchstart!letterScrolling"] && $.__views.__alloyId209.addEventListener("touchstart", letterScrolling);
    __defers["$.__views.__alloyId211!click!goHome"] && $.__views.__alloyId211.addEventListener("click", goHome);
    __defers["$.__views.stihoskills!click!clickStihoSkills"] && $.__views.stihoskills.addEventListener("click", clickStihoSkills);
    __defers["$.__views.stihocontacts!click!clickStihoContact"] && $.__views.stihocontacts.addEventListener("click", clickStihoContact);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;