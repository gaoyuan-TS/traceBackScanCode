import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		locale: 'zh-CN'
	},
    mutations: {
		setLocale(state,lang){
			state.locale = lang
		}
	},
    actions: {}
})
export default store