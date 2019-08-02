const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'build-last';
  },
  webpack: function (config) {
    // config.plugins.push(
    //   new ExtractTextPlugin({
    //     filename: utils.assetsPath('css/[name].[content][hash].css'),
    //     allChunks: true,
    //   }));
    return config;
  }
};
