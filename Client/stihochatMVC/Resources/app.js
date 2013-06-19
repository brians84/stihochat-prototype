var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Ti.App.SERVER_PATH = "http://145.92.6.116/stihochat-miniserver/";

Alloy.Globals.sendRecorded = function(is_cluster) {
    is_question_cluster = is_cluster ? 1 : 0;
    recorded_file = Alloy.CFG.recorded_file;
    var xhr = Titanium.Network.createHTTPClient();
    xhr.setTimeout(1e4);
    xhr.open("POST", Ti.App.SERVER_PATH, false);
    "Simulator" == Titanium.Platform.model && (recorded_file = Titanium.Filesystem.getFile("audio/startbeep.mp3"));
    xhr.send({
        file: recorded_file.blob,
        user: Ti.App.user,
        action: "addVoiceMessage",
        is_question_cluster: is_question_cluster
    });
    xhr.onerror = function(e) {
        Ti.UI.createAlertDialog({
            title: "Error",
            message: e.error
        }).show();
        Ti.API.info("ERROR " + e.error);
    };
    xhr.onload = function() {};
};

Alloy.createController("index");