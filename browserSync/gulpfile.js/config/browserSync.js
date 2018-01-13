const fs = require('fs');
const path = require('path');
const config = require('./');
let serverDir = path.join('./task', config.serverDir);

module.exports = {
  server: {
    baseDir: serverDir
  },
  // startPath: "html",
  // files: ['pubilc/**/*.html],
  https: false,
  open: true,
  // proxy: {
  //   target: "http://10.154.252.73/",
  //   middleware: rewriteMiddleware
  // },
  port: 8002,
  // open: 'external'
}