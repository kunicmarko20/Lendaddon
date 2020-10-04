const webpack = require('webpack'),
  path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  WriteFilePlugin = require('write-file-webpack-plugin');

const fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

const options = {
  entry: {
    options: path.join(__dirname, 'src', 'options', 'index.tsx'),
    releaseButton: path.join(
      __dirname,
      'src',
      'content',
      'ReleaseButton',
      'index.tsx'
    ),
    releasePage: path.join(
      __dirname,
      'src',
      'content',
      'ReleasePage',
      'index.tsx'
    ),
    replaceTicketNumber: path.join(
      __dirname,
      'src',
      'content',
      'ReplaceTicketNumber',
      'index.tsx'
    ),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'file-loader?name=[name].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: fileExtensions
      .map((extension) => '.' + extension)
      .concat(['.jsx', '.js', '.css', '.ts', '.tsx']),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // clean the build folder
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!icon16.png', '!manifest.json'],
    }),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin(
      [
        {
          from: 'src/content/*/style.css',
          to: path.join(__dirname, 'public'),
          transformPath(targetPath, absolutePath) {
            const directoryNameArray = absolutePath.match(
              /(?:content\/)([\w]+)(:?\/\.*)/i
            );

            if (!Array.isArray(directoryNameArray)) {
              return;
            }

            return directoryNameArray[1] + '.css';
          },
          force: true,
        },
      ],
      {
        logLevel: 'info',
        copyUnmodified: true,
      }
    ),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'options', 'index.html'),
      filename: 'options.html',
      chunks: ['options'],
    }),
    new WriteFilePlugin(),
  ],
};

module.exports = options;
