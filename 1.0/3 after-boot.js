
//After-Boot

//Setup
//login
onEvent("root.login.button", "click", function( ) { //login code
  setScreen("Homescreen.1");
  CheckSec();
});
//code for Notifications and logging-out
function Logout() {
  setProperty("Homescreen.1", "image", "800w-98aZLNQxJXg.png");
  setProperty("app.appstore.1", "image", "800w-98aZLNQxJXg.png");
  setProperty("app.phone", "image", "800w-98aZLNQxJXg.png");
  hideElement("app.appstore.1.app.music.delete");
  hideElement("app.appstore.1.app.notes.delete");
  hideElement("app.appstore.1.app.tips.delete");
  hideElement("app.appstore.1.app.dev.delete");
  hideElement("app.appstore.1.app.paint.delete");
  hideElement("app.appstore.1.app.betahub.delete");
  hideElement("Homescreen.1.app.dev");
  hideElement("Homescreen.1.app.betahub");
  hideElement("Homescreen.1.app.paint");
  hideElement("Homescreen.1.app.notes");
  hideElement("Homescreen.1.app.tips");
  hideElement("Homescreen.1.app.music");
}
onEvent("Homescreen.notif.button.1", "click", function( ) {
  Logout();
  setScreen("root.login");
});
onEvent("Homebar.13.3", "click", function( ) {
  setScreen("Homescreen.1");
});
//Homescreen Code
onEvent("Homebar.1.1", "click", function( ) {
  setScreen("Homescreen.notif");
});
onEvent("Homescreen.1.app.settings", "click", function( ) {
  setScreen("app.settings");
});
onEvent("Homescreen.1.app.phone", "click", function( ) {
  setScreen("app.phone");
});
onEvent("Homescreen.1.app.music", "click", function( ) {
  setScreen("app.music");
});
onEvent("Homescreen.1.app.notes", "click", function( ) {
  setScreen("app.notes");
});
onEvent("Homescreen.1.app.paint", "click", function( ) {
  setScreen("app.paint");
});
onEvent("Homescreen.1.app.dev", "click", function( ) {
  setScreen("app.dev");
});
onEvent("Homescreen.1.app.appstore", "click", function( ) {
  setScreen("app.appstore.1");
});
onEvent("Homescreen.1.app.tips", "click", function( ) {
  setScreen("app.tips");
});
//code for app.settings (settings)
function CheckBIOS() { //sets what CheckBIOS does (currently nothing)
  
}
onEvent("Homebar.2.2", "click", function( ) {
  setScreen("Homescreen.1");
});
onEvent("app.settings.button.7", "click", function( ) { //goto the wallpaper picker
  setScreen("app.settings.customizer");
  CheckSec();
});
onEvent("app.settings.button.8", "click", function( ) { //goto info screen
  setScreen("app.settings.info");
});
//code for app.settings.info (info page)
onEvent("Homebar.14.1", "click", function( ) {
  setScreen("app.settings");
});
setText("app.settings.info.text.1", "NexaOS Version " + Version);
setText("app.settings.info.text.2", "Codename " + Codename);
setText("app.settings.info.text.3", "NexusUI Version " + UIVersion);
//code for app.settings.login (login to acc page)
onEvent("app.settings.button.6", "click", function( ) {
  setScreen("app.settings.login");
  CheckSec();
});
onEvent("app.settings.login.button.2", "click", function( ) { //make acc
  if (getText("app.settings.login.input.1") == getColumn(getText("app.settings.login.input.1"), "Username")) { //check if account exists
    console.log("Account already exists");
    setText("app.settings.login.text.1", "Account already exists");
    showElement("app.settings.login.text.1");
    setTimeout(function() {
      hideElement("app.settings.login.text.1");
    }, 1000);
  } else { //make the acc
    createRecord(getText("app.settings.login.input.1"), {terminated: 0, dev: 0, USERID: (getUserId()), Wallpaper:0, Username:(getText("app.settings.login.input.1")), Password:(getText("app.settings.login.input.2")), }, function(record) {
      
    });
  }
  setScreen("app.settings.login");
});
var loggedin = 0;
var Username = "NULL";
onEvent("app.settings.login.button.1", "click", function( ) {
  readRecords(getText("app.settings.login.input.1"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if((records[i]).Password == getText("app.settings.login.input.2") ){ //check if the password is correct
       if ((records[i]).dev == 1) { //check if acc is a dev
         CheckSec();
         if ((records[i]).terminated == 0) { //check if acc is terminated
           dev = 1;
           showElement("app.appstore.1.app.dev");
           Username = records.Username;
           loggedin = 1;
           setScreen("Homescreen.1");
         } else {
           console.log("This account is terminated");
           setText("app.settings.login.text.1", "This account is terminated");
           showElement("app.settings.login.text.1");
           setTimeout(function() {
             hideElement("app.settings.login.text.1");
           }, 1000);
         }
       } else {
         if (records.terminated == 0) { //check if acc is terminated
           if((records[i]).Password == getText("app.settings.login.input.2") ){
            dev = 0;
            Username = records.Username;
            loggedin = 1;
            setScreen("Homescreen.1");
           }else{
             console.log("Incorrect Login-Name or Password");
             setText("app.settings.login.text.1", "Incorrect Login-Name or Password");
           }
         } else {
           console.log("This account is terminated");
           setText("app.settings.login.text.1", "This account is terminated");
           showElement("app.settings.login.text.1");
           setTimeout(function() {
             hideElement("app.settings.login.text.1");
           }, 1000);
         }
       }
      }else{
        console.log("Incorrect Login-Name or Password");
        setText("app.settings.login.text.1", "Incorrect Login-Name or Password");
        showElement("app.settings.login.text.1");
        setTimeout(function() {
          hideElement("app.settings.login.text.1");
        }, 1000);
      }
      }
  });
});
//code for app.settings.customizer (wallpapers)
onEvent("Homebar.9.1", "click", function( ) {
  setScreen("app.settings");
});
onEvent("Homebar.9.3", "click", function( ) {
  setScreen("app.settings.customizer.2");
});
onEvent("Homebar.10.1", "click", function( ) {
  CheckSec();
  setScreen("app.settings.customizer");
});
onEvent("app.customizer.button.4", "click", function( ) {
  setProperty("Homescreen.1", "image", "800w-98aZLNQxJXg.png");
  setProperty("app.appstore.1", "image", "800w-98aZLNQxJXg.png");
  setProperty("app.phone", "image", "800w-98aZLNQxJXg.png");
});
onEvent("app.customizer.button.1", "click", function( ) {
  setProperty("Homescreen.1", "image", "https://wallpapers.com/images/featured/wltnz5o1xymafqmo.jpg");
  setProperty("app.appstore.1", "image", "https://wallpapers.com/images/featured/wltnz5o1xymafqmo.jpg");
  setProperty("app.phone", "image", "https://wallpapers.com/images/featured/wltnz5o1xymafqmo.jpg");
});
onEvent("app.customizer.button.2", "click", function( ) {
  setProperty("Homescreen.1", "image", "https://r1.ilikewallpaper.net/iphone-wallpapers/download/37952/Blue-sea-beach-iphone-wallpaper-ilikewallpaper_com.jpg");
  setProperty("app.appstore.1", "image", "https://r1.ilikewallpaper.net/iphone-wallpapers/download/37952/Blue-sea-beach-iphone-wallpaper-ilikewallpaper_com.jpg");
  setProperty("app.phone", "image", "https://r1.ilikewallpaper.net/iphone-wallpapers/download/37952/Blue-sea-beach-iphone-wallpaper-ilikewallpaper_com.jpg");
});
onEvent("app.customizer.2.button.1", "click", function( ) {
  setProperty("Homescreen.1", "image", "walper4.png");
  setProperty("app.appstore.1", "image", "walper4.png");
  setProperty("app.phone", "image", "walper4.png");
});
onEvent("app.settings.customizer.3.button.1", "click", function( ) {
  setProperty("Homescreen.1", "image", "black_unity_22_wallpaper_iphone.png");
  setProperty("app.appstore.1", "image", "black_unity_22_wallpaper_iphone.png");
  setProperty("app.phone", "image", "black_unity_22_wallpaper_iphone.png");
});
onEvent("app.settings.customizer.3.button.2", "click", function( ) {
  setProperty("Homescreen.1", "image", "CleanShot-2023-06-28-at-22.51.14-2x.png");
  setProperty("app.appstore.1", "image", "CleanShot-2023-06-28-at-22.51.14-2x.png");
  setProperty("app.phone", "image", "CleanShot-2023-06-28-at-22.51.14-2x.png");
});
onEvent("Homebar.10.3", "click", function( ) {
  setScreen("app.settings.customizer.3");
});
onEvent("Homebar.12.1", "click", function( ) {
  setScreen("app.settings.customizer.2");
});
function Seasonalwallpaper() {
  onEvent("app.customizer.2.button.3", "click", function( ) {
    setProperty("Homescreen.1", "image", "Red_Background.jpg");
    setProperty("app.appstore.1", "image", "Red_Background.jpg");
    setProperty("app.phone", "image", "Red_Background.jpg");
  });
}
Seasonalwallpaper();
//code for app.appstore.1 (appstore page 1)
onEvent("Homebar.3.2", "click", function( ) {
  setScreen("Homescreen.1");
});
onEvent("app.appstore.1.app.music.delete", "click", function( ) {
  hideElement("Homescreen.1.app.music");
  hideElement("app.appstore.1.app.music.delete");
});
onEvent("app.appstore.1.app.music", "click", function( ) {
  showElement("Homescreen.1.app.music");
  showElement("app.appstore.1.app.music.delete");
});
onEvent("app.appstore.1.app.dev.delete", "click", function( ) {
  hideElement("Homescreen.1.app.dev");
  hideElement("app.appstore.1.app.dev.delete");
});
onEvent("app.appstore.1.app.dev", "click", function( ) {
  showElement("Homescreen.1.app.dev");
  showElement("app.appstore.1.app.dev.delete");
});
onEvent("app.appstore.1.app.tips.delete", "click", function( ) {
  hideElement("Homescreen.1.app.tips");
  hideElement("app.appstore.1.app.tips.delete");
});
onEvent("app.appstore.1.app.tips", "click", function( ) {
  showElement("Homescreen.1.app.tips");
  showElement("app.appstore.1.app.tips.delete");
});
onEvent("app.appstore.1.app.betahub.delete", "click", function( ) {
  hideElement("Homescreen.1.app.betahub");
  hideElement("app.appstore.1.app.betahub.delete");
});
onEvent("app.appstore.1.app.betahub", "click", function( ) {
  showElement("Homescreen.1.app.betahub");
  showElement("app.appstore.1.app.betahub.delete");
});
onEvent("app.appstore.1.app.paint.delete", "click", function( ) {
  hideElement("Homescreen.1.app.paint");
  hideElement("app.appstore.1.app.paint.delete");
});
onEvent("app.appstore.1.app.paint", "click", function( ) {
  showElement("Homescreen.1.app.paint");
  showElement("app.appstore.1.app.paint.delete");
});
onEvent("app.appstore.1.app.notes.delete", "click", function( ) {
  hideElement("Homescreen.1.app.notes");
  hideElement("app.appstore.1.app.notes.delete");
});
onEvent("app.appstore.1.app.notes", "click", function( ) {
  showElement("Homescreen.1.app.notes");
  showElement("app.appstore.1.app.notes.delete");
});
//code for app.music (music)
function stopmusic() { //func to stop all music 
  CheckSec();
  stopSound("Beluga---Belupacito-(Official-Audio).mp3");
  stopSound("L_X.mp3");
  stopSound("On-Little-Cat-Feet---OneShot-World-Machine-Edition.mp3");
  stopSound("Rainy-night.mp3");
  stopSound("Title-Music-(Party-Time).mp3");
}
onEvent("Homescreen.1.widgetbar.1", "click", function( ) {
  stopmusic();
});
onEvent("app.music.button.2", "click", function( ) {
  hideElement("Homescreen.1.widgetbar.1");
});
onEvent("app.music.button.3", "click", function( ) {
  showElement("Homescreen.1.widgetbar.1");
});
onEvent("Homebar.5.2", "click", function( ) {
  setScreen("Homescreen.1");
});
onEvent("app.music.button.song.1", "click", function( ) {
  stopmusic();
  playSound("Rainy-night.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.2", "click", function( ) {
  stopmusic();
  playSound("L_X.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.3", "click", function( ) {
  stopmusic();
  playSound("Beluga---Belupacito-(Official-Audio).mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.4", "click", function( ) {
  stopmusic();
  playSound("On-Little-Cat-Feet---OneShot-World-Machine-Edition.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.5", "click", function( ) {
  stopmusic();
  playSound("Title-Music-(Party-Time).mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.6", "click", function( ) {
  stopmusic();
  playSound("Rainy-night.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.7", "click", function( ) {
  stopmusic();
  playSound("Rainy-night.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.8", "click", function( ) {
  stopmusic();
  playSound("Rainy-night.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.song.9", "click", function( ) {
  stopmusic();
  playSound("Rainy-night.mp3", getChecked("app.music.check"));
});
onEvent("app.music.button.1", "click", function( ) {
  stopmusic();
});
onEvent("Homescreen.1.widgetbar.1", "click", function( ) {
  stopmusic();
});
//code for app.tips (tips)
onEvent("Homebar.7.2", "click", function( ) {
  setScreen("Homescreen.1");
});
//code for app.dev (dev)
onEvent("Homebar.4.2", "click", function( ) {
  setScreen("Homescreen.1");
});
onEvent("app.dev.button.1", "click", function( ) {
  setScreen("root.terminal");
});
//code for app.dev.terminal (terminal)
onEvent("run", "click", function( ) {
  if (getText("command") == "test" ) { //test cmd, replys "Test!"
    setText("text_area3", "Test! / >");
  } else {
    if (getText("command") == "setscr" ) { //set screen to param1
      setText("text_area3", "/ >");
      setScreen(getText("param1"));
    } else {
      if (getText("command") == "settext" ) { //set element param1 text to param2
        setText(getText("param1"), getText("param2"));
      } else {
        if (getText("command") == "print" ) { //prints param1 to terminal
          setText("text_area3", getText("param1") + " / >");
        } else {
          if (getText("command") == "version" ) { //print version
            setText("text_area3", Version + " / >");
          } else {
            if (getText("command") == "home" ) { //goes to root.login
              setScreen("root.login");
            } else {
              if (getText("command") == "recovery" ) { //goes to recovery menu (not in NexaOS)
                setScreen("root.recovery");
              } else {
                if (getText("command") == "oos" ) { //Other OS code
                  setText("text_area3", "Invalid Command! / >");
                  getKeyValue("oos" + getText("param1"), function (val1) { //"oos{OOS NAME}" is the link to the other OS
                    getKeyValue("oosi" + getText("param1"), function (val2) { //check if the oos is a link or page
                      if (val2 == 1) { //if its a page go to that page
                        open(val1); //opens the link
                      } else {
                        setScreen(val1); //opens the page
                      }
                    });
                  });
                } else {
                  setText("text_area3", "Invalid Command! / >");
                }
              }
            }
          }
        }
      }
    }
  }
});
//code for app.paint (paint)
setActiveCanvas("app.paint.canvas"); //set the canvas to paint
var currentColor = "black";
var isDragging = false;
var previousX, previousY;
onEvent("app.paint.red", "input", function(event) { //code for red slider
  var redValue = getProperty("app.paint.red", "value");
  updateColor(redValue, null, null);
});
onEvent("app.paint.green", "input", function(event) { //code for green slider
  var greenValue = getProperty("app.paint.green", "value");
  updateColor(null, greenValue, null);
});
onEvent("app.paint.blue", "input", function(event) { //code for blue slider
  var blueValue = getProperty("app.paint.blue", "value");
  updateColor(null, null, blueValue);
});
onEvent("app.paint.canvas", "mousemove", function(event) { //if your clicking on the canvas, paint on it
  if (isDragging) {
    var x = event.x - getXPosition("app.paint.canvas");
    var y = event.y - getYPosition("app.paint.canvas");
    var squareSize = 10;
    var lineWidth = 3;
    drawLine(previousX, previousY, x, y, lineWidth, currentColor);
    previousX = x;
    previousY = y;
  }
});
onEvent("app.paint.canvas", "mousedown", function(event) { //check if you are clicking/dragging
  isDragging = true;
  previousX = event.x - getXPosition("app.paint.canvas");
  previousY = event.y - getYPosition("app.paint.canvas");
});
onEvent("app.paint.canvas", "mouseup", function() {
  isDragging = false;
});
onEvent("app.paint.button.clear", "click", function() { //clear paint canvas
  clearCanvas("app.paint.canvas");
});
function paintRect(x, y) { //unused function that draws a rectangle
  rect(x, y, 10, 10);
}
function drawLine(x1, y1, x2, y2, lineWidth) { //draw function
  setStrokeWidth(lineWidth);
  setStrokeColor(currentColor);
  line(x1, y1, x2, y2);
}
function updateColor(red, green, blue) { //update color function
  red = getNumber("app.paint.red");
  green = getNumber("app.paint.green");
  blue = getNumber("app.paint.blue");
  currentColor = rgb(red, green, blue);
}
onEvent("Homebar.8.2", "click", function( ) {
  setScreen("Homescreen.1");
});
//code for app.notes (notes)
CheckSec();
onEvent("Homebar.6.2", "click", function( ) {
  setScreen("Homescreen.1");
});
//code for app.phone (phone)
var PI = "";
onEvent("Homebar.11.2", "click", function( ) {
  setScreen("Homescreen.1");
});
onEvent("app.phone.button.1", "click", function( ) {
  PI = PI + "1";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.2", "click", function( ) {
  PI = PI + "2";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.3", "click", function( ) {
  PI = PI + "3";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.4", "click", function( ) {
  PI = PI + "4";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.5", "click", function( ) {
  PI = PI + "5";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.6", "click", function( ) {
  PI = PI + "6";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.7", "click", function( ) {
  PI = PI + "7";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.8", "click", function( ) {
  PI = PI + "8";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.9", "click", function( ) {
  PI = PI + "9";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.10", "click", function( ) {
  PI = PI + "0";
  setText("app.phone.text.2", PI);
});
onEvent("app.phone.button.11", "click", function( ) {
  getKeyValue("uc", function (value) {
    if (PI == "459") { //easter egg from EvanOS
      console.log("EvanOS activated");
      PI = "";
      setText("app.phone.text.2", PI); //easter egg from an old arcane os app
    } else if ((PI == "95632")) {
      console.log("Purchase Completed: Etunes");
      PI = "";
      setText("app.phone.text.2", PI);
    } else if ((PI == value)) { //enabled appstore when NexaOS was in beta
      setScreen("app.appstore.1");
      PI = "";
      setText("app.phone.text.2", PI);
    } else {
      PI = ""; //reset input for phone when called
      setText("app.phone.text.2", PI);
    }
  });
});
