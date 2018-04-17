function save_options() {
    console.debug("save_options");
    var wms_id = document.getElementById('wms_id').value;
    var wms_pw = document.getElementById('wms_pw').value;

    chrome.storage.sync.set({
        wms_id: wms_id,
        wms_pw: wms_pw
    }, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

function restore_options() {
    console.debug("restore_options");
    chrome.storage.sync.get({
        wms_id: "",
        wms_pw: ""
    }, function(items) {
        document.getElementById('wms_id').value = items.wms_id;
        document.getElementById('wms_pw').value = items.wms_pw;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
