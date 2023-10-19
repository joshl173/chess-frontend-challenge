const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_env === "production" ? "/chess-frontend-challenge/" : "/"
})
