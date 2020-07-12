module.exports = {
  entry: [
    './resources/assets/scripts/app.js'
  ],
  output: {
    filename: '../public/app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }
      }
    ]
  }
}
