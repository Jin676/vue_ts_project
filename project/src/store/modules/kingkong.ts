import { Commit } from "vuex"
import {SAVE_KINGKONGLIST} from "./mutations_type"
import {reqKingkong} from "../../api"
const state={
    kingkongList:[]
}
interface Icommit{
    commit:Commit
}



const actions={
   async getKingkongAction({commit}:Icommit){
    let result = await reqKingkong()
    commit(SAVE_KINGKONGLIST,result.data)
   }
}

const mutations={
    [SAVE_KINGKONGLIST](state: { kingkongList: any },kingkongList: any){
        state.kingkongList = kingkongList
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

function code(arg0: any, code: any) {
    throw new Error("Function not implemented.")
}
