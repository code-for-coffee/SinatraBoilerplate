// your custom application
var app = app || {};
window.onload = function() {

  var Model = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};
    function Model(properties) {
      this.properties = properties;
    }DP$0(Model,"prototype",{"configurable":false,"enumerable":false,"writable":false});

    proto$0.toObject = function() {
      return this.properties;
    };
  MIXIN$0(Model.prototype,proto$0);proto$0=void 0;return Model;})();

  console.log(Model);
  var m = new Model({ name: "test"});
  console.log(m.toObject());

}
