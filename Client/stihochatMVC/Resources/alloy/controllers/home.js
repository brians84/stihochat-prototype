function Controller() {
    function openWindows(e) {
        if (2 == e.index) {
            var contactsWindow = Alloy.createController("contacts", {
                home: $.hometabgroup
            }).getView();
            $.tab_contacts.setWindow(contactsWindow);
        }
        3 == e.index;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.hometabgroup = Ti.UI.createTabGroup({
        id: "hometabgroup"
    });
    $.__views.__alloyId312 = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Archief",
        id: "__alloyId312"
    });
    $.__views.tab_archive = Ti.UI.createTab({
        window: $.__views.__alloyId312,
        id: "tab_archive",
        title: "Archief",
        icon: "images/home_archive.png"
    });
    $.__views.hometabgroup.addTab($.__views.tab_archive);
    $.__views.__alloyId313 = Alloy.createController("conversations", {
        id: "__alloyId313"
    });
    $.__views.tab_chats = Ti.UI.createTab({
        window: $.__views.__alloyId313.getViewEx({
            recurse: true
        }),
        id: "tab_chats",
        title: "Chats",
        icon: "images/home_chats.png"
    });
    $.__views.hometabgroup.addTab($.__views.tab_chats);
    $.__views.__alloyId315 = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "__alloyId315"
    });
    $.__views.tab_contacts = Ti.UI.createTab({
        window: $.__views.__alloyId315,
        id: "tab_contacts",
        title: "Contacten",
        icon: "images/home_contacts.png"
    });
    $.__views.hometabgroup.addTab($.__views.tab_contacts);
    $.__views.__alloyId316 = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        title: "Profiel",
        id: "__alloyId316"
    });
    $.__views.tab_profile = Ti.UI.createTab({
        window: $.__views.__alloyId316,
        id: "tab_profile",
        title: "Profiel",
        icon: "images/home_profile.png"
    });
    $.__views.hometabgroup.addTab($.__views.tab_profile);
    $.__views.__alloyId317 = Alloy.createController("settings", {
        id: "__alloyId317"
    });
    $.__views.tab_options = Ti.UI.createTab({
        window: $.__views.__alloyId317.getViewEx({
            recurse: true
        }),
        id: "tab_options",
        title: "Instellingen",
        icon: "images/home_settings.png"
    });
    $.__views.hometabgroup.addTab($.__views.tab_options);
    $.__views.hometabgroup && $.addTopLevelView($.__views.hometabgroup);
    openWindows ? $.__views.hometabgroup.addEventListener("focus", openWindows) : __defers["$.__views.hometabgroup!focus!openWindows"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.hometabgroup.setActiveTab(1);
    Alloy.CFG.tabgroup = $.hometabgroup;
    var profileWindow = Alloy.createController("profile", {
        title: "Brian Sahertian",
        stiho: true,
        edit: true
    }).getView();
    var saveButton = Ti.UI.createButton({
        title: "Opslaan"
    });
    saveButton.addEventListener("click", function() {
        alert("Uw instellingen zijn opgeslagen");
    });
    profileWindow.setRightNavButton(saveButton);
    $.tab_profile.setWindow(profileWindow);
    var archivewindow = Alloy.createController("archive").getView();
    $.tab_archive.setWindow(archivewindow);
    __defers["$.__views.hometabgroup!focus!openWindows"] && $.__views.hometabgroup.addEventListener("focus", openWindows);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;