<template>
  <div class="tool-item" @click="handleClickItem">{{ tool.name }}</div>
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
  methods: {
    handleClickItem () {
      setLocalStorageTool(this.tool)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tool-item {
    height: 60px;
    width: 60px;
    margin: 5px;
    text-align: center;
    line-height: 60px;
    border: 1px solid;
    border-radius: 3px;
  }
</style>
