var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var isProduction = process.env.NODE_ENV === "production";
var htmlPlugin = new htmlWebpackPlugin({
  title: "QuietTime Coordinator",
  filename: "index.html",
  template: "src/index.html.ejs",
  inject: 'head',
  isProduction: isProduction,
  minify: minifyConfig,
  hash: isProduction
});

var minifyConfig = {
  // Should use defaults
};

var vendorFiles = ['react', 'react-dom', 'react-redux', 'redux', 'react-router'];
var externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-redux': 'ReactRedux',
  'redux': 'Redux',
  'react-router': 'ReactRouter'
};

var entryOptions = isProduction ? './src/index.js' : ['./src/index.js', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server']

var outputOptions = isProduction ? {
  path: path.join(__dirname, 'build'),
  filename: 'scripts/bundle.js'
} : {
  path: path.join(__dirname, 'build'),
  publicPath: 'http://localhost:8080/',
  filename: 'scripts/bundle.js'
};

module.exports = {
  entry: entryOptions,
  output: outputOptions,
  devtool: isProduction ? 'cheap-module-source-map' : 'eval',
  devServer: {
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  },
  externals: isProduction ? externals : {},
  plugins: [
    htmlPlugin
  ]
};
