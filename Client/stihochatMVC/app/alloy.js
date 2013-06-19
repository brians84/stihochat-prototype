// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Ti.App.SERVER_PATH = 'http://145.92.6.116/stihochat-miniserver/';

Alloy.Globals.sendRecorded = function(is_cluster) {
	
	is_question_cluster = (is_cluster) ? 1 : 0;
	
	// create a HTTP Client and configure it to send the recorded file
	recorded_file = Alloy.CFG.recorded_file;
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.setTimeout(10000);
	xhr.open('POST', Ti.App.SERVER_PATH, false);
	
	if (Titanium.Platform.model == 'Simulator') { 
		recorded_file = Titanium.Filesystem.getFile('audio/startbeep.mp3'); // test sound, because simulator supports no audio recording
	}
	
	// send the recorded file to the server
	xhr.send({ file: recorded_file.blob, user:Ti.App.user, action: 'addVoiceMessage', is_question_cluster: is_question_cluster});
	
	
	//  any unusual behavior should be shown to the end user in this phase
	xhr.onerror = function(e)
	{
	    Ti.UI.createAlertDialog({title:'Error', message:e.error}).show();
	    Ti.API.info('ERROR ' + e.error);
	};
	  
	 
	xhr.onload = function(e)
	{
		
	   //Ti.UI.createAlertDialog({title:'Success', message:'status code ' + this.status}).show();
	   // Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState);
	   
	   // return to the last window
	};
	
}