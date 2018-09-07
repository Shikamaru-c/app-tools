<template>
  <div class="base64-wrapper">
    <div>
      <label for="raw-string">Raw</label>
      <input @input="handleChangeRawString" :value="rawString" type="text" id="raw-string">
    </div>
    <div>
      <label for="base64-string">Base64
        <transition name="fade">
          <span v-show="base64Error">输入的 base64 有误</span>
        </transition>
       </label>
      <input @input="handleChangeBase64String" :value="base64String" type="text" id="base64-string">
    </div>
  </div>
</template>

<script>
import { base64Encode, base64Decode } from './index.js'

export default {
  data () {
    return {
      rawString: '',
      base64String: '',
      base64Error: false
    }
  },
  methods: {
    handleChangeRawString (e) {
      this.hideBase64Error()

      const v = e.target.value
      this.rawString = v
      this.base64String = base64Encode(v)
    },
    handleChangeBase64String (e) {
      this.hideBase64Error()

      const v = e.target.value
      this.base64String = v
      try {
        this.rawString = base64Decode(v)
      } catch (e) {
        this.base64Error = e
        this.rawString = ''
      }
    },
    hideBase64Error () {
      this.base64Error = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .base64-wrapper {
    margin: 0 20px;
    & > div {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
      label {
        display: block;
        margin-bottom: 20px;
        font-size: 24px;
        .fade-enter-active, .fade-leave-active {
          transition: opacity .3s;
        }
        .fade-enter, .fade-leave-to {
          opacity: 0;
        }
        span {
          font-size: 10px;
          color: red;
          margin-left: 20px;
        }
      }
      input {
        display: block;
        width: 100%;
        padding: 5px;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        color: #333;
      }
    }
  }
</style>
