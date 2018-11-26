<template>
  <div class="page-chat">
    <x-header class="header-default">chat</x-header>

    <div class="reply">
      <x-input></x-input>
      <iconfont name="icon-yuyin"></iconfont>
      <span>发送</span>
    </div>
  </div>
</template>

<script>
import { CellBox, XInput } from 'vux'
import Iconfont from '../../components/Iconfont'
export default {
  name: 'Chat',
  components: {
    CellBox,
    XInput,
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
  .page-chat {
    height: 100%;
    padding-top: 45px;
    background-color: @theme-light-blue;

    .reply {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
    }
  }
</style>
