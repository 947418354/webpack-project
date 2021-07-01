const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge (base, {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')  // 以磁盘作为绝对根目录
  }
})