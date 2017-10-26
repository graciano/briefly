const { resolve } = require("path");
const { optimize } = require("webpack");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: "./src/briefly.js",
	output: {
		path: resolve(__dirname, "dist"),
		filename: "briefly.min.js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["env"],
				},
			},
		],
	},
	stats: {
		colors: true,
	},
	plugins: [new optimize.UglifyJsPlugin()],
	devtool: "source-map",
};
