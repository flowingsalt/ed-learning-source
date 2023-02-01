import { makeStyles } from 'tss-react/mui';
import merge from 'lodash/merge';
export var styles = function styles(theme) {
  var _theme$coreComponents;

  return merge({
    eyebrow: {
      color: 'var(--ebl-page-header-eyebrow-color)'
    },
    title: {
      marginBottom: 'var(--ebl-s2)'
    },
    subtitle: {
      maxWidth: 'var(--ebl-page-header-max-width)',
      color: 'var(--ebl-page-header-subhead-color)'
    },
    container: {
      display: 'flex',
      gap: 'var(--ebl-s3)'
    },
    root: {}
  }, (_theme$coreComponents = theme.coreComponents) === null || _theme$coreComponents === void 0 ? void 0 : _theme$coreComponents.PageHeader);
};
export default makeStyles({
  name: 'PageHeader'
})(styles);