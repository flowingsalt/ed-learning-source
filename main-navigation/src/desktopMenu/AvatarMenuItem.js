import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from 'tss-react/mui';
import Button from '@mui/material/Button';
import Icon from '@hmhco/icon/src/Icon';
var useStyles = makeStyles({
  name: 'AvatarMenuItem'
})(function () {
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      '& div': {
        marginRight: 'var(--ebl-s3)'
      },
      '&:hover': {
        boxShadow: 'none',
        transition: 'none',
        textDecoration: 'none'
      }
    }
  };
});

var AvatarMenuItem = function AvatarMenuItem(_ref) {
  var item = _ref.item,
      otherProps = _objectWithoutProperties(_ref, ["item"]);

  var menuName = item.menuName,
      isExternal = item.isExternal,
      route = item.route,
      icon = item.icon;
  var isButton = route === undefined;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  if (isButton) {
    return /*#__PURE__*/React.createElement(Button, _extends({}, otherProps, {
      variant: "text",
      className: classes.link
    }), /*#__PURE__*/React.createElement("span", null, icon && /*#__PURE__*/React.createElement(Icon, {
      svg: icon,
      size: "16"
    }), /*#__PURE__*/React.createElement(FormattedMessage, {
      id: menuName
    })));
  }

  if (isExternal) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: route
    }, otherProps), /*#__PURE__*/React.createElement(FormattedMessage, {
      id: menuName
    }));
  }

  return /*#__PURE__*/React.createElement(Link, _extends({
    to: route
  }, otherProps, {
    className: classes.link
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    svg: icon,
    size: "16"
  }), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: menuName
  }));
};

AvatarMenuItem.propTypes = {
  item: PropTypes.shape({
    menuName: PropTypes.string.isRequired,
    route: PropTypes.string,
    isExternal: PropTypes.bool,
    icon: PropTypes.string
  }).isRequired
};
export default AvatarMenuItem;