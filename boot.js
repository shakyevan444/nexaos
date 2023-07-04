
//Boot

setTimeout(function() {
  setScreen("root.warning");
  CheckSec();
}, 2000);
onEvent("root.warning.button", "click", function( ) {
  setScreen("root.login");
});
