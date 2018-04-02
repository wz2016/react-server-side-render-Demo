const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');


const config = {
    // Inform webpack that we are building a build for nodeJs, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Teel webpack where to put the out file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()] // exclude the node_modules loading
}

module.exports = merge(baseConfig, config);