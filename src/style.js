import renderElement from './element';
import { text } from 'incremental-dom';

export default (style, ...args) => renderElement('style', ...args, text.bind(null, style || ''));