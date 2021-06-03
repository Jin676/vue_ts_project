<template>
<div class="navtypeContainer">
    <div class="navWrapper">
            <div class="navListWrapper" ref="scroll1">
                <ul class="navContent">
                    <li @click="changeNavIndex(index)" class="navContentItem" v-for="(item,index) in kingkongList" :key="item.cateId">
                        <span @click="navBtn(item.cateId)" :class="{active:navid ===item.cateId}">{{item.name}}</span>
                    </li>
                </ul>
            </div>  
    </div>

    <div class="shopListWrapper">
       <ShopList :navid="navid"></ShopList>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent,ref,onMounted,reactive,computed,watch,nextTick } from 'vue';
import BScroll from "@better-scroll/core";
import { Store,useStore} from 'vuex';
import {useRoute,useRouter} from "vue-router"
import ShopList from "../../components/ShopList/ShopList.vue"
import { SAVE_KINGKONGLIST } from '../../store/modules/mutations_type';
interface Left {
  left: number[];
}
export default defineComponent({
   components:{
       ShopList
   },
    setup(props){
        let navid = ref(0)
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const scrollWidth = reactive<Left>({
        left: [],
        });
        const scroll1 = ref<HTMLElement|null>(null)
        let kingkongList:any = computed({
           get(){
             return store.state.kingkong.kingkongList
           },
           set(val){
               store.state.kingkong.kingkongList = val
           } 
        })
        // const shopList = computed(()=>{
        //     return store.state.shopList.shopListData
        // })

        onMounted(() => {
            init()
             let kingkongDatas
             if(sessionStorage.getItem("kingkongListData")!=="undefined"){
             kingkongDatas =JSON.parse(sessionStorage.getItem("kingkongListData")as string)   
             store.commit(SAVE_KINGKONGLIST,kingkongDatas)
             kingkongList.value = kingkongDatas //使用set方法可以赋值
             }

             store.dispatch("getKingkongAction")
             window.addEventListener("unload",()=>{
                 sessionStorage.setItem("kingkongListData",JSON.stringify(kingkongList.value))
            })

            navid.value = Number(route.query.navType)
        })
          
        let navScroll:any
        function init(){
             if(navScroll){
                 navScroll.refresh()
             }else{
              if(scroll1.value){
                  navScroll = new BScroll(scroll1.value, {
                  probeType: 2,
                  click: true, 
                  scrollX: true  
                  })
                 
              }
             }
        }
        function changeNavIndex(index:number){
            if(scroll1.value){
                let ul:any =scroll1.value.children
                ul = Array.from(ul[0].children)
                let scrollArr = [];
                scrollArr.push(0)
                ul.reduce((pre:number,item:any)=>{
                    //放入数组中
                    scrollArr.push(pre+item.clientWidth)
                    //将之前的高度+当前元素的高度
                    return pre + item.clientWidth
                },0)
                 navScroll.scrollTo(-scrollArr[index], 0, 1000)
            }
        }
          watch(kingkongList.value,()=>{
            nextTick(()=>{
                init()
            })
        },{immediate:true})
        function navBtn(cateId:number){
            navid.value = cateId
            router.replace(`/kingkongList?navType=${cateId}`)
        }
        return{
                navid,scroll1,kingkongList,route,navBtn,changeNavIndex
        }
    }
})
</script>

<style scoped lang="stylus">
    .navtypeContainer
        .navWrapper
            background #fafafa
            .navListWrapper
                width 100%
                white-space nowrap
                overflow hidden
                .navContent
                    display inline-block
                    .navContentItem 
                        display inline-block
                        span
                            height 90% 
                            margin: 0 10px;
                            line-height: 38px;
                            text-align: center;
                            color #666666
                            font-size 16px
                            &.active
                                color: #FFB000;
                                font-weight: 600
                                border-bottom 2px solid #FFB000
                            
                                


</style>
