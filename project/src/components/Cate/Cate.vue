<template>
 <div class="CateContainer">
     <div class="cateContainerHeader">
    <div class="header">
        <div @click="router.back()"><i class="iconfont iconhuitui"></i></div>
    </div>
    <div class="content">
        <img  src="../../assets/店铺图片.jpg" alt="">
        <div class="contentText">
            <div class="contentHeaderText">
                <span>30分钟</span>
                <span>821m</span>
            </div>
            <div class="contentText">公告：本店每天换新油，所有食材军事三证齐全
            </div>
            <div class="contentAfter">
                <div class="contentAfterItem">20减1</div>
                <div class="contentAfterItem">25减4</div>
                <div class="contentAfterItem">30减6</div>
                <div class="contentAfterItem">含2元津贴</div>
            </div>
        </div>
    </div>
</div>
<!-- content -->
<div class="cateContainer">
    <div class="cateHeaderWraper">
        <div class="cateHeaderContent">
        <router-link  :to='`/cate/${shopListNavId}/menu`' replace="true">点菜</router-link>
        <router-link  :to="`/cate/${shopListNavId}/evaluate`" replace="true">评价</router-link>
        <router-link  :to="`/cate/${shopListNavId}/merchant`" replace="true">商家</router-link>
        </div>
        <div class="cateSearch">
            <div @click="clearCate">清空</div>
        </div>
    </div>
</div>
        <router-view></router-view>
 </div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted, reactive,computed, onBeforeUnmount } from 'vue';
import {Router, useRouter,useRoute, RouteLocationNormalizedLoaded} from "vue-router"
import menu from "./menu.vue"
import {Store, useStore} from "vuex"
import {SAVE_CATELIST,SAVE_CARTSHOPS,CLEAR_CARTSHOPS} from "../../store/modules/mutations_type"
export default defineComponent({
    components:{
        menu
    },
    props:{
        shopListId:{
            required:true,
            type:Object
        }
    },
    setup(props){
        const shopListNavId =  props.shopListId.id 
        let change = ref("")
        const store:Store<any> =useStore()
        const router:Router = useRouter()
        const route:RouteLocationNormalizedLoaded = useRoute()
        let cateList =computed(()=>{
            return store.state.cate.cateList
        })
        onMounted(() => {
            let cateDatas 
            // store.dispatch("getCateAction",{id:shopListNavId})
             if(sessionStorage.getItem("cateDatas")!=="undefined"&&shopListNavId){
                 cateDatas =JSON.parse(sessionStorage.getItem("cateDatas")as string)
             }
            if(cateDatas){
                store.commit(SAVE_CATELIST,cateDatas)
                //计算购物车数据 
                let cartShops =cateDatas.reduce((pre:any,item:any)=>{
                    // console.log(item)
                    // console.log(item.spus)
                    pre.push(...item.spus.filter((spu:any)=>spu.count))
                    return pre
                },[])
                  
                 store.commit(SAVE_CARTSHOPS,cartShops)
                }else{
                    console.log(shopListNavId)
                store.dispatch("getCateAction",{id:shopListNavId})
            }
            window.addEventListener("unload",()=>{
                 sessionStorage.setItem("cateDatas",JSON.stringify(cateList.value))
            })

        })
        function clearCate(){
            store.commit(CLEAR_CARTSHOPS)
        }
        onBeforeUnmount(()=>{
            sessionStorage.setItem("cateDatas",JSON.stringify(cateList.value))
        })
        return{
        change,router,shopListNavId,clearCate
        }
    }
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
  .CateContainer
    .cateContainerHeader
        width 375px
        height 125px
        background #2e2f38
        .header
            height 50px
            bottom-border-1px(#eeeeee)
            div 
                width 50px 
                height 50px
                i 
                    color #eeeeee
                    line-height 50px
                    margin-left 10px
        .content
            display flex
            height 75px
            padding 4px   
            img 
                width 85px
                height 64px   
            .contentText
                margin 8px 0 8px 8px
                display -webkit-box  
                -webkit-line-clamp 1
                -webkit-box-orient  vertical
                text-overflow ellipsis
                overflow hidden
                color #ffffff
                font-size 12px
                .contentAfter
                    display flex
    .cateContainer
        width 100%
        height 40px
        .cateHeaderWraper
            display flex
            justify-content space-between
            line-height 40px
            padding 0 10px
            bottom-border-1px(#eeeeee)
            .cateHeaderContent
                width 225px
                display flex
                justify-content space-around
                font-size 16px
                .router-link-active
                        border-bottom 1px solid #cccccc
                        font-weight:bold 
                                    
</style>
