var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");

var config = {
    entry: {
		app: ['webpack/hot/dev-server', path.resolve(__dirname, "src/entry.js")]
	},
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: { 
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!postcss!less" },
			{ test: /\.js$/, exclude: /(node_modules)/, loader: "babel" }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
}

module.exports = config;