/**
 * @description <pre>数组打乱排序
 * 方案一(伪): Array.sort(() => Math.random() - 0.5) 伪打乱排序, 每个元素都有大概率处在原来的位置
 * 方案二(正): 随机下标交换, 交换次数为 Array.length, 可随时增加循环次数</pre>
 * @tag 代码片段
 * @tag 数组
 * @level 较难
 * @param arr {Array} 输入一个长度不确定的数组, 可能存在重复项
 */
function arrayShuffle<T>(arr: Array<T>): Array<T> {
  let i = arr.length
  while(i>= 0) {
    let randomIdx = Math.floor(Math.random() * i--)
    let tmp = arr[i]
    arr[i] = arr[randomIdx]
    arr[randomIdx] = tmp
  }
  return []
}

export default arrayShuffle