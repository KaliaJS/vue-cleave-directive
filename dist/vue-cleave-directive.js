/*!
  * vue-cleave-directive v1.0.3
  * (c) 2020 KaliaJS
  * @license ISC
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueRouter = factory());
}(this, (function () { 'use strict';

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
    install: function install(Vue, options) {
      Vue.directive('cleave', directive);
    },
    directive: directive 
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(cleave);
  }

  return cleave;

})));
