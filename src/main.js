import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'
import './fb'


Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
