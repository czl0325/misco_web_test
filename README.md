# misco_web_test
实现微前端框架原理


#### 1.创建项目架构

* 1.空文件夹执行`npm init -y`初始化项目
* 2.创建vue3子应用项目 `npm create vite@latest vue3 -- --template vue-ts`
* 3.创建vue2子应用项目 `vue create vue2`


#### 2.vue2子应用配置
* 1.修改`vue.config.js`文件
```js
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
```

注意最后output输出library，在启动vue2项目后，通过window.vue2能够查看到值则表示成功。vue2项目运行在9004端口


* 2.修改`src/main.js`文件
```js
let app = null

const render = () => {
  app = new Vue({
    render: h => h(App),
  }).$mount('#app')
}

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log('vue2 bootstrap')
}

export const mount = () => {
  console.log('vue2 mount')
  render()
}

export const unmount = () => {
  console.log('vue2 unmount', app)
}
```

增加三个生命周期方法，供主应用来调用
