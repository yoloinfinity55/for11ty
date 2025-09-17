module.exports = function(eleventyConfig) {

  const pathPrefix = process.env.NODE_ENV === 'production' ? '/for11ty/' : '/';
  
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