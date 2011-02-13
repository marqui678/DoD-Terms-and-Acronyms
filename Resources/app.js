// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var homeWin = Titanium.UI.createWindow({  
    title:'Term Search',
    backgroundColor:'#fff',
    //barColor:'#336699'
    url: 'views/search.js'
});

var homeTab = Titanium.UI.createTab({  
    icon:'images/search32.png',
    title:'Search',
    backgroundColor:'#e4e1ce',
    window:homeWin
});


//
// create controls tab and root window
//
var aboutWin = Titanium.UI.createWindow({  
    title:'About',
    backgroundColor:'#fff',
    url: 'views/about.js'
});

var aboutTab = Titanium.UI.createTab({  
    icon:'images/lightbulb32.png',
    title:'About',
    backgroundColor:'#e4e1ce',
    window:aboutWin
});


//
//  add tabs
//
tabGroup.addTab(homeTab);  
tabGroup.addTab(aboutTab);  


// open tab group
tabGroup.open();
