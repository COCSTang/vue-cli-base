import VueIconfont from './index.vue'
const customCache = new Set()

VueIconfont.install = function (Vue, options) {
  const { scriptUrl } = options
  const script = document.createElement('script')
  script.setAttribute('src', scriptUrl)
  script.setAttribute('data-namespace', scriptUrl)
  customCache.add(scriptUrl)
  document.body.appendChild(script)
  Vue.component(VueIconfont.name, VueIconfont)
}

export default VueIconfont
