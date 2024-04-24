import { defineStore } from "pinia";
import { UserState } from "@/stores/interface"

export const useUserStore = defineStore({
    id:'user',
    state:():UserState=>({
        token:'',
        userInfo:{ name: "RAINSCLEAR" }
    }),
    getters: {},
    actions: {
        setToken(token: string) {
            this.token = token;
        },
        setUserInfo(userInfo:any) {
            this.userInfo = userInfo;
        }
    }
})
