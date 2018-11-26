<template>
    <div class="page-index">
        <keep-alive>
            <router-view />
        </keep-alive>

        <tabbar>
            <tabbar-item selected>
                <iconfont slot="icon" name="icon-liaotian"></iconfont>
                <span slot="label">uchat</span>
            </tabbar-item>
            <tabbar-item>
                <iconfont slot="icon" name="icon-tongxunlu"></iconfont>
                <span slot="label">contact</span>
            </tabbar-item>
            <tabbar-item>
                <iconfont slot="icon" name="icon-faxian"></iconfont>
                <span slot="label">find</span>
            </tabbar-item>
            <tabbar-item>
                <iconfont slot="icon" name="icon-mine"></iconfont>
                <span slot="label">mine</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import Iconfont from '../components/Iconfont'
export default {
    name: 'Index',
    components: {
        Tabbar,
        TabbarItem,
        Iconfont
    },
    data () {
        return {}
    }
}
</script>

<style lang="less">
    .page-index {
        height: 100%;
        padding-bottom: 53px;
        .weui-tabbar {
            position: fixed;
            bottom: 0;
        }
        .weui-tabbar__icon {
            line-height: 47px;
        }
        .icon {
            font-size: 18px;
        }
    }
</style>
