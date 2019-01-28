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
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-app-launcher": "0.4.0",
  "cordova-plugin-fullscreen": "1.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "mx.ferreyra.callnumber": "0.0.2"
};
// BOTTOM OF METADATA
});