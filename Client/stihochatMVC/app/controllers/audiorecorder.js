var rec;
var recorded_file;
var sound;
var seconds;

function startRecording() {
	
	//initialize a new recorder each time we record to prevent audio session mode problems
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAY_AND_RECORD;
	rec = Titanium.Media.createAudioRecorder();
	
	// start recording sound
	sound = Titanium.Media.createSound({url:'audio/startbeep.mp3'});
	sound.play();
	
	sound.addEventListener('complete', function(e) {
		// start recording
		
		if (Titanium.Platform.model != 'Simulator') { 
			rec.start();
		}
		
		//initialize counting seconds
		$.duration.text = '0 sec.';
		Ti.App.recordingseconds = 0; //put this in the global context, otherwise it does not work
		
		timer = setInterval(function () {
		    Ti.App.recordingseconds++;
		    $.duration.text = Ti.App.recordingseconds + ' sec.';
		}, 1000);
		
		// visibility of the buttons
		$.startrecordbutton.hide();
		$.stoprecordbutton.show();
		
		$.instruction_tap.hide();
		$.instruction_recording.show();
	});
	

}

function prepareSendRecorded() {
	Alloy.CFG.recorded_file = recorded_file;
	
	if ($.cluster_question_switch.index == 1) {
		Alloy.CFG.show_categorytags = true;
	} else {
		require('alloy').Globals.sendRecorded(false);
	}
	$.audiorecorder.close();
}


function stopRecording() {
	
	// visibility of the buttons
	$.startrecordbutton.show();
	$.stoprecordbutton.hide();
	
	
	clearInterval(timer);
	
	//prepare for next load
	$.instruction_tap.show();
	$.instruction_recording.hide();
	$.duration2.text = $.duration.text;
	$.duration.text = '';
	
	if (Titanium.Platform.model != 'Simulator') { 
		recorded_file = rec.stop();
	}
	
	//toggle views
	$.PreviewView.show();
	
	$.RecordingView.hide();
	//startPlaybackRecorded();
		
}



function startPlaybackRecorded() {
	
	// make sure the output speaker is the audio speaker not the phone speaker
	Titanium.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
	
	// create a new Sound object and playback the file from the auto-generated path
	if (Titanium.Platform.model != 'Simulator') { 
		sound = Titanium.Media.createSound({url:recorded_file.nativePath});
		sound.play();
	}
	
}

function stopPlaybackRecorded() {
	
	sound.stop();
	
}

function retryRecording() {
	
	sound.stop();
	
	//toggle views
	$.PreviewView.hide();
	$.RecordingView.show();
	
}

function closeAudioRecorder() {
	$.audiorecorder.close();
}
