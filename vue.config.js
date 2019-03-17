const path = require('path')
const resolve = dir => path.join(__dirname,dir)
  return path
}
const BASE_URL = process.env.NODE_ENE === 'production' ? '/iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: consig =>{
    config.resolve.alias
      .set('@',resolve('src'))
      .set('_c',resolve('src/compinents'))
  },
  //打包时不生成.map文件
  prodcutionSourceMap: false,
  //跨域的需求
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
