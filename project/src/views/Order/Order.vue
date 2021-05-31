<template>
<div class="container">
    <div class="header">
        <div class="left">
            <img src="../../assets/店铺图片.jpg" alt="">
            <div>三品阁米线</div>
        </div>
        <div class="right"> > </div>
    </div>
    <div class="content">
        <div class="item">
            <span>香辣肉丝</span>
            <div> x1</div>
        </div>
        <div class="price">
            <div class="data">
                2021-05-21 18:20
            </div>
            <div class="price2">实付￥43.6</div>
        </div>
    </div>
    <div class="after">
        <div>已完成</div>
        <div class="right">
            <div class="remove">删除</div>
            <div class="btn">再来一单</div>
        </div>
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
    .container
        box-sizing border-box
        width 375px
        height 55px
        .header
            display flex
            line-height 35px
            justify-content space-between
            padding 10px 10px
            bottom-border-1px(#eeeeee)
            .left
                display flex 
                img 
                    width 35px 
                    height 35px
                    border-radius 50%
                    vertical-align middle
                div 
                    margin-left 10px        
            .right
                font-size 20px 
        .content
            padding 10px
            bottom-border-1px(#eeeeee)
            .item 
                display flex 
                justify-content space-between
            .price
                display flex
                justify-content space-between 
                .data
                    color #999999
        .after
            padding 10px
            display flex
            justify-content space-between
            align-items center
            .right
                display flex
                .remove 
                    border-radius: 3px;
                    display: flex;
                    color: #333;
                    height 28px
                    line-height 28px
                    padding: 0 10px;
                    border: 1px solid #ddd;
                    text-align: center;
                    margin-right 10px
                .btn 
                    display: inline-block;
                    color: #333;
                    border: solid 1px #FFD161;
                    line-height 28px
                    padding: 0 10px;
                    border-radius: 3px;
                    background-color: #FFD161;                            

        

</style>
