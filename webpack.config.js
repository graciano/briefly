const { resolve, join } = require("path");
// const { optimize } = require("webpack");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: "./src/briefly.js",
	output: {
		filename: "briefly.min.js",
		path: resolve(__dirname, "dist"),
	},
	resolve: {
		modules: [join(__dirname, "src"), "node_modules"],
		extensions: [".js", ".jsx", ".css", ".scss"],
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				use: {
					loader: "babel-loader",
				},
				include: [resolve(__dirname, "./src/")],
				exclude: /node_modules/,
			},
		],
	},
	stats: {
		colors: true,
	},
	// plugins: [new optimize.UglifyJsPlugin()],
	devtool: "source-map",
};
