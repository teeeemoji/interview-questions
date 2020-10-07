const questions = []

const requireAll = context => context.keys().map(context)

const questionFiles = require.context(
    '../questions',
    false,
    /^((?!test).)*\.ts$/
)

requireAll(questionFiles).forEach(q => {
    questions.push(q.default)
})

export default questions