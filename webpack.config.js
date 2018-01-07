const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/index.js',
    output:  {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use:  extractSass.extract( {
            use: [
              'css-loader',
              'sass-loader'
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      extractSass,
      new HtmlWebpackPlugin({
         hash: true,
         myPageHeader: 'Hello World',
         template: './src/campground.html',
         filename: './campground.html'
       })
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
}
