/**
 * HOOKS
 */

/**
 * Implements hook_install().
 */
function network_monitor_install() {
  document.addEventListener("offline", _onOffline, false);
  document.addEventListener("online", _onOnline, false);
}
function _onOffline() {
  drupalgap_alert('off');
  drupalgap.online = false;
}
function _onOnline() {
  drupalgap_alert('on');
  drupalgap.online = true;
  // TODO: reload page 
}
