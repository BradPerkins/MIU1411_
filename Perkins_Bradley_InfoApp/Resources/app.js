
//main window
var win1 = Ti.UI.createWindow({
	backgroundColor: "#202e53" 
});

var media = Ti.UI.createWindow({
	backgroundColor: "#202e53" 
});

//main table view
var heroes = Ti.UI.createTableView({
	top: 125,
	bottom: 50,
	
});
//Scroll
var scroll1 = Ti.UI.createView({ 
	backgroundColor:'gray' ,
	image: "dclogo.jpg",
	top:24,
	height: 90,
}); 
var dcPic = Ti.UI.createImageView({
		image: "dc/dclogo.jpg",
	});
	scroll1.add(dcPic);

var scroll2 = Ti.UI.createView({ 
	backgroundColor:'white' ,
	
	top: 24,
	height: 90,
}); 
var dcPic2 = Ti.UI.createImageView({
		image: "dc/joker.png",
	});
	scroll2.add(dcPic2);

var scroll3 = Ti.UI.createView({ 
	backgroundColor:'gray' ,
	top: 24,
	height: 90,
}); 

var dcPic3 = Ti.UI.createImageView({
		image: "dc/superman.png",
	});
	scroll3.add(dcPic3);

var mainScroll = Ti.UI.createScrollableView({
    views:[scroll1, scroll2, scroll3],
    showPagingControl:true,
    top: 40,
	height: 125,

});
mainScroll.add(scroll1, scroll2, scroll3);
//iPhone id 
if(Ti.Platform.name === "iPhone OS"){
	heroes.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

var section = Ti.UI.createTableViewSection({
	headerTitle: "DC Universe",
});

var list = [section];

var search = Titanium.UI.createSearchBar({
    barColor:'white', 
    showCancel:true,
    height:43,
    top:20,
});

//data pull from json.js file
require("json");

heroes.setData(list);
win1.add(heroes, search, mainScroll);
win1.open();

