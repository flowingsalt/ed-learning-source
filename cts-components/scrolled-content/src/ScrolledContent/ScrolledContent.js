import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useStyles from './ScrolledContent.Styles';

var ScrolledContent = function ScrolledContent(props) {
  var children = props.children,
      hideScrollbarOnMobile = props.hideScrollbarOnMobile,
      className = props.className,
      tabIndex = props.tabIndex;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes.root, hideScrollbarOnMobile ? classes.hideScrollbarOnMobile : {}, className),
    tabIndex: tabIndex // if contents can't be tabbed to, then this should be 0

  }, children);
};

ScrolledContent.defaultProps = {
  hideScrollbarOnMobile: false,
  className: null
};
ScrolledContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  hideScrollbarOnMobile: PropTypes.bool,
  className: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default ScrolledContent;