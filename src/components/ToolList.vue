<template>
  <ul>
    <tool-item class="tool-item" v-for="tool in tools" :key="tool.id" :tool="tool"></tool-item>
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
    width: 95vw;
    margin: 0 auto;
    -webkit-padding-start: 0;
    .tool-item {
      width: calc(95vw / 5);
      height: calc(95vw / 5);
      padding: 5px;
      box-sizing: border-box;
    }
  }
</style>
