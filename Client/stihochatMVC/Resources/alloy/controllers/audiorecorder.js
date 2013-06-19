function Controller() {
    function startRecording() {
        Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
        rec = Titanium.Media.createAudioRecorder();
        sound = Titanium.Media.createSound({
            url: "audio/startbeep.mp3"
        });
        sound.play();
        sound.addEventListener("complete", function() {
            "Simulator" != Titanium.Platform.model && rec.start();
            $.duration.text = "0 sec.";
            Ti.App.recordingseconds = 0;
            timer = setInterval(function() {
                Ti.App.recordingseconds++;
                $.duration.text = Ti.App.recordingseconds + " sec.";
            }, 1e3);
            $.startrecordbutton.hide();
            $.stoprecordbutton.show();
            $.instruction_tap.hide();
            $.instruction_recording.show();
        });
    }
    function prepareSendRecorded() {
        Alloy.CFG.recorded_file = recorded_file;
        1 == $.cluster_question_switch.index ? Alloy.CFG.show_categorytags = true : require("alloy").Globals.sendRecorded(false);
        $.audiorecorder.close();
    }
    function stopRecording() {
        $.startrecordbutton.show();
        $.stoprecordbutton.hide();
        clearInterval(timer);
        $.instruction_tap.show();
        $.instruction_recording.hide();
        $.duration2.text = $.duration.text;
        $.duration.text = "";
        "Simulator" != Titanium.Platform.model && (recorded_file = rec.stop());
        $.PreviewView.show();
        $.RecordingView.hide();
    }
    function startPlaybackRecorded() {
        Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
        if ("Simulator" != Titanium.Platform.model) {
            sound = Titanium.Media.createSound({
                url: recorded_file.nativePath
            });
            sound.play();
        }
    }
    function stopPlaybackRecorded() {
        sound.stop();
    }
    function retryRecording() {
        sound.stop();
        $.PreviewView.hide();
        $.RecordingView.show();
    }
    function closeAudioRecorder() {
        $.audiorecorder.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.audiorecorder = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        id: "audiorecorder",
        backgroundImage: "images/alphabackground.png",
        title: "Gesproken bericht"
    });
    $.__views.audiorecorder && $.addTopLevelView($.__views.audiorecorder);
    $.__views.__alloyId104 = Ti.UI.createButton({
        title: "Annuleren",
        id: "__alloyId104"
    });
    closeAudioRecorder ? $.__views.__alloyId104.addEventListener("click", closeAudioRecorder) : __defers["$.__views.__alloyId104!click!closeAudioRecorder"] = true;
    $.__views.audiorecorder.leftNavButton = $.__views.__alloyId104;
    $.__views.RecordingView = Ti.UI.createView({
        id: "RecordingView",
        backgroundColor: "transparent"
    });
    $.__views.audiorecorder.add($.__views.RecordingView);
    $.__views.__alloyId105 = Ti.UI.createView({
        top: 60,
        height: 60,
        backgroundColor: "black",
        borderRadius: 10,
        left: 10,
        right: 10,
        id: "__alloyId105"
    });
    $.__views.RecordingView.add($.__views.__alloyId105);
    $.__views.instruction_tap = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 14
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Druk op de microfoonknop om te starten met opnemen.\nU kunt maximaal 45 seconden praten.",
        id: "instruction_tap"
    });
    $.__views.__alloyId105.add($.__views.instruction_tap);
    $.__views.instruction_recording = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 14
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Bezig met opnemen\nDruk nogmaals om te stoppen",
        id: "instruction_recording",
        visible: "false"
    });
    $.__views.__alloyId105.add($.__views.instruction_recording);
    $.__views.startrecordbutton = Ti.UI.createImageView({
        id: "startrecordbutton",
        image: "images/recordbutton.png"
    });
    $.__views.RecordingView.add($.__views.startrecordbutton);
    startRecording ? $.__views.startrecordbutton.addEventListener("click", startRecording) : __defers["$.__views.startrecordbutton!click!startRecording"] = true;
    $.__views.stoprecordbutton = Ti.UI.createImageView({
        id: "stoprecordbutton",
        image: "images/recordbutton_active.png",
        visible: "false"
    });
    $.__views.RecordingView.add($.__views.stoprecordbutton);
    stopRecording ? $.__views.stoprecordbutton.addEventListener("click", stopRecording) : __defers["$.__views.stoprecordbutton!click!stopRecording"] = true;
    $.__views.__alloyId106 = Ti.UI.createView({
        bottom: "70",
        height: "60",
        id: "__alloyId106"
    });
    $.__views.RecordingView.add($.__views.__alloyId106);
    $.__views.duration = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 30
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        shadowColor: "#555",
        shadowOffset: {
            x: 1,
            y: 1
        },
        id: "duration"
    });
    $.__views.__alloyId106.add($.__views.duration);
    $.__views.PreviewView = Ti.UI.createView({
        id: "PreviewView",
        backgroundColor: "transparent",
        visible: "false"
    });
    $.__views.audiorecorder.add($.__views.PreviewView);
    $.__views.question = Ti.UI.createView({
        height: "50",
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
        id: "question",
        top: "0"
    });
    $.__views.PreviewView.add($.__views.question);
    $.__views.cluster_question_label = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Wilt u advies?",
        left: 10,
        id: "cluster_question_label"
    });
    $.__views.question.add($.__views.cluster_question_label);
    $.__views.cluster_question_switch = Ti.UI.iOS.createTabbedBar({
        labels: [ "Nee", "Ja" ],
        index: 0,
        right: 10,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        height: 30,
        width: 100,
        backgroundColor: "#8cc5c5",
        id: "cluster_question_switch"
    });
    $.__views.question.add($.__views.cluster_question_switch);
    $.__views.__alloyId107 = Ti.UI.createView({
        bottom: "130",
        height: "60",
        id: "__alloyId107"
    });
    $.__views.PreviewView.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createImageView({
        left: "85",
        image: "images/playback_start.png",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    startPlaybackRecorded ? $.__views.__alloyId108.addEventListener("click", startPlaybackRecorded) : __defers["$.__views.__alloyId108!click!startPlaybackRecorded"] = true;
    $.__views.__alloyId109 = Ti.UI.createImageView({
        right: "85",
        image: "images/playback_stop.png",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
    stopPlaybackRecorded ? $.__views.__alloyId109.addEventListener("click", stopPlaybackRecorded) : __defers["$.__views.__alloyId109!click!stopPlaybackRecorded"] = true;
    $.__views.__alloyId110 = Ti.UI.createView({
        bottom: "70",
        height: "60",
        id: "__alloyId110"
    });
    $.__views.PreviewView.add($.__views.__alloyId110);
    $.__views.duration2 = Ti.UI.createLabel({
        color: "#ffffff",
        font: {
            fontSize: 30
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        shadowColor: "#555",
        shadowOffset: {
            x: 1,
            y: 1
        },
        text: "test",
        id: "duration2"
    });
    $.__views.__alloyId110.add($.__views.duration2);
    $.__views.bottombar = Ti.UI.createView({
        bottom: 0,
        height: 50,
        width: 322,
        backgroundColor: "#ff7800",
        borderColor: "#ad5100",
        backgroundImage: "images/chatmenu_bg.png",
        id: "bottombar"
    });
    $.__views.PreviewView.add($.__views.bottombar);
    $.__views.recordagain = Ti.UI.createButton({
        height: 40,
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#e47547",
                position: 0
            }, {
                color: "#d23f00",
                position: 1
            } ],
            backFillStart: false
        },
        width: 80,
        title: "Opnieuw",
        id: "recordagain",
        left: "5",
        bottom: "5"
    });
    $.__views.bottombar.add($.__views.recordagain);
    retryRecording ? $.__views.recordagain.addEventListener("click", retryRecording) : __defers["$.__views.recordagain!click!retryRecording"] = true;
    $.__views.recordingsend = Ti.UI.createButton({
        height: 40,
        borderRadius: 5,
        borderColor: "#1f2a3c",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#4185f4",
                position: 0
            }, {
                color: "#1c53de",
                position: 1
            } ],
            backFillStart: false
        },
        width: 80,
        title: "Verstuur",
        id: "recordingsend",
        right: "5",
        bottom: "5"
    });
    $.__views.bottombar.add($.__views.recordingsend);
    prepareSendRecorded ? $.__views.recordingsend.addEventListener("click", prepareSendRecorded) : __defers["$.__views.recordingsend!click!prepareSendRecorded"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rec;
    var recorded_file;
    var sound;
    __defers["$.__views.__alloyId104!click!closeAudioRecorder"] && $.__views.__alloyId104.addEventListener("click", closeAudioRecorder);
    __defers["$.__views.startrecordbutton!click!startRecording"] && $.__views.startrecordbutton.addEventListener("click", startRecording);
    __defers["$.__views.stoprecordbutton!click!stopRecording"] && $.__views.stoprecordbutton.addEventListener("click", stopRecording);
    __defers["$.__views.__alloyId108!click!startPlaybackRecorded"] && $.__views.__alloyId108.addEventListener("click", startPlaybackRecorded);
    __defers["$.__views.__alloyId109!click!stopPlaybackRecorded"] && $.__views.__alloyId109.addEventListener("click", stopPlaybackRecorded);
    __defers["$.__views.recordagain!click!retryRecording"] && $.__views.recordagain.addEventListener("click", retryRecording);
    __defers["$.__views.recordingsend!click!prepareSendRecorded"] && $.__views.recordingsend.addEventListener("click", prepareSendRecorded);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;