import Vue from 'vue'
import {AjaxPlugin, XHeader, XButton, ToastPlugin, AlertPlugin, ConfirmPlugin, DatetimePlugin, LoadingPlugin, WechatPlugin} from 'vux'

Vue.component('x-button', XButton)
Vue.component('x-header', XHeader)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
