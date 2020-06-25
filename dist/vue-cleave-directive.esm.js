/*!
  * vue-cleave-directive v1.0.3
  * (c) 2020 KaliaJS
  * @license ISC
  */
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

export default cleave;
