import axisMove from './axis-move'

test('A10;S20;W10;D30;X;A1A;B10A11;;A10;', () => {
  expect(axisMove('A10;S20;W10;D30;X;A1A;B10A11;;A10;')).toMatchSnapshot()
})
