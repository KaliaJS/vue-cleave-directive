/*!
  * vue-cleave-directive v1.0.3
  * (c) 2020 KaliaJS
  * @license ISC
  */
var directive = {
  inserted: (el, binding) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input');
    element.cleave = new Cleave(element, binding.value || {});
  },
  update: (el) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input');
    const event = new Event('input', { bubbles: true });
    requestAnimationFrame(() => {
      element.value = element.cleave.properties.result;
      element.dispatchEvent(event);
    });
  }
};

const cleave = {
  install(Vue, options) {
    Vue.directive('cleave', directive);
  },
  directive 
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cleave);
}

export default cleave;
