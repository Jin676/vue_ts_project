<template>
<div class="loginContainer">
    <div class="header">
        <div class="imgWrap">
            <img src="../../assets/daishu.png" alt="">
        </div>
    </div>
    <div class="phoneLogin">
             <div class="phoneWrap">
                <input type="tel" placeholder="请输入手机号码" maxlength="11" v-model="phoneIpt"/>
                 <button  :disabled="phoneIpt.length !== 11||count>0" @click="sendCode">{{count>0?`${count}后获取`:"获取验证码"}}</button>        
            </div>
            <div class="phoneWrap">
                <input type="password" placeholder="请输入短信验证码" maxlength="6" v-model="password"/>
            </div>
                <button class="loginbtn" :disabled="(phoneIpt.length === 11) && (password.length===6)?false:true" @click.prevent="login">登陆</button>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import useCurrentInstance from "../../hooks/useCurrentInstance";
import { Store, useStore } from "vuex";
import {Router, useRouter} from "vue-router"
export default defineComponent({
    setup(){
        const { globalProperties } = useCurrentInstance();
        const router:Router = useRouter()
        const store:Store<any> = useStore()
        const phoneIpt = ref("")
        const password = ref("")
        let count = ref(0)
        let clearTime:any
        async function sendCode(){
            count.value = 6
                clearTime = setInterval(()=>{     
                   count.value--
                   count.value === 0 && clearInterval(clearTime)
               },1000)
            
            let result = await globalProperties.$API.reqSendCode({phone:phoneIpt.value})
        }
        async function login(){
            let result = await globalProperties.$API.ReqSmsLogin({phone:phoneIpt.value,code:password.value})
            //   console.log(result.data.code)
              if(result.code ===1){
                alert("验证码错误")
                password.value =""
              }
              if(result.code ===0){
                   router.replace("/profile")
                   store.dispatch("getuser",result.data)
               } 
        }
        return{
            phoneIpt,password,sendCode,count,login
        }
    }
})
</script>

<style scoped lang="stylus">
@import "../../common/mixins.styl"
    .loginContainer
        font-size 16px
        .header
            width 375px  
            height 200px
            line-height 250px
            .imgWrap
                margin 0 auto 
                width 66px 
                height 66px
                img 
                    width 100%
        .phoneLogin
            box-sizing border-box
            width 100%
            padding 19px  
            .phoneWrap
                display flex 
                justify-content space-between
                padding-bottom 10px
                margin-top 16px
                bottom-border-1px(#eeeeee)
            .loginbtn 
                    display flex 
                    flex-direction column
                    box-sizing border-box
                    border none
                    width 100%
                    height 44px
                    line-height 44px
                    padding-left 150px
                    font-size 16px



</style>
