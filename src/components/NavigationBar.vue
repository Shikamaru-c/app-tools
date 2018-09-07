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
    line-height: 44px;
    text-align: center;
    border-top: 1px solid #eee;
    background: #fff;
    div {
      flex: 1;
      position: relative;
      a {
        font-size: 8px;
        color: #000;
        text-decoration: none;
        transition: box-shadow .3s;
      }
      &.router-link-active a {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 30px;
        box-shadow: 0 0 5px 2px #cfcfcf;
        white-space: nowrap;
        color: rgb(252, 129, 129);
        background: #f0f0f0;
      }
    }
  }
</style>
