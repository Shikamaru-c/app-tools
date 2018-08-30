export default function getLocalStorageTools () {
  const historyTools = window.localStorage.getItem('historyTools')
  return JSON.parse(historyTools) || []
}
