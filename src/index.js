import Vue from 'vue'
import App from './page/index.vue'
import routes from './routes/routes'
import VueRouter from 'vue-router'
import { Button, Row, Col, Card, FormModel,Select, Input } from 'ant-design-vue'
import './style/scss/common.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Dict from './data/data.json5'

library.add(faDatabase)
Vue.prototype.dict = Dict

Vue.component('fa-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Card)
Vue.use(FormModel)
Vue.use(Select)
Vue.use(Input)

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
