const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, 'src', 'index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',
  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
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
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        //Forma de trabajar con imagenes importandolas
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
      filename: './index.html',
      favicon: path.resolve(__dirname, 'src', 'assets/icon-page.png'),
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
    new CopyPlugin({
      patterns: [
        {
          //Donde se encuentran los archivos
          from: path.resolve(__dirname, 'src', 'assets/'),
          //Hacia donde moverlos
          to: 'assets/',
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ],
  },
  // DEV SERVER ENTRY POINT
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
    port: 3005,
    historyApiFallback: true,
  },
};
