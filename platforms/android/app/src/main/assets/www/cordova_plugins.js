cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-fullscreen.AndroidFullScreen",
    "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
    "pluginId": "cordova-plugin-fullscreen",
    "clobbers": [
      "AndroidFullScreen"
    ]
  },
  {
    "id": "cordova-plugin-kiosk-launcher.kiosk",
    "file": "plugins/cordova-plugin-kiosk-launcher/www/kiosk.js",
    "pluginId": "cordova-plugin-kiosk-launcher",
    "clobbers": [
      "window.Kiosk"
    ]
  },
  {
    "id": "cordova-plugin-app-launcher.Launcher",
    "file": "plugins/cordova-plugin-app-launcher/www/Launcher.js",
    "pluginId": "cordova-plugin-app-launcher",
    "clobbers": [
      "plugins.launcher"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-fullscreen": "1.1.0",
  "cordova-plugin-kiosk-launcher": "0.2",
  "cordova-plugin-app-launcher": "0.4.0",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});