<template>
  <div>
    <section-title v-show="historyTools.length">HISTORY TOOLS</section-title>
    <tool-list :tools="historyTools"></tool-list>
    <section-title v-show="hotTools.length">HOT TOOLS</section-title>
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
import SectionTitle from '@/components/SectionTitle'

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
    ToolList,
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>

</style>
