chrome.storage.sync.get({
        destiny_slo_id: "", 
        destiny_slo_pw: ""
    }, function(items) {
        redirect(items.destiny_slo_id, items.destiny_slo_pw);
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
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
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