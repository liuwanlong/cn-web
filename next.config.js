module.exports = {
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'build-last';
  },
  webpack: function (config) {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'].unshift('./polyfills.js');
      }
      return entries;
    };
    return config
  }
};
