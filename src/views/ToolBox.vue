<template>
  <div class="tool-box">
    <h1>{{ $route.name }}</h1>
    <!-- <transition name="fade"> -->
      <router-view class="tool-box-inner"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .tool-box {
    min-height: 100vh;
    h1 {
      margin: 0;
      line-height: 20vh;
      font-size: 48px;
      font-weight: 500;
      text-align: center;
      background: url('../assets/bg_title.png') 100% 100%;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 2s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
