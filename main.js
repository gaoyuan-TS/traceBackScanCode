import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'

import common from 'common/common.js'
import BoxItem from './components/box-item/boxItem.vue'
import AssideRight from './components/aside-right/aside-right.vue'
import SelectLang from './components/select-lang/select-lang.vue'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueI18n)  // 使用i18n
const i18n = new VueI18n({
	locale: store.state.locale || 'en-US',  // 初始化语言
	// 加载语言文件的内容
	messages: {
		'zh-CN': require('./locales/zh-CN.js').lang,
		'en-US': require('./locales/en-US.js').lang
	},
	silentTranslationWarn: true
})


Vue.prototype._i18n = i18n

Vue.prototype.$common = common
// 注册全局组件
Vue.component('BoxItem',BoxItem)
Vue.component('AssideRight',AssideRight)
Vue.component('SelectLang',SelectLang)

App.mpType = 'app'

const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()
