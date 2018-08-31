import { base64Encode, base64Decode } from './index.js'

export default function test () {
  const testStr = '测试一下字符串'
  const testNum = 99999

  if (base64Decode(base64Encode(testStr)) === testStr) {
    console.log('字符串base64编解码成功')
  } else {
    console.log('字符串base64编解码失败')
  }

  if (base64Decode(base64Encode(testNum)) === testNum) {
    console.log('数字base64编解码成功')
  } else {
    console.log('数字base64编解码失败')
  }
}
