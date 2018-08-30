import getLocalStorageTools from './getLocalStorageTools.js'

export default function setLocalStorageTools (tool) {
  const tools = getLocalStorageTools()
  if (!tools.find(t => t.id === tool.id)) tools.push(tool)
  const historyTools = JSON.stringify(tools)
  window.localStorage.setItem('historyTools', historyTools)
}
