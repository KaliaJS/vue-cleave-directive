import directive from './vue-cleave-directive'

const cleave = {
  install(Vue) {
    Vue.directive('cleave', directive)
  },
  directive 
}

export default cleave

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cleave)
}