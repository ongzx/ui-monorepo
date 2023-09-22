const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: 'react-component-library',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      // {
      //   test: /\.(stories|story)\.mdx$/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         plugins: ['@babel/plugin-transform-react-jsx'],
      //       },
      //     },
      //     {
      //       loader: '@mdx-js/loader',
      //       options: {
      //         compilers: [createCompiler({})],
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },

      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
