const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './js/script.js'],
  output: {
    path: path.resolve(__dirname, './main.js'),
    filename: 'main.js',
  },
};
