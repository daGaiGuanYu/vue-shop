const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	mode: 'development',
	devServer: {
		contentBase: 'dist', // files served
		host: '0.0.0.0', // 允许非本机访问
		port : 9000,
		proxy: {
    	'/api': {
				target: 'http://localhost:8666'
	    }
  	}
	},
	devtool: 'cheap-eval-source-map',
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
		})
	]
};
