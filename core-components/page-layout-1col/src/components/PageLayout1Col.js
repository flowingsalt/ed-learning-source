import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useStyles from './PageLayout1Col.styles';

function PageLayout1Col(_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["children"]);

  var _useStyles = useStyles(otherProps),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Container, _extends({
    maxWidth: "xl",
    className: classes.root
  }, otherProps), children);
}

PageLayout1Col.propTypes = {
  children: PropTypes.node.isRequired,
  // useful Container props listed for visibility
  component: PropTypes.string,
  'data-testid': PropTypes.string
};
PageLayout1Col.defaultProps = {
  component: 'main',
  'data-testid': undefined
};
export default PageLayout1Col;