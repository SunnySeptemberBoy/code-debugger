const webpack = require('webpack')
const path = require('path')
// webpack 后 又调用了webpack-cli, 为了方便 直接使用 node api 进行调试
// 1. webpack 运行时代码分析

function fn1() {
  return webpack({
    mode: 'none',
    entry: './js/index.js',
    output: {
      iife: false,
      pathinfo: 'verbose',
    },
    // entry: {
    //   index: './js/index.js',
    //   other: './js/other.js',
    // },
  })
}

fn1().run((err, stat) => {})
