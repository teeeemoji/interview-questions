/**
 * 输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。
 * @param num 输入一个整数（int类型）
 * @returns 这个数转换成2进制后，输出1的个数
 */
function binaryInclude1(num: number): number {
    let cur: number = num
    let count = 0
    while(cur > 0) {
        if (cur % 2) {
            count++
        }
        cur = cur >>> 1
    }
    return count
}

export default binaryInclude1