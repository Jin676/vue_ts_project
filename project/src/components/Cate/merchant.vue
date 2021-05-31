<template>
<div class="merchantWrapper">
    <div class="position">
        <div class="positionImg">
            <img src="../../assets/icon/position.png" alt="">
        </div>
        <span>北极湾小区1栋104号</span>
    </div>
    <div class="position">
        <div class="positionImg">
            <img src="../../assets/icon/xiangqing.png" alt="">
        </div>
        <span>提供高品质配送服务</span>
    </div>
    <div class="position">
        <div class="positionImg">
            <img src="../../assets/icon/peisongshijian.png" alt="">
        </div>
        <span>配送时间: 9:00-24:00</span>
    </div>
    <div class="position">
        <div class="positionImg">
            <img src="../../assets/icon/gou.png" alt="">
        </div>
        <span>商家服务</span>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
    .merchantWrapper
        padding 10px
        font-size 14px
        .position 
            display flex
            bottom-border-1px(#eee)
            margin-top 20px
            .positionImg
                height 15px
                width 15px
                img 
                    width 100%
                    height 100%
            span 
                margin-left 10px        

</style>
