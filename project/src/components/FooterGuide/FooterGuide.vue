<template>
  <div id="footerContainer">
    <div @click="goPath('/msite')" class="footerItem">
      <text class="iconfont iconhome" :class="{active:$route.path ==='/msite'}"></text>
      <span>首页</span>
    </div>
    <div  @click="goPath('/order')" class="footerItem">
      <text class="iconfont icondingdan1" :class="{active:$route.path ==='/order'}"></text>
      <span>订单</span>
    </div>
    <div  @click="goPath('/profile')" class="footerItem">
     <text class="iconfont iconwode" :class="{active:$route.path ==='/profile'}"></text>
      <span>我的</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useRouter} from "vue-router"
export default defineComponent({
    setup(){  
    const router = useRouter()   
    function goPath(path:string){
        router.push(path)
    }    
        return{
            goPath
        }
    }
});
</script>

<style scoped lang="stylus">
// stylus引入不带url
 @import "../../common/mixins.styl"
    #footerContainer
        position fixed
        z-index 9999
        box-sizing border-box
        padding 2px 0; 
        bottom 0
        left 0
        display flex
        width 100%
        justify-content space-around
        background #ffffff
        opacity 1
        .footerItem
            display flex 
            flex-direction column
            width 125px 
            height 49px
            text-align center
            line-height 27px 
            text 
                font-size 28px
            span 
                font-size 12px 
            .active{
                color:#FFC43C
                }      

</style>

