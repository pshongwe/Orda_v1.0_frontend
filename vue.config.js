const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_ORDERS_API': JSON.stringify(
          process.env.ENV === 'prod'
            ? 'https://orda-v10-backend-prod.onrender.com/api/v1/orders'
            : process.env.ENV === 'dev'
            ? 'https://orda-v10-backend-dev.onrender.com/api/v1/orders'
            : 'http://localhost:5000/api/v1/orders'
        )
      })
    ]
  },
  devServer: {
    port: 8080
  },
  transpileDependencies: true
});