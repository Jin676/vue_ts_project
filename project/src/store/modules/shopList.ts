import { Commit } from "vuex"
import {SAVE_SHOPLIST} from "./mutations_type"
import {ReqShops} from "../../api"
const state={
    shopListData:[], //商家列表
}
interface Icommit{
    commit:Commit
}
const actions={
    async getShops({commit}:Icommit){
        let result = await ReqShops(40,110)
         !!(result.data !== undefined) && commit(SAVE_SHOPLIST,result.data.shopList)
    },
}

const mutations={
    [SAVE_SHOPLIST](state: { shopListData: any },shopList: any){
        state.shopListData = shopList
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