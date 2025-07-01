module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",      // odakle uzimaš sadržaj
      output: "_wls",     // gde izlaz ide
      includes: "_includes", // partials/layouts
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
