import { createRouter,createWebHashHistory } from 'vue-router'
import { staticRouter } from "@/routers/modules/staticRouter";

// const mode = import.meta.env.VITE_ROUTER_MODE;
//
// const routerMode = {
//     hash: () => createWebHashHistory(),
//     history: () => createWebHistory()
// };

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...staticRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router
