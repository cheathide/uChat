<template>
  <div id="app">
    <transition :name="pageDirection">
      <keep-alive :include="/-k$/">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      pageDirection: '',
      history: []
    }
  },
  created () {

      this.$http.get(`/api/get_userInfo`)
      .then(res => {
          console.log(res)
      })

      window._hmt = []
      this.history.push(this.$route) // 第一次进入，不会触发beforeEach，手动把当前页压栈
      window._hmt.push(['_trackPageview', this.$route.fullPath])
      this.$router.beforeEach((to, from, next) => {
          window._hmt.push(['_trackPageview', `${window.location.pathname}${window.location.search}#${to.fullPath}`])
          if ((to.name === 'index') || (this.history.length >= 2 && this.history[this.history.length - 2].name === to.name)) {
              this.history.pop()
              this.pageDirection = 'slide-right'
          } else {
              this.history.push(to)
              this.pageDirection = 'slide-left'
          }
          next()
      })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
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
  font-size: 14px; /*px*/
}
.icon {
    width: 1em;
    height: 1em;
}
.vux-header.x-header {
    position: fixed;
    left: 0;
    top: 0;
    font-size: 19px;
    height: 45px;
    z-index: 10;
    width: 100%;
}
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
    transition: all .5s ease;
}
.slide-left-enter-active,
.slide-right-leave-active {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
}
.slide-left-enter, .slide-right-leave-to {
    transform: translate3D(100%, 0, 0);
    opacity: .4;
}
.slide-left-leave-to, .slide-right-enter {
    opacity: .4;
    transform: translate3D(-28%, 0, 0);
}
.slide-left-leave, .slide-right-enter-to {
}
</style>
