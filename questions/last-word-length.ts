/**
 * 计算字符串最后一个单词的长度，单词以空格隔开
 * @param str 一行字符串，非空，长度小于5000
 * @returns 整数N，最后一个单词的长度
 */
function lastWordLength(str: any): number {
    let parseStr: String = str.toString()
    return parseStr.length - parseStr.lastIndexOf(' ') - 1
}

export default lastWordLength