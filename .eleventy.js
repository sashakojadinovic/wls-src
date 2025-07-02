module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/chemistry/images");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  //
  eleventyConfig.addPassthroughCopy("src/sr/hemija/images");
  return {
    dir: {
      input: "src",
      output: "_wls",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
