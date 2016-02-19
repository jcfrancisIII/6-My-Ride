var autoprefixer = require('autoprefixer');
var precss = require('precss');
var path = require("path");
var webpack = require("webpack");

var config = {
    entry: 
      path.resolve(__dirname, 'src/entry.js'),
//        {app: ['webpack/hot/dev-server', path.resolve(__dirname, "src/entry.js")]},

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    
    plugins: [],

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
    config.output.path = path.resolve(__dirname, 'dist');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config;