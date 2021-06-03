<template>
<!-- header -->
<div class="Header">
    <div class="leftP" v-if="addressB">
        <div>{{addressB.address}}</div>
    </div>
    <div class="rightIpt" :class="{clickSty}">
        <span class="iconfont iconsousuo"></span>
        <button @click="toSearch">请输入您想查找的商品</button>
    </div>
</div>
<div style="height:50px "></div>
<!-- kingkong -->

    <swiper
      class="kingkongContainer"
      ref="swiper1"
      :slides-per-view="5"
      :slides-per-Group="5"
      :slides-per-column="2"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      v-if="kingkongList"
    >
      <swiper-slide
        class="item" v-for="item in kingkongList" :key="item.cateId"  @click="router.push(`/kingkongList?navType=${item.cateId}`)"
      >
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </swiper-slide>
      
    </swiper>

    <!-- 附近商家 -->
    <div class="title">
        —— <span>附近商家</span> ——
    </div>

    <!-- 排序 -->
    <div class="content">
        <div class="sort">
            <div @click="zonghe">综合排序</div>
            <div @click="monthSalesTipTop">销量最高</div>
            <div @click="distanceTop">距离最近</div>   
            <div @click="ratingSort">评分最高</div>   
        </div>
    </div>

    <!-- 店铺列表 -->
    <ShopList :shopListData="shopListData"></ShopList>

</template>

<script lang="ts">
import { computed, defineComponent,onMounted } from 'vue';
import useCurrentInstance from "../../hooks/useCurrentInstance";
import ShopList from "../../components/ShopList/ShopList.vue"
import SwiperCore, { Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import"../../../public/css/swiper.css"
import { Router,useRouter}from "vue-router"
import {Store, useStore} from"vuex"
import _ from "lodash"
SwiperCore.use([ Pagination, Autoplay, A11y]);
export default defineComponent({
    components: {
    Swiper,
    SwiperSlide,
    ShopList
    },
    setup(){
    const { globalProperties } = useCurrentInstance();
    const router:Router= useRouter()
    const store:Store<any> = useStore()

    const shopListData=computed(()=>{
        return store.state.shopList.shopListData
     })
    onMounted(() => {
        store.dispatch("getKingkongAction")
        store.dispatch("getAddress")
    })

    const addressB=computed(()=>{
        return store.state.addressA.address
    })
    const kingkongList = computed(()=>{
        return store.state.kingkong.kingkongList
    })

    function toSearch(){
      router.push("/search")
    }
    //评分排序
    function ratingSort(){
       shopListData.value.sort(function(a:any,b:any):number{
            return b.rating - a.rating
        })
    }
    //距离排序
    function distanceTop(){
         shopListData.value.sort(function(a:any,b:any):number{
            //parseInt字符串转换成number
            return  parseInt(a.distance) -  parseInt(b.distance)
        })
        
    }
    //销量排序
    function monthSalesTipTop(){
         shopListData.value.sort(function(a:any,b:any):number{
            //parseInt字符串转换成number
            //substring调用2次删除前面2位
            return  parseInt(a.monthSalesTip.substring(1).substring(1))  -  parseInt(b.monthSalesTip.substring(1).substring(1)) 
        })
      
    }
    //综合
    function zonghe(){
        store.dispatch("getShops")
    }

        return{
            kingkongList,globalProperties,toSearch,addressB,ratingSort,distanceTop,monthSalesTipTop,zonghe,router,shopListData
        }
    }
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
    .Header
        position fixed 
        z-index 99999
        width 100%
        display flex
        justify-content space-around
        text-align center 
        align-items center
        height 50px
        background #1c1b20
        padding 0 10px 
        .leftP 
          &::before
                    position absolute
                    left 8px
                    top 16px
                    content: '';
                    width: 15px;
                    height: 15px;
                    background: url(../../assets/position.png)
                    background-repeat: no-repeat;
                    background-size: contain;
                    display: inline-block;
                    margin-right: 5px;
                    -webkit-flex-shrink: 0;
                    flex-shrink: 0;
            div 
                width 80px 
                height 30px
                color white
                max-width: 140px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;     
                line-height 30px
                font-size 14px
        .rightIpt
            position: relative;
            box-sizing border-box
            width 239px 
            height 30px
            background: #fff;
            border-radius: 100px;  
            .iconsousuo
                position absolute
                left 30px
                top 6.5px
                z-index 99
            button 
                width: 100%;
                background #ffffff
                position: relative;
                border: none;
                height: 30px;
                padding-left: 30px;
                box-sizing: border-box;
                border-radius: 100px;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 30px;
                font-size: 14px;
                opacity: 1;
                color #3333
    .kingkongContainer 
        width 375px
        height 180px
        margin-top 18px  
        .swiper-pagination-bullet-active
            background #fcc449  
        .item
            display flex  
            flex-direction column
            align-items center
            width 100%
            height 80px
            margin-bottom 10px
            img
                width 44px 
                height 44px
                margin-bottom 5px
    .title 
        height 23px             
        margin 15px 0 5px 0
        text-align center
        span 
            font-size: 17px
            font-weight: 800
            line-height: 1.4
    .content
        .sort
            display flex 
            justify-content space-around 
            color #666666   
            height 44px
            line-height 44px
            border-bottom 1px solid #e4e4e4
            border-top 1px solid #e4e4e4
</style>
