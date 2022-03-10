import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3000/api/',
}

const AxiosInstance = axios.create({
  baseURL: config.baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

AxiosInstance.interceptors.request.use(async (config) => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return config;
});

Vue.directive('text-terminate', {
  bind: function (el, binding) {
    const text = el.innerText.trim();

    if (text.length > binding.value) {
      return el.innerText = text.slice(0, binding.value) + "...";
    }
  }
});

Vue.config.ignoredElements = [/^ion-/]

Vue.prototype.$http = AxiosInstance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
