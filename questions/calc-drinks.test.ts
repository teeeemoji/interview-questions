import calcDrinks from './calc-drinks'

test('3', () => {
    expect(calcDrinks(3)).toMatchSnapshot()
})

test('10', () => {
    expect(calcDrinks(10)).toMatchSnapshot()
})