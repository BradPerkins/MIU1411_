
//main window
var win1 = Ti.UI.createWindow({
	backgroundColor: "#202e53" 
});

//main table view
var questions = Ti.UI.createTableView({
});

//iPhone id 
if(Ti.Platform.name === "iPhone OS"){
	questions.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

var section = Ti.UI.createTableViewSection({
	headerTitle: "All About Me",
});

var list = [section];

//data pull from json.js file
dataFile = require("json");

questions.setData(list);

//titleBar.add(mainTitle);
win1.add(questions);
win1.open();
