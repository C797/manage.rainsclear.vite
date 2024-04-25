import { createApp } from 'vue'
import "@/styles/index.scss";
import pinia from "@/stores";
import router from './routers'
import App from './App.vue'

import ElementPlus from "element-plus";
import * as Icons from "@element-plus/icons-vue";

const app = createApp(App);

// register the element Icons component
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
