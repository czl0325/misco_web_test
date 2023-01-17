module.exports = {
  webpack: config => {
    config.output.library = "react16"
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_react16`
    config.output.globalObject = 'window'

    return config;
  },

  devServer: _ => {
    const config = _

    config.headers = {
      'Access-Control-Allow-Origin': '*'
    };
    config.historyApiFallback = true

    config.hot = true

    return config;
  },
};
