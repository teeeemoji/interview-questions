import sortCharacters from './sort-characters'

test('Type', () => {
  expect(sortCharacters('Type')).toMatchSnapshot()
})

test('BabA', () => {
  expect(sortCharacters('BabA')).toMatchSnapshot()
})

test('By?e', () => {
  expect(sortCharacters('By?e')).toMatchSnapshot()
})

test('A Famous Saying: Much Ado About Nothing (2012/8).', () => {
  expect(sortCharacters('A Famous Saying: Much Ado About Nothing (2012/8).')).toMatchSnapshot()
})