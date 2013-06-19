function Controller() {
    function submitLogin() {
        homeWindow = Alloy.createController("home").getView();
        homeWindow.open();
        Ti.App.user = $.username.value;
    }
    function submitRegister() {}
    function prevScreen() {
        if (current_guidescreen > 1) {
            current_guidescreen--;
            updateViews();
        }
    }
    function nextScreen() {
        current_guidescreen++;
        updateViews();
    }
    function updateViews() {
        $.current_dot.left = 20 * current_guidescreen - 20;
        current_guidescreen > 1 ? $.prevbutton.show() : $.prevbutton.hide();
        1 == current_guidescreen && $.screen1.animate({
            left: 20
        });
        if (2 == current_guidescreen) {
            $.screen2.animate({
                left: 20
            });
            $.screen1.animate({
                left: -640
            });
        }
        if (3 == current_guidescreen) {
            $.screen3.animate({
                left: 20
            });
            $.screen2.animate({
                left: -640
            });
        }
        if (4 == current_guidescreen) {
            $.screen4.animate({
                left: 20
            });
            $.screen3.animate({
                left: -640
            });
        }
        if (5 == current_guidescreen) {
            $.screen5.animate({
                left: 20
            });
            $.screen4.animate({
                left: -640
            });
        }
        if (6 == current_guidescreen) {
            $.screen6.animate({
                left: 20
            });
            $.screen5.animate({
                left: -640
            });
        }
        7 == current_guidescreen && closeScreens();
    }
    function swipe(e) {
        "left" == e.direction && nextScreen();
        "right" == e.direction && prevScreen();
    }
    function closeScreens() {
        $.guidingscreens.animate({
            left: -640
        });
        from_help ? $.loginwin.close() : $.guidingscreens.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginwin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "loginwin"
    });
    $.__views.loginwin && $.addTopLevelView($.__views.loginwin);
    $.__views.loginView = Ti.UI.createView({
        width: Titanium.Platform.displayCaps.platformWidth,
        height: Titanium.Platform.displayCaps.platformHeight,
        top: "-20",
        backgroundImage: "/Default.png",
        id: "loginView"
    });
    $.__views.loginwin.add($.__views.loginView);
    $.__views.loginBox = Ti.UI.createImageView({
        borderRadius: 8,
        borderWidth: 0,
        backgroundColor: "#f58220",
        width: 300,
        height: 150,
        id: "loginBox"
    });
    $.__views.loginView.add($.__views.loginBox);
    $.__views.__alloyId318 = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        id: "__alloyId318"
    });
    var __alloyId319 = [];
    __alloyId319.push($.__views.__alloyId318);
    $.__views.__alloyId320 = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "__alloyId320"
    });
    $.__views.__alloyId318.add($.__views.__alloyId320);
    $.__views.username = Ti.UI.createTextField({
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        width: "100%",
        returnKeyType: Titanium.UI.RETURNKEY_NEXT,
        id: "username",
        hintText: "Klantnummer",
        value: "Test user"
    });
    $.__views.__alloyId320.add($.__views.username);
    $.__views.__alloyId321 = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        id: "__alloyId321"
    });
    __alloyId319.push($.__views.__alloyId321);
    $.__views.__alloyId322 = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.password = Ti.UI.createTextField({
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        width: "100%",
        id: "password",
        hintText: "Wachtwoord",
        passwordMask: "true"
    });
    $.__views.__alloyId322.add($.__views.password);
    $.__views.loginTable = Ti.UI.createTableView({
        backgroundColor: "transparent",
        style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
        scrollable: false,
        top: "-10",
        data: __alloyId319,
        id: "loginTable"
    });
    $.__views.loginBox.add($.__views.loginTable);
    $.__views.loginButton = Ti.UI.createButton({
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
        bottom: 10,
        width: 280,
        id: "loginButton",
        title: "Inloggen"
    });
    $.__views.loginBox.add($.__views.loginButton);
    submitLogin ? $.__views.loginButton.addEventListener("click", submitLogin) : __defers["$.__views.loginButton!click!submitLogin"] = true;
    $.__views.registerButton = Ti.UI.createButton({
        bottom: 10,
        width: 280,
        visible: false,
        id: "registerButton",
        backgroundImage: "none",
        title: "Nieuwe gebruiker?"
    });
    $.__views.loginBox.add($.__views.registerButton);
    submitRegister ? $.__views.registerButton.addEventListener("click", submitRegister) : __defers["$.__views.registerButton!click!submitRegister"] = true;
    $.__views.guidingscreens = Ti.UI.createView({
        id: "guidingscreens",
        backgroundColor: "#fff"
    });
    $.__views.loginwin.add($.__views.guidingscreens);
    $.__views.screen6 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: 640,
        id: "screen6",
        image: "images/guide6.png",
        last: "true"
    });
    $.__views.guidingscreens.add($.__views.screen6);
    nextScreen ? $.__views.screen6.addEventListener("click", nextScreen) : __defers["$.__views.screen6!click!nextScreen"] = true;
    swipe ? $.__views.screen6.addEventListener("swipe", swipe) : __defers["$.__views.screen6!swipe!swipe"] = true;
    $.__views.screen5 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: 640,
        id: "screen5",
        image: "images/guide5.png"
    });
    $.__views.guidingscreens.add($.__views.screen5);
    nextScreen ? $.__views.screen5.addEventListener("click", nextScreen) : __defers["$.__views.screen5!click!nextScreen"] = true;
    swipe ? $.__views.screen5.addEventListener("swipe", swipe) : __defers["$.__views.screen5!swipe!swipe"] = true;
    $.__views.screen4 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: 640,
        id: "screen4",
        image: "images/guide4.png"
    });
    $.__views.guidingscreens.add($.__views.screen4);
    nextScreen ? $.__views.screen4.addEventListener("click", nextScreen) : __defers["$.__views.screen4!click!nextScreen"] = true;
    swipe ? $.__views.screen4.addEventListener("swipe", swipe) : __defers["$.__views.screen4!swipe!swipe"] = true;
    $.__views.screen3 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: 640,
        id: "screen3",
        image: "images/guide3.png"
    });
    $.__views.guidingscreens.add($.__views.screen3);
    nextScreen ? $.__views.screen3.addEventListener("click", nextScreen) : __defers["$.__views.screen3!click!nextScreen"] = true;
    swipe ? $.__views.screen3.addEventListener("swipe", swipe) : __defers["$.__views.screen3!swipe!swipe"] = true;
    $.__views.screen2 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: 640,
        id: "screen2",
        image: "images/guide2.png"
    });
    $.__views.guidingscreens.add($.__views.screen2);
    nextScreen ? $.__views.screen2.addEventListener("click", nextScreen) : __defers["$.__views.screen2!click!nextScreen"] = true;
    swipe ? $.__views.screen2.addEventListener("swipe", swipe) : __defers["$.__views.screen2!swipe!swipe"] = true;
    $.__views.screen1 = Ti.UI.createImageView({
        width: 280,
        top: 5,
        borderColor: "#ccc",
        left: "20",
        id: "screen1",
        image: "images/guide1.png"
    });
    $.__views.guidingscreens.add($.__views.screen1);
    nextScreen ? $.__views.screen1.addEventListener("click", nextScreen) : __defers["$.__views.screen1!click!nextScreen"] = true;
    swipe ? $.__views.screen1.addEventListener("swipe", swipe) : __defers["$.__views.screen1!swipe!swipe"] = true;
    $.__views.__alloyId323 = Ti.UI.createView({
        bottom: "20",
        width: "110",
        height: "34",
        id: "__alloyId323"
    });
    $.__views.guidingscreens.add($.__views.__alloyId323);
    $.__views.__alloyId324 = Ti.UI.createImageView({
        left: "0",
        image: "images/dot.png",
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.__alloyId325 = Ti.UI.createImageView({
        left: "20",
        image: "images/dot.png",
        id: "__alloyId325"
    });
    $.__views.__alloyId323.add($.__views.__alloyId325);
    $.__views.__alloyId326 = Ti.UI.createImageView({
        left: "40",
        image: "images/dot.png",
        id: "__alloyId326"
    });
    $.__views.__alloyId323.add($.__views.__alloyId326);
    $.__views.__alloyId327 = Ti.UI.createImageView({
        left: "60",
        image: "images/dot.png",
        id: "__alloyId327"
    });
    $.__views.__alloyId323.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createImageView({
        left: "80",
        image: "images/dot.png",
        id: "__alloyId328"
    });
    $.__views.__alloyId323.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createImageView({
        left: "100",
        image: "images/dot.png",
        id: "__alloyId329"
    });
    $.__views.__alloyId323.add($.__views.__alloyId329);
    $.__views.current_dot = Ti.UI.createImageView({
        id: "current_dot",
        left: "0",
        image: "images/dot_blue.png"
    });
    $.__views.__alloyId323.add($.__views.current_dot);
    $.__views.prevbutton = Ti.UI.createView({
        left: 5,
        bottom: 5,
        backgroundImage: "images/prev.png",
        width: 24,
        height: 24,
        visible: false,
        id: "prevbutton"
    });
    $.__views.guidingscreens.add($.__views.prevbutton);
    prevScreen ? $.__views.prevbutton.addEventListener("click", prevScreen) : __defers["$.__views.prevbutton!click!prevScreen"] = true;
    $.__views.skipbutton = Ti.UI.createLabel({
        bottom: 8,
        color: "#777",
        font: {
            fontSize: 13
        },
        text: "Intro overslaan",
        id: "skipbutton"
    });
    $.__views.guidingscreens.add($.__views.skipbutton);
    closeScreens ? $.__views.skipbutton.addEventListener("click", closeScreens) : __defers["$.__views.skipbutton!click!closeScreens"] = true;
    $.__views.__alloyId330 = Ti.UI.createView({
        right: 5,
        bottom: 5,
        backgroundImage: "images/next.png",
        width: 24,
        height: 24,
        id: "__alloyId330"
    });
    $.__views.guidingscreens.add($.__views.__alloyId330);
    nextScreen ? $.__views.__alloyId330.addEventListener("click", nextScreen) : __defers["$.__views.__alloyId330!click!nextScreen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var from_help = args.from_help;
    var current_guidescreen = 1;
    from_help && ($.skipbutton.text = "Sluiten");
    $.username.addEventListener("return", function() {
        $.password.focus();
    });
    __defers["$.__views.loginButton!click!submitLogin"] && $.__views.loginButton.addEventListener("click", submitLogin);
    __defers["$.__views.registerButton!click!submitRegister"] && $.__views.registerButton.addEventListener("click", submitRegister);
    __defers["$.__views.screen6!click!nextScreen"] && $.__views.screen6.addEventListener("click", nextScreen);
    __defers["$.__views.screen6!swipe!swipe"] && $.__views.screen6.addEventListener("swipe", swipe);
    __defers["$.__views.screen5!click!nextScreen"] && $.__views.screen5.addEventListener("click", nextScreen);
    __defers["$.__views.screen5!swipe!swipe"] && $.__views.screen5.addEventListener("swipe", swipe);
    __defers["$.__views.screen4!click!nextScreen"] && $.__views.screen4.addEventListener("click", nextScreen);
    __defers["$.__views.screen4!swipe!swipe"] && $.__views.screen4.addEventListener("swipe", swipe);
    __defers["$.__views.screen3!click!nextScreen"] && $.__views.screen3.addEventListener("click", nextScreen);
    __defers["$.__views.screen3!swipe!swipe"] && $.__views.screen3.addEventListener("swipe", swipe);
    __defers["$.__views.screen2!click!nextScreen"] && $.__views.screen2.addEventListener("click", nextScreen);
    __defers["$.__views.screen2!swipe!swipe"] && $.__views.screen2.addEventListener("swipe", swipe);
    __defers["$.__views.screen1!click!nextScreen"] && $.__views.screen1.addEventListener("click", nextScreen);
    __defers["$.__views.screen1!swipe!swipe"] && $.__views.screen1.addEventListener("swipe", swipe);
    __defers["$.__views.prevbutton!click!prevScreen"] && $.__views.prevbutton.addEventListener("click", prevScreen);
    __defers["$.__views.skipbutton!click!closeScreens"] && $.__views.skipbutton.addEventListener("click", closeScreens);
    __defers["$.__views.__alloyId330!click!nextScreen"] && $.__views.__alloyId330.addEventListener("click", nextScreen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;