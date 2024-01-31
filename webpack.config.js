const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode: "development", 
    entry: "./index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
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
                
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html",
        })
    ]
}