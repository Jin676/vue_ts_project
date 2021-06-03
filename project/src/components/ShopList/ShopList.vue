<template>
<div class="shopListContainer">
    <ul class="shopListWrap">
        <li @click="toCate(item.mtWmPoiId)" class="shopListItem" v-for="item in shopListDatas" :key="item.mtWmPoiId">
            <div class="leftImg">
                <img :src="item.picUrl" alt="">
            </div>
            <div class="content">
                <span class="title">{{item.shopName}}</span>
                <div class="contentText">
                    <span>
                       <Stars :rating="item.rating"/>
                    </span>
                    <span>{{item.rating}}</span>
                    <span>{{item.monthSalesTip}}</span>
                </div>
                <span class="disp">{{item.minPriceTip}} {{item.shippingFeeTip}}</span>
            </div>
            <div class="rightTxet">
                <span>{{item.deliveryTimeTip}}</span> &nbsp
                <span>{{item.distance}}</span>
            </div>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import { computed, defineComponent,onMounted,ref, watch } from 'vue';
import {Store, useStore} from"vuex"
import {Router, useRouter,useRoute} from "vue-router"
import Stars from "../Stars/Stars.vue"
export default defineComponent({
    components:{
        Stars
    },
    props:{
        navid:{
            type:Number,
            required:true
        },
        shopListData:{
            type:Array,
            required:true
        }
    },
    setup(props,{emit}){
        const router:Router= useRouter()
        const route= useRoute()
        const store:Store<any> = useStore()
        const shopListDatas:any = ref([])

           
        onMounted(() => {
            store.dispatch("getShops")
        })
        const shopListData:any=computed(()=>{
                return store.state.shopList.shopListData
         })

        function toCate(id:number){
            //router.push(`/cate/${id}/menu`)
            router.push(`/cate/${id}/menu`)
        }
        //传入的navid
        watch(()=>props.navid,()=>{
            if(props.navid !== 0){
                shopListDatas.value = shopListData.value.filter((item:any)=>item.navType ===props.navid)
               
            }
       },{immediate:true})
       
       //监视msite中数据
        watch(()=>props.shopListData,()=>{
        shopListDatas.value = props.shopListData
       },{immediate:true})

        //监视shopListData,不加value
        watch(shopListData,()=>{
             shopListDatas.value = shopListData.value.filter((item:any)=>item.navType ===props.navid)
        })
        return {
            shopListDatas,toCate
        }
        
    }
})
</script>

<style scoped lang="stylus">
    .shopListContainer
        padding 10px
        .shopListWrap
            .shopListItem
                position relative
                display flex
                margin-bottom 25px
                .leftImg
                    width 76px
                    height 57px
                    img 
                        width 100% 
                        height 100%
                .content
                    margin-left 10px
                    .title
                        font-size: 16px;
                        color: #333;
                        line-height: 1.4;
                        white-space: nowrap;
                        width: 80%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 600;
                    .contentText
                        margin 7px 0
                        span 
                            margin-left 3px    
                .rightTxet
                    box-sizing border-box
                    position absolute
                    right 0
                    top 26px         
                     



</style>
