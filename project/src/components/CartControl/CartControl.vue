<template>
<div class="cartcontrol">
  <div class="iconfont iconjia_huaban-" @click="changeFoodCount(false)" ></div>  
  <!-- 因为外边多包了一层food因此.food多了一个 -->
  <div class="cart-count">{{food.food.count?food.food.count:null}}</div>
  <div class="iconfont iconcombinedshape" @click="changeFoodCount(true)"></div>
</div>
</template>

<script>
import { computed, defineComponent} from 'vue'
import {useStore} from "vuex"
import _ from "lodash"
export default defineComponent({
    //注意点setup中写props属性，也需要在外部声明否则没有数据
    props:{
        food:{
            required:true
        }
    },
    setup(food) {
        const store = useStore()
        function changeFoodCount(isAdd){
            //将传进来的food再传到vuex中进行修改,food是点击的单项商品
           store.dispatch("changeFoodCount",{isAdd,food:food.food})
            
        }
        _.throttle(changeFoodCount)
        return{
        changeFoodCount,food
        }
    },
})
</script>


<style lang="stylus">
  .cartcontrol
    font-size 0
    margin-top -10px
    .cart-decrease
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
    .iconjia_huaban-
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      padding-right 2px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .iconcombinedshape
      display inline-block
      padding 4px
      line-height 24px
      font-size 24px
      
      

</style>


