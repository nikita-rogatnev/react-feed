const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: 'none',
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html',
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
