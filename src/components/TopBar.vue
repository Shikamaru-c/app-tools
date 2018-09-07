<template>
  <div class="top-bar-wrapper">

    <div :class="['top-bar', {'fix-top-bar': isFixed}]">
      <div class="button button-back" @click="$router.back()">
        <img src="@/assets/icon_back.png" alt="">
      </div>
      <div class="title"><slot></slot></div>
      <div class="button button-more">
        <slot name="button-more"></slot>
      </div>
    </div>

    <div class="fix-margin" v-show="isFixed"></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: false
    }
  },
  methods: {
    listenScroll (e) {
      if (document.documentElement.scrollTop > 0) this.isFixed = true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.listenScroll.bind(this))
  },
  beforeDestory () {
    window.removeEventListener('scroll', this.listenScroll)
  }
}
</script>

<style lang="scss" scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #eee;
    &.fix-top-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      &.button-back img {
        width: 24px;
      }
      &.button-more img {
        width: 20.5px;
      }
    }
    .title {
      flex: 1;
    }
  }
  .fix-margin {
    margin-bottom: 41px;
  }
</style>
