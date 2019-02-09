cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-app-launcher.Launcher",
    "file": "plugins/cordova-plugin-app-launcher/www/Launcher.js",
    "pluginId": "cordova-plugin-app-launcher",
    "clobbers": [
      "plugins.launcher"
    ]
  },
  {
    "id": "cordova-plugin-fullscreen.AndroidFullScreen",
    "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
    "pluginId": "cordova-plugin-fullscreen",
    "clobbers": [
      "AndroidFullScreen"
    ]
  },
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  },
  {
    "id": "com.lampa.startapp.startapp",
    "file": "plugins/com.lampa.startapp/www/startApp.js",
    "pluginId": "com.lampa.startapp",
    "merges": [
      "startApp"
    ]
  },
  {
    "id": "call-number.CallNumber",
    "file": "plugins/call-number/www/CallNumber.js",
    "pluginId": "call-number",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "com.jsmobile.plugins.sms.sms",
    "file": "plugins/com.jsmobile.plugins.sms/www/sms.js",
    "pluginId": "com.jsmobile.plugins.sms",
    "clobbers": [
      "window.sms"
    ]
  },
  {
    "id": "cordova-plugin-kiosk-launcher.kiosk",
    "file": "plugins/cordova-plugin-kiosk-launcher/www/kiosk.js",
    "pluginId": "cordova-plugin-kiosk-launcher",
    "clobbers": [
      "window.Kiosk"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-app-launcher": "0.4.0",
  "cordova-plugin-fullscreen": "1.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-tts": "0.2.3",
  "com.lampa.startapp": "6.1.6",
  "call-number": "0.0.2",
  "cordova-plugin-geolocation": "4.0.1",
  "com.jsmobile.plugins.sms": "0.0.2",
  "cordova-plugin-kiosk-launcher": "0.2"
};
// BOTTOM OF METADATA
});