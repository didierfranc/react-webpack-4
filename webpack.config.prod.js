const { serve, ...dev } = require('./webpack.config.dev')

module.exports = {
  ...dev,
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: `${__dirname}/dist`,
  },
}
