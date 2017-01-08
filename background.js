var TAB_ID_CALENDAR = 0;
var TAB_ID_MAIL = 0;
var TAB_ID_REDMINE = 0;
var TAB_ID_TASKIT = 0;
var TAB_ID_WMS = 0;
var TAB_ID_ECM = 0;

var MENU_ID_CALENDAR = "CALENDAR";
var MENU_ID_MAIL = "MAIL";
var MENU_ID_REDMINE = "REDMINE";
var MENU_ID_TASKIT = "TASKIT";
var MENU_ID_WMS = "WMS";
var MENU_ID_ECM = "ECM";

var URL_CALENDAR = "http://calendar.google.com/";
var URL_MAIL = "http://mail.google.com/";
var URL_REDMINE = "http://snow.cyberdigm.co.kr/redmine/projects/59_12--cloudium-----/issues?query_id=387";
var URL_TASKIT = "http://taskit.cyberdigm.co.kr/";
var URL_WMS = "http://destiny.cyberdigm.co.kr/wms/jsp/cyberdigm/webclient/wms/login/WMSLogin.jsp";
var URL_ECM = "https://destiny.cyberdigm.co.kr/one";

chrome.contextMenus.create({
    "id": MENU_ID_CALENDAR,
    "title": "Google Calendar"
});
chrome.contextMenus.create({
    "id": MENU_ID_MAIL,
    "title": "Google Mail"
});
chrome.contextMenus.create({
    "id": MENU_ID_REDMINE,
    "title": "Redmine"
});
chrome.contextMenus.create({
    "id": MENU_ID_TASKIT,
    "title": "Taskt"
});
chrome.contextMenus.create({
    "id": MENU_ID_WMS,
    "title": "WMS"
});
chrome.contextMenus.create({
    "id": MENU_ID_ECM,
    "title": "ECM"
});

chrome.tabs.onCreated.addListener(function(tab) {

    switch (tab.url) {
    case URL_CALENDAR:
        TAB_ID_CALENDAR = tab.id;
        break;
    case URL_MAIL:
        TAB_ID_MAIL = tab.id;
        break;
    case URL_REDMINE:
        TAB_ID_REDMINE = tab.id;
        break;
    case URL_TASKIT:
        TAB_ID_TASKIT = tab.id;
        break;
    case URL_WMS:
        TAB_ID_WMS = tab.id;
        break;
    case URL_ECM:
        TAB_ID_ECM = tab.id;
        break;
    default:
        break;
    }
});

chrome.tabs.onRemoved.addListener(function(tabId) {

    switch (tabId) {
    case TAB_ID_CALENDAR:
        TAB_ID_CALENDAR = 0;
        break;
    case TAB_ID_MAIL:
        TAB_ID_MAIL = 0;
        break;
    case TAB_ID_REDMINE:
        TAB_ID_REDMINE = 0;
        break;
    case TAB_ID_TASKIT:
        TAB_ID_TASKIT = 0;
        break;
    case TAB_ID_WMS:
        TAB_ID_WMS = 0;
        break;
    case TAB_ID_ECM:
        TAB_ID_ECM = 0;
        break;
    default:
        break;
    }
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {

    switch (info.menuItemId) {
    case MENU_ID_CALENDAR:
        activateTab(TAB_ID_CALENDAR, URL_CALENDAR);
        break;
    case MENU_ID_MAIL:
        activateTab(TAB_ID_MAIL, URL_MAIL);
        break;
    case MENU_ID_REDMINE:
        activateTab(TAB_ID_REDMINE, URL_REDMINE);
        break;
    case MENU_ID_TASKIT:
        activateTab(TAB_ID_TASKIT, URL_TASKIT);
        break;
    case MENU_ID_WMS:
        if (TAB_ID_WMS > 0) {
            chrome.tabs.update(TAB_ID_WMS, {
                "active": true
            });
        }
        else {
            chrome.tabs.create({
                url: URL_WMS
            }, function(tab) {
                chrome.tabs.executeScript(tab.id, {
                    file: "slo_wms.js"
                });
            });
        }
        break;
    case MENU_ID_ECM:
        activateTab(TAB_ID_ECM, URL_ECM);
        break;
    default:
        break;
    }
});

function activateTab(tabId, url) {

    if (tabId > 0) {
        chrome.tabs.update(tabId, {
            "active": true
        });
    }
    else {
        chrome.tabs.create({
            url: url
        });
    }
}