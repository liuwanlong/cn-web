module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'build-last';
  },
  webpack: function (config) {
    config.optimization = {
      minimize: false
    };
    return config;
  }
};
