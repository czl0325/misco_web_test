import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let app = null

const render = () => {
  app = new Vue({
    render: h => h(App),
  }).$mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log('vue2 bootstrap')
}

export const mount = () => {
  console.log('vue2 mount')
  render()
}

export const unmount = () => {
  console.log('vue2 unmount', app)
}
