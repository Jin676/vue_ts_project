import { Commit } from "vuex"
import {SAVE_SHOPLIST,SAVE_CATELIST,ADD_COUNT,DEL_COUNT,CLEAR_CARTSHOPS,SAVE_CARTSHOPS} from "./mutations_type"
import {reqCate} from "../../api"
const state={
    cateList:[], //商品列表
    cartSops:[]
}
interface Icommit{
    commit:Commit
}

const actions={
    async getCateAction({commit}:Icommit,id:any){
        let result = await reqCate(id)
        if(result)
         !!(result.data !== undefined) && commit(SAVE_CATELIST,result.data)
    },
    async changeFoodCount({commit}:Icommit,{isAdd,food}:any){
        if(isAdd){
            commit(ADD_COUNT,{food})
        }else{
            commit(DEL_COUNT,{food})
        }
   },
}

const mutations={
    [SAVE_CATELIST](state: { cateList: any },CateData: any){
        state.cateList = CateData
    },
    //+
    [ADD_COUNT](state: { cartSops: any[] },{food}: any){
        if(food.count > 0){
            food.count++
        }else{
            food.count = 1
            state.cartSops.push(food)
        }
    },
    //-
    [DEL_COUNT](state: { cartSops: any[] },{food}: any){
        if(food.count > 0){
            food.count--
          if(food.count === 0 ){
            //   indexOf找数组中元素删除
            state.cartSops.splice(state.cartSops.indexOf(food),1)
          }
        }
    },
    [CLEAR_CARTSHOPS](state: { cartSops: any[] }){
        state.cartSops.forEach(food=>{
          return food.count = 0
        })
        state.cartSops = []
    },
    [SAVE_CARTSHOPS](state: { cartSops: any },cartShops: any){
        state.cartSops = cartShops
    },
   
}

const getters={
    totalCount(state: { cartSops: any[] }){
        return state.cartSops.reduce((pre,food)=>{
           return pre += food.count
        },0)
    },
    totalPrice(state: { cartSops: any[] }){
        // console.log(state.cartSops)
     return state.cartSops.reduce((pre,food)=>{
         //food.count数量 ，food.price 单价
       return pre += food.count * food.min_price 
     },0)
    }
  }


export default{
    state,
    actions,
    mutations,
    getters
}