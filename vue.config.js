const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  devServer: {
    port: 8080
  },
  transpileDependencies: true
});