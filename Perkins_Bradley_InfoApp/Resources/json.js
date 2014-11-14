
//JSON Data
var mainData = {
	"dc": [
			{
				name: "Batman", 
				side: "Alignment: Good",
				gender: "Gender: Male",
				height: "Height: 6-2",
				weight: "Weight: 210 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Black",
				occupation: "Occupation: CEO Wayne Enterprises",
				firstAppearance: "First Appearance: Detective Comics #27",
				realName: "Real Name: Bruce Wayne",
				powers: "Powers/Abilities: Exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skills, advanced technology. ",
				origin: "Origin: Millionaire Bruce Wayne was just a kid when he watched his parents get gunned down during a mugging in Gotham City. The crime would define his life, as he dedicated himself to becoming the world’s greatest weapon against crime—the Batman.",
				image: "dc/batman.png"
			}, 
			{
				name: "Superman", 
				side: "Alignment: Good",
				gender: "Gender: male",
				height: "Height: 6-3",
				weight: "Weight: 235 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Black",
				occupation: "Occupation: Reporter",
				firstAppearance: "First Appearance: Action Comics #1",
				realName: "Real Name: Kal-El, Clark Kent",
				powers: "Powers/Abilities: Super strength, flight, invulnerability, super speed, heat vision, superhuman hearing, healing factor.",
				origin: "Origin: Rocketed to Earth from the dying planet Krypton, baby Kal-El was found by a farming couple who named the boy Clark Kent and raised him as their own. Discovering his enormous powers, they instilled in him strong moral values—and inspired him to become a hero.",
				image: "dc/superman.png"
			}, 
			{
				name: "Flash", 
				side: "Alignment: Good",
				gender: "Gender: male",
				height: "Height: 6-0",
				weight: "Weight: 195 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Blonde",
				occupation: "Occupation: Forensic Scientist",
				firstAppearance: "First Appearance: Flach Comics #1",
				realName: "Real Name: Barry Allen",
				powers: "Powers/Abilities: Super speed, intangibility, superhuman agility.",
				origin: "Origin: Young Barry Allen’s life stopped the minute his mother was murdered. The true killer never found, its mystery obsessed Barry, driving him to become a forensic scientist. Consumed by his work, he spent his life chained to his desk, solving every case that flew across it. But when a freak lightning bolt hits a nearby shelf in his lab, Barry receives super-speed, becoming the Flash. Now, he’ll race up buildings, across oceans, and around the world to get his man—while getting introduced to a world so much bigger than his old life of microscopes and cold cases.",
				image: "dc/flash.png"
			}, 
			{
				name: "Green Lantern", 
				side: "Alignment: Good",
				gender: "Gender: male",
				height: "Height: 6-0",
				weight: "Weight: 200 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Brown",
				occupation: "Occupation: Test Pilot",
				firstAppearance: "First Appearance: All American Comics #16",
				realName: "Real Name: Hal Jordan",
				powers: "Powers/Abilities: Hard light constraints, instant weaponry, force fields, flight, durability, alien technology.",
				origin: "Origin: When just a boy, Hal witnessed his greatest nightmare—his pilot father dying in a tragic plane crash. Nevertheless determined to follow in his footsteps, Hal repressed his fears, becoming a reckless, defiant test pilot. But when a dying alien crashes on Earth, the irresponsible Hal is chosen to be that alien’s successor in the Green Lantern Corps.",
				image: "dc/greenlant.png"
			},
			{
				name: "Aquaman", 
				side: "Alignment: Good",
				gender: "Gender: male",
				height: "Height: 6-1",
				weight: "Weight: 325 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Blonde",
				occupation: "Occupation: Monarch",
				firstAppearance: "More Fun Comics #73",
				realName: "Arthur Curry",
				powers: "Powers/Abilities: Super strength, durability, control over sea life, great swimming ability,, breaths under water.",
				origin: "Origin: Cast out from Atlantis as a baby, Arthur Curry grew up on land, thinking himself a normal human. But when he matured, Atlantis returned, claiming him as their rightful king. Caught between a surface world constantly ravaging the sea and Atlanteans looking to lash out in revolt, he’s committed to protecting the entire globe.",
				image: "dc/aquaman.png"
			}, 
			{
				name: "Wonder Woman", 
				side: "Alignment: Good",
				gender: "Gender: Female",
				height: "Height: 6-0",
				weight: "Weight: 130 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Black",
				occupation: "Occupation: Government Agent",
				firstAppearance: "First Appearance: All- Star Comics #8",
				realName: "Real Name: Diana",
				powers: "Powers/Abilities: Super Human strength, invulnerability, flight, combat skill, combat strategy, super human agility, healing factor, magic weaponry.",
				origin: "Origin: When army pilot Steve Trevor crashes on the warriors’ secluded island paradise, Diana wins the right to escort him home and make her people known to the world. Entering our cynical world for the first time, there’s a lot she must wrap her head around, especially our ways of war, hate, and, well… dating. Helping her are her superhuman strength and speed, as well as the trademark bulletproof bracelets, but it’s probably her Golden Lasso of Truth most people really wish they had.",
				image: "dc/wonder.png"
			}, 
			{
				name: "Joker", 
				side: "Alignment: Bad",
				gender: "Gender: male",
				height: "Height: 6-0",
				weight: "Weight: 160 lbs",
				eyes: "Eye Color: Geen",
				hair: "Hair Color: Green",
				occupation: "Occupation: Former Ambassador",
				firstAppearance: "First Appearance: Batman #1",
				realName: "Real Name: Unknown",
				powers: "Powers/Abilities: Complete unpredictability, intelligence.",
				origin: "Origin: Joker is the polar opposite of the Batman. Both were created by a great tragedy, but Batman has since vowed to do whatever it takes to prevent similar incidents, the Joker revels in creating chaos and destroying lives, believing that life’s a big joke and psychotically demonstrating that in a moment, it can all change.",
				image: "dc/joker.png"
			}, 
			{
				name: "Lex Luther", 
				side: "Alignment: Bad",
				gender: "Gender: male",
				height: "Height: 6-2",
				weight: "Weight: 210 lbs",
				eyes: "Eye Color: Green",
				hair: "Bald",
				occupation: "Occupation: Bussinessman, Scientist",
				firstAppearance: "First Appearance: Action Comics #23",
				realName: "Real Name: Alexander Luther",
				powers: "Powers/Abilities: Genius level intelligence,  inexhaustible wealth, political influence.",
				origin: "Origin:  Lex Luthor is one of the world's most brilliant minds and most famous villains. From a young age, Lex utilized his almost unparalleled acumen to build himself a financial empire through hard work and dedication—but mainly through the strategic use of intimidation, bribery and murder. ",
				image: "dc/lex.png"
			}, 
			{
				name: "Harley Quinn", 
				side: "Alignment: Bad",
				gender: "Gender: Female",
				height: "Height: 5-7",
				weight: "Weight: 140 lbs",
				eyes: "Eye Color: Blue",
				hair: "Hair Color: Blonde",
				occupation: "Occupation: Former psychiatrist",
				firstAppearance: "First Appearance: Batman:Animated series",
				realName: "Harley Quinzel",
				powers: "Powers/Abilities: Superhuman agility, enhanced strength, intelligence",
				origin: "Origin: Before her descent into madness, Dr. Harleen Quinzel was a promising psychiatrist assigned to Arkham Asylum, Gotham's home for the criminally insane. But after meeting the Joker, the young doctor became obsessed with the crazed criminal's warped mind. Sensing opportunity, the Joker manipulated her, driving his therapist so mad that he was able to control her. Harleen fell in love with the villain, broke him out of Arkham and devoted her life to him.",
				image: "dc/harley.png"
			}, 
			{
				name: "Sinestro", 
				side: "Alignment: Good/Bad",
				gender: "Gender: male",
				height: "6-7",
				weight: "Weight: 205 lbs",
				eyes: "Eye Color: Yellow",
				hair: "Hair Color: Black",
				occupation: "Occupation: Former Anthropologist",
				firstAppearance: "First Appearance: Green Lantern #7",
				realName: "Real Name: Thaal Sinestro",
				powers: "Powers/Abilities: hard light constrains, instant weaponry, force fields, durability, alien technology, fear provocation, intelligence.",
				origin: "Origin:  Sinestro once served as the Green Lantern of Sector 1417 and quickly gained recognition among the Corps for his ability to police his sector. However, peace came at a price. Sinestro's determination to preserve order caused him to act more as a dictator than a protector, conquering his own home planet in the process.",
				image: "dc/sinestro.png"
			}, 
		],
	};
