<template>
  <div class="page-chat-window">
    <x-header class="x-header">chat</x-header>

    <div class="message-lists">
        <div class="message left">
            <img class="hd-img" src="https://ws.idianwoo.com/uploadfiles/2018-11/201811101126134688.png">
            <div class="text">
                svg中text标签里面的文字怎么实现垂直和水平的居中～! - gerald的...2017年6月16日 - 能否实现垂直居中的效果,即使文本字体数调整,或者字体像素调整,内容还是居中的效果...中text标签里面的文字怎么实现垂直和水平的居中_百度知道
            </div>
        </div>

        <div class="message right">
            <img class="hd-img" src="https://ws.idianwoo.com/uploadfiles/2018-11/201811101126134688.png">
            <div class="text">
                svg中text标签里面的文字怎么实现垂直和水平的居中～! - gerald的...2017年6月16日 - 能否实现垂直居中的效果,即使文本字体数调整,或者字体像素调整,内容还是居中的效果...中text标签里面的文字怎么实现垂直和水平的居中_百度知道
                <img src="https://f12.baidu.com/it/u=2300957705,2898029476&fm=76" alt="">
            </div>
        </div>
    </div>

    <div class="reply">
      <x-input class="input"></x-input>
      <div class="voice">
          <iconfont name="icon-yuyin"></iconfont>
      </div>
      <span class="send">发送</span>
    </div>
  </div>
</template>

<script>
import { CellBox, XInput } from 'vux'
import Iconfont from '../../components/Iconfont'
export default {
  name: 'ChatWindow',
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
  .page-chat-window {
    height: 100%;
    padding-top: 45px;
    padding-bottom: 40px;
    background-color: @theme-light-blue;

    .message-lists {
        .message {
            margin: 10px;
            display: flex;
            .hd-img {
                width: 40px;
                height: 40px;
            }
            .text {
                max-width: 240px;
                padding: 10px;
                border-radius: 5px;
                position: relative;

                img {
                    vertical-align: text-top;
                    max-width: 220px;
                    max-height: 220px;
                }

            }
            &.left {
                .hd-img {
                    margin-right: 10px;
                }
                .text {
                    background-color: #fff;
                    &::before {
                        content: '';
                        position: absolute;
                        border: 8px solid transparent;
                        border-right-color: #fff;
                        left: -15px;
                        top: 8px;
                    }
                }
            }
            &.right {
                flex-direction: row-reverse;
                 // justify-content: flex-end;
                 .hd-img {
                     margin-left: 10px;
                 }
                .text {
                    background-color: @theme-dark-blue;
                    color: #fff;
                    &::before {
                        content: '';
                        position: absolute;
                        border: 8px solid transparent;
                        border-left-color: @theme-dark-blue;
                        right: -15px;
                        top: 8px;
                    }
                }
            }
        }
    }

    .reply {
        height: 40px;
        overflow: hidden;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        display: flex;
      .input {
          flex: 1;
      }
      .voice {
          width: 40px;
          padding-top: 10px;
          text-align: center;
          .icon {
              font-size: 20px;
          }
      }
      .send {
          width: 80px;
          line-height: 40px;
          background-color: @theme-dark-blue;
          color: #fff;
          text-align: center;
      }
    }
  }
</style>
