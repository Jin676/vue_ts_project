<template>
  <div id="nav">
    <Footerguide v-if="route.meta.isShowNav"/>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import Footerguide from "./components/FooterGuide/FooterGuide.vue"
import {defineComponent, onMounted} from 'vue'
import {useRoute,useRouter}from "vue-router"
import useCurrentInstance from "./hooks/useCurrentInstance";
import {Store, useStore} from "vuex"
import {SAVE_USER} from"./store/modules/mutations_type"
export default defineComponent({
    components:{
        Footerguide
    },
    setup(){
    const router= useRouter()
    const route = useRoute()
    const store:Store<any> = useStore()
    const { globalProperties } = useCurrentInstance();
    onMounted(() => {
        autoLogin()
    })
    async function autoLogin(){
            //发送自动登陆请求，返回data数据保存到state中
            let result = await globalProperties.$API.ReqAuto_login()
            //data中数据再次存到vuex
            store.commit(SAVE_USER,result.data)
    }
    
        return{
            router,route
        }
    }
})
</script>
<style lang="stylus">
  body 
    font-family: "PingFangSC-Regular", "Hiragino Sans GB", Arial, Helvetica, "宋体", sans-serif;  
    .box 
        width 375px 
        height 100px
        background blue
</style>


