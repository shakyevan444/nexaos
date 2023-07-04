
//Pre-Boot

var Version = "1.0";
var Codename = "Cupcake";
var UIVersion = "1.0";
console.log("Version " + Version);
console.log("UI Version " + UIVersion);
setText("app.settings.text.2", "NUI " + UIVersion);
setText("app.settings.text.1", "Nexa "  + Codename);
getKeyValue("6", function (value) {
  if (value == 1) {
    CheckBIOS();
  }
});
function CheckSec() {
  getKeyValue("1", function (v1) {
    getKeyValue("2", function (v2) {
      getKeyValue("3", function (v3) {
        getKeyValue("4", function (v4) {
          getKeyValue("5", function (v5) {
            if ((v1 + v2) * ((v3 * v4) / v5) == 2160) {
              CheckBIOS();
            } else {
              CheckBIOS();
              setScreen("root.failed");
            }
          });
        });
      });
    });
  });
}
