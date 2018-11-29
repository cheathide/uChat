<template>
    <div class="page-contact">
        <x-header class="x-header" :left-options="{showBack: false}">contact</x-header>

        <group gutter="5px" class="contact-lists">
            <template v-for="i in 9">
                <cell class="uchat" title="cheathide">
                    <div slot="icon" class="hd_image">
                        <!-- <img src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2984041693,3165082508&fm=85&s=70B92172153275945EECF548030080B3"> -->
                    </div>
                </cell>
            </template>
        </group>
    </div>
</template>

<script>
import { Group, Cell } from 'vux'
export default {
    name: 'Contact',
    components: {
        Group,
        Cell
    },
    data () {
        return {}
    }
}
</script>

<style lang="less">
    .page-contact {
        height: 100%;
        padding-top: 45px;

        .contact-lists {
            .hd_image {
                width: 25px;
                height: 25px;
                background-color: #f00;
                margin-right: 5px;
            }
        }
    }
</style>
