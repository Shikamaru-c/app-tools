export default function getUsefulTools (n = 5) {
  return this.$axios.get('tools.json')
    .then(res => {
      return res.data
    })
    .then(data => {
      return data.tools.slice(0, n)
    })
}
