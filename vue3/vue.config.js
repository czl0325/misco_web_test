const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const port = 9003

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  filenameHashing: true,
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
      library: 'vue3',
      chunkLoadingGlobal: 'webpackJsonp_vue3',
    }
  }
})
