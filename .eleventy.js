const slinkity = require('slinkity')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
      // optional: use slinkity.defineConfig
      // for some handy autocomplete in your editor
    }))

    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addWatchTarget("./_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
    eleventyConfig.addShortcode("version", function () {
      return String(Date.now());
    });
  };
  