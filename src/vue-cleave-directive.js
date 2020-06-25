export default {
  inserted: (el, binding) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input')
    element.cleave = new Cleave(element, binding.value || {})
  },
  update: (el) => {
    const element = el.tagName === 'INPUT' ? el : el.querySelector('input')
    const event = new Event('input', { bubbles: true })
    requestAnimationFrame(() => {
      element.value = element.cleave.properties.result
      element.dispatchEvent(event)
    })
  }
}
