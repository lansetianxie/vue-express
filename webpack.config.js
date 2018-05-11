const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log(VueLoaderPlugin)
module.exports = {
    mode: 'development',
    watch: true,
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, 'server/public/javascripts/'),
        publicPath: '/javascripts/',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // presets: [['es2015', { modules: false }]],
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },

        ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
}