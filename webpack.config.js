const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

 module: {

   rules: [

     {

       test: /\.css$/i,

       use: ['style-loader', 'css-loader'],

     },
     {
      

      test: /\.(png|svg|jpg|jpeg|gif|bmp)$/i,

      type: 'asset/resource',

    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            publicPath: 'images/',
          },
        },
      ],
    },
   ],

 },
};

