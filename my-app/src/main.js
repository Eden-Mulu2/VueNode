import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import UserList from './components/UserList.vue'
import DisplayBoard from './components/DisplayBoard.vue'
import Dashboard from './components/Dashboard.vue'
import DeleteSuccess from './components/Deleted.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Dashboard }, // Default route, displays Dashboard
  { path: '/user-list', component: UserList },
  { path: '/display-board', component: DisplayBoard },
  { path: '/delete-success', component: DeleteSuccess },
  // Add more routes as needed
]

const router = new VueRouter({
  routes,
  mode: 'history', // Use history mode to remove the '#' from URLs
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.use(BootstrapVue)