//Get info Function

//detail window
var getInfo = function(){
	var infoWin = Ti.UI.createWindow({
		backgroundColor: "white",	
	});
	
	var theImage = Ti.UI.createImageView({
		image: this.image,
		top: 125,
		right: 20,
		height: 125
	});
	
	var infoTitleBar = Ti.UI.createView({
		height: 80,
		backgroundColor: "white",
		top: 20
	});
	
	var infoSpacer1 = Ti.UI.createView({
		height: 20,
		backgroundColor: "#202e53",
		top: infoTitleBar.height + infoTitleBar.top
	});
	
	//name
	var infoTitle = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 25, fontStyle: "Sans Serif", fontWeight: "bold"},
		top: 50,
		color: "#202e53",
		textAlign: "center"
	});
	
	//name
	var myText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 20,
		left: 10,
		right: 10,	
	});
	//gender
	var theGender = Ti.UI.createLabel({
		text: this.gender,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 40,
		left: 10,
		right: 10,	
	});
	
	var theHeight = Ti.UI.createLabel({
		text: this.height,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 60,
		left: 10,
		right: 10,	
	});
	
	var theWeight = Ti.UI.createLabel({
		text: this.weight,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 80,
		left: 10,
		right: 10,	
	});
	
	var theEyes = Ti.UI.createLabel({
		text: this.eyes,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 100,
		left: 10,
		right: 10,	
	});
	
	var theHair = Ti.UI.createLabel({
		text: this.hair,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 120,
		left: 10,
		right: 10,	
	});
	
	var theOccupation = Ti.UI.createLabel({
		text: this.occupation,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 140,
		left: 10,
		right: 10,	
	});
	
	var theAppearance = Ti.UI.createLabel({
		text: this.firstAppearance,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 160,
		left: 10,
		right: 10,	
	});
	
	var theName = Ti.UI.createLabel({
		text: this.realName,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 180,
		left: 10,
		right: 10,	
	});
	
	var thePowers = Ti.UI.createLabel({
		text: this.powers,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 200,
		left: 10,
		right: 10,	
	});
	
	var theOrigin = Ti.UI.createLabel({
		text: this.origin,
		font: {fontSize: 15, fontStyle: "Sans Serif"},
		top: infoSpacer1.height + infoSpacer1.top + 280,
		left: 10,
		right: 10,	
	});
	
	//back button
	var closeButton = Ti.UI.createLabel({
		text: "Back",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 35,
		Left: 20,
		borderRadius: 5,
		font: {fontSize: 20, fontFamily: "Sans Serif"},
		width: "33.333%",
		top: 20,
		textAlign: "center"

	});
	
	//close flip transition
	var closeWin = function(){
		infoWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	var home = Ti.UI.createLabel({
		text: "Home",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 35,
		right: 20,
		borderRadius: 5,
		font: {fontSize: 20, fontFamily: "Sans Serif"},
		width: "33.333%",
		top: 20,
		textAlign: "center"

	});
	
	var goHome = function(){
		infoWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	theImage.addEventListener("click", pic);
	closeButton.addEventListener("click", closeWin);
	home.addEventListener("click", goHome);
	
	infoTitleBar.add(infoTitle);
	infoWin.add( infoTitleBar, infoSpacer1, myText, theImage, theGender, theHeight,theWeight, theEyes, theHair,theOccupation,theAppearance, theName,thePowers, theOrigin,  closeButton, home);
	
	infoWin.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	
};

//detail window 
var pic = function(){
	var win = Ti.UI.createWindow({
		backgroundColor: "white",
		
	});
	
	var titleBar = Ti.UI.createView({
		height: 80,
		backgroundColor: "gray",
		top: 20
	});
	
	var detailImage = Ti.UI.createImageView({
		image: this.image,
		backgroundColor: "gray",
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: this.name,
		font: {fontSize: 20, fontWeight: "bold", fontFamily: "Times New Roman"},
		color: "black",
		textAlign: "center"
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Back",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 35,
		Left: 20,
		borderRadius: 5,
		font: {fontSize: 20, fontFamily: "Sans Serif"},
		width: "33.333%",
		top: 20,
		textAlign: "center"

	});
	var closeWin = function(){
		win.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	var home = Ti.UI.createLabel({
		text: "Home",
		backgroundColor: "#e3e3e3",
		color: "#202e53",
		height: 35,
		right: 20,
		borderRadius: 5,
		font: {fontSize: 20, fontFamily: "Sans Serif"},
		width: "33.333%",
		top: 20,
		textAlign: "center"

	});
	
	var goHome = function(){
		win1.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	
	closeButton.addEventListener("click", closeWin);
	home.addEventListener("click", goHome);
	titleBar.add(detailTitle);
	win.add(titleBar, detailImage,closeButton, home);
	
	win.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});

};
//table view row data
for(var i=0,j=mainData.dc.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: mainData.dc[i].name,
		desc: mainData.dc[i].side,
		gender: mainData.dc[i].gender,
		height: mainData.dc[i].height,
		weight: mainData.dc[i].weight,
		eyes: mainData.dc[i].eyes,
		hair: mainData.dc[i].hair,
		occupation: mainData.dc[i].occupation,
		firstAppearance: mainData.dc[i].firstAppearance,
		realName: mainData.dc[i].realName,
		powers: mainData.dc[i].powers,
		origin: mainData.dc[i].origin,
		image: mainData.dc[i].image,
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

win1.add();


