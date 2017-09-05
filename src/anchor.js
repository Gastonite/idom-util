import renderElement from './element';

export default (href, key, staticProperties, ...args) => {
  return renderElement('a', key, staticProperties, 'href', href, ...args);
};

