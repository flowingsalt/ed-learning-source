/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { ListItem, Paper } from '@mui/material';
import useStyles from './ProductCardTile.Styles';
import getLocaleFile from '../lang';

var ProductCardTile = function ProductCardTile(props) {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var logoAlt = formatMessage({
    id: 'productCardTile.logo'
  });
  var name = props.name,
      image = props.image,
      icon = props.icon,
      callback = props.callback,
      disabled = props.disabled,
      ariaLabel = props.ariaLabel,
      fixedHeight = props.fixedHeight;

  var _useStyles = useStyles({
    disabled: disabled,
    fixedHeight: fixedHeight
  }),
      classes = _useStyles.classes;

  var handleKeyDown = function handleKeyDown(product, event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      callback(product);
    }
  };

  return /*#__PURE__*/React.createElement(ListItem, {
    component: "a",
    tabIndex: disabled ? '-1' : '0',
    className: classes.productFocus,
    onKeyDown: disabled ? null : function (e) {
      return handleKeyDown(name, e);
    },
    "data-testid": "product-card-tile-ring-".concat(name),
    "aria-label": ariaLabel,
    role: "link"
  }, /*#__PURE__*/React.createElement(Paper, {
    className: classes.root,
    elevation: 3,
    "data-testid": "product-card-tile-".concat(name),
    onClick: disabled ? null : function () {
      return callback(name);
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    className: classes.icon,
    dangerouslySetInnerHTML: {
      __html: icon
    }
  }) : null, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: logoAlt,
    className: classes.image,
    role: "presentation"
  }) : null));
};

ProductCardTile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  icon: PropTypes.string,
  callback: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  fixedHeight: PropTypes.bool
};
ProductCardTile.defaultProps = {
  disabled: false,
  image: undefined,
  icon: undefined,
  fixedHeight: true
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ProductCardTile, props));
});