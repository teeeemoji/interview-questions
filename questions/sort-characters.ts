/**
 * @description 编写一个程序，将输入字符串中的字符按如下规则排序。
 * 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。如，输入： Type 输出： epTy
 * 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。如，输入： BabA 输出： aABb
 * 规则 3 ：非英文字母的其它字符保持原来的位置。
 * 如，输入： By?e 输出： Be?y
 * @param str {String} 一长串字符串
 * @tag 字符串处理
 * @tag 应用题
 * @tag 选择排序
 * @level 普通
 * @returns {String} 排好序的字符串
 */
function sortCharacters(str: string): string {
  let [result, symObj] = getSymbols(str)
  for (let i = 0; i < result.length; i++) {
    let [minIdx] = findMin(result.slice(i))
    minIdx = minIdx + i
    if (minIdx > i) {
      result = setLetters(result, minIdx, i)
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (symObj[i]) {
      result = [result.slice(0, i), result.slice(i)].join(symObj[i])
    }
  }
  return result
}

function getSymbols(str: string): [string, Object] {
  let result = str
  let symObj = {}
  for (let i = str.length - 1; i >= 0; i--) {
    let char = result[i]
    if (!isLetter(char)) {
      symObj[i] = char
      result = [result.slice(0, i), result.slice(i + 1)].join('')
    }
  }
  return [result, symObj]
}

function isLetter(a: string): boolean {
  let charCode = a.charCodeAt(0)
  if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
    return false
  }
  return true
}

function sortLetters(a: string, b: string): number {
  if (!isLetter(a) || !isLetter(b)) {
    return 100
  }
  return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
}

function findMin(str: string): [number, string] {
  let minIdx = -1
  let min = str[0]
  for (let i = 1; i < str.length; i++) {
    if (sortLetters(str[i], min) < 0) {
      min = str[i]
      minIdx = i
    }
  }
  return [minIdx, min]
}

function setLetters(str: string, fromIdx: number, toIdx: number): string {
  let result = str
  let letter = str[fromIdx]
  result = [result.slice(0, fromIdx), result.slice(fromIdx + 1)].join('')
  result = [result.slice(0, toIdx), result.slice(toIdx)].join(letter)
  return result
}

export default sortCharacters
