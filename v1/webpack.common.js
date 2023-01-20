const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin")
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  resolve:{
    modules:['node_modules'],
    extensions:['.js','.json','.css'],
    alias:{
        '@':path.resolve(__dirname,'src/')
    }
  },
  module:{
    rules:[
      {
        test:/\.js/i,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:[
                '@babel/preset-env',
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use:[
          "style-loader", // style nodes from js string
          "css-loader", // translate css into commonjs
          "sass-loader", // compiles sass to css, using node sass by default
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp3|mp4|svg)$/i,
        type: "asset/resource",
      },

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
    filename:"./index.html",
    template:path.resolve(__dirname,"./index.html"),
    favicon:"./static/logo.png"
  }),
  new CopyWebpackPlugin({
    patterns:[{
      from:"static"
    }],
  })
],

}