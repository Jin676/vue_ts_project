import "lib-flexible"
import { createApp } from 'vue'
import * as API from "./api/index"
import App from './App.vue'
import router from './router'
import store from './store'
import { Field, Form,ErrorMessage } from 'vee-validate'
const app = createApp(App)
//全局组件
app.component("Field",Field)
app.component("Form",Form)
app.component("ErrorMessage",ErrorMessage)
app.config.globalProperties.$API = API
app.use(store)
app.use(router)
app.mount('#app')
