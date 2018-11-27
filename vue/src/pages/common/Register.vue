<template>
  <div class="page-register">
    <x-input class="username" placeholder="请输入手机号/邮箱" v-model="form.username">
      <div slot="label">
        <iconfont :name="`icon-shouji`"></iconfont>
      </div>
    </x-input>

    <cell-box class="verificat">
      <x-input class="use_verificat" placeholder="请输入验证码" v-model="form.verificat">
        <div slot="label">
          <iconfont :name="`icon-tianxie`"></iconfont>
        </div>
      </x-input>
      <x-button class="get_verificat">获取验证码</x-button>
    </cell-box>

    <x-input class="password" placeholder="请输入密码" v-model="form.password">
      <div slot="label">
        <iconfont :name="`icon-tianxie`"></iconfont>
      </div>
    </x-input>

    <x-input class="password" placeholder="请再次输入密码" v-model="form.repassword">
      <div slot="label">
        <iconfont :name="`icon-tianxie`"></iconfont>
      </div>
    </x-input>

    <x-button class="register" @click.native="register">注册</x-button>
  </div>
</template>

<script>
import { XInput, CellBox, XButton } from 'vux'
import Iconfont from '../../components/Iconfont'
export default {
    name: 'Register',
    components: {
        XInput,
        CellBox,
        XButton,
        Iconfont
    },
    data () {
        return {
            form: {
                username: '',
                verificat: '',
              	password: '',
              	repassword: ''
            }
        }
    },
    methods: {
        get_verificat () {
        },
        register () {
            if (!this.form.username) {
                this.$vux.toast.text('请输入手机号/邮箱')
                return
            } else if (!this.form.verificat) {
                this.$vux.toast.text('请输入验证码')
                return
            } else if (!this.form.password) {
                this.$vux.toast.text('请输入密码')
                return
            } else if (!this.form.repassword) {
                this.$vux.toast.text('请确认密码')
                return
            }
            this.$http.post(`/api/register`, {
                username: this.form.username,
                verificat: this.form.verificat,
            	password: this.form.password,
            	repassword: this.form.repassword
            }).then(res => {
                console.log(res)
                if (res.data.msg === 'success') {
                    
                } else {
                    this.$vux.toast.text(res.data.data)
                }
            })
        }
    }
}
</script>

<style lang="less">
  .page-register {
    height: 100%;
    background-color: @theme-light-blue;
    padding-top: 125px;
    font-size: 14px;
    .vux-x-input {
      width: 340px;
      height: 42px;
      overflow: hidden;
      border-radius: 5px;
      padding: 0 13px;
      background-color: #fff;
    }
    .weui-btn {
      background-color: @theme-dark-blue;
      color: #fff;
    }
    .vux-x-input .icon {
      width: 17px;
      height: 17px;
      margin-top: 1px;
      margin-right: 5px;
    }
    .username, .verificat, .password {
      margin: 10px auto 0;
      font-size: 14px;
    }
    .verificat {
      width: 340px;
      padding: 0;
      margin-top: 10px;
    }
    .use_verificat {
      width: 190px;
      margin-right: 10px;
    }
    .get_verificat {
      flex: 1;
      height: 42px;
      font-size: 14px;
    }
    .register {
      width: 225px;
      height: 30;
      margin: 60px auto 0;
      font-size: 13px;
    }
  }
</style>
