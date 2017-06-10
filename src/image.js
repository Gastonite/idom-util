import { elementVoid } from 'incremental-dom';

export default (src, ...args) => {

  const key = args.shift();
  const staticProperties = args.shift();

  return elementVoid('img', key, staticProperties, 'src', src, ...args);
};

