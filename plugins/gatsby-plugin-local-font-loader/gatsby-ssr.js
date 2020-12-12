const createTag = require('./src');

exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  options
) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.key === 'TypographyStyle') {
      return -1;
    } else if (y.key === 'TypographyStyle') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
