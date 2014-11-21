//sign up page data
// Need to add hints for sign up
// use Titanium.App.Properties to save string data


var signUp = function(){
	var signUpWin = Ti.UI.createWindow({
		backgroundColor: "#f7f7f7",
	});
	
	//back button
	var back = Ti.UI.createImageView({
		image: "back.png",
		top: 20,
		left:10,
		height: 40,
		width: 40,
	});
	
	var backLabel = Ti.UI.createLabel({
		text: "Back",
		color: "black",
		top: 30,
		font: {fontSize: 15, fontWeight: "bold", fontFamily: "Sans Serif"},
		textAlign: "center"
	});
	
	back.add(backLabel);
	
	//text fields
	//first name1
	var firstName = Ti.UI.createTextField({
		top: back.height + back.top + 20,
		left:10,
		height: 35,
		width: 200,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "First Name",
		rightButton: clearText1,
	});
	var xt1 = Ti.UI.createLabel({
		top:115,
		left: 10,
		text: "Example: Bradley",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});
	var clearText1 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	//last name
	var lastName = Ti.UI.createTextField({
		top: firstName.height + firstName.top + 20,
		left:10,
		height: 35,
		width: 250,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Last Name",
		rightButton: clearText2,
	});
	var xt2 = Ti.UI.createLabel({
		top:170,
		left: 10,
		text: "Example: Perkins",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});

	var clearText2 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	//address line 1
	var address1 = Ti.UI.createTextField({
		top: lastName.height + lastName.top + 20,
		left:10,
		height: 35,
		width: 250,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Address Line 1",
		rightButton: clearText3,
	});
	var xt3 = Ti.UI.createLabel({
		top:225,
		left: 10,
		text: "Example: 1411 MIU Avenue",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});
	var clearText3 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	//address line 2
	var address2 = Ti.UI.createTextField({
		top: address1.height + address1.top + 20,
		left:10,
		height: 35,
		width: 250,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Address Line 2",
		rightButton: clearText4,
	});
	var xt4 = Ti.UI.createLabel({
		top: 280,
		left: 10,
		text: "Example: 1411 MIU Avenue",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});
	var clearText4 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	//city
	var city = Ti.UI.createTextField({
		top: address2.height + address2.top + 20,
		left:10,
		height: 35,
		width: 200,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "City",
		rightButton: clearText5,
	});
	var xt5 = Ti.UI.createLabel({
		top: 335,
		left: 10,
		text: "Example: Shelby",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});
	var clearText5 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	//zip code
	var zip = Ti.UI.createTextField({
		top: city.height + city.top + 20,
		left:10,
		height: 35,
		width: 100,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		hintText: "Zip",
		rightButton: clearText6,
	});
	var xt6 = Ti.UI.createLabel({
		top: 390,
		left: 10,
		text: "Example: 44875",
		color: "#8b9dc3",
		font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
		textAlign: "left"
	});
	var clearText6 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	
	// state 
	
	var state = Ti.UI.createTextField({
		top: city.height + city.top + 20,
		left:zip.left + zip.width + 10,
		height: 35,
		width: 75,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "State",
		rightButton: clearText7,
	});

	var xt7 = Ti.UI.createLabel({
			top: 390,
			left: zip.left + zip.width + 10,
			text: "Example: OH",
			color: "#8b9dc3",
			font: {fontSize: 12, fontWeight: "regular", fontFamily: "Sans Serif"},
			textAlign: "left"
		});
	var clearText7 = Ti.UI.createButton({
		image: "clear.png",
		height: 20,
		width: 20,
	});
	
	//done button
	var next = Ti.UI.createView({
		backgroundColor: "#8b9dc3",
		borderRadius: 5,
		bottom: 20,
		left:10,
		height: 40,
		width: 100,
		bottom: 50,
		textAlign: "center"
	});
	
	var nextLabel = Ti.UI.createLabel({
		text: "Next",
		color: "white",
		font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
		textAlign: "center"
	});
	next.add(nextLabel);
	var cancel = Ti.UI.createLabel({
		text: "Cancel",
		font: {fontSize: 12, fontWeight: "bold", fontColor: "#8b9dc3", fontFamily: "Sans Serif"},
		right:0,
		height: 40,
		width: 100,
		bottom: 50,
	});
	
	//functions
	var signUp2 = function(){
		
		//back button
		var back = Ti.UI.createImageView({
			image: "back.png",
			top: 20,
			left:10,
			height: 40,
			width: 40,
		});
		
		var headerView = Ti.UI.createView({
			backgroundColor:"#dfe3ee",
			top: 80,
			left: 20,
			right: 20,
			height: 100,
			borderRadius: 5,
		});
		
		var header = Ti.UI.createLabel({
			top: 15,
			text: "Almost done!",
			font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
			color: "#8b9dc3",
			textAlign: "center",
		});
		
		var header2 = Ti.UI.createLabel({
			top: header.top + 25,
			text: "Choose a username and password.",
			color: "#8b9dc3",
			font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
			textAlign: "center",
		});
		
		var backLabel = Ti.UI.createLabel({
			text: "Back",
			color: "black",
			top: 30,
			font: {fontSize: 15, fontWeight: "bold", fontFamily: "Sans Serif"},
			textAlign: "center"
		});
		
		back.add(backLabel);
			
		var signUpWin2 = Ti.UI.createWindow({
			backgroundColor: "#f7f7f7",
		});
		
		var userName = Ti.UI.createTextField({
			top:200,
			left:10,
			height: 35,
			width: 200,
			borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			hintText: "User Name",
			//rightButton: clearText1,
		});
		
		var pass = Ti.UI.createTextField({
			top: 245,
			left:10,
			height: 35,
			width: 200,
			borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			passwordMask:true,
			hintText: "Enter Password",
			//rightButton: clearText1,
		});
		
		var confirm = Ti.UI.createTextField({
			top: 290,
			left:10,
			height: 35,
			width: 200,
			borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			passwordMask:true,
			hintText: "Re-enter Password",
			//rightButton: clearText1,
		});
		
		//Prominent Done Button
		var done = Ti.UI.createView({
			backgroundColor: "#8b9dc3",
			borderRadius: 5,
			top: 335,
			left:10,
			height: 40,
			width: 100,
			bottom: 50,
			textAlign: "center"
		});
		
		var doneLabel = Ti.UI.createLabel({
			text: "Done",
			color: "white",
			font: {fontSize: 20, fontWeight: "bold", fontFamily: "Sans Serif"},
			textAlign: "center"
		});
		
		var cancel = Ti.UI.createLabel({
			text: "Cancel",
			color: "#8b9dc3",
			font: {fontSize: 12, fontWeight: "bold", fontFamily: "Sans Serif"},
			right:0,
			height: 40,
			width: 100,
			top: 335,
		});
		
		var goBack = function(){
			signUpWin2.close();
		};
		// login page function
		var logIn = function(){
	
	
		
		var logInWin = Ti.UI.createWindow({
			backgroundColor: "#f7f7f7",
		});
		
		var pickerWin = Ti.UI.createWindow({
		backgroundColor: "#f7f7f7",
	});
	
		var nfl = {
			"afc": [
					{team: "New England 8 - 2"},
					{team: "Denver 7 - 3"},
					{team: "Kansas City 7 - 3"},
					{team: "Cincinatti 6 - 3 - 1" },
					{team: "Pittsburgh 7 - 4"},
					{team: "Indianapolis 6 - 4"},
					{team: "Miami 6 - 4"},
					{team: "Baltimore 6 - 4"},
					{team: "San Diego 6 - 4"},
					{team: "Cleveland 6 - 4"},
					{team: "Houston 5 - 5"},
					{team: "Buffalo 4 - 6"},
					{team: "NY Jets 2 - 8"},
					{team: "Tennessee 2 - 8"},
					{team: "Jacksonville 1 - 9"},
					{team: "Oakland 0 - 10"},
		 		],
		
		
			"nfc": [
					{team: "Arizona 9 - 1"},
					{team: "Detroit 7 - 3"},
					{team: "Philadelphia 7 - 3"},
					{team: "Green Bay 7 - 3"},
					{team: "Dallas 7 - 3"},
					{team: "San Francisco 6 - 4"},
					{team: "Seattle 6 - 4"},
					{team: "Atlanta 4 - 6"},
					{team: "New Orleans 4 - 6"},
					{team: "Chicago 4 - 6"},
					{team: "Minnesota 4 - 6"},
					{team: "St. Louis 4 - 6"},
					{team: "Carolina 3 - 7"},
					{team: "NY Giants 3 - 7"},
					{team: "Washington 3 - 7"},
					{team: "Tampa Bay 2 - 8"},
				],
		};		
		
		var afcColumn = Ti.UI.createPickerColumn({
			width: 120
		});
		
		for(var i=0; i < nfl.afc.length; i++){
			afcColumn.addRow(Ti.UI.createPickerRow({
				title: nfl.afc[i].team,
				desc:nfl.afc[i].record,
			}));
		};
		
		var nfcColumn = Ti.UI.createPickerColumn({
			width: 120
		});
		
		for(var i=0; i < nfl.nfc.length; i++){
			nfcColumn.addRow(Ti.UI.createPickerRow({
				title: nfl.nfc[i].team,
				desc: nfl.nfc[i].record,
			}));
		};
		
		var picker = Ti.UI.createPicker({
			selctionIndicator: true,
			userSpinner: true,
			type: Ti.UI.PICKER_TYPE_PLAIN,
			top:150,
			height: 200,
			columns: [afcColumn, nfcColumn],
		});
		
		var results1 = Ti.UI.createLabel({
			text: "AFC team current records",
			top: 25,
			width: "auto",
			height: "25%",
			textAlign: "center",
			
		});
		
		var results2 = Ti.UI.createLabel({
			text: "NFC team current records",
			bottom: 25,
			width: "auto",
			height: "25%",
			textAlign: "center",
			
		});
		
		picker.addEventListener("change", function(e){
			if(e.columnIndex == 0){
				//alert("Select teams");
			}else{
				results1.text = e.selectedValue[0];
				results2.text = e.selectedValue[1];
					}
		});
	
		
		var back = Ti.UI.createImageView({
			image: "back.png",
			top: 20,
			left:10,
			height: 40,
			width: 40,
		});
		
		var backLabel = Ti.UI.createLabel({
			text: "Back",
			color: "black",
			top: 30,
			font: {fontSize: 15, fontWeight: "bold", fontFamily: "Sans Serif"},
			textAlign: "center"
		});
		
		
		
		back.add(backLabel);
		//close flip transition
		
		var goBack = function(){
			logInWin.close();
		};
		
		back.addEventListener("click", goBack);
		
		logInWin.add(picker, results1, results2);
		
		logInWin.add(back);
		logInWin.open();
		
	};

		var escapeHatch = function(){
		var win1 = Ti.UI.createWindow({
		backgroundColor: "#f7f7f7",
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
		
		clearText1.addEventListener("click", function(e){
			userName.value = "";
		});
		
		clearText2.addEventListener("click", function(e){
			password.value = "";
		});
		
		signUpView.addEventListener("click", signUp);
		logInView.addEventListener("click", logIn);
		signUpView.add(signUpLabel);
		logInView.add(logInLabel);
		win1.add(userName, password, logInView, signUpView);
		win1.open();
	};
		
		//Password Validation when Prominent Done button is pressed
		done.addEventListener("click", function(e){
			if(pass.value == confirm.value) {
				done.addEventListener("click", logIn);
			}else{
				alert("re-enter each password");
			}
		});
		
		headerView.add(header, header2);
		done.add(doneLabel);
		signUpWin2.add(headerView, confirm, userName, pass, done, cancel, back);
		signUpWin2.open();

		cancel.addEventListener("click", escapeHatch);
		back.addEventListener("click", goBack);
	};
	var goBack = function(){
		signUpWin.close();
	};
	
	
	// next function button
	next.addEventListener("click", function(e){
		if(firstName.value == "" || lastName.value == "" || address1.value == "" || address2.value == "" ||city.value == "" || zip.value == "" || state.value == "" ) {
			alert("fill out form");
			//next.addEventListener("click", signUp2);
		}else{
			next.addEventListener("click", signUp2);
			//alert("fill out form");
		}
	});
	

	cancel.addEventListener("click", goBack);
	back.addEventListener("click", goBack);
	
	signUpWin.add(xt1, xt2, xt3, xt4, xt5, xt6, xt7);
	signUpWin.add(back, firstName, lastName, address1, address2, city, zip, state, next, cancel);
	signUpWin.open();
};

signUpView.addEventListener("click", signUp);