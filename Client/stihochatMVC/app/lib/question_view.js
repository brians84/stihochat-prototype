
var cluster_question = Ti.UI.createView({
		top:-50,
		height:50,
		font: { fontSize:15, fontWeight: 'bold' },
	    backgroundGradient:{ 
	        type:'linear', 
	        colors:[{color:'#8cc5c5', position:0.0}, {color:'#6d9fa1', position:1.0}], 
	        backFillStart: false 
	    }
	});

var cluster_question_label = Ti.UI.createLabel({
		text:'Wilt u advies?',
		color:'white',
		font: {
			fontWeight:'bold'
		},
		left:10
	});
	
var cluster_question_switch = Titanium.UI.createTabbedBar({
    labels:['Nee', 'Ja'],
    index:0,
    right:10,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:30,
    width:100,
    backgroundColor:'#8cc5c5'
});
	
cluster_question.add(cluster_question_label);
cluster_question.add(cluster_question_switch);
