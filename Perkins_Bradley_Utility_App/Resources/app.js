//Bradley Perkins
//MIU 1411
//Utility App
//main Window
var win1 = Ti.UI.createWindow({
	backgroundColor: "#f7f7f7",
});
//IMAGE OF FOOTBALL
var fball = Ti.UI.createImageView({
	image: "football.png",
	top: 50,
	height: 200,
	width: 200,
});

//clear buttons
var clearText1 = Ti.UI.createButton({
	image: "clear.png",
	height: 20,
	width: 20,
});

var clearText2 = Ti.UI.createButton({
	image: "clear.png",
	height: 20,
	width: 20,
});

//text fields
var userName = Ti.UI.createTextField({
	top:250,
	height: 35,
	width: 300,
	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "  User Name",
	rightButton: clearText1,
});
//Password field with Masking
var password = Ti.UI.createTextField({
	top: userName.height + userName.top + 10,
	height: 35,
	width: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "  User Password",
	passwordMask:true,
	rightButton: clearText2
});

//Log In
var logInView = Ti.UI.createView({
	backgroundColor: "#8b9dc3",
	height: 40,
	borderRadius: 5,
	top: password.height + password.top + 10,
	left:10,
	right: 10,
});

var logInLabel = Ti.UI.createLabel({
	text: "Log in",
	color: "white",
	font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
	textAlign: "center"
});

////Sign Up
var signUpView = Ti.UI.createView({
	backgroundColor: "#dfe3ee",
	height: 40,
	borderRadius: 5,
	top: logInView.height + logInView.top + 10,
	left:10,
	right: 10,	
});

var signUpLabel = Ti.UI.createLabel({
	text: "Sign Up",
	color: "gray",
	font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
	textAlign: "center"
});
// SCROLL VIEW
var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '80%',
  width: '80%'
});

//Get Files
require("data");
require("logIn");
require("signUp");

//
scrollView.add(signUpView,logInView );
signUpView.add(signUpLabel);
logInView.add(logInLabel);
win1.add(userName, password, scrollView, fball);
win1.open();
