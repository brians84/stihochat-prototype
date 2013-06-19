
/**
 * INITIALIZERS
 */

var next_to_play_row = 0;

var args = arguments[0] || {};
var is_cluster = args.is_cluster;
var is_archive = args.is_archive;
var is_open_questions = args.is_open_questions;

var audioSlider = new Array();


Ti.include('question_view.js');


function showClusterQuestion() {
	
	if (is_archive || is_cluster || is_open_questions) {
		//do not show this window
	} else {
		
		cluster_question_switch.index = 0;
		
		cluster_question.animate({
	      top:0,
	      duration:500
	    });
		
		$.chatwin.add(cluster_question);
	}
}



function showCategoryTags() {

	$.categorytags.show();
}

function hideClusterQuestion() {

	$.chatwin.remove(cluster_question);
	
}

//initialize the audioPlayer for playing back voice messages
Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;

var audioPlayer = Ti.Media.createAudioPlayer({
    allowBackground: true
});


if (!is_cluster && !is_archive && !is_open_questions) {
	
	$.chatNav.show();
	
	// temporary global to store the latest pulled message id
	Ti.App.last_message_id = 0;
	Ti.App.messages_json = "[]";
		
	// temporary pulling ever 2sec instead of push from server
	setInterval(function () {
	   pullNewMessages();
	}, 2000);

} 

if (is_cluster ) {
	
	// Simulate the cluster window
	
	var btnSolved = Ti.UI.createButton({
		title: 'Opgelost'
	});
	
	btnSolved.addEventListener('click', function() {
		alert('De vraag wordt gemarkeerd als opgelost en zal tevens in het archief terug te vinden zijn.');
		$.chatwin.close();
	});
	
	if (!is_archive) {
		$.chatwin.rightNavButton = btnSolved;
	}
    
	addMessageRow(2000, "Bij deze stel ik graag een test vraag. Is de werking hiervan duidelijk?", "2013-05-24 11:11:40", "Test user", true, 1, 0, false);
	addQuestionClusterHeader();
	
}

if (is_archive) {
	
	$.chatwin.tabBarHidden = false;
	$.messaging.hide();
	
	if (!is_cluster) {
		
		searchbar = Ti.UI.createSearchBar({
			 barColor: "#9aa7b0",
			 showCancel:"true",
			 height:44,
			 top:0
		});
		
		searchbar.addEventListener('cancel', function() {
			 this.blur();
		});
		
		$.messages.search = searchbar;
		pullNewMessages();
	}
	
}

if (is_open_questions) {
	pullNewMessages();
}


function openChatOptions(e) {
	
	co_win = Alloy.createController('chat_options').getView();
	

	//current_tab = Titanium.UI.currentTab;
	//chatWindow.open({modal:true});
	
	Alloy.CFG.tabgroup.activeTab.open(co_win);
	
}

function openOpenQuestions(e) {
	var openclusterwindow = Alloy.createController('chat', {is_open_questions: true}).getView();
	openclusterwindow.title = "Openstaande vragen";
	Alloy.CFG.tabgroup.activeTab.open(openclusterwindow);
}


function closeCategoryTags() {
	Alloy.CFG.show_categorytags = false;
	$.categorytags.hide();
}


/**
 * EVENT LISTENERS
 */

function sendQuestion() {
	
	if ($.tags.value != '') {
		
	  if (Alloy.CFG.is_voice_question) {
		require('alloy').Globals.sendRecorded(true);
	  } else{
	  	sendTextMessage(true);
	  }
	  
	  $.categorytags.hide();
	} else {
		alert('Gelieve steekwoorden invullen.')
	}
	

}

$.tags.addEventListener('blur', function(e) {
	$.categorytags.bottom = 0;
});

$.tags.addEventListener('focus', function(e) {
	$.categorytags.bottom = 160;
});

$.picker.addEventListener('change',function(e){
	if (e.rowIndex == 0) {
		$.selected.text = '';
	} else {
		$.selected.text = '(U selecteerde ' +e.row.title + ')';
	}
});

