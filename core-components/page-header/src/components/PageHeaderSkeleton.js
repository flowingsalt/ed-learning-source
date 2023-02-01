import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { withStyles } from 'tss-react/mui';
import PageHeader from './PageHeader';
import { styles } from './PageHeaderSkeleton.styles';

var PageHeaderSkeleton = function PageHeaderSkeleton(props) {
  var ariaLabel = props.ariaLabel,
      showSubtitle = props.showSubtitle,
      showEyebrow = props.showEyebrow,
      classes = props.classes,
      otherProps = _objectWithoutProperties(props, ["ariaLabel", "showSubtitle", "showEyebrow", "classes"]);

  var eyebrow = showEyebrow && /*#__PURE__*/React.createElement(Skeleton, {
    className: classes.eyebrow,
    variant: "rectangular"
  });
  var subtitle = showSubtitle && /*#__PURE__*/React.createElement(Skeleton, {
    className: classes.subtitle,
    variant: "rectangular"
  });
  var title = /*#__PURE__*/React.createElement(Skeleton, {
    className: classes.title,
    "aria-label": ariaLabel,
    role: "img",
    variant: "rectangular"
  });
  return /*#__PURE__*/React.createElement(PageHeader, _extends({
    title: title,
    eyebrow: eyebrow,
    subtitle: subtitle
  }, otherProps));
};

PageHeaderSkeleton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  showSubtitle: PropTypes.bool,
  showEyebrow: PropTypes.bool,
  classes: PropTypes.object // used to override default styles

};
PageHeaderSkeleton.defaultProps = {
  showSubtitle: false,
  showEyebrow: false,
  classes: {}
};
export default withStyles(PageHeaderSkeleton, styles, {
  name: 'PageHeaderSkeleton'
});