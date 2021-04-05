//== Eleventy Config File ==//

module.exports = function(eleventyConfig) {

  // Add passthrough directories & files
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('_redirects');

  // Sections collection (sorted by 'order' field)
  // eleventyConfig.addCollection('sections', collection => {
  //
  //   return collection.getFilteredByGlob('sections/*.md')
  //     .sort((a, b) => a.data.order > b.data.order ? 1 : -1);
  //
  // });

  // Manual passthrough template extensions
  return {

    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'

  };

};
