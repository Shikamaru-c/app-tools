import getLocalStorageTools from './getLocalStorageTools.js'

export default function setLocalStorageTools (tool) {
  let tools = getLocalStorageTools()
  tools = tools.filter(t => t.id !== tool.id)
  tools.unshift(tool)
  const historyTools = JSON.stringify(tools)
  window.localStorage.setItem('historyTools', historyTools)
}
