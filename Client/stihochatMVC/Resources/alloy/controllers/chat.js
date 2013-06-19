function Controller() {
    function showClusterQuestion() {
        if (is_archive || is_cluster || is_open_questions) ; else {
            cluster_question_switch.index = 0;
            cluster_question.animate({
                top: 0,
                duration: 500
            });
            $.chatwin.add(cluster_question);
        }
    }
    function hideClusterQuestion() {
        $.chatwin.remove(cluster_question);
    }
    function openChatOptions() {
        co_win = Alloy.createController("chat_options").getView();
        Alloy.CFG.tabgroup.activeTab.open(co_win);
    }
    function openOpenQuestions() {
        var openclusterwindow = Alloy.createController("chat", {
            is_open_questions: true
        }).getView();
        openclusterwindow.title = "Openstaande vragen";
        Alloy.CFG.tabgroup.activeTab.open(openclusterwindow);
    }
    function closeCategoryTags() {
        Alloy.CFG.show_categorytags = false;
        $.categorytags.hide();
    }
    function sendQuestion() {
        if ("" != $.tags.value) {
            Alloy.CFG.is_voice_question ? require("alloy").Globals.sendRecorded(true) : sendTextMessage(true);
            $.categorytags.hide();
        } else alert("Gelieve steekwoorden invullen.");
    }
    function pullNewMessages() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.App.messages_json = this.responseText;
                var messages = JSON.parse(this.responseText);
                animate = 0 != Ti.App.last_message_id ? true : false;
                if (messages.length > 0) for (var i = 0; messages.length > i; i++) if (is_archive && 1 == messages[i].is_question_cluster || !is_archive && !is_open_questions || is_open_questions && 1 == messages[i].is_question_cluster) {
                    is_self = messages[i].user == Ti.App.user ? true : false;
                    name = is_archive ? "*loodgieter*" : messages[i].user;
                    addMessageRow(messages[i].id, messages[i].content, messages[i].date, name, is_self, messages[i].type, messages[i].is_question_cluster, is_archive, animate);
                    is_archive || is_open_questions || (Ti.App.last_message_id = messages[i].id);
                }
                Ti.API.info(this.responseText);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
            },
            timeout: 5e3
        });
        xhr.open("GET", Ti.App.SERVER_PATH);
        xhr.send({
            action: "getNewMessages",
            last_message_id: is_archive || is_open_questions ? 0 : Ti.App.last_message_id
        });
    }
    function addQuestionClusterHeader() {
        questioncluster_header = Ti.UI.createView({
            backgroundImage: "images/question_cluster_header.png",
            top: 10,
            width: 302,
            height: 53,
            id: "cluster_header"
        });
        questioncluster_category = Ti.UI.createLabel({
            text: "Badkamer",
            top: 3,
            left: 27,
            color: "#fff",
            font: {
                fontSize: 13,
                fontWeight: "bold"
            }
        });
        questioncluster_tags = Ti.UI.createLabel({
            text: "Condens, afzuiging",
            top: 25,
            left: 27,
            color: "#fff",
            font: {
                fontSize: 13
            }
        });
        header_row = Ti.UI.createTableViewRow({
            backgroundColor: "#f5f0eb",
            selectedBackgroundColor: "#f5f0eb",
            selectedColor: "#f5f0eb"
        });
        questioncluster_header.add(questioncluster_category);
        questioncluster_header.add(questioncluster_tags);
        header_row.add(questioncluster_header);
        $.messages.insertRowBefore(0, header_row);
    }
    function newTextMessage() {
        $.textmessage.visible = true;
        $.textmessage.focus();
        showClusterQuestion();
    }
    function newVoiceMessage() {
        audiorecorderWindow = Alloy.createController("audiorecorder", {
            title: "Gesproken bericht"
        }).getView();
        audiorecorderWindow.open({
            modal: true,
            backgroundColor: "transparent",
            navBarHidden: false
        });
    }
    function newPhotoMessage() {
        Titanium.Media.showCamera({
            success: function(event) {
                var image = event.media;
                var d = new Date();
                var filename = d.getTime() + ".png";
                var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
                f.write(image);
                var xhr = Titanium.Network.createHTTPClient();
                xhr.setTimeout(1e4);
                xhr.open("POST", Ti.App.SERVER_PATH, false);
                xhr.send({
                    file: f.blob,
                    user: Ti.App.user,
                    action: "addPhotoMessage"
                });
            }
        });
    }
    function sendTextMessage(is_cluster) {
        is_question_cluster = is_cluster ? 1 : 0;
        var xhr = Titanium.Network.createHTTPClient();
        xhr.setTimeout(1e4);
        xhr.open("POST", Ti.App.SERVER_PATH, false);
        xhr.send({
            content: $.textmessage.value,
            user: Ti.App.user,
            action: "addTextMessage",
            is_question_cluster: is_question_cluster
        });
        $.textmessage.value = "";
    }
    function getUserFriendlyDate(date) {
        parts = date.split(" ");
        date = parts[0];
        time = parts[1];
        timeparts = time.split(":");
        dateparts = date.split("-");
        cd = new Date();
        datestring = dateparts[2] + "-" + parseInt(dateparts[1]) + "-" + parseInt(dateparts[0]) == cd.getDate() + "-" + (cd.getMonth() + 1) + "-" + cd.getFullYear() ? "" : dateparts[2] + "-" + dateparts[1] + "-" + dateparts[0];
        return datestring + " " + timeparts[0] + ":" + timeparts[1];
    }
    function addMessageRow(id, content, date, user, is_self, type, is_question_cluster, is_solved, animate) {
        var rand = Math.floor(3 * Math.random());
        is_archive && (rand = 0);
        if (0 == rand) {
            category = "Badkamer";
            bottomimage = "images/question_cluster_bottom.png";
            topimage = "images/question_cluster_top.png";
        }
        if (1 == rand) {
            category = "Zagen";
            bottomimage = "images/question_cluster_bottom_blue.png";
            topimage = "images/question_cluster_top_blue.png";
        }
        if (1 != rand && 0 != rand) {
            category = "Kitten";
            bottomimage = "images/question_cluster_bottom_yellow.png";
            topimage = "images/question_cluster_top_yellow.png";
        }
        $.messages.data > 0 && $.messages.deleteRow($.messages.data[0].rows.length - 1, {
            animationStyle: Titanium.UI.iPhone.RowAnimationStyle.UP
        });
        row = Ti.UI.createTableViewRow({
            id: id,
            type: type,
            backgroundColor: "#f5f0eb",
            selectedBackgroundColor: "#f5f0eb",
            selectedColor: "#f5f0eb"
        });
        questioncluster_top = Ti.UI.createView({
            backgroundImage: topimage,
            backgroundLeftCap: 5,
            backgroundRightCap: 5,
            backgroundTopCap: 5,
            backgroundBottomCap: 5,
            top: 10,
            width: 302,
            height: Ti.UI.SIZE,
            id: "cluster_top" + id
        });
        questioncluster_bottom = Ti.UI.createView({
            backgroundImage: bottomimage,
            width: 302,
            height: 53,
            id: "cluster_bottom" + id
        });
        questioncluster_bottom.addEventListener("singletap", function() {
            new_chatwindow = Alloy.createController("chat", {
                is_cluster: true,
                is_archive: is_archive
            }).getView();
            Alloy.CFG.tabgroup.activeTab.open(new_chatwindow);
            new_chatwindow.title = "Vragencluster";
        });
        questioncluster_category = Ti.UI.createLabel({
            text: category,
            top: 3,
            left: 24,
            color: "#fff",
            font: {
                fontSize: 13,
                fontWeight: "bold"
            }
        });
        questioncluster_tags = Ti.UI.createLabel({
            text: "Condens, afzuiging",
            top: 3,
            right: 24,
            color: "#fff",
            font: {
                fontSize: 13
            }
        });
        chatbubble = Ti.UI.createView({
            backgroundImage: "images/chat_bubble_self.png",
            backgroundLeftCap: 20,
            backgroundRightCap: 60,
            backgroundTopCap: 20,
            backgroundBottomCap: 50,
            top: 10,
            height: Ti.UI.SIZE,
            width: 240,
            id: id,
            ref: id
        });
        senderphoto = Ti.UI.createView({
            backgroundImage: "images/sample_profileimage1.png",
            top: 10,
            height: 45,
            width: 45,
            borderRadius: 4,
            borderColor: "#bbb",
            borderWidth: 1
        });
        if (is_self) {
            chatbubble.right = 55;
            senderphoto.right = 5;
            senderphoto.backgroundImage = "images/sample_profileimage2.png";
        } else {
            is_archive && (senderphoto.backgroundImage = "images/default_profile.png");
            chatbubble.backgroundImage = "images/chat_bubble.png";
            chatbubble.left = 55;
            senderphoto.left = 5;
        }
        var user_label = Ti.UI.createLabel({
            text: user + ":",
            left: 30,
            top: 10,
            font: {
                fontWeight: "bold"
            }
        });
        var date_label = Ti.UI.createLabel({
            text: getUserFriendlyDate(date),
            right: 30,
            top: 12,
            color: "gray",
            font: {
                fontWeight: "normal",
                fontSize: 10
            }
        });
        is_self && (user_label.text = "Ik:");
        chatbubble.add(user_label);
        chatbubble.add(date_label);
        if (1 == is_question_cluster) {
            questioncluster_top.add(senderphoto);
            questioncluster_top.add(chatbubble);
            questioncluster_bottom.add(questioncluster_category);
            questioncluster_bottom.add(questioncluster_tags);
            row.layout = "vertical";
            row.add(questioncluster_top);
            row.add(questioncluster_bottom);
        } else {
            row.add(senderphoto);
            row.add(chatbubble);
        }
        if (is_solved && !is_open_questions) {
            solved = Ti.UI.createImageView({
                image: "images/solved_green.png",
                top: 1,
                left: 1
            });
            questioncluster_top.add(solved);
        }
        "1" == type && addTextMessageRow(row, chatbubble, id, content);
        "2" == type && addVoiceMessageRow(row, chatbubble, id);
        "3" == type && addPhotoMessageRow(row, chatbubble, id);
        $.messages.appendRow(row, {
            animated: animate
        });
        spacerow = Ti.UI.createTableViewRow({
            backgroundColor: "#f5f0eb",
            selectedBackgroundColor: "#f5f0eb",
            selectedColor: "#f5f0eb",
            height: 1
        });
        $.messages.appendRow(spacerow);
        is_archive || is_open_questions || $.messages.scrollToIndex($.messages.data[0].rows.length - 1);
    }
    function addPhotoMessageRow(row, chatbubble, id) {
        image = Ti.UI.createImageView({
            image: Ti.App.SERVER_PATH + "chatdata/" + id + ".png",
            height: 100,
            left: 0,
            id: id,
            top: 30
        });
        image.addEventListener("singletap", function(e) {
            $.photoViewer.backgroundImage = image.image;
            $.photoViewer.show();
            Ti.API.info(e.source.image);
        });
        view = Ti.UI.createView({
            height: Ti.UI.SIZE,
            bottom: 10
        });
        view.add(image);
        chatbubble.add(view);
    }
    function addTextMessageRow(row, chatbubble, id, content) {
        content_label = Ti.UI.createLabel({
            width: 200,
            left: 30,
            id: id,
            text: content,
            top: 30,
            color: "#333",
            font: {
                fontSize: 14
            }
        });
        view = Ti.UI.createView({
            height: Ti.UI.SIZE,
            bottom: 10
        });
        view.add(content_label);
        chatbubble.add(view);
    }
    function addVoiceMessageRow(row, chatbubble, id) {
        audioSlider[id] = Ti.UI.createSlider({
            thumbImage: "images/play_thumb.png",
            width: 200,
            left: 20,
            id: id,
            top: 30
        });
        audioSlider[id].touchEnabled = false;
        audioSlider[id].setMax(9e3);
        view = Ti.UI.createView({
            height: Ti.UI.SIZE,
            bottom: 10
        });
        view.add(audioSlider[id]);
        chatbubble.add(view);
        chatbubble.addEventListener("singletap", function(e) {
            if (audioPlayer.id != e.source.parent.id) playVoiceMessage(e.source.parent.id); else if (audioPlayer.playing) audioPlayer.pause(); else if (audioPlayer.paused) audioPlayer.start(); else {
                audioPlayer.stop();
                playVoiceMessage(e.source.parent.id);
            }
        });
    }
    function playVoiceMessage(id) {
        Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
        audioPlayer.stop();
        audioPlayer.url = Ti.App.SERVER_PATH + "audiogateway.php?id=" + id;
        audioPlayer.id = id;
        audioPlayer.addEventListener("progress", function(e) {
            audioSlider[audioPlayer.id].setValue(Math.round(e.progress));
        });
        audioPlayer.addEventListener("change", function(e) {
            if (7 == e.state && audioPlayer.progress > 0) {
                audioSlider[e.source.id].setValue(9e3);
                found = false;
                next_to_play_row = 0;
                for (i = 0; $.messages.data[0].rows.length > i; i++) if ($.messages.data[0].rows[i].id > e.source.id && 2 == $.messages.data[0].rows[i].type && false == found) {
                    found = true;
                    next_to_play_row = i;
                    playVoiceMessage($.messages.data[0].rows[next_to_play_row].id);
                    $.messages.scrollToIndex(next_to_play_row);
                }
            }
        });
        audioPlayer.start();
    }
    function cancelTextMessage() {
        $.textmessage.value = "";
        $.textmessage.blur();
        $.textmessage.hide();
        hideClusterQuestion();
    }
    function closePhotoViewer() {
        $.photoViewer.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.chatwin = Ti.UI.createWindow({
        barColor: "#de700f",
        backgroundColor: "#f5f0eb",
        tabBarHidden: true,
        id: "chatwin",
        title: "Chat"
    });
    $.__views.chatwin && $.addTopLevelView($.__views.chatwin);
    $.__views.chatNav = Ti.UI.createView({
        id: "chatNav",
        visible: "false",
        width: "74"
    });
    $.__views.questionbutton = Ti.UI.createButton({
        height: "30",
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        title: "",
        id: "questionbutton",
        right: "11",
        width: "30"
    });
    $.__views.chatNav.add($.__views.questionbutton);
    openOpenQuestions ? $.__views.questionbutton.addEventListener("click", openOpenQuestions) : __defers["$.__views.questionbutton!click!openOpenQuestions"] = true;
    $.__views.questionmark = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        shadowColor: "#555",
        shadowOffset: {
            x: 0,
            y: "-1"
        },
        text: "?",
        id: "questionmark",
        top: "4",
        left: "9"
    });
    $.__views.questionbutton.add($.__views.questionmark);
    $.__views.__alloyId112 = Ti.UI.createImageView({
        right: "0",
        top: "-2",
        width: "22",
        image: "images/openquestions.png",
        id: "__alloyId112"
    });
    $.__views.chatNav.add($.__views.__alloyId112);
    openOpenQuestions ? $.__views.__alloyId112.addEventListener("click", openOpenQuestions) : __defers["$.__views.__alloyId112!click!openOpenQuestions"] = true;
    $.__views.__alloyId113 = Ti.UI.createButton({
        height: 30,
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        left: "0",
        width: "30",
        id: "__alloyId113"
    });
    $.__views.chatNav.add($.__views.__alloyId113);
    openChatOptions ? $.__views.__alloyId113.addEventListener("click", openChatOptions) : __defers["$.__views.__alloyId113!click!openChatOptions"] = true;
    $.__views.__alloyId114 = Ti.UI.createImageView({
        image: "images/settings.png",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.chatwin.rightNavButton = $.__views.chatNav;
    $.__views.chatView = Ti.UI.createView({
        id: "chatView"
    });
    $.__views.chatwin.add($.__views.chatView);
    $.__views.messages = Ti.UI.createTableView({
        backgroundColor: "#f5f0eb",
        style: Ti.UI.iPhone.TableViewStyle.PLAIN,
        separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE,
        separatorColor: "#f5f0eb",
        top: 0,
        height: 366,
        id: "messages"
    });
    $.__views.chatView.add($.__views.messages);
    cancelTextMessage ? $.__views.messages.addEventListener("click", cancelTextMessage) : __defers["$.__views.messages!click!cancelTextMessage"] = true;
    $.__views.categorytags = Ti.UI.createView({
        id: "categorytags",
        height: "417",
        bottom: "0",
        visible: "false",
        zIndex: "5000",
        backgroundColor: "#272b39"
    });
    $.__views.chatView.add($.__views.categorytags);
    $.__views.question2 = Ti.UI.createView({
        top: "0",
        height: 50,
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
        id: "question2"
    });
    $.__views.categorytags.add($.__views.question2);
    $.__views.question2_label = Ti.UI.createLabel({
        text: "Hoe categoriseert u deze vraag om advies?",
        color: "white",
        font: {
            fontWeight: "bold"
        },
        left: 10,
        id: "question2_label"
    });
    $.__views.question2.add($.__views.question2_label);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        text: "Gelieve steekwoorden toevoegen:",
        bottom: "100",
        color: "white",
        id: "__alloyId115"
    });
    $.__views.categorytags.add($.__views.__alloyId115);
    $.__views.tags = Ti.UI.createTextField({
        id: "tags",
        bottom: "60",
        height: "40",
        width: "300",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.categorytags.add($.__views.tags);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "50",
        useSpinner: "false",
        selectionIndicator: "true"
    });
    $.__views.categorytags.add($.__views.picker);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.picker.add($.__views.column1);
    $.__views.__alloyId117 = Ti.UI.createPickerRow({
        title: "Selecteer een categorie:",
        id: "__alloyId117"
    });
    $.__views.column1.addRow($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createPickerRow({
        title: "Aan- of opbouw",
        id: "__alloyId118"
    });
    $.__views.column1.addRow($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createPickerRow({
        title: "Badkamer",
        id: "__alloyId119"
    });
    $.__views.column1.addRow($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createPickerRow({
        title: "Dak",
        id: "__alloyId120"
    });
    $.__views.column1.addRow($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createPickerRow({
        title: "Fundering",
        id: "__alloyId121"
    });
    $.__views.column1.addRow($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createPickerRow({
        title: "Kitten",
        id: "__alloyId122"
    });
    $.__views.column1.addRow($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createPickerRow({
        title: "Keuken",
        id: "__alloyId123"
    });
    $.__views.column1.addRow($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createPickerRow({
        title: "Lijmen",
        id: "__alloyId124"
    });
    $.__views.column1.addRow($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createPickerRow({
        title: "Schilderen",
        id: "__alloyId125"
    });
    $.__views.column1.addRow($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createPickerRow({
        title: "Toilet",
        id: "__alloyId126"
    });
    $.__views.column1.addRow($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createPickerRow({
        title: "Vloer",
        id: "__alloyId127"
    });
    $.__views.column1.addRow($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createPickerRow({
        title: "Wand",
        id: "__alloyId128"
    });
    $.__views.column1.addRow($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createPickerRow({
        title: "Zagen",
        id: "__alloyId129"
    });
    $.__views.column1.addRow($.__views.__alloyId129);
    $.__views.selected = Ti.UI.createLabel({
        bottom: "135",
        color: "#676a79",
        id: "selected"
    });
    $.__views.categorytags.add($.__views.selected);
    $.__views.bottombar = Ti.UI.createView({
        bottom: 0,
        height: 50,
        width: 322,
        backgroundColor: "#ff7800",
        borderColor: "#ad5100",
        backgroundImage: "images/chatmenu_bg.png",
        id: "bottombar"
    });
    $.__views.categorytags.add($.__views.bottombar);
    $.__views.cancelquestionbutton = Ti.UI.createButton({
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
        width: "100",
        id: "cancelquestionbutton",
        left: "7",
        title: "Annuleer"
    });
    $.__views.bottombar.add($.__views.cancelquestionbutton);
    closeCategoryTags ? $.__views.cancelquestionbutton.addEventListener("click", closeCategoryTags) : __defers["$.__views.cancelquestionbutton!click!closeCategoryTags"] = true;
    $.__views.sendquestionbutton = Ti.UI.createButton({
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
        width: "80",
        id: "sendquestionbutton",
        right: "7",
        title: "Verstuur"
    });
    $.__views.bottombar.add($.__views.sendquestionbutton);
    sendQuestion ? $.__views.sendquestionbutton.addEventListener("click", sendQuestion) : __defers["$.__views.sendquestionbutton!click!sendQuestion"] = true;
    $.__views.messaging = Ti.UI.createView({
        bottom: 0,
        height: 50,
        width: 322,
        backgroundColor: "#ff7800",
        borderColor: "#ad5100",
        backgroundImage: "images/chatmenu_bg.png",
        id: "messaging"
    });
    $.__views.chatView.add($.__views.messaging);
    $.__views.image_button = Ti.UI.createButton({
        height: 30,
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        title: "",
        id: "image_button",
        right: "7",
        width: "40"
    });
    $.__views.messaging.add($.__views.image_button);
    newPhotoMessage ? $.__views.image_button.addEventListener("click", newPhotoMessage) : __defers["$.__views.image_button!click!newPhotoMessage"] = true;
    $.__views.__alloyId130 = Ti.UI.createImageView({
        image: "images/button_camera.png",
        id: "__alloyId130"
    });
    $.__views.image_button.add($.__views.__alloyId130);
    $.__views.text_button = Ti.UI.createButton({
        height: 30,
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        title: "",
        id: "text_button",
        left: "7",
        width: "40"
    });
    $.__views.messaging.add($.__views.text_button);
    newTextMessage ? $.__views.text_button.addEventListener("click", newTextMessage) : __defers["$.__views.text_button!click!newTextMessage"] = true;
    $.__views.__alloyId131 = Ti.UI.createImageView({
        image: "images/button_text.png",
        id: "__alloyId131"
    });
    $.__views.text_button.add($.__views.__alloyId131);
    $.__views.voice_button = Ti.UI.createButton({
        height: 30,
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        title: "",
        id: "voice_button",
        width: "205"
    });
    $.__views.messaging.add($.__views.voice_button);
    newVoiceMessage ? $.__views.voice_button.addEventListener("click", newVoiceMessage) : __defers["$.__views.voice_button!click!newVoiceMessage"] = true;
    $.__views.__alloyId132 = Ti.UI.createImageView({
        left: "5",
        image: "images/button_microphone.png",
        id: "__alloyId132"
    });
    $.__views.voice_button.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        color: "white",
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        shadowColor: "#555",
        shadowOffset: {
            x: 0,
            y: "-1"
        },
        text: "Open het spraakscherm",
        left: "30",
        id: "__alloyId133"
    });
    $.__views.voice_button.add($.__views.__alloyId133);
    $.__views.cancelbutton = Ti.UI.createButton({
        height: "30",
        borderRadius: 5,
        borderColor: "#913d19",
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
        font: {
            fontSize: 14,
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
        id: "cancelbutton",
        left: "7",
        visible: "false",
        width: "60",
        title: "Cancel"
    });
    $.__views.messaging.add($.__views.cancelbutton);
    cancelTextMessage ? $.__views.cancelbutton.addEventListener("click", cancelTextMessage) : __defers["$.__views.cancelbutton!click!cancelTextMessage"] = true;
    $.__views.textmessage = Ti.UI.createTextField({
        id: "textmessage",
        visible: "false",
        width: "230",
        right: "5",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        returnKeyType: Titanium.UI.RETURNKEY_SEND
    });
    $.__views.messaging.add($.__views.textmessage);
    $.__views.photoViewer = Ti.UI.createView({
        id: "photoViewer",
        visible: "false"
    });
    $.__views.chatView.add($.__views.photoViewer);
    closePhotoViewer ? $.__views.photoViewer.addEventListener("click", closePhotoViewer) : __defers["$.__views.photoViewer!click!closePhotoViewer"] = true;
    $.__views.__alloyId134 = Ti.UI.createImageView({
        image: "images/close.png",
        right: "10",
        top: "10",
        id: "__alloyId134"
    });
    $.__views.photoViewer.add($.__views.__alloyId134);
    closePhotoViewer ? $.__views.__alloyId134.addEventListener("click", closePhotoViewer) : __defers["$.__views.__alloyId134!click!closePhotoViewer"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var next_to_play_row = 0;
    var args = arguments[0] || {};
    var is_cluster = args.is_cluster;
    var is_archive = args.is_archive;
    var is_open_questions = args.is_open_questions;
    var audioSlider = new Array();
    Ti.include("question_view.js");
    Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
    var audioPlayer = Ti.Media.createAudioPlayer({
        allowBackground: true
    });
    if (!is_cluster && !is_archive && !is_open_questions) {
        $.chatNav.show();
        Ti.App.last_message_id = 0;
        Ti.App.messages_json = "[]";
        setInterval(function() {
            pullNewMessages();
        }, 2e3);
    }
    if (is_cluster) {
        var btnSolved = Ti.UI.createButton({
            title: "Opgelost"
        });
        btnSolved.addEventListener("click", function() {
            alert("De vraag wordt gemarkeerd als opgelost en zal tevens in het archief terug te vinden zijn.");
            $.chatwin.close();
        });
        is_archive || ($.chatwin.rightNavButton = btnSolved);
        addMessageRow(2e3, "Bij deze stel ik graag een test vraag. Is de werking hiervan duidelijk?", "2013-05-24 11:11:40", "Test user", true, 1, 0, false);
        addQuestionClusterHeader();
    }
    if (is_archive) {
        $.chatwin.tabBarHidden = false;
        $.messaging.hide();
        if (!is_cluster) {
            searchbar = Ti.UI.createSearchBar({
                barColor: "#9aa7b0",
                showCancel: "true",
                height: 44,
                top: 0
            });
            searchbar.addEventListener("cancel", function() {
                this.blur();
            });
            $.messages.search = searchbar;
            pullNewMessages();
        }
    }
    is_open_questions && pullNewMessages();
    $.tags.addEventListener("blur", function() {
        $.categorytags.bottom = 0;
    });
    $.tags.addEventListener("focus", function() {
        $.categorytags.bottom = 160;
    });
    $.picker.addEventListener("change", function(e) {
        $.selected.text = 0 == e.rowIndex ? "" : "(U selecteerde " + e.row.title + ")";
    });
    $.textmessage.addEventListener("return", function() {
        if (1 == cluster_question_switch.index) {
            $.categorytags.show();
            Alloy.CFG.is_voice_question = false;
        } else {
            sendTextMessage();
            $.categorytags.hide();
        }
        hideClusterQuestion();
        $.textmessage.hide();
    });
    $.chatwin.addEventListener("focus", function() {
        if (true == Alloy.CFG.show_categorytags) {
            Alloy.CFG.show_categorytags = false;
            $.categorytags.show();
            Alloy.CFG.is_voice_question = true;
        }
        setTimeout(function() {
            Ti.App.last_message_id > 0 && (is_archive || is_open_questions || $.messages.scrollToIndex($.messages.data[0].rows.length - 1));
        }, 200);
    });
    $.chatwin.addEventListener("blur", function() {
        hideClusterQuestion();
    });
    $.textmessage.addEventListener("focus", function() {
        $.messaging.bottom = 215;
        $.messages.top = -215;
        $.cancelbutton.show();
        $.voice_button.hide();
        $.image_button.hide();
        $.text_button.hide();
    });
    $.textmessage.addEventListener("blur", function() {
        $.messaging.bottom = 0;
        $.messages.top = 0;
        $.cancelbutton.hide();
        $.voice_button.show();
        $.image_button.show();
        $.text_button.show();
        $.textmessage.hide();
        hideClusterQuestion();
    });
    __defers["$.__views.questionbutton!click!openOpenQuestions"] && $.__views.questionbutton.addEventListener("click", openOpenQuestions);
    __defers["$.__views.__alloyId112!click!openOpenQuestions"] && $.__views.__alloyId112.addEventListener("click", openOpenQuestions);
    __defers["$.__views.__alloyId113!click!openChatOptions"] && $.__views.__alloyId113.addEventListener("click", openChatOptions);
    __defers["$.__views.messages!click!cancelTextMessage"] && $.__views.messages.addEventListener("click", cancelTextMessage);
    __defers["$.__views.cancelquestionbutton!click!closeCategoryTags"] && $.__views.cancelquestionbutton.addEventListener("click", closeCategoryTags);
    __defers["$.__views.sendquestionbutton!click!sendQuestion"] && $.__views.sendquestionbutton.addEventListener("click", sendQuestion);
    __defers["$.__views.image_button!click!newPhotoMessage"] && $.__views.image_button.addEventListener("click", newPhotoMessage);
    __defers["$.__views.text_button!click!newTextMessage"] && $.__views.text_button.addEventListener("click", newTextMessage);
    __defers["$.__views.voice_button!click!newVoiceMessage"] && $.__views.voice_button.addEventListener("click", newVoiceMessage);
    __defers["$.__views.cancelbutton!click!cancelTextMessage"] && $.__views.cancelbutton.addEventListener("click", cancelTextMessage);
    __defers["$.__views.photoViewer!click!closePhotoViewer"] && $.__views.photoViewer.addEventListener("click", closePhotoViewer);
    __defers["$.__views.__alloyId134!click!closePhotoViewer"] && $.__views.__alloyId134.addEventListener("click", closePhotoViewer);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;