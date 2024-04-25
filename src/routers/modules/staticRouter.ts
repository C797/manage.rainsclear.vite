import { RouteRecordRaw } from "vue-router";

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/components/login.vue"),
        meta: {
            title: "登录"
        }
    },
    {
        path: "/layout",
        name: "layout",
        component: () => import("@/layouts/index.vue"),
        redirect:'/home/index',
        // component: () => import("@/layouts/indexAsync.vue"),
        children: [
            {
                path: "/home/index",
                name: "Home",
                component: () => import("@/views/home/components/home.vue"),
                meta: {
                    title: "首页"
                }
            },
        ]
    }
];
