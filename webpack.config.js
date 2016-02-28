var path = require('path')

module.exports = {
  "entry": path.resolve('src', 'index.js'),
  "output": {
    "path": path.resolve('dist'),
    "filename": 'bundle.js',
    "publicPath": '/static/'
  },
  module: {
    "loaders": [
      { "test": /\.js$/, "loader": 'babel', "include": path.resolve('src') },
      { "test": /\.css$/, "loader": 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' }
    ]
  }
}

