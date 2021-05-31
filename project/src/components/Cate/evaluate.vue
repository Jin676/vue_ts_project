<template>
<div class="evaluateContainer">
    <div class="evaluateHeader">
        <div class="left">
            <div class="text">4.8</div>
            <div class="price">商家评分</div>
        </div>
        <div>
            <div class="content">
                <span class="contentTextName">口味</span>
                <span>☆☆☆☆☆</span>
                <span class="ceontentText">4.8</span>
            </div>
            <div class="content">
                <span class="contentTextName">包装</span>
                <span>☆☆☆☆☆</span>
                <span class="ceontentText">4.8</span>
            </div>
        </div>
        <div class="right">
            <span>4.9</span>
            <div>配送评分</div>
        </div>
    </div>
    <!-- ratingEl标签 -->
    <div class="evaluateContent">
        <div class="evaluateItemWrapper">
            <span class="item active" >全部(150)</span>
            <span class="item">好评(150)</span>
            <span class="item">差评(150)</span>
            <span class="item">有图评价(150)</span>
            <span class="item">味道赞(150)</span>
        </div>
    </div>
    <div style="height:20px;background:#fff"></div>
    <!-- 评论内容 -->
    <div class="ratingContainnerWrapper">
        <div class="ratingContent">
            <div class="ratingItem">
                <div class="imgWrapper">
                    <img src="../../assets/daishutou.png" alt="">
                </div>
                <div class="ratingTextContent">
                        <div class="contentText">
                            <span class="name">QOP112312576</span>
                            <span class="time">16分钟送达</span>
                        </div>
                        <div class="rightTime">2021-05-25</div>
                </div>
        </div>
            <div class="ratingPText">
                <span>
                    好吃，而且分量还不少，今天刚打了疫苗不能吃辣，卖家做的口味刚刚好，价格也不贵，好评！
                </span>
            </div>
            <div class="shopRtring">
                <div class="spanWrapper">
                    <span>商家回复:谢谢</span>
                </div>
            </div>
        </div>
        <div style="height:10px;background:#fff"></div>
        <div class="ratingContent">
       <div class="ratingItem">
            <div class="imgWrapper">
                <img src="../../assets/daishutou.png" alt="">
            </div>
            <div class="ratingTextContent">
                    <div class="contentText">
                        <span class="name">QOP112312576</span>
                        <span class="time">16分钟送达</span>
                    </div>
                    <div class="rightTime">2021-05-25</div>
            </div>
       </div>
        <div class="ratingPText">
            <span>
                好吃，而且分量还不少，今天刚打了疫苗不能吃辣，卖家做的口味刚刚好，价格也不贵，好评！
            </span>
        </div>
        <div class="shopRtring">
            <div class="spanWrapper">
                <span>商家回复:谢谢</span>
            </div>
        </div>
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
    .evaluateContainer
        background: #f4f4f4;
        .evaluateHeader
            display flex
            box-sizing border-box
            width 375px
            height 80px
            padding 20px 
            justify-content space-between
            text-align center
            background #fff
            margin-bottom 10px
            .left 
                .text
                    color #FFB000
                    font-size 27px
                .price 
                    color: #999;    
            .content
                margin-top 5px
                span 
                    margin-left 15px 
                .ceontentText    
                    color #FFB000 
                .contentTextName  
                    font-size 13px
                    color #666
                    vertical-align bottom 
            .right               
                span 
                    font-size: 27px;
                    height: 30px;
                    line-height: 30px;
                    color: #999;
                    text-align: center;
                    margin-bottom: 1px;
                div 
                    color: #999;    
        .evaluateContent
            box-sizing border-box
            width 375px 
            height 52px 
            padding  0px 14px 0px 0
            .evaluateItemWrapper
                background #fff
                width 375px
                padding-top 10px
                bottom-border-1px(#eee)
                .item
                    white-space nowrap
                    padding 5px 12px
                    // background: #fffbf1;
                    // color: #FFB000;
                    // text-align center
                    line-height 26px
                    // border-style: solid;
                    border-width: 1px;
                    // border-color: #FFB000;
                    border-radius: 26px;
                    margin-left 10px
                    color #666
                    &.active 
                      border-style: solid;  
                      background: #fffbf1;
                      color: #FFB000;
                      position: relative;
                      border-color: #FFB000;  
        .ratingContent
            background #fff
            padding 10px
            .ratingItem
                 display flex
                .imgWrapper
                    width 40px 
                    height 40px
                    margin-left 10px
                    border-radius 50%
                    img 
                        width 100%
                        height 100%
                .ratingTextContent
                    margin-left 10px 
                    width 100% 
                    display flex     
                    justify-content space-between
                    .contentText
                        display flex 
                        flex-direction column
                        .name
                            font-size 16px
                        .time  
                            color #666666  
                    .rightTime
                        color #898989 
            .ratingPText
                padding-left 54px  
                font-size 14px   
            .shopRtring
                width 305px
                margin-top 10px
                padding-left 50px
                .spanWrapper
                    background #f4f4f4
                    padding 6px
                    color #666666                  
                                      

</style>
