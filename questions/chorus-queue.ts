/**
 * @description <pre>
 * 计算最少出列多少位同学，使得剩下的同学排成合唱队形说明：
 * N位同学站成一排，音乐老师要请其中的(N-K)位同学出列，使得剩下的K位同学排成合唱队形。
 * 合唱队形是指这样的一种队形：设K位同学从左到右依次编号为1，2…，K，他们的身高分别为T1，T2，…，TK，   则他们的身高满足存在i（1<=i<=K）使得T1<T2<......<Ti-1<Ti>Ti+1>......>TK。
 * 你的任务是，已知所有N位同学的身高，计算最少需要几位同学出列，可以使得剩下的同学排成合唱队形。
 * </pre>
 * @tag 递归
 * @tag 动态规划
 * @tag 最长上升子序列
 * @level 非常难
 * @param arr {Array.number} 身高数字队列, 单位 cm, 例如 [180, 175, 160]
 * @returns {number} 最少需要删除几位同学
 */
function checkQueue(arr) {
  let upFlag = arr[0] - arr[1] < 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (!upFlag && arr[i] < arr[i + 1] || arr[i] === arr[i + 1]) {
      return false
    }
    if (arr[i] > arr[i + 1]) {
      upFlag = false
    }
  }
  return true
}

function chorusQueue(heightArrar) {
  if (checkQueue(heightArrar)) {
    return heightArrar.length
  }
  let result = heightArrar.map((h, idx) => chorusQueue([...heightArrar.slice(0, idx), ...heightArrar.slice(idx + 1)])).map(i => i ? i.length : 0)

  return Math.max(...result)
}

export default chorusQueue