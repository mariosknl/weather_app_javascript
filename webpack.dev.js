const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // injects styles into DOM
          'css-loader', // turns css into js
          'sass-loader', // turns scss into css
          'postcss-loader',
        ],
      },
    ],
  },
};