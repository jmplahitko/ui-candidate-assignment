const package = require('./package.json');
const outputDir = 'dist';

process.env.VUE_APP_VERSION = package.version;

module.exports = {
	publicPath: '',
	outputDir: outputDir,
	assetsDir: 'assets',
	runtimeCompiler: true,
	productionSourceMap: false,

	pages: {
		index: {
			entry: 'app/app.ts',
			template: 'app/index.html',
			filename: 'index.html',
		},
	},

	css: {
		extract: false,
	},

	configureWebpack: {
		resolve: {
			extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue', '.json', '.scss'],
		},
	},

	chainWebpack: (config) => {
		config.plugins.delete('prefetch');
		config.module.rules.delete('eslint');
		config.plugin('html-index').tap((args) =>
			args.map((x) => {
				x.minify = false;
				return x;
			})
		);
	},
};
