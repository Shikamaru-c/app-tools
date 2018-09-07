<template>
  <div id="app">
    <transition :name="slideType" mode="out-in">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
    </transition>
    <transition name="hide-nav-bar">
      <navigation-bar class="navigation-bar" v-show="!hideNavBar"></navigation-bar>
    </transition>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  computed: {
    hideNavBar () {
      return this.$route.matched.some(m => m.meta.hideNavBar)
    },
    slideType () {
      let slideType
      this.$route.matched.forEach(m => {
        if (m.meta.slideType) slideType = m.meta.slideType
      })
      return slideType || 'rightToLeft'
    }
  },
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.hide-nav-bar-enter-active, .hide-nav-bar-leave-active {
  transition: all .3s;
}
.hide-nav-bar-enter, .hide-nav-bar-leave-to {
  transform: translateY(100%);
}
.topToBottom-enter-active,
.rightToLeft-enter-active {
  transition: all .3s;
}
.topToBottom-enter, .topToBottom-leave-to {
  transform: translateY(-100%);
}
.rightToLeft-enter, .rightToLeft-leave-to {
  transform: translateX(100%);
}
</style>
