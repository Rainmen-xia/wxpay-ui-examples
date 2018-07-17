var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var fs=require('fs');
var WebpackMd5Hash = require('webpack-md5-hash');
var InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
//var glob = require('glob');
var mockData = require('../template/data.js')
var config;
var pageConfig = JSON.parse(fs.readFileSync('./app.json'));


var serverPlugin = require('./server.js');
var Visualizer = require('webpack-visualizer-plugin');

//基础配置文件
config = {
    mode:'development',
    entry: {
        'index':path.resolve(__dirname,'../src/index/index.js'),
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, '../devDist'),
        //生产环境将url替换
        // publicPath: isprod ? 'https://wx.gtimg.com/static/cdn_1/dataopen/center/build/' : '../',
        publicPath: '../',
        //filename: "js/[name].[chunkHash:8].js",
        // chunkFilename: "[name].[chunkhash:8].js"
        filename: "js/[name].js",
        chunkFilename: "[name].js"
    },
    resolve:{
        alias:{ 
      //      'wx':path.resolve('jweixin-1.3.2.js')
        },
    },
    module: {
        rules: [
            // 转化ES6的语法
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },/* {
                test: /\.js$/, // 对.js文件进行处理
                exclude: /node_modules/, // 排除掉node_modules文件夹下的所有文件
                loader: "jshint-loader"
            }, */{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?name=img/[hash:8].[name].[ext]&limit=8192'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'less-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [require('autoprefixer')]
                            }
                        }
                    }]
                })

            }
        ]
    },
    optimization:{
        //公共文件抽离（不加这个插件会出现模块重复加载的情况）
        splitChunks:{
          // 将公共模块提取，生成名为`vendors`的chunk
            name: "vendor",
            chunks: "initial",
             minSize: 1

            //处理vendor的路径及名称
            //  filename: "js/[name].[chunkHash:8].js"  
        },
        runtimeChunk: {
             name: 'runtime',
        }
    },

     // template:'src/html/'+(f['template']?f['template']:'index.ejs'),
       
    plugins: [
      new HtmlWebpackPlugin({template: './template/skeleton.ejs'}),
      new serverPlugin()
           //  new WebpackMd5Hash(),
            //将css文件单独抽出
          //  new ExtractTextPlugin("css/[name].css"),
   /*         new InlineManifestWebpackPlugin({
                name: 'webpackManifest'
            })*/
   

        ],
    devtool: 'eval-source-map'
}

 



module.exports = config;