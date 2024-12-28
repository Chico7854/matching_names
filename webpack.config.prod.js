const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/scripts/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        watchFiles: ["./src/template.html"],
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                include: [path.resolve(__dirname, "src", "styles")],
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                // include: [path.resolve(__dirname, "src", "scripts")],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'] // Make sure TypeScript files are resolved
      },
};