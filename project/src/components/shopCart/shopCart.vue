<template>
<div class="cartContainer">
    <div class="cartWrapper">
        <div class="left">
            <div class="cartImg" v-if="price=== '0.00'"><img src="../../assets/cartImg.png" alt=""></div>
            <div class="cartImg" v-else><img src="../../assets/cartImgH.png" alt=""></div>
            <div style="width:60px"></div>    
            <span class="Price" v-if="price>0">¥ {{price}}</span>
            <span class="Price" style="font-size:12px;color:#999999" v-else>预估配送费 ¥0元</span>
        </div>
        <div class="total" v-if="price>0">去结算</div>
        <div v-else>¥0起送</div>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, watch,ref } from 'vue';
import {mapGetters,mapState} from "vuex"
import {useStore} from "vuex"
export default defineComponent({

    setup(){
        const store = useStore()
        const price=computed(()=>{
            return store.getters.totalPrice.toFixed(2)
        })
        return{
            price
        }
    }
    
})
</script>

<style scoped lang="stylus">
    .cartContainer
        position fixed
        bottom 0
        width 100%
        color #999999
        .cartWrapper
            box-sizing border-box
            display flex
            height 50px
            background #38383c
            width 100%
            line-height 50px
            justify-content space-between
            padding 0 10px
            .left
                display flex
                .cartImg
                    position absolute
                    top -20px
                    width 47px 
                    height 69px
                    img 
                        width 100%
                        height 100%
                        vertical-align middle
                .Price
                    font-size 24px        
                    color #fff
            .total
                position relative
                right -10px
                width 48px  
                height 50px  
                text-align center 
                padding 0 25px
                background #F8C74E
                color #fff
</style>
