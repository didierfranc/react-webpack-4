const HtmlWebpackPlugin = require('html-webpack-plugin')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'public/index.html',
    }),
  ],
  serve: {
    port: 3000,
    content: [__dirname],
    add: (app) => {
      app.use(convert(proxy('/api', { target: 'http://localhost:8081' })))
      app.use(convert(history()))
    },
  },
}
