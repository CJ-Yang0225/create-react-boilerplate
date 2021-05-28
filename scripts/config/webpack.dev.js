const { merge } = require('webpack-merge');
const { SERVER_HOST, SERVER_PORT } = require('../constants');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only', // 終端僅列印 error
    clientLogLevel: 'silent', // 日誌等級
    compress: true, // 是否啟用 gzip 壓縮
    open: false, // 打開預設瀏覽器
    hot: true,
  },
});
