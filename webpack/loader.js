/*
  loader用于对模块的源代码进行转换.loader可以使你在
  import或"加载模块时预处理文件。
  TypeScript-->javascript
  内联图像-->data URL
  允许直接在javascript模块中 import CSS文件
*/

/*
  安装相应的loader
*/
npm install--save - dev css - loader
npm install--save - dev ts - loader

/*
然后指示 webpack 对每个
.css 使用 css-loader，以及对所有
.ts 文件使用 ts-loader：
*/

module.exports = {
  module: {
    rules: [{
        test: /\.css$/,
        user: 'css-loader'
      },
      {
        test: /\.ts$/,
        user: 'ts-loader'
      }
    ]
  }
}

/*
  loader特性
  1、loader支持链式传递.能够对资源使用流水线。
    一组链式的loader将按照相反的顺序执行。
    loader链中第一个loader返回值给下一个loader。
  2、loader可以使同步的，也可以用异步的
  3、loader运行在node.js中,并且能够执行任何可能的操作
  4、loader接收查询参数。
  5、loader也能够使用options对象进行配置。
*/