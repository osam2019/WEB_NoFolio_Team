import Vue from 'vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import Vuex from 'vuex'
import state from './model/state.js'
import mutations from './model/mutations.js'
import actions from './model/actions.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = true

const store = new Vuex.Store({
	state, mutations, actions
});

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: "#app",
	render: h => h(App),
	router,
	store
}).$mount('#app')
