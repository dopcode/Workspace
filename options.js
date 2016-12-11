function save_options() {
  var destiny_slo_id = document.getElementById('destiny_slo_id').value;
  var destiny_slo_pw = document.getElementById('destiny_slo_pw').value;

  chrome.storage.sync.set({
    destiny_slo_id: destiny_slo_id, 
    destiny_slo_pw: destiny_slo_pw
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
      destiny_slo_id: "", 
      destiny_slo_pw: ""
  }, function(items) {
    document.getElementById('destiny_slo_id').value = items.destiny_slo_id;
    document.getElementById('destiny_slo_pw').value = items.destiny_slo_pw;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
