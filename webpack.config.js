const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry:{
        "app" : "./src/index.js"
    },

    output:{
        publicPath:'/',
        path:path.join(__dirname,"/app"),
        filename:"app.js"
    },

    devServer:{
        contentBase: path.join(__dirname,"/app"),
        port:8000,
        open:true,
        writeToDisk:true
    },

    module:{
        rules:[

            {
                test: /\.html$/i,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                exclude:/images/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].[ext]",
                            outputPath:"assets/fonts",
                        }
                    }
                ]
            }
        ]
    },

    plugins:[

        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),

        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),

        new MiniCssExtractPlugin({
            filename:"assets/css/style.css",
        }),

        new CssMinimizerWebpackPlugin(),

    ]
}