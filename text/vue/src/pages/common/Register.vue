<template>
  <div class="page-register">
    <x-input class="username" placeholder="请输入手机号/邮箱">
      <div slot="label">
        <iconfont :name="`icon-shouji`"></iconfont>
      </div>
    </x-input>

    <cell-box class="verificat">
      <x-input class="use_verificat" placeholder="请输入验证码">
        <div slot="label">
          <iconfont :name="`icon-tianxie`"></iconfont>
        </div>
      </x-input>
      <x-button class="get_verificat">获取验证码</x-button>
    </cell-box>

    <x-input class="password" placeholder="请输入密码">
      <div slot="label">
        <iconfont :name="`icon-tianxie`"></iconfont>
      </div>
    </x-input>

    <x-input class="password" placeholder="请再次输入密码">
      <div slot="label">
        <iconfont :name="`icon-tianxie`"></iconfont>
      </div>
    </x-input>

    <x-button class="register">注册</x-button>
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
    return {}
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
  .page-register {
    height: 100%;
    background-color: @theme-light-blue;
    padding-top: 3.333333rem;
    .font-size(14px);
    .vux-x-input {
      width: 9.04rem;
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
      margin: 0.266667rem auto 0;
      @font-size(14px);
    }
    .verificat {
      width: 9.04rem;
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
    .register {
      width: 6.0rem;
      height: 0.8rem;
      margin: 1.52rem auto 0;
      .font-size(13px);
    }
  }
</style>
