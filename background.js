var idMail,
    idCalendar,
    idRedmine, 
    idTaskit, 
    idWms, 
    idEcm;

var MENU_ID_MAIL = "MAIL", 
    MENU_ID_CALENDAR = "CALENDAR",
    MENU_ID_REDMINE = "REDMINE", 
    MENU_ID_TASKIT = "TASKIT", 
    MENU_ID_WMS = "WMS", 
    MENU_ID_ECM = "ECM";

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    
    if(info.menuItemId === MENU_ID_MAIL) {
    }
    else if(info.menuItemId === MENU_ID_CALENDAR) {
    }
    else if(info.menuItemId === MENU_ID_REDMINE) {
    }    
    else if(info.menuItemId === MENU_ID_TASKIT) {
    }
    else if(info.menuItemId === MENU_ID_WMS) {

        chrome.tabs.create({
            url : "http://google.com"
        }, function(tab) {
            chrome.tabs.executeScript(tab.id, {
                file : "wms.js"
            }, function() {
                //--
            });
        });
    }    
    else if(info.menuItemId === MENU_ID_ECM) {
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
});

chrome.contextMenus.create({"title": "Googgle Mail", "onclick": function() {
    if(idMail > 0) {
        chrome.tabs.update(idRedmine, {"active": true});
    }
    else {
        chrome.tabs.create({url: "http://mail.google.com"});
    }
}});

chrome.contextMenus.create({"title": "Googgle Calendar", "onclick": function() {
    if(idCalendar > 0) {
        chrome.tabs.update(idRedmine, {"active": true});
    }
    else {
        chrome.tabs.create({url: "http://calendar.google.com"});
    }
}});

chrome.contextMenus.create({"title": "Redmine", "onclick": function() {
    if(idRedmine > 0) {
        chrome.tabs.update(idRedmine, {"active": true});
    }
    else {
        chrome.tabs.create({url: "http://snow.cyberdigm.co.kr/redmine"});
    }
}});

chrome.contextMenus.create({"title": "Taskit", "onclick": function() {
  if(idTaskit > 0) {
      chrome.tabs.update(idTaskit, {"active": true});
  }
  else {
      chrome.tabs.create({url: "http://taskit.cyberdigm.co.kr"});
  }  
}});

chrome.contextMenus.create({"title": "WMS", "onclick": function() {
  if(idWms > 0) {
      chrome.tabs.update(idWms, {"active": true});
  }
  else {
//      chrome.tabs.create({url: "wms.html"});
      
      chrome.tabs.create({
          url : "http://destiny.cyberdigm.co.kr/wms/servlet/wms?cmd=wms_login"
      }, function(tab) {
          chrome.tabs.executeScript(tab.id, {
              file : "wms.js"
          }, function() {
              //--
          });
      });
      
  }  
}});

chrome.contextMenus.create({"title": "ECM", "onclick": function() {
  if(idEcm > 0) {
      chrome.tabs.update(idEcm, {"active": true});
  }
  else {
      chrome.tabs.create({url: "https://destiny.cyberdigm.co.kr/one"});
  }  
}});

chrome.tabs.onCreated.addListener(function(tab){
   
   if(tab.url === "http://snow.cyberdigm.co.kr/redmine") {
       idRedmine = tab.id;
   }
   else if(tab.url === "http://taskit.cyberdigm.co.kr") {
       idTaskit = tab.id;
   }
   else if(tab.url === "http://destiny.cyberdigm.co.kr/wms") {
       idWms = tab.id;
   }
   else if(tab.url === "https://destiny.cyberdigm.co.kr/one") {
       idEcm = tab.id;
   }
   
});

chrome.tabs.onRemoved.addListener(function(tabId) {
    if(tabId === idRedmine) {
        idRedmine = "";
    }
    else if(tabId === idTaskit) {
        idTaskit = "";
    }
    else if(tabId === idWms) {
        idWms = "";
    }
    else if(tabId === idEcm) {
        idEcm = "";
    }
});
