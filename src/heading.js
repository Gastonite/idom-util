import renderElement from './element';
const internal = {};

internal.levels = [1,2,3,4,5,6];

internal.renderHeading = (level = 1, ...args) => {

  level = parseInt(level);

  if (!internal.levels.includes(level))
    throw new Error('invalid heading level');

  return renderElement('h'+ level, ...args)
};

export default internal.renderHeading;