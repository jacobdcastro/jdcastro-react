const createTag = require('./src');

exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  options
) => {
  const headComponents = getHeadComponents();
  // console.log(headComponents);
  // console.log({ options });
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
