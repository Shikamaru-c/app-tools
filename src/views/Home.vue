<template>
  <div>
    <h1>HISTORY TOOLS</h1>
    <tool-list :tools="historyTools"></tool-list>
    <h1>HOT TOOLS</h1>
    <tool-list :tools="hotTools"></tool-list>
  </div>
</template>

<script>
/* Import APIs */
import getHotTools from '@/apis/getHotTools'
import getLocalStorageTools from '@/apis/getLocalStorageTools'
import getHistoryTools from '@/apis/getHistoryTools'
/* Import Components */
import ToolList from '@/components/ToolList'

export default {
  data () {
    return {
      hotTools: [],
      historyTools: [],
      user: false
    }
  },
  methods: {

  },
  created () {
    console.log(111)
    getHotTools.apply(this)
      .then(tools => {
        this.hotTools = tools
      })
    
    if (!this.user) {
      this.historyTools = getLocalStorageTools.apply(this)
    } else {
      getHistoryTools.apply(this)
        .then(tools => {
          this.historyTools = tools
        })
    }
  },
  components: {
    ToolList
  }
}
</script>

<style lang="scss" scoped>

</style>
