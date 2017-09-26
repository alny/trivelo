var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: ['./src/app.js', 'babel-polyfill']

  },
  output: {
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'

  },
  devtool: 'source-map',
  plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: true,
		        drop_console: true
        }
      }),
      new webpack.optimize.DedupePlugin(), //dedupe similar code
      new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ] : [],
  module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js?$/,
          exclude: /(node_modules)/,
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
  }
}
