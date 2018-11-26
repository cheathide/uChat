<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>

<script>
    export default {
        name: 'Iconfont',
        props: {
            name: String
        }
    }
</script>

<style scoped>

</style>
