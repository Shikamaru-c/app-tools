export default function signin (user) {
  return this.$axios.get('/user/signin', user)
    .then(res => {
      return res.data
    })
    .then(data => {
      return data
    })
}
