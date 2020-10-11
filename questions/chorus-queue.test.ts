import chorusQueue from './chorus-queue'

test('186 186 150 200 160 130 197 200',  () => {
  expect(chorusQueue([186,186,150,200,160,130,197,200])).toMatchSnapshot()
})