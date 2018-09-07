<template>
  <div class="suggest-wrapper">
    <top-bar>建议反馈</top-bar>
    <div class="content">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title">
      </div>
      <div>
        <label for="content">Content</label>
        <textarea id="content" rows="15"></textarea>
      </div>
      <div>
        <button>提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  components: {
    TopBar
  }
}
</script>

<style lang="scss" scoped>
  .content {
    & > div {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin: 10px 0;
        margin-left: 10px;
        padding-left: 5px;
        line-height: 14px;
        font-size: 14px;
        border-left: 2px solid #ccc;
      }
      input, textarea, button {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0 5px;
        border: none;
        outline: none;
        font-size: 14px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
      }
      input {
        height: 40px;
      }
      textarea {
        font-family: inherit;
        padding: 5px;
        resize: none;
      }
      button {
        height: 40px;
        color: #fff;
        background: blue;
      }
    }
  }
</style>
