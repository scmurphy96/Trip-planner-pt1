const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
}
