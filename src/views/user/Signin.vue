<template>
  <div>
    <input type="file" @change="test">
    <img :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: ''
    }
  },
  methods: {
    test (e) {
      const f = e.target.files[0]
      const reader = new FileReader()
      console.log(reader)
      reader.onload = function (e) {
        this.imgUrl = e.currentTarget.result
      }.bind(this)
      reader.readAsDataURL(f)
    }
  }
}
</script>
