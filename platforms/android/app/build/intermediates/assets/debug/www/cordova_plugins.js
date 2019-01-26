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
  "cordova-plugin-fullscreen": "1.1.0",
  "cordova-plugin-kiosk-launcher": "0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "mx.ferreyra.callnumber": "0.0.2"
};
// BOTTOM OF METADATA
});