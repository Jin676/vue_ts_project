<template>
<div class="searchContainer">
 
        <div class="searchHeader">
        <div @click="router.back()"><i class="iconfont iconhuitui"></i></div>
        <div class="title">搜索页</div>
    </div>
    <div class="searchWarpper">
        <div class="searchIpt">
        <form action="">
            <span class="iconfont iconsousuo"></span>
            <input v-model="searchIpt" @input="change" type="text" placeholder="请输入商家或商品名称">
        </form>
    </div>
    <div class="search">搜索</div>
    
    <div class="searchList" v-if="searchIpt">
        <div class="searchListItem" v-for="(item,index) in searchList.data" :key="index">
            <div class="imgWrapper"><img src="../../assets/icon/search.png" alt=""></div>
            <div class="textT"><span>{{item.content}}</span></div>
        </div>
    </div>
    </div>
    <div class="hotSearch" v-if="!searchIpt">
        <div class="hotTitle">
            <span>热门搜索</span>
        </div>
        <div class="hotItemWrapper" v-if="hotList">
        <div  class="hotItem" v-for="(item,index) in hotList.data" :key="index">
               {{item.labelName}}
        </div>
        </div>
    </div>
    <div class="hotSearch" style="margin-top:20px" v-if="!searchIpt">
        <div class="hotTitle">
            <span>历史搜索</span>
        </div>
        <div class="hotItemWrapper">
            <div class="hotItem">
            江中旗舰店
        </div>
        <div class="hotItem">
            江中
        </div>
        <div class="hotItem">
            江中药房
        </div>
        <div class="hotItem">
            江众药店
        </div>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import { defineComponent,onMounted, reactive, ref } from 'vue';
import {useRouter} from "vue-router"
import useCurrentInstance from "../../hooks/useCurrentInstance";
import _ from "lodash"
export default defineComponent({
    setup(){
        const router = useRouter()
        const { globalProperties } = useCurrentInstance();
        const searchIpt = ref("")
        const searchList = reactive({
            data:[]
        })
        const hotList = reactive({
            data:[]
        })
        onMounted(() => {
            reqHot()
        })
        async function reqHot(){
            let result = await globalProperties.$API.reqHot()
            hotList.data = result.data.data.hotLabelList
        }
      
       async function change(){
           _.debounce(async function(){
                let result = await globalProperties.$API.reqSearchList()
                searchList.data = result.data
            },300)()              
        }
        return{
            router,hotList,searchIpt,change,searchList
        }
    }
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
  .searchContainer
    box-sizing border-box
    padding-left 10px
    position relative
    .searchHeader
        display flex
        width 100%
        height 50px
        line-height 50px
        .title
            width 100%
            text-align center
    .searchWarpper      
        display flex  
        margin 10px 0
        .searchIpt 
            display flex
            width 305px
            background #e8e8e8
            height 30px
            line-height 30px
            border-radius 15px
            form 
                margin-left 10px
                span 
                    vertical-align middle
                input 
                    background #e8e8e8 
        .search
            width 60px
            line-height 30px   
            text-align center
        .searchList
            position absolute
            width 92%
            height 450px
            top 105px   
            .searchListItem
                position relative
                display  flex
                padding 10px 
                bottom-border-1px(#eee)
                .imgWrapper
                    width 15px
                    height 15px 
                    img
                        width 100%
                        height 100% 
                .textT
                    margin-left 10px        
                      
                               
    .hotSearch
        .hotTitle
            height 41px        
            color #999999
            line-height 41px
            font-size 16px
            bottom-border-1px(#eeeeee)
        .hotItemWrapper
            display flex   
            flex-wrap wrap 
            .hotItem
                border 1px solid #eeeeee   
                width 55px  
                height 28px
                text-align center
                line-height  28px
                margin 20px 10px 0 10px
</style>