// send message on "return"/"send" key
$.textmessage.addEventListener('return', function (e) {
	
	if (cluster_question_switch.index == 1) {
		$.categorytags.show();
		Alloy.CFG.is_voice_question = false;
		
	} else {
		sendTextMessage();
		$.categorytags.hide();
	}
	hideClusterQuestion();
    $.textmessage.hide();
});


$.chatwin.addEventListener('focus', function () {
	
	
    if (Alloy.CFG.show_categorytags == true) {
    	
    	Alloy.CFG.show_categorytags = false;
    	$.categorytags.show();
    	
    	Alloy.CFG.is_voice_question = true;
    }
    
    setTimeout(function () {
        if (Ti.App.last_message_id > 0) {
            if (!is_archive && !is_open_questions) {
            	$.messages.scrollToIndex($.messages.data[0].rows.length - 1);
            }
        }
        // show the messaging options after window slide animation is done
        //$.messaging.show();
    }, 200);
});

$.chatwin.addEventListener('blur', function () {
    // hide the messaging options before window slide animation 
    //$.messaging.hide();
    hideClusterQuestion() 
});


$.textmessage.addEventListener('focus', function () {
    // change interface dynamically if keyboard pops up
    $.messaging.bottom = 215;
    $.messages.top = -215;
    $.cancelbutton.show();
    $.voice_button.hide();
    $.image_button.hide();
    $.text_button.hide();
    
});

$.textmessage.addEventListener('blur', function () {
    // change interface dynamically if keyboard will be hidden
    $.messaging.bottom = 0;
    $.messages.top = 0;
    $.cancelbutton.hide();
    $.voice_button.show();
    $.image_button.show();
    $.text_button.show();
    $.textmessage.hide();
    hideClusterQuestion() 
});




/**
 * pullNewMessages
 * 
 * pulls new messages from server.
 * this should become a push server utilizing nodejs or similar
 */
function pullNewMessages() {

    var xhr = Ti.Network.createHTTPClient({
        onload: function (e) {
            Ti.App.messages_json = this.responseText;
            var messages = JSON.parse(this.responseText);
            
            animate = ( Ti.App.last_message_id != 0) ? true : false;

            if (messages.length > 0) {
                for (var i = 0; i < messages.length; i++) {

					if ((is_archive && messages[i].is_question_cluster == 1) || (!is_archive && !is_open_questions) || (is_open_questions && messages[i].is_question_cluster == 1)  ) {
	                    is_self = (messages[i].user == Ti.App.user) ? true : false;
	                    name = (is_archive) ? '*loodgieter*' : messages[i].user; // name should not be visisble in archive
	                    addMessageRow(messages[i].id, messages[i].content, messages[i].date, name, is_self, messages[i].type, messages[i].is_question_cluster, is_archive, animate);
	
	                    if (!is_archive && !is_open_questions) {
	                    	Ti.App.last_message_id = messages[i].id ;
	                    	
	                    } // update the latest message id
	                }
                }

            }

            Ti.API.info(this.responseText);
        },
        onerror: function (e) {
            Ti.API.debug(e.error);
        },
        timeout: 5000
    });

    xhr.open("GET", Ti.App.SERVER_PATH);
    xhr.send({
        action: 'getNewMessages',
        last_message_id: ((is_archive || is_open_questions) ? 0 : Ti.App.last_message_id)
    }); // no authorization in Prototype
}



/**
 * addQuestionCluster
 * 
 * simulates the cluster header
 */
function addQuestionClusterHeader() {

	questioncluster_header = Ti.UI.createView({
        backgroundImage: 'images/question_cluster_header.png',
        top: 10,
        width: 302,
        height: 53,
        id: 'cluster_header'
    });
    
    questioncluster_category = Ti.UI.createLabel({
    	text: 'Badkamer',
    	top: 3,
    	left: 27,
    	color: '#fff',
    	font: {
            fontSize: 13,
            fontWeight: 'bold'
        }
    });
    
    questioncluster_tags = Ti.UI.createLabel({
    	text: 'Condens, afzuiging',
    	top: 25,
    	left: 27,
    	color: '#fff',
    	font: {
            fontSize: 13
        }
    });

    header_row = Ti.UI.createTableViewRow({
        backgroundColor: '#f5f0eb',
        selectedBackgroundColor: '#f5f0eb',
        selectedColor: '#f5f0eb'
    });
    
    questioncluster_header.add(questioncluster_category);
    questioncluster_header.add(questioncluster_tags);
    header_row.add(questioncluster_header);
    
    $.messages.insertRowBefore(0,header_row);
    
}






