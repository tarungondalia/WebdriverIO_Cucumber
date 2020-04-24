require('@babel/register')({
    presets: ['@babel/preset-env'],
});

const wdioConfig = require('./wdio.BASE.conf.js');
exports.config = wdioConfig.config;
