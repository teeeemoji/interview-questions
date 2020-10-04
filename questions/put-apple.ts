/**
 * 把M个同样的苹果放在N个同样的盘子里，允许有的盘子空着不放，问共有多少种不同的分法？（用K表示）5，1，1和1，5，1 是同一种分法
 * @param appleCount 苹果数量
 * @param dishCount 盘子数量
 */
function putApple(appleCount: number, dishCount: number): number {
    if (dishCount < 1 || appleCount < 0) {
        return 0
    }
    if (dishCount === 1) {
        return 1
    }

    return putApple(appleCount, dishCount - 1) + putApple(appleCount - dishCount, dishCount)
}

export default putApple