export renderElement from './element';
export renderDiv from './div';
export renderSpan from './span';
export renderButton from './button';
export renderImage from './image';
export renderLi from './li';
export renderUl from './ul';
export renderNav from './nav';
export renderSection from './section';
export renderStyle from './style';
export renderStrong from './strong';
export renderLabel from './label';
export renderInput from './input';
export renderPre from './pre';
export renderHeading from './heading';
export renderHeader from './header';
export renderFooter from './footer';
export renderAnchor from './anchor';
export * from 'incremental-dom';
export const transformObjectToArray = (object) =>
  Object.keys(object).reduce((before, key) => before.concat([key, object[key]]), []);



