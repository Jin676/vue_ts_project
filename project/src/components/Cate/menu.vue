<template>
<div class="cateMenuContainer">
    <div class="LeftWrapper" ref="scroll1">
        <ul class="LeftContent" v-if="cateList">
        <li @click="changeNavIndex(index)" :class="{active: navIndex === index}" class="leftItem" v-for="(item,index) in cateList" :key="index">
            <img v-if="item.icon" :src="item.icon" alt="">
            <span>{{item.name}}</span>
        </li>
    </ul>
    </div>
    <div class="rightWrapper" ref="scroll2">
        <ul class="rightContent goods" ref="rightUl1" v-if="cateList">
            <li class="rightItem good_item" v-for="good in cateList" :key="good.tag">
                <h1 class="good_title" style="font-size:12px">{{good.name}}</h1>
                    <ul class='foods' v-if="good">
                        <li class="food food_item" v-for="food in good.spus" :key="food.id">
                            <div class="foodImgWrapper">
                                <img :src="food.picture" alt="">
                            </div>
                            <div class="text_wrapper">
                                <span class="food_title">{{food.name}}</span>
                            <div class="food_rating">
                                <!-- <span class="miaoshu">详细描述</span> -->
                                <span>{{food.month_saled_content}}</span>
                                <span>{{food.praise_content}}</span>
                            </div>
                            <div class="food_price">
                                <div class="price">¥ {{food.min_price}}</div>
                                <div class="controle"><CartControl :food="food"/></div>
                            </div>
                            </div>
                        </li>
                    </ul>
            </li>
        </ul>
    </div>
    <shopCart :cateList="cateList"></shopCart>
</div>
</template>

<script lang="ts">
import { computed, defineComponent,onMounted,ref, watch,nextTick,reactive } from 'vue';
import BScroll from "@better-scroll/core";
import {Store, useStore} from "vuex"
import CartControl from "../CartControl/CartControl.vue"
import shopCart from "../shopCart/shopCart.vue"
interface Top {
  top: number[];
}
export default defineComponent({
    components:{
        CartControl,shopCart
    },
    setup(){
        let left: any;
        let right: any;
        const store:Store<any> =useStore()
        const scroll1 = ref<HTMLElement|null>(null)
        const scroll2 = ref<HTMLElement|null>(null)
        const rightUl1 = ref<HTMLElement|null>(null)
        const touchLength = ref(0);
        const scrollHeight = reactive<Top>({
        top: [],
        });
        let navIndex = ref(0)
        onMounted(() => {
            init()
        })
        const cateList =computed(()=>{
            return store.state.cate.cateList
        })
        function init(){

        if(left || right){
        left.refresh(); //重新刷新当前实例
        right.refresh(); //重新刷新当前实例
        }else{
            if(scroll2.value &&scroll1.value){
            left = new BScroll(scroll1.value, {
              probeType: 3,
              click: true,   
              })

            right = new BScroll(scroll2.value, {
              probeType: 2,
              click: true, 
              scrollY: true  
              })
            left.on("scroll", (ctx:any) => {
                touchLength.value  = Math.abs(ctx.y);
              });
            right.on("scroll", (ctx: any) => {
                touchLength.value = Math.abs(ctx.y);
              });
            }
          }    
        }
        watch(cateList,()=>{
            nextTick(()=>{
                init()
                scrollHeightF()
            })
        })

        function scrollHeightF() {
            let rightUl:any = rightUl1.value;
            rightUl= Array.from(rightUl.children);
            let scrollArr = [];
            scrollArr.push(0);
            rightUl.reduce((pre: number, item: any) => {
                scrollArr.push(pre + item.clientHeight);
                return pre + item.clientHeight;
            }, 0);
            scrollHeight.top = scrollArr;
         }
        const TouchNavIndex = computed(() => {
        let TouchNavIndex = scrollHeight.top.findIndex((item, index) => {
            //    console.log(scrollHeight.top[index]);
            //    console.log(scrollHeight.top[index+1]);
            return (
            touchLength.value >= scrollHeight.top[index] &&
            touchLength.value < scrollHeight.top[index + 1]
            );
        });
        return TouchNavIndex;
        });
        function changeNavIndex(index: number) {
            
        navIndex.value = index
        let y = scrollHeight.top[index];
        right.scrollTo(0, -y, 1000);
        }
        return{
            left,
            right,scroll1,cateList,navIndex,scroll2,rightUl1,changeNavIndex,TouchNavIndex
        }
    }
})
</script>

<style scoped lang="stylus">
    .cateMenuContainer
        box-sizing border-box
        display flex
        .LeftWrapper
            height: calc(100vh - 165px);
            overflow hidden
            .LeftContent
                width 70px
                background #eeeeee
                .leftItem
                    width 100%
                    height 17.6px
                    padding 12px 5px
                 .active
                       background #ffffff
                    img 
                        width 15px 
                        height 15px
                        vertical-align top
                    span
                        margin-left 4px
        .rightWrapper
            height: calc(100vh - 165px);
            overflow hidden    
            .rightContent
                width 305px
                padding-left 10px 
                .rightItem
                    width 305px
                    h1 
                        height 36px
                        line-height 36px
                        font-size: 12px;
                    .foods
                        .food
                            margin-bottom 10px
                            display flex 
                            .foodImgWrapper
                                flex-shrink 0
                                width 75px 
                                height 75px 
                                img 
                                    width 100%
                                    height 100%
                            .text_wrapper
                                padding-left 10px
                                width 90% 
                                .food_title
                                    font-size 16px
                                    font-weight: bold;
                                    color: #333333;
                            .food_rating
                                padding 7px 0 
                                .miaoshu
                                    display -webkit-box
                                    -webkit-line-clamp 1
                                    -webkit-box-orient vertical
                                    text-overflow ellipsis
                                    overflow hidden
                                    margin 5px 0
                            .food_price
                                position relative
                                display flex 
                                justify-content space-between
                                .controle
                                    position absolute
                                    right 20px
                                         
</style>        