/**
 * newTextMessage
 * 
 * initiate new voice message window window
 */
function newTextMessage() {
    // open a new window with the title
    $.textmessage.visible = true;
    $.textmessage.focus();
    showClusterQuestion();
}


/**
 * newVoiceMessage
 * 
 * initiate new voice message window window
 */
function newVoiceMessage() {
    // open a new window with the title
    audiorecorderWindow = Alloy.createController('audiorecorder', {
        title: 'Gesproken bericht'
    }).getView();
    audiorecorderWindow.open({
        modal: true,
        backgroundColor: 'transparent',
        navBarHidden: false
    });
}


/**
 * newPhotoMessage
 * 
 * shows the native camera tool, after selection the photo will be posted
 * to the mini server
 * 
 */
function newPhotoMessage() {
	// show the native camera object
    Titanium.Media.showCamera({
        success: function (event) {
            // picture was confirmed by the user

            var image = event.media;
            var d = new Date();
            var filename = d.getTime() + '.png';

            var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, filename);
            f.write(image);


            // send to server
            var xhr = Titanium.Network.createHTTPClient();
            xhr.setTimeout(10000);
            xhr.open('POST', Ti.App.SERVER_PATH, false);

            xhr.send({
                file: f.blob,
                user: Ti.App.user,
                action: 'addPhotoMessage'
            });

        }
    });
}

/**
 * newTestMessage
 * 
 * The entered text in the chat window will be sent to the server
 */
function sendTextMessage(is_cluster) {
	
	is_question_cluster = (is_cluster) ? 1 : 0;

    var xhr = Titanium.Network.createHTTPClient();
    xhr.setTimeout(10000);
    xhr.open('POST', Ti.App.SERVER_PATH, false);

    // send the text message to the server to the server
    xhr.send({
        content: $.textmessage.value,
        user: Ti.App.user,
        action: 'addTextMessage',
        is_question_cluster: is_question_cluster
    });

    //xhr.onload = function(e)
    //{
    //ready so clear the field
    $.textmessage.value = "";
    //};

}

/**
 * getUserFriendlyDate
 * 
 * A helper function to format the default MySQL date time stamp
 */
function getUserFriendlyDate(date) {
    //custom string based date formatting

    parts = date.split(' ');
    date = parts[0];
    time = parts[1];

    timeparts = time.split(':');
    dateparts = date.split('-');

    cd = new Date();

    //check if today, then hide the date
    if (dateparts[2] + '-' + parseInt(dateparts[1]) + '-' + parseInt(dateparts[0]) == cd.getDate() + '-' + (cd.getMonth() + 1) + '-' + cd.getFullYear()) {
        datestring = '';
    } else {
        datestring = dateparts[2] + '-' + dateparts[1] + '-' + dateparts[0];
    }

    return datestring + ' ' + timeparts[0] + ':' + timeparts[1];
}

/**
 * addMessageRow
 * 
 * Dynamically adds a row to the chat tableview
 */

