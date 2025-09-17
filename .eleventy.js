module.exports = function(eleventyConfig) {
  //Passthrough copy for CSS
  eleventyConfig.addPassthroughCopy("src/css");
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};