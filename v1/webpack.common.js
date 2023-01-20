const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },

  resolve:{
    module:['node_modules'],
    extensions:['.js','.json','.css'],
    alias:{
        '@':path.resolve(__dirname,'src/')
    }
  },
  module:

  plugins:[new HtmlWebpackPlugin({
    filename:"./index.html",
    template:path.resolve(__dirname,"./index.html"),
    favicon:"./static/logo.png"
  })],
  devServer:{
    static:{
        directory:path.resolve(__dirname,'dist')
    },
    port:8080
  }
}