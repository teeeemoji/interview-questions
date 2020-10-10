import binaryInclude1 from './binary-include-1'

test('11111111', () => {
    expect(binaryInclude1(parseInt('11111111', 2))).toMatchSnapshot()
})

test('10101010', () => {
    expect(binaryInclude1(parseInt('10101010', 2))).toMatchSnapshot()
})

test('10110000', () => {
    expect(binaryInclude1(parseInt('10110000', 2))).toMatchSnapshot()
})
 