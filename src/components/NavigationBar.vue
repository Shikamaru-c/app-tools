<template>
  <div class="navigation-bar">
    <router-link to="/home" tag="div"><a>首页</a></router-link>
    <router-link to="/tools" tag="div"><a>工具集</a></router-link>
    <router-link to="/my" tag="div"><a>设置</a></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .navigation-bar {
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 44px;
    border-top: 1px solid #eee;
    background: #fff;
    div {
      flex: 1;
      a {
        font-size: 9px;
        color: #000;
        text-decoration: none;
      }
      &.router-link-active a {
        color: rgb(252, 129, 129);
      }
    }
  }
</style>
