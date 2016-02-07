var autoprefixer = require('autoprefixer-core');

module.exports = {
    entry: {
		app: ["./src/entry.jsx"]
	},
    output: {
        path: "./build",
		publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!postcss!less" }
			{ test: /\.js$/, exclude: /(node_modules)/, loader: "babel" },
        ]
    },
	postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ],
};