const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode: "development", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,   
                exclude: /node_modules/,
                use:  'babel-loader', 
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:['file-loader'],
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html",
        })
    ]
}