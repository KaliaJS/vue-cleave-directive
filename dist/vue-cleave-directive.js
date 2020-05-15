/*!
  * vue-cleave-directive v1.0.0
  * (c) 2020 KaliaJS
  * @license ISC
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('cleave.js')) :
  typeof define === 'function' && define.amd ? define(['cleave.js'], factory) :
  (global = global || self, global.VueRouter = factory(global.Cleave));
}(this, (function (Cleave) { 'use strict';

  Cleave = Cleave && Object.prototype.hasOwnProperty.call(Cleave, 'default') ? Cleave['default'] : Cleave;

  var directive = {
    inserted: function (el, binding) {
      var element = el.tagName === 'INPUT' ? el : el.querySelector('input');
      element.cleave = new Cleave(element, binding.value || {});
    },
    update: function (el) {
      var element = el.tagName === 'INPUT' ? el : el.querySelector('input');
      var event = new Event('input', { bubbles: true });
      requestAnimationFrame(function () {
        element.value = element.cleave.properties.result;
        element.dispatchEvent(event);
      });
    }
  };

  var cleave = {
    install: function install(Vue) {
      Vue.directive('cleave', directive);
    },
    directive: directive 
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(cleave);
  }

  return cleave;

})));
