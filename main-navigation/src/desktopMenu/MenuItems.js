import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import useStyles from './MenuItems.syles';
import AvatarMenuItem from './AvatarMenuItem';
import useAvatarMenuItems from '../hooks/useAvatarMenuItems.hook';

var MenuItems = function MenuItems(_ref) {
  var handleClose = _ref.handleClose;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var dropDownItems = useAvatarMenuItems();
  return /*#__PURE__*/React.createElement(React.Fragment, null, dropDownItems.map(function (_ref2) {
    var item = _ref2.item,
        buttonProps = _ref2.buttonProps,
        linkProps = _ref2.linkProps;
    var menuName = item.menuName,
        key = item.key;
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: key,
      onClick: handleClose,
      value: menuName,
      className: classes.menuItem
    }, /*#__PURE__*/React.createElement(AvatarMenuItem, _extends({
      item: item
    }, linkProps, buttonProps)));
  }));
};

MenuItems.propTypes = {
  handleClose: PropTypes.func.isRequired
};
export default MenuItems;