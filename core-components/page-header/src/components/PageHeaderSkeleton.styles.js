import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export var styles = function styles(theme) {
  var _theme$coreComponents;

  return merge({
    eyebrow: {
      height: 'var(--ebl-sh2-line-height)',
      width: '160px'
    },
    title: {
      height: 'var(--ebl-h1-line-height)',
      width: '320px'
    },
    subtitle: {
      height: 'var(--ebl-sh1-line-height)',
      width: '210px'
    }
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PageHeaderSkeleton);
};
export default makeStyles({
  name: 'PageHeaderSkeleton'
})(styles);