import arrayShuffle from './array-shuffle'

test('shuffle', () => {
  let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let shuffleArr = arrayShuffle(testArr)
  expect(shuffleArr).not.toEqual(testArr)
})