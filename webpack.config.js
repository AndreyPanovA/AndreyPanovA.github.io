const path = require("path"); // просто для определения путей, можно и без него прописать нативно
const fs = require('fs')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // минификация css
const TerserPlugin = require("terser-webpack-plugin"); // минификация js
// __dirname -  путь до текущей папки
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // чистит папку dist, удаляет лишние файлы с hash
const HTMLWebpackPlugin = require("html-webpack-plugin"); // создает шаблон для html, чтобы самостоятельно его не генерировать (создавать) в папке dist
const CopyPlugin = require("copy-webpack-plugin"); // favicon переносит в папку дист
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css modules
const isProd = process.env.NODE_ENV === "production"; // системная переменная для определения текущего режима сборки
const isDev = !isProd;
const PATHS = {
  src: path.join(__dirname, 'src/pages'),
  dist: path.join(__dirname, '../dist'),

}
const PAGES_DIR = `${PATHS.src}/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))
const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.${ext}`); // если в режиме build, то видим хеши
module.exports = {
  context: path.resolve(__dirname, "src"), // следит за всем в этой папке
  mode: "development", // режим разработки
  entry: ["@babel/polyfill", "./index.js"], // фаил, с которого все начинается
  output: {
    //   Куда все складываем

    filename: filename("js"), //"bundle.[hash].js" добавляя hash мы получаем новую версию с hash названием, пока dist не чистится
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      // мгновенный путь через собаку к папке src и @core к src/core
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  devtool: isDev ? "source-map" : false, // добавляет исходники в режиме разработки .map
  devServer: {
    // мгновенное обновление в режиме разработки
    port: 3000,
    hot: isDev,
  },
  plugins: [
    // new ExtractTextPlugin("[name].css?[hash]-[chunkhash]-[name]", {
    //   disable: false,
    //   allChunks: true
    // }),

    new CleanWebpackPlugin({
      //   filename: "bundle.[hash].css",
    }),
    // ...PAGES.map(page => new HtmlWebpackPlugin ({
    //   template: `${PAGES_DIR}/${page}`,
    //   filename: `./${page.replace(/\.html/,'.html')}`
    // })),
    new HTMLWebpackPlugin({
      template: "index.html", // создает шаблон для html, чтобы самостоятельно его не генерировать (создавать) в папке dist
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        {
  
          from: path.resolve(__dirname, "src/img"),
          to: path.resolve(__dirname, "dist/img"),
        },
        {
          from: path.resolve(__dirname, "src/js"),
          to: path.resolve(__dirname, "dist/js"),
        },
        {
          from: path.resolve(__dirname, "src/pages"),
          to: path.resolve(__dirname, "dist"),
        },
      ], // чтобы переносить fovico
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"), //"bundle.[hash].css", выносить css из js в отдельный фаил
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name(resourcePath, resourceQuery) {
            // `resourcePath` - `/absolute/path/to/file.js`
            // `resourceQuery` - `?foo=bar`

            if (process.env.NODE_ENV === 'development') {
              return '../[path][name].[ext]';
            }

            return '/[contenthash].[ext]';
          },
        },
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          },
        },
      }, // подкрепляем babel
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=images/[name].[ext]&limit=8192' 
      }
      
    ],
  },
  optimization: {
    minimize: isProd,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
