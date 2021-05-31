import { createStore,createLogger } from 'vuex'
import kingkong from "./modules/kingkong"
import shopList from "./modules/shopList"
import login from "./modules/login"
import addressA from "./modules/addressA"
import cate from "./modules/cate"
import {Store, useStore} from "vuex"
const debug = process.env.NODE_ENV !== "production"; 
export default createStore({
  modules:{
    shopList,login,addressA,cate,kingkong
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters:{

  },
  plugins: debug ? [createLogger()] : []
})
