<template>
<div class="evaluateContainer">
    <div class="evaluateHeader">
        <div class="left">
            <div class="text">4.8</div>
            <div class="price">商家评分</div>
        </div>
        <div class="contentWrapper">
            <div class="content">
                <div class="contentTextName">口味</div>
                <div class="star"><Stars :rating="4.8"></Stars></div>
                <div class="ceontentText">4.8</div>
            </div>
            <div class="content">
                <div class="contentTextName">包装</div>
                <div class="star"><Stars :rating="4.8"></Stars></div>
                <div class="ceontentText">4.8</div>
            </div>
        </div>
        <div class="right">
            <span style="color:#FFB000;font-size:27px">4.9</span>
            <div style="color:#999;">配送评分</div>
        </div>
    </div>
    <!-- ratingEl标签 -->
    <div class="evaluateContent">
        <div class="evaluateItemWrapper">
            <span class="item active" >全部(150)</span>
            <span class="item">好评(462)</span>
            <span class="item">差评(11)</span>
            <span class="item">有图评价(0)</span>
            <span class="item">味道赞(150)</span>
        </div>
    </div>
    <div style="height:20px;background:#fff"></div>
    <!-- 评论内容 -->
    <div class="ratingContainnerWrapper" v-for="item in ratingList.data" :key="item.userID">
        <div class="ratingContent">
            <div class="ratingItem">
                <div class="imgWrapper">
                    <img  :src="item.userPicUrl?item.userPicUrl:'../../assets/daishutou.png'" alt="">
                </div>
                <div class="ratingTextContent">
                        <div class="contentText">
                            <span class="name">{{item.userName}}</span>
                            <span class="time">{{item.deliveryTime}}</span>
                        </div>
                        <div class="rightTime">{{item.commentTime}}</div>
                </div>
        </div>
            <div class="ratingPText">
                <span>
                    {{item.content}}
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
import { defineComponent,onMounted, reactive } from 'vue';
import useCurrentInstance from "../../hooks/useCurrentInstance";
import {useRoute} from "vue-router"
import Stars from "../Stars/Stars.vue"
export default defineComponent({
    components:{
        Stars
    },
    setup(){
        const { globalProperties } = useCurrentInstance();
        const route = useRoute()
        const ratingList = reactive({
            data:[]
        })
        onMounted(() => {
           getRating()
        })

        async function getRating(){
           let result =await globalProperties.$API.reqRating({id:route.params.id})
           ratingList.data =result.data.list
        }

        return{
        ratingList
        }
    }
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
        .contentWrapper
            display flex 
            flex-direction column                
            .content
                display flex
                margin-top 6px
                div 
                    margin-left 6px
                .class="star"
                    position absolute 
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
