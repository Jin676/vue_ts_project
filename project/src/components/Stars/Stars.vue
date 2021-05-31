<template>
  <div class="star star-24">
    <span class="star-item on" :class="item" v-for="(item,index) in stars" :key="index"></span>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted,computed} from 'vue'
export default defineComponent({
    props:{
     rating:{
         required:true,
         type:Number,
         default:5
     }
 },
    setup(props){
    
    const stars = computed(()=>{
     let result = []
     let rating = props.rating     
     //全星 获得全星个数,for循环遍历往里面添加"on"
    let onClass = Math.floor(rating)
    for (let i = 0; i < onClass ;i++) {
          result.push("on")
        
    }
     //半星 1 || 0 看评分是否有小数位,评分 - onClass 大于0 有小数
     (rating - onClass > 0 ) && result.push("half") 

     //灰色星星
     5 - (Math.ceil(rating)) &&result.push("off") 
     return result
    })
        return{
            stars
        }
    }
})
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "../../common/mixins.styl"
               .star // 2x图 3x图
                    float left
                    font-size 0
                    .star-item
                      display inline-block
                      background-repeat no-repeat
                    &.star-48
                      .star-item
                        width 20px
                        height 20px
                        margin-right 22px
                        background-size 20px 20px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../common/images/stars/star48_on')
                        &.half
                          bg-image('../../common/images/stars/star48_half')
                        &.off
                          bg-image('../../common/images/stars/star48_off')
                    &.star-36
                      .star-item
                        width 15px
                        height 15px
                        margin-right 6px
                        background-size 15px 15px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../common/images/stars/star36_on')
                        &.half
                          bg-image('../../common/images/stars/star36_half')
                        &.off
                          bg-image('../../common/images/stars/star36_off')
                    &.star-24
                      .star-item
                        width 10px
                        height 10px
                        margin-right 3px
                        background-size 10px 10px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../common/images/stars/star24_on')
                        &.half
                          bg-image('../../common/images/stars/star24_half')
                        &.off
                          bg-image('../../common/images/stars/star24_off')
</style>
