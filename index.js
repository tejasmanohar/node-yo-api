// Generated by CoffeeScript 1.7.1
(function() {
  var Yo, request;

  request = require("request");

  Yo = (function() {
    function Yo(token, opts) {
      this.token = token;
      if (opts == null) {
        opts = {};
      }
      if (this.token == null) {
        throw "token must be set";
      }
      this.base = opts.base;
      this.base || (this.base = "http://api.justyo.co");
    }

    Yo.prototype.yo_all = function(cb) {
      request.post("" + this.base + "/yoall/", {
        form: {
          api_token: this.token
        }
      }, cb);
      return null;
    };

    Yo.prototype.yo_all_link = function(link, cb) {
      request.post("" + this.base + "/yoall/", {
        form: {
          api_token: this.token,
          link: link
        }
      }, cb);
      return null;
    };

    Yo.prototype.yo = function(username, cb) {
      request.post("" + this.base + "/yo/", {
        form: {
          username: username,
          api_token: this.token
        }
      }, cb);
      return null;
    };

    Yo.prototype.yo_link = function(username, link, cb) {
      request.post("" + this.base + "/yo/", {
        form: {
          username: username,
          api_token: this.token,
          link: link
        }
      }, cb);
      return null;
    };

    Yo.prototype.subscribers_count = function(cb) {
      request.get("" + this.base + "/subscribers_count/", {
        qs: {
          api_token: this.token
        }
      }, cb);
      return null;
    };

    return Yo;

  })();

  module.exports = Yo;

}).call(this);
