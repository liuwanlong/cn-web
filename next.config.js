const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'build-last';
  },
  webpack: function (config) {
    return config;
  }
});
