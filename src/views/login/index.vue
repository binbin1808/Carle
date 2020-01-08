<template>

<div class="container">
  <page-header title="登录" left-arrow left-text="返回" backPath="/"></page-header>
  <div class="box">
    <van-cell-group>
      <van-field v-model="phone" placeholder="请输入电话号码" label="手机号" />
      <van-field v-model="vcode" placeholder="请输入验证码" label="短信验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button></van-button>
  </div>
</div>
</template>

<script>
// import  aaa from '@/components/global/aaa'
// import BottomMenu from '@/components/global/bottom-menu'
export default {
    name: 'login',
    // components:{aaa}
    data(){
      return{
        phone: '',
        vcode: ''
      }
    },
    methods: {
      login () {
        let a={phone:this.phone,vcode:this.vcode}
      this.$apis.post(this.$api.login,{phone:this.phone,vcode:this.vcode}).then(res => {
          if (res.status === 0) {
            this.$toast.success('ssssss')
            console.log(res.status== 0)
            // var token=localStorage.setItem(res.token)
          }
        })
        .catch(() => {
          this.$toast.fail('sss')
        })
    }
    }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  .box{
    height: calc(100% - 80px);
  }
}
</style>