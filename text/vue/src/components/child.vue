<template>
  <div class="hello">
    <button @click="data.type = 1">data.type=1</button>
    <button @click="data.type = 2">data.type=2</button>
    <button @click="data.type = 3">data.type=3</button>
    <button @click="data.type = 4">data.type=4</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    data: Object
  },
  data () {
    return {}
  },
  watch: {
    'data.type' (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
</style>
