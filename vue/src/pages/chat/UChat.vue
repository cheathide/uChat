<template>
    <div class="page-uchat">
        <x-header class="x-header" :left-options="{showBack: false}">
            <div slot="left">
                chat
            </div>
            <div slot="right">
                +
            </div>
        </x-header>

        <group gutter="5px" class="uchat-lists">
            <template v-for="i in 9">
                <cell class="uchat" title="cheathide" inline-desc="aaaa">
                    <div slot="icon" class="hd_image">
                        <!-- <img src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2984041693,3165082508&fm=85&s=70B92172153275945EECF548030080B3"> -->
                    </div>
                    <div class="right" slot="child">
                        <div class="timer">
                            下午4：46
                        </div>
                        <div class="">

                        </div>
                    </div>
                </cell>
            </template>
        </group>
    </div>
</template>

<script>
import { XHeader, Group, Cell } from 'vux'
export default {
    name: 'UChat',
    components: {
        XHeader,
        Group,
        Cell
    },
    data () {
        return {}
    }
}
</script>

<style lang="less">
    .page-uchat {
        height: 100%;
        padding-top: 45px;

        .uchat-lists {
            height: 100%;
            overflow: scroll;
            .uchat {
                .hd_image {
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    margin-right: 5px;
                    background-color: #f00;
                }
                .right {
                    div {
                        height: 25px;
                        color: #9b9b9b;
                        font-size: 12px;
                        text-align: right;
                    }
                }
            }
        }
    }
</style>
