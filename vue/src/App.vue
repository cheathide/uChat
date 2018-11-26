<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
    height: 100%;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e2e5ed;
}
.icon {
    width: 1em;
    height: 1em;
}
.x-header {
    position: fixed !important;
    left: 0;
    top: 0;
    font-size: 19px;
    height: 45px;
    z-index: 10;
    width: 100%;
}
</style>