function addMessageRow(id, content, date, user, is_self, type, is_question_cluster, is_solved, animate) {

	//random colors 
	
	var rand = Math.floor(Math.random()*3);
	
	if (is_archive) rand = 0;
	
	if (rand == 0) {
		category = 'Badkamer';
		bottomimage = 'images/question_cluster_bottom.png';
		topimage = 'images/question_cluster_top.png';
	}
	if (rand == 1) {
		category = 'Zagen';
		bottomimage = 'images/question_cluster_bottom_blue.png';
		topimage = 'images/question_cluster_top_blue.png';
	}
	
	if (rand != 1 && rand != 0) {
		category = 'Kitten';
		bottomimage = 'images/question_cluster_bottom_yellow.png';
		topimage = 'images/question_cluster_top_yellow.png';
	}
	
    //dynamically add message row
    
    if ($.messages.data > 0) {
        $.messages.deleteRow($.messages.data[0].rows.length - 1, {
            animationStyle: Titanium.UI.iPhone.RowAnimationStyle.UP
        });
    }


    row = Ti.UI.createTableViewRow({
        id: id,
        type: type,
        backgroundColor: '#f5f0eb',
        selectedBackgroundColor: '#f5f0eb',
        selectedColor: '#f5f0eb'
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
        id: 'cluster_top' + id
    });
    
    questioncluster_bottom = Ti.UI.createView({
        backgroundImage: bottomimage,
        width: 302,
        height: 53,
        id: 'cluster_bottom' + id
    });
    
    
    questioncluster_bottom.addEventListener('singletap', function () {
    	
	    new_chatwindow =  Alloy.createController('chat', {is_cluster: true, is_archive: is_archive}).getView();
	    
		Alloy.CFG.tabgroup.activeTab.open(new_chatwindow);
		
		new_chatwindow.title = "Vragencluster";
		
    });    
    
    
    questioncluster_category = Ti.UI.createLabel({
    	text: category,
    	top: 3,
    	left: 24,
    	color: '#fff',
    	font: {
            fontSize: 13,
            fontWeight:'bold'
        }
    });
    
    questioncluster_tags = Ti.UI.createLabel({
    	text: 'Condens, afzuiging',
    	top: 3,
    	right: 24,
    	color: '#fff',
    	font: {
            fontSize: 13
        }
    });

    chatbubble = Ti.UI.createView({
        backgroundImage: 'images/chat_bubble_self.png',
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
        backgroundImage: 'images/sample_profileimage1.png',
        top: 10,
        height: 45,
        width: 45,
        borderRadius:4,
        borderColor:'#bbb',
        borderWidth:1
    });



    if (!is_self) {
        // recognize own message this way in prototype
       
        if (is_archive) {
        	// not visible
        	senderphoto.backgroundImage = 'images/default_profile.png';
        }
       
        chatbubble.backgroundImage = 'images/chat_bubble.png';

        chatbubble.left = 55;
        senderphoto.left = 5;
    } else {

        chatbubble.right = 55;
        senderphoto.right = 5;
        senderphoto.backgroundImage = 'images/sample_profileimage2.png';
    }

    var user_label = Ti.UI.createLabel({
        text: user + ':',
        left: 30,
        top: 10,
        font: {
            fontWeight: 'bold'
        }
    });

    var date_label = Ti.UI.createLabel({
        text: getUserFriendlyDate(date),
        right: 30,
        top: 12,
        color: 'gray',
        font: {
            fontWeight: 'normal',
            fontSize: 10
        }
    });

    
    if (is_self) {
        user_label.text = "Ik:"
    }
    
    chatbubble.add(user_label);
    chatbubble.add(date_label);

	if (is_question_cluster == 1) {
		
		questioncluster_top.add(senderphoto);
		questioncluster_top.add(chatbubble);
		
		questioncluster_bottom.add(questioncluster_category);
		questioncluster_bottom.add(questioncluster_tags);
		
		row.layout = 'vertical'; // make sure the layout is set vertical to vertically align the views
		row.add(questioncluster_top);
		row.add(questioncluster_bottom);
		
	} else {
		row.add(senderphoto);
    	row.add(chatbubble);
	}
    
    if (is_solved && !is_open_questions) {
    	solved = Ti.UI.createImageView({
	        image: 'images/solved_green.png',
	        top: 1,
	        left:1
	    });
    	questioncluster_top.add(solved);
    }
    
    


    //customize bubbles for message types
    if (type == '1') { //text message
        addTextMessageRow(row, chatbubble, id, content);
    }
    if (type == '2') { //voice message
        addVoiceMessageRow(row, chatbubble, id);
    }
    if (type == '3') { //photo message
        addPhotoMessageRow(row, chatbubble, id);
    }

    $.messages.appendRow(row, {animated: animate});

    spacerow = Ti.UI.createTableViewRow({
        backgroundColor: '#f5f0eb',
        selectedBackgroundColor: '#f5f0eb',
        selectedColor: '#f5f0eb',
        height: 1
    });

    $.messages.appendRow(spacerow);
    //add space and problem with the height of the last added chat bubble

    // scroll to the last item
    if (!is_archive && !is_open_questions) {
    	$.messages.scrollToIndex($.messages.data[0].rows.length - 1);
    }
	
}




