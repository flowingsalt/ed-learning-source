import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import useStyles from './MobileSubmenuList.styles';

var MobileSubmenuList = function MobileSubmenuList(props) {
  var children = props.children;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(List, {
    disablePadding: true,
    className: classes.subMenuList
  }, children);
};

MobileSubmenuList.propTypes = {
  children: PropTypes.node.isRequired
};
export default MobileSubmenuList;