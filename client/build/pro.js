const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports={
	mode: 'production',
	resolve: {
    modules: ['src', 'node_modules']
  },
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},{
				test: /\.pug$/,
				use: 'pug-plain-loader'
			},{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},{
				test: /\.stylus$/,
				use: ['vue-style-loader', 'css-loader', 'stylus-loader']
			},{
        test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
        loader: 'file-loader'
      }
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/page/entry/index.html',
      favicon: './src/asset/favicon.png'
		}),
    // new BundleAnalyzerPlugin()
	]
};
