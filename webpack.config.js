var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");

var config = {
    entry: 
//    path.resolve(__dirname, 'src/entry.js'),
    {app: ['webpack/hot/dev-server', path.resolve(__dirname, "src/entry.js")]},
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

//    config.output.path = path.resolve(__dirname, 'dist');

module.exports = config;