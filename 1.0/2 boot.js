
//Boot

setTimeout(function() {
  setScreen("root.warning"); //set to the cool opening thing
  CheckSec(); //check security
}, 2000); //wait 2000ms
onEvent("root.warning.button", "click", function( ) {
  setScreen("root.login"); //go to the login page
});