/**
 * addPhotoMessageRow
 * 
 * Customizes the chat bubble in the tableviewrow for a photo
 * currently a full screen image pops up when it is tapped.
 * The full screen image is closed by tapping it again
 */
function addPhotoMessageRow(row, chatbubble, id) {

    image = Ti.UI.createImageView({
        image: Ti.App.SERVER_PATH + "chatdata/" + id + ".png",
        height: 100,
        left: 0,
        id: id,
        top: 30
    });

    image.addEventListener('singletap', function (e) {
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


/**
 * addTextMessageRow
 * 
 * customizes the chat bubble in the tableviewrow for text messages
 */
function addTextMessageRow(row, chatbubble, id, content) {

    content_label = Ti.UI.createLabel({
        width: 200,
        left: 30,
        id: id,
        text: content,
        top: 30,
        color: '#333',
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


/**
 * addVoiceMessageRow
 * 
 * initialize test audio player for chat view
 */
function addVoiceMessageRow(row, chatbubble, id) {

    audioSlider[id] = Ti.UI.createSlider({
        thumbImage: "images/play_thumb.png",
        width: 200,
        left: 20,
        id: id,
        top: 30
    });
    audioSlider[id].touchEnabled = false;
    audioSlider[id].setMax(9000);

    //workaround to handdle bottom padding within chat bubble
    view = Ti.UI.createView({
        height: Ti.UI.SIZE,
        bottom: 10
    });

    view.add(audioSlider[id]);
    chatbubble.add(view);

    chatbubble.addEventListener('singletap', function (e) {
		
		if (audioPlayer.id != e.source.parent.id) {
			 playVoiceMessage(e.source.parent.id);
		} else {
			// same instance
			if (audioPlayer.playing) {
				audioPlayer.pause();
			} else {
				if (audioPlayer.paused) {
					// playback from last position
					audioPlayer.start();
				} else {
					// not paused so reinitialize playback
					audioPlayer.stop();
					playVoiceMessage(e.source.parent.id);
				}
			}
		}

    });

}

/**
 * playVoiceMessage
 * 
 * Plays the Voice message directly from the server
 * The slider max is not being set, because no duration can be retrieved from Titanium Audio objects
 * 
 */
function playVoiceMessage(id) {
    // set the right audio session mode, because it runs in the background, otherwise it will crash without error code (?)
    // NOTE: the iPhone simulator crashes anyhow! (perhaps this has to do with multitasking)
    // On devices it seems to work just fine
    Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
    
    audioPlayer.stop();
    audioPlayer.url = Ti.App.SERVER_PATH + "audiogateway.php?id=" + id;
    audioPlayer.id = id;

    audioPlayer.addEventListener('progress', function (e) {
        audioSlider[audioPlayer.id].setValue(Math.round(e.progress));
        //Ti.API.info(Math.round(e.progress));
    });
    
    audioPlayer.addEventListener('change', function (e) {
    	
    	if (e.state == 7 && audioPlayer.progress > 0) {
    		
    		audioSlider[e.source.id].setValue(9000);
    		 
    		found = false;
	    	next_to_play_row = 0;
	    	
    		// autoplay next
	    	for (i = 0; i < $.messages.data[0].rows.length; i++) {
	    		
	    		if ($.messages.data[0].rows[i].id > e.source.id && $.messages.data[0].rows[i].type == 2 && found == false ) { // next voice message
	    			
	    			found = true;
	    			next_to_play_row = i;
	    			//setTimeout(function (){
		    		playVoiceMessage($.messages.data[0].rows[next_to_play_row].id);
		    		$.messages.scrollToIndex(next_to_play_row);
	    			//}, 10); // small interval to prevent
	    			
		    		
	    		}
	    	}
    	}
    	
       
    });
    
    audioPlayer.start();

}


/**
 * cancelTextMessage
 */
function cancelTextMessage() {
    $.textmessage.value = '';
    $.textmessage.blur();
    $.textmessage.hide();
    hideClusterQuestion() ;
}


/**
 * closePhotoViewer
 */
function closePhotoViewer() {
    $.photoViewer.hide();
}

