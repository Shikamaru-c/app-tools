<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <navigation-bar class="navigation-bar"></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
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
}
.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
