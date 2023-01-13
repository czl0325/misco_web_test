const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const port = 9004

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: "http://localhost:9004",
  devServer: {
    hot: true,
    allowedHosts: "all",
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    output: {
      libraryTarget: 'umd',
      library: 'vue2',
      chunkLoadingGlobal: 'webpackJsonp_vue2',
    }
  }
})
