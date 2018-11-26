<template>
  <div class="hello">
    <child :data="data"></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  name: 'HelloWorld',
  components: {
    Child
  },
  data () {
    return {
      data: {
        type: 0,
        a: 0,
        b: {
          c: 333
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
