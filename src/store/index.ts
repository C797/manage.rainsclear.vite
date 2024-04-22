import { createPinia } from 'pinia';
import { App } from "vue";

const pinia = createPinia();

function registerStore(app: App<Element>){
    app.use(pinia);
}

export default registerStore;
