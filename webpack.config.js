const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV
let conf
if (NODE_ENV === 'dev') {
  conf = require('./build/webpack.dev.js')
} else if (NODE_ENV === 'test') {
  conf = require('./build/webpack.test.js')
  webpack(conf, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')
  })
}
console.log('webpack配置', conf)
module.exports = conf