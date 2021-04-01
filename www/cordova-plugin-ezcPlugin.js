var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ezcPlugin', 'coolMethod', [arg0]);
};


exports.IfcanPush = function (success, error) {
    exec(success, error, 'ezcPlugin', 'IfcanPush', ["msg"]);
};

exports.openNoticeSetting = function (success, error) {
    exec(success, error, 'ezcPlugin', 'openNoticeSetting', ["msg"]);
};


