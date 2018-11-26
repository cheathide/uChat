<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  sockets: {
    connect () {
      this.id = this.$socket.id
    },
    login: function (val) {
      console.log(val)
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    click (val) {
      console.log(111)
      this.$socket.emit('start', val, res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang='less'>
html {
box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html, body, #app {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.373333rem;
}
</style>
