<template>
  <div>
    <tool-list :tools="allTools"></tool-list>
  </div>
</template>

<script>
/* Import APIs */
import getAllTools from '@/apis/getAllTools'
/* Import Component */
import ToolList from '@/components/ToolList'

export default {
  data () {
    return {
      allTools: []
    }
  },
  methods: {
  },
  mounted () {
    getAllTools.apply(this)
      .then(tools => {
        this.allTools = tools
      })
  },
  components: {
    ToolList
  }
}
</script>
