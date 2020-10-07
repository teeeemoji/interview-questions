const ts = require('typescript')
const parser = require('@babel/parser')
const generate = require('@babel/generator').default
const jsdoc = require('jsdoc-api')

// 一个简单的 loader
// 将 ts 转化为 es6, 并将注释和代码进行分离, 方便页面显示
module.exports = function(source) {
    // ts 转化为 es6
    const es5SourceCode = ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.ES2015 }
    }).outputText

    // es6 转化为 ast
    const ast = parser.parse(es5SourceCode, { sourceType: 'module' })

    // 从 es6 中取出 comment
    const comment =
        jsdoc
        .explainSync({ source: es5SourceCode })
        .find(e => !!e.comment && e.kind === 'function') || {}

    // 从 es6 中取出不包含注释的代码
    const { code } = generate(ast, { comments: false })

    // 从 ts 中取出不包含注释的代码
    const compiler = ts.createSourceFile('a', source)
    const printer = ts.createPrinter({ removeComments: true })
    const tsCode = printer.printNode(
        ts.EmitHint.sourceFile,
        compiler,
        ts.SourceFile
    )

    return `export default {
        comment: ${JSON.stringify(comment)},
        code: ${JSON.stringify(code)},
        tscode: ${JSON.stringify(tsCode)}
    }`

    // TS api 中有关于 jsdoc 的方法， 然而这些 api 是不完善的， 文档不全的， 就不折腾了
    // const compiler = ts.createSourceFile('a', source)

    // const es6Code = ts.transpileModule(source, {
    //     compilerOptions: { module: ts.ModuleKind.None, removeComments: true }
    // }).outputText

    // const printer = ts.createPrinter({ removeComments: true })
    // const tsCode = printer.printNode(
    //     ts.EmitHint.sourceFile,
    //     compiler,
    //     ts.SourceFile
    // )

    // const comments = compiler
    //     .forEachChild()
    //     .reduce((comments, codeBlock) => comments.concat(codeBlock.jsDoc), [])

    // return `export default {
    //     comment: ${JSON.stringify(comments)},
    //     es6Code: ${JSON.stringify(es6Code)},
    //     tsCode: ${JSON.stringify(tsCode)}
    // }`
}