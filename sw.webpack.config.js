const path = require('path')

module.exports = {
  entry: {
    sw: './service-worker/sw.ts',
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'static')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'sw.tsconfig.json'
            }
          }
        ],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}