<template>
  <div class="page-login">
    <x-input class="username" placeholder="请输入手机号/邮箱" v-model="form.username">
      <div slot="label">
        <iconfont :name="`icon-shouji`"></iconfont>
      </div>
    </x-input>

    <cell-box class="verificat"  v-if="!toPassword">
      <x-input class="use_verificat" placeholder="请输入验证码">
        <div slot="label">
          <iconfont :name="`icon-tianxie`"></iconfont>
        </div>
      </x-input>
      <x-button class="get_verificat">获取验证码</x-button>
    </cell-box>

    <x-input v-else class="password" placeholder="请输入密码" v-model="form.password">
      <div slot="label">
        <iconfont :name="`icon-tianxie`"></iconfont>
      </div>
    </x-input>

    <p class="link">
      <span v-if="!toPassword" @click="toPassword = true">密码登录</span>
      <span v-else @click="toPassword = false">验证码登录</span>
        <router-link to="/register">
          <span class="to_register">快速注册</span>
        </router-link>
    </p>

    <x-button class="login" @click.native="login">登录</x-button>

    <div class="login_order">
      <p class="title"><span>其他登录方式</span></p>
      <div class="lists">
        <iconfont class="wechat" :name="`icon-wechat`"></iconfont>
        <iconfont class="qq" :name="`icon-qq`"></iconfont>
        <iconfont class="sina" :name="`icon-sina`"></iconfont>
      </div>
    </div>
  </div>
</template>

<script>
import { CellBox, XInput, XButton } from 'vux'
import Iconfont from '../../components/Iconfont'
export default {
    name: '',
    components: {
        CellBox,
        XInput,
        Iconfont,
        XButton
    },
    data () {
        return {
            toPassword: true,
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login () {
            this.$http.post('/api/login', {
                username: this.form.username,
                password: this.form.password
            }).then(res => {
                console.log(res.data.data)
                if (res.data.msg === 'success') {
                    this.$router.push('/')
                } else {
                    this.$vux.toast.text(res.data.data)
                }
            })
        }
    }
}
</script>

<style lang="less">
  .page-login {
    height: 100%;
    padding-top: 95px;
    background-color: @theme-light-blue;
    font-size: 14px;

    .vux-x-input {
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
      margin-top: 10px;
      margin-right: 5px;
    }
    .username, .verificat, .password {
      width: 340px;
      margin: 0 auto;
      font-size: 14px;
    }
    .verificat {
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
    .password {
      margin-top: 10px
    }
    .link {
      width: 340px;
      margin: 20px auto 0;
      padding: 0 13px;
      display: flex;
      justify-content: space-between;

        .to_register {
          color: @theme-gold;
        }
    }
    .login {
      width: 225px;
      height: 30px;
      margin: 57px auto 0;
      font-size: 13px;
    }
    .login_order {
      margin-top: 82px;
      color: @theme-gray;
      text-align: center;
      .title span {
        position: relative;
        &::before, &::after {
          content: '';
          width: 90px;
          height: 1px;
          position: absolute;
          top: 50%;
          background-color: @theme-gray;
        }
        &::before {
          left: -100px;
        }
        &::after {
          right: -100px;
        }
      }
      .lists {
        margin-top: 30px;
        .icon {
          width: 35px;
          height: 35px;
          margin: 0 8px;
        }
        .wechat {
          color: @bg-wechat;
        }
      }
    }
  }
</style>
