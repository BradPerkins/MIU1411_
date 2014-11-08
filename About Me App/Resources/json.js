
//JSON Data
var mainData = {
	"list": [
			{question: "What is your name?", answer: "Bradley Perkins"}, 
			{question: "What is your chat user name, including the host?", answer: "I dont use any chat,  I should probably get one though."}, 
			{question: "In which time zone do you reside?", answer: "Eastern Standard Time"}, 
			{question: "Why are you in the Mobile Development Program?", answer: "I want to create cool and usful apps for everyone to use."},
			{question: "How comfortable are you with Javascript?", answer: "Im ok with javascript, as long as I dont try to make a too complicated app with it.  Im ok if I keep it simple "}, 
			{question: "How comfortable are you with Titanium?", answer: "Im getting better with it but still just a newb.  Same here, if I keep it simple im OK."}, 
			{question: "What are your hobbies?", answer: "I play video games, run, and collect comics"}, 
			{question: "What are some of My favorite comics?", answer: "I like any Spider-Man, and all Batman related."}, 
			{question: "Do you have any pets?", answer: "I have 3 dogs and 2 ferrets"}, 
			{question: "What is your favorite TV show?", answer: "I like The Office"}, 
			{question: "What is your favorite book?", answer: "My favorite book is Treasure Island"}, 
		],
	};
//Get info Function
//detail window
var getInfo = function(){
	var infoWin = Ti.UI.createWindow({
		backgroundColor: "white",
		
	});
	
	var infoTitleBar = Ti.UI.createView({
		height: 80,
		backgroundColor: "white",
		top: 20
	});
	
	var infoSpacer1 = Ti.UI.createView({
		height: 20,
		backgroundColor: "#d80c0c",
		top: infoTitleBar.height + infoTitleBar.top
	});
	
	var infoTitle = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 25, fontStyle: "Helvetica", fontWeight: "bold"},
		color: "#202e53",
		textAlign: "center"
	});
	
	var myText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 15, fontStyle: "Helvetica"},
		top: infoSpacer1.height + infoSpacer1.top + 20,
		left: 10,
		right: 10,	
	});
	
	//button
	var closeButton = Ti.UI.createLabel({
		text: "Close",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 50,
		font: {fontSize: 15, fontFamily: "Helvetica"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	//close flip transition
	var closeWin = function(){
		infoWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWin);
	
	infoTitleBar.add(infoTitle);
	infoWin.add(infoTitleBar, infoSpacer1, myText, closeButton);
	
	infoWin.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

//table view row data
for(var i=0,j=mainData.list.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.list[i].question,
		desc: mainData.list[i].answer,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false;
	row.hasDetail = true;
}; 

	section.add(row);
	//event listener for each row
	row.addEventListener("click", getInfo);
};

