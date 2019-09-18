const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  }
};

// module.exports = {
//   lintOnSave: "default",
//   chainWebpack: config => {
//     // Prefetch
//     config.plugins.delete("prefetch");

//     const types = ["vue-modules", "vue", "normal-modules", "normal"];
//     types.forEach(type =>
//       addStyleResource(config.module.rule("scss").oneOf(type))
//     );
//   }
// };

// function addStyleResource(rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({
//       patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
//     });
// }

// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.s[ac]ss$/i,
//           use: [
//             {
//               loader: "style-loader" // creates style nodes from JS strings
//             },
//             {
//               loader: "css-loader" // translates CSS into CommonJS
//             },
//             {
//               loader: "less-loader" // compiles Less to CSS
//             }
//           ]
//         }
//       ]
//     }
//   }
// };

// module.exports = {
//   css: {
//     loaderOptions: {
//       scss: {
//         data: `@import "@/styles/global.scss";`
//       }
//     }
//   }
// };

// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.(sass|scss)$/,
//           use: [
//             "style-loader",
//             "css-loader",
//             {
//               loader: "sass-loader",
//               options: {
//                 resources: ["./src/styles/global.scss"]
//               }
//             }
//           ]
//         }
//       ]
//     }
//   }
// };
