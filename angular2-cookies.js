"use strict";
var Cookie = (function () {
    function Cookie() {
    }
    Cookie.load = function (name) {
        var myWindow = window;
        name = myWindow.escape(name);
        var regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
        var result = regexp.exec(document.cookie);
        return (result === null) ? null : myWindow.unescape(result[1]);
    };
    Cookie.save = function (name, value, expires, path, domain) {
        var myWindow = window;
        var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
        if (expires) {
            var dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }
        if (path) {
            cookieStr += 'path=' + path + ';';
        }
        if (domain) {
            cookieStr += 'domain=' + domain + ';';
        }
        document.cookie = cookieStr;
    };
    Cookie.remove = function (name, path, domain) {
        if (Cookie.load(name)) {
            Cookie.save(name, '', -1, path, domain);
        }
    };
    return Cookie;
}());
exports.Cookie = Cookie;
//# sourceMappingURL=angular2-cookies.js.map