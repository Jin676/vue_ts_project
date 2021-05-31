import { Commit } from "vuex"
import {SAVE_USER,SAVE_TOKEN,LOGOUT} from "./mutations_type"

interface Icommit{
    commit:Commit
}
const state={
    user:{},
    token:""
}

const actions={
    async getuser({commit}:Icommit,user:any){
        commit(SAVE_TOKEN,user.token)
        localStorage.setItem("token_key",user.token)
        delete user.token 
        commit(SAVE_USER,user)
    }, 
}

const mutations={
    [SAVE_TOKEN](state: { token: any },token: any){
        state.token = token
    },
    [SAVE_USER](state: { user: any },user: any){
        state.user = user
    },
    [LOGOUT](state: { user: any,token:any },user: any){
        //退出登陆
        state.user = {}
        state.token =""
        //还要清除local中信息
        localStorage.removeItem("token_key")
    },

}

const getters={

}

export default{
    state,
    actions,
    mutations,
    getters
}