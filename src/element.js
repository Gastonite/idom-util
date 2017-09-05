import { elementOpen, elementClose } from 'incremental-dom';

export default (tagName, ...args) => {

  let renderContent;
  if (args.length > 0 && typeof args[args.length - 1] === 'function')
    renderContent = args.pop();

  elementOpen(tagName, ...args);
  renderContent && renderContent();
  return elementClose(tagName);
};
