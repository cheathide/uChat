<template>
  <div class="page-login">
    <x-input class="username" placeholder="请输入手机号/邮箱">
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

    <x-input v-else class="password" placeholder="请输入密码">
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

    <x-button class="login">登录</x-button>

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
      toPassword: false
    }
  }
}
</script>

<style lang="less">
  .font-size(@font-size) {
    font-size: @font-size;
    [data-dpr="2"] & {
       font-size: @font-size * 2;
    }
      [data-dpr="3"] & {
      font-size: @font-size * 3;
    }
  }
  .page-login {
    height: 100%;
    padding-top: 2.533333rem;
    background-color: @theme-light-blue;
    .font-size(14px);

    .vux-x-input {
      height: 1.12rem;
      overflow: hidden;
      border-radius: 0.133333rem;
      padding: 0 0.346667rem;
      background-color: #fff;
    }
    .weui-btn {
      background-color: @theme-dark-blue;
      color: #fff;
    }
    .vux-x-input .icon {
      width: 0.466667rem;
      height: 0.466667rem;
      margin-top: 0.026667rem;
      margin-right: 0.133333rem
    }
    .username, .verificat, .password {
      width: 9.04rem;
      margin: 0 auto;
      @font-size(14px);
    }
    .verificat {
      padding: 0;
      margin-top: 0.266667rem;
    }
    .use_verificat {
      width: 5.066667rem;
      margin-right: 0.266667rem;
    }
    .get_verificat {
      flex: 1;
      height: 1.12rem;
      .font-size(14px);
    }
    .password {
      margin-top: 0.266667rem
    }
    .link {
      width: 9.04rem;
      margin: 0.453333rem auto 0;
      padding: 0 0.346667rem;
      display: flex;
      justify-content: space-between;

        .to_register {
          color: @theme-gold;
        }
    }
    .login {
      width: 6.0rem;
      height: 0.8rem;
      margin: 1.52rem auto 0;
      .font-size(13px);
    }
    .login_order {
      margin-top: 2.186667rem;
      color: @theme-gray;
      text-align: center;
      .title span {
        position: relative;
        &::before, &::after {
          content: '';
          width: 2.4rem;
          height: 0.013333rem;
          position: absolute;
          top: 50%;
          background-color: @theme-gray;
        }
        &::before {
          left: -2.666667rem;
        }
        &::after {
          right: -2.666667rem;
        }
      }
      .lists {
        margin-top: 0.8rem;
        .icon {
          width: 0.933333rem;
          height: 0.933333rem;
          margin: 0 0.2rem;
        }
        .wechat {
          color: @bg-wechat;
        }
      }
    }
  }
</style>
