//Function with JSON Data
var logIn = function(){
	
	
	
	var logInWin = Ti.UI.createWindow({
		backgroundColor: "#f7f7f7",
	});
	
	var pickerWin = Ti.UI.createWindow({
	backgroundColor: "#f7f7f7",
});
//Json data
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
	
	var cancel = Ti.UI.createLabel({
		text: "Cancel",
		font: {fontSize: 12, fontWeight: "bold", fontColor: "#8b9dc3", fontFamily: "Sans Serif"},
		right:0,
		height: 40,
		width: 100,
		bottom: 50,
	});
	
	
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
	
	back.add(backLabel);
	//close flip transition
	
	var goBack = function(){
		logInWin.close();
	};
	
	
	cancel.addEventListener("click", goBack);
	back.addEventListener("click", goBack);
	
	logInWin.add(picker, results1, results2);
	
	logInWin.add(back, cancel);
	logInWin.open();
	
};

//logInView.addEventListener("click", logIn);
logInView.addEventListener("click", function(e){
			if(userName.value == "brad" || "brad" && password.value == "1234") {
				logInView.addEventListener("click", logIn);
			}else{
				alert("wrong username or password");
			}
		});

