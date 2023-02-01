import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import Icon from '@hmhco/icon/src/Icon';
import infoSvgSm from '@ed/baseline/icons/cts/info-sm.svg';
import ProductCardTile from '@hmhco/product-card-tile/src/ProductCardTile/ProductCardTile';
import useStyles from './ProductCard.Styles';
import getLocaleFile from '../lang';
export var generateProductList = function generateProductList(products, fullWidth) {
  return products.map(function (item) {
    var name = item.name,
        icon = item.icon,
        image = item.image,
        disabled = item.disabled,
        ariaLabel = item.ariaLabel,
        callback = item.callback;
    return /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      key: "gridListItem-".concat(name),
      item: true,
      xs: 12,
      md: fullWidth ? 3 : 12
    }, /*#__PURE__*/React.createElement(ProductCardTile, {
      name: name,
      image: image,
      icon: icon,
      callback: callback,
      ariaLabel: ariaLabel,
      disabled: disabled,
      key: name,
      fixedHeight: fullWidth
    }));
  });
};

var ProductCard = function ProductCard(props) {
  var fullWidth = props.fullWidth,
      title = props.title,
      products = props.products,
      isLoading = props.isLoading;

  var _useStyles = useStyles({
    fullWidth: fullWidth
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var infoMessage = formatMessage({
    id: 'studentDashboard.programLaunch.productCard.infoMessage'
  });
  var content = /*#__PURE__*/React.createElement(Grid, {
    "data-testid": "product-cards",
    container: true,
    spacing: 2,
    className: classes.productListGrid,
    component: "ul"
  }, generateProductList(products, fullWidth));
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 0,
    "data-testid": "product-card-container",
    className: classes.root,
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "h2",
    variant: "h3",
    fontWeight: "bold",
    className: classes.title
  }, title), /*#__PURE__*/React.createElement("div", {
    "data-testid": "product-card",
    className: classes.messageContainer
  }, /*#__PURE__*/React.createElement(Icon, {
    className: classes.infoIcon,
    svg: infoSvgSm,
    size: "16",
    colour: "var(--ebl-signal-info)"
  }), /*#__PURE__*/React.createElement(Typography, {
    className: classes.infoMessage,
    variant: "button"
  }, infoMessage)), isLoading ? /*#__PURE__*/React.createElement("p", null, "loading...") : content);
};

ProductCard.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ProductCard, props));
});