import { elementOpen, elementClose } from 'incremental-dom';

export default (tagName, ...args) => {

  const renderContent = args.pop();

  elementOpen(tagName, ...args);
  typeof renderContent === 'function' && renderContent();
  return elementClose(tagName);
};
