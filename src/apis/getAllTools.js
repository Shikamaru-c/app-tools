export default function getAllTools () {
  return this.$axios.get('tools.json')
    .then(res => {
      return res.data
    })
    .then(data => {
      return data.tools
    })
}
