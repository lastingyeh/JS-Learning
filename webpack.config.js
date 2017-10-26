const path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		path: path.join(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	}
};
