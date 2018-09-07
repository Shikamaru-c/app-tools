<template>
  <div>
    <div class="tool-item-wrapper" @click="handleClickItem">
      {{ tool.name }}
    </div>
  </div>
</template>

<script>
/* Import APIs */
import setLocalStorageTool from '@/apis/setLocalStorageTool'

export default {
  props: {
    tool: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      baseUrl: '/'
    }
  },
  methods: {
    handleClickItem () {
      setLocalStorageTool(this.tool)
      this.addToolUsageCount()
      this.$router.push(`/tool/${this.tool.name}`)
    },
    addToolUsageCount () {
      const img = new Image()
      img.src = `${this.baseUrl}?tool=${this.tool.name}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .tool-item-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid;
    border-radius: 3px;
  }
</style>
