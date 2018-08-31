export default function login (user) {
  return this.$axios.post('/user/login', user)
    .then(res => {
      return res.data
    })
    .then(data => {
      return data
    })
}
