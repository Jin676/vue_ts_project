import { Commit } from "vuex"
import {SAVE_ADDRESS} from "./mutations_type"
import {getAddress} from "../../api"
const state={
    address:"",
}
interface Icommit{
    commit:Commit
}



const actions={
    async getAddress({commit}:Icommit){
        // 不能这样写这不是vue组件
        // let result = await this.$API.getAddress(40,110)
        // console.log(result);
          let result = await getAddress(40,110)
         !!(result.data !== undefined) && commit(SAVE_ADDRESS,result.data)
    },
}

const mutations={
    [SAVE_ADDRESS](state: { address: any },address: any){
        state.address = address
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
