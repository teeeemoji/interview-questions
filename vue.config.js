module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        sourceMap: true
    },
    pages: {
        index: 'website/main.js'
    },
    chainWebpack: config => {
        // questions 目录下的资源, 使用自定义 loader 进行解析 (将 ts 源码解析成我们需要的格式)
        config.module
            .rule('questions')
            .test(/^((?!test).)*\.ts$/)
            .include.add(/questions/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .end()
            .use('./website/webpack-parse-question-loader')
            .loader('./website/webpack-parse-question-loader')
            .end()
    }
}