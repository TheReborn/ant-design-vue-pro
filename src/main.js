import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Antd from "ant-design-vue"
// import {Button} from "ant-design-vue/lib/button"
// 用了babel-plugin-import插件之后样式不用再单独引入
import {Button} from "ant-design-vue"
//引入样式
// import 'ant-design-vue/dist/antd.less'
// import 'ant-design-vue/lib/button/style'

Vue.config.productionTip = false;

// Vue.use(Antd);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
