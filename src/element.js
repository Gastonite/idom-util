import { isFunction } from '../assertions';
import { elementOpen, elementClose } from 'incremental-dom';

export default (tagName, ...args) => {

  const renderContent = args.pop();

  elementOpen(tagName, ...args);
  isFunction(renderContent) && renderContent();
  elementClose(tagName);
};
