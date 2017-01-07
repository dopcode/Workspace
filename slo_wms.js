chrome.storage.sync.get({
    wms_id: "",
    wms_pw: ""
}, function(items) {
    redirect(items.wms_id, items.wms_pw);
    goHome();
});

function redirect(id, pw) {

    var method = method || "post";
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", "http://destiny.cyberdigm.co.kr/wms/servlet/wms?cmd=wms_login");
    params = {
        user_id: id,
        password: pw
    }
    for ( var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();
}

function goHome(id, pw) {

    var method = method || "post";
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", "http://destiny.cyberdigm.co.kr/wms/jsp/cyberdigm/webclient/wms/WMSMainFrame.jsp?func_id=Z_S");
    document.body.appendChild(form);
    form.submit();
}