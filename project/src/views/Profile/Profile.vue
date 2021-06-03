<template>
<div class="profileContainer">
    <div class="imgWraper">
        <div>
            <div>
                <img src="../../assets/profile.jpg" alt="">
            </div>
             <span>{{tel?tel:"注册/登陆"}}</span>
        </div>
    </div>

    <!-- menu -->
    <div class="menuContainer">
        <div class="menuItem">
            <div>
                <img src="../../assets/下载.png" alt="">
                <span>美团红包</span>
            </div>
            <div> > </div>
         </div>
        <div class="menuItem">
            <div>
                <img src="../../assets/定位.png" alt="">
                <span>收货地址</span>
            </div>
            <div> > </div>
         </div>
        <div class="menuItem">
            <div>
                <img src="../../assets/常见问题.png" alt="">
                <span>常见问题</span>
            </div>
            <div> > </div>
         </div>
        <div class="menuItem">
            <div>
                <img src="../../assets/协议.png" alt="">
                <span>美团协议与说明</span>
            </div>
            <div> > </div>
         </div>
        <div class="menuItem">
            <div v-if="tel">
                <img src="../../assets/退出登陆.png" alt="">
                <span @click="logOut" >退出登陆</span>
            </div>
            <div  v-if="tel"> > </div>
         </div>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import {mapState} from "vuex"
import {Store, useStore} from "vuex"
import {LOGOUT} from "../../store/modules/mutations_type"
export default defineComponent({
    setup(){
    const store:Store<any> = useStore()
    const tel =computed(() => {
        return store.state.login.user.phone
     })
    
    function logOut(){
        if(confirm("确认退出吗？")){
            store.commit(LOGOUT)
        }
    }

        return {
            tel,logOut
        }
    }
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
    .profileContainer
            display flex 
            flex-direction column
            text-align center/
        .imgWraper
            width 100%
            background url(../../assets/backgroun.png)
            height 164px
            div 
                margin-top 35px
                img 
                    width 82px 
                    height 82px
                    border-radius 50%       
        .menuContainer
            width 100%
            .menuItem
                display flex
                height 41px
                width 100%
                justify-content space-between
                align-items center
                box-sizing border-box
                padding 0 10px
                bottom-border-1px(#eeeeee) 
                div 
                   img 
                    width 15px 
                    height 15px
                    vertical-align middle
                    margin-right 10px
                   span 
                    width 100%            

</style>
