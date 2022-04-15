const path = require('path');

const dotenv = require('dotenv').config({
  path: path.join(__dirname, './.env')
});
const { EnvironmentPlugin } = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean: true
  },
  optimization: {
    usedExports: true
  },
  devtool: 'eval-source-map',
  devServer: {
    // http2: true,
    // https: true,
    host: '0.0.0.0',
    port: process.env.INTERNAL_PORT,
    allowedHosts: 'all', // ['.host.com', 'host2.com'],
    historyApiFallback: true,
    hot: 'only',
    compress: true,
    static: {
      directory: path.resolve(__dirname, './resources'),
      staticOptions: {},
      publicPath: '/',
      serveIndex: true,
      watch: true
    },
    client: {
      logging: 'warn', // info or warn
      overlay: {
        errors: true,
        warnings: false
      },
      progress: true,
      reconnect: 5
    },
    devMiddleware: {
      index: true,
      mimeTypes: { 'text/html': ['phtml'] },
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false, // if its true then delete short code in script- & style-tags
            sources: false
          }
        }]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin(Object.keys(dotenv.parsed || {})),
    new CleanWebpackPlugin(), // every Webpack build will wipe the content of your dist/ folder before creating the new
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html' // output file
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  }
};
