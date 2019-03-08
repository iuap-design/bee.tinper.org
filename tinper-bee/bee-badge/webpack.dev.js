var fs = require('fs');
var webpack = require('webpack');


function getNeouiReactModuleAlias() {
    var alias = {};

    if (!fs.existsSync('./neouiReact')) return alias;
    var modules = fs.readdirSync('./neouiReact');
    modules.forEach(function (name) {
        alias[name] = [process.cwd(), 'neouiReact', name, 'src'].join('/');
    });
    return alias;
}

module.exports = {
    cache: false,
    entry: {
        demo: './demo/index'
    },
    output: {
        path: './dist',
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                exclude: function (path) {
                    var isNpmModule = !!path.match(/node_modules/);
                    var isNeouiReact = !!path.match(/node_modules[\/\\](@ali[\/\\])?neouiReact/);
                    return isNpmModule & !isNeouiReact;
                },
                loader: 'es3ify-loader'
            },
            {

                test: /\.js(x)*$/,
                exclude: function (path) {
                    var isNpmModule = !!path.match(/node_modules/);
                    var isNeouiReact = !!path.match(/node_modules[\/\\](@ali[\/\\])?neouiReact/);
                    return isNpmModule & !isNeouiReact;
                },
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: [
                        'add-module-exports'
                    ]
                }
            }
        ]
    },
    resolve: {
       alias: getNeouiReactModuleAlias()
    },
    externals: {
        react: 'var React',
        'react-dom': 'var ReactDOM'
    },
    plugins: [
        new webpack.DefinePlugin({
          __LOCAL__: true, // 本地环境
          __DEV__:   true, // 日常环境
          __PRO__:   false // 生产环境
        }),
        new webpack.optimize.DedupePlugin()
    ]
};
