const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require("autoprefixer");
const nodeExternals = require('webpack-node-externals');

const extractCSS = new ExtractTextPlugin({
  filename: '[name].vendor.css',
  allChunks: true,
});
const extractSCSS = new ExtractTextPlugin('[name].styles.css');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_CLIENT_DIR = path.resolve(__dirname, 'src/client');
const SCSS_DIR = path.resolve(__dirname, 'scss');

const clientConfig = (env = {}) => {
  const plugins = [
    extractCSS,
    extractSCSS
  ]

  if (process.env.NODE_ENV === "production"){
    console.log(' 🚀  Bundling for production.');
    plugins.push[
      new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    ];
  } else {
    console.log(' 🚀  Bundling for development.');
    plugins.push[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }

  return {
    entry: {
      index: [SRC_CLIENT_DIR + '/index.js', SCSS_DIR + '/style.scss']
    },
    output: {
      path: BUILD_DIR,
      filename: '[name].bundle.js'
    },
    // watch: true,
    devtool: process.env.NODE_ENV === "production" ? 'cheap-module-eval-source-map' : 'source-map',
    // devServer: {
    //   contentBase: BUILD_DIR,
    //   port: 3000,
    //   compress: true,
    //   hot: true,
    //   open: true
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets:[
                ["es2015", {"modules": false}],
                //Webpack understands the native import syntax, and uses it for tree shaking

                "stage-2",
                //Specifies what level of language features to activate.
                //State 2 is "draft", 4 is finished, 0 is strawman.
                //See https://tc39.github.io/process-document/

                "react"
                //Transpile React components to JS
              ]
            }
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(extractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {alias: {'../img': '../public/img'}}
              },
              {
                loader: 'sass-loader'
              }
            ]
          }))
        },
        {
          test: /\.css$/,
          use: extractCSS.extract({
            fallback: 'style-loader',
            use: [ 'css-loader' ]
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              // loader: 'url-loader'
              loader: 'file-loader',
              options: {
                name: './public/img/[name].[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: './public/fonts/[name].[hash].[ext]'
          }
        }]
    },
    plugins: plugins
  }
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/build/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets:[
            ["es2015", {"modules": false}],
            //Webpack understands the native import syntax, and uses it for tree shaking

            "stage-2",
            //Specifies what level of language features to activate.
            //State 2 is "draft", 4 is finished, 0 is strawman.
            //See https://tc39.github.io/process-document/

            "react"
            //Transpile React components to JS
          ]
        }
      }
    ]
  }
};

module.exports = [clientConfig, serverConfig];