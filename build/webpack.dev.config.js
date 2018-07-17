var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var vueMarkDown = require('./markdownLoader/vuemarkDown');
var fs=require('fs');
var WebpackMd5Hash = require('webpack-md5-hash');
var InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
//var glob = require('glob');
var mockData = require('../template/data.js')
var config;
var pageConfig = JSON.parse(fs.readFileSync('./app.json'));
const { VueLoaderPlugin } = require('vue-loader')
var Visualizer = require('webpack-visualizer-plugin');



  
//基础配置文件
config = {
    mode:'development',
    entry: {
        vendor: ['vue', 'axios']
    },
    output: {
        path: path.resolve(__dirname, 'devDist'),
        //生产环境将url替换
        // publicPath: isprod ? 'https://wx.gtimg.com/static/cdn_1/dataopen/center/build/' : '../',
        publicPath: '',
        //filename: "js/[name].[chunkHash:8].js",
        // chunkFilename: "[name].[chunkhash:8].js"
        filename: "js/[name].js",
        chunkFilename: "[name].js"
    },
    resolve:{
        alias:{ 
            //      'wx':path.resolve('jweixin-1.3.2.js')
            'vue':'vue/dist/vue.esm.js'
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
            //    use: 'url-loader?name=img/[hash:8].[name].[ext]&limit=8192'
             //  use: 'url-loader?name=img/[name].[ext]&limit=8192'
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5*1024,
                        name:'[name].[ext]',
                        publicPath: "./images/",
                        outputPath: "images/"
                    }
     
                    }]
            }, {// loader sass and css
                  test: /\.(scss|css)$/,
                  exclude:/\.md$/,
                  use: ExtractTextPlugin.extract({
                    use: [{
                      loader: "css-loader",
                      options: {// some options
                        sourceMap: true,
                        minimize: true
                      }
                    }, {// fix the css3
                      loader: "postcss-loader",
                      options: {
                        sourceMap: true,
                        plugins: function() {
                            return [require('autoprefixer')]
                        }           
                      }
                    } ],
                    fallback: "style-loader"
                  })
                },
               {
                test: /\.md$/,
                use:[   
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader:require.resolve('./markdownLoader/markdown-compiler.js'),
                        options: vueMarkDown
                    },
                ]
              }
        ]
    },
    context:path.resolve(__dirname+'/../'), 
    optimization:{
        //公共文件抽离（不加这个插件会出现模块重复加载的情况）
        splitChunks:{
          // 将公共模块提取，生成名为`vendors`的chunk
            name: "vendor",
            chunks: "initial",
            minSize: 1

            //处理vendor的路径及名称
            //  filename: "js/[name].[chunkHash:8].js"  
        }/*,
        runtimeChunk: {
//             name: 'runtime',
        }*/
    },
    devServer:{
        contentBase:'../',
        open:true

    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin({// defining the css output file
          filename: './css/style.css',
          allChunks: true
        })
        ],
    devtool: 'eval-source-map'
}

var newEntries = {};
pageConfig.pages.forEach(function(f) {
    newEntries[f['pageName']] = path.resolve(__dirname+'/../src/'+f['pageName']+'/index.js');
    var plug = new HtmlWebpackPlugin({
        needdebug: false,
        needchart: f['needchart']?f['needchart']:false,
        data:JSON.stringify(mockData[f['pageName']])||'{}',
        pageID: f['pageId'],
        filename: f['pageName']+ '.html',
        title: f['title'],
        chunks: ['vendor',f['pageName']],
        template:'template/'+(f['template']?f['template']:'skeleton.ejs'),
        inject: 'body'
    });
    config.plugins.push(plug);
});

config.entry = Object.assign({}, config.entry, newEntries);



module.exports = config;