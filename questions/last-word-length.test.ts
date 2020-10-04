import lastWordLength from './last-word-length'

test('test last word length from a string', () => {
    expect(lastWordLength('I am baby')).toMatchSnapshot()
})

test('test last word length from a string with symbol', () => {
    expect(lastWordLength('Don\'t say u1s1!')).toMatchSnapshot()
})