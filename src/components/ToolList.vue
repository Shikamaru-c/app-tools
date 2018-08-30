<template>
  <ul>
    <tool-item v-for="tool in tools" :key="tool.id" :tool="tool"></tool-item>
  </ul>
</template>

<script>
import ToolItem from '@/components/ToolItem'

export default {
  props: {
    tools: {
      type: Array
    }
  },
  components: {
    ToolItem
  }
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    -webkit-padding-start: 0;
  }
</style>
