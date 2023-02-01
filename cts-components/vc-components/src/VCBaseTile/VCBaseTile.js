import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import ListItem from '@mui/material/ListItem';
import useStyles from './VCBaseTile.styles';
import getLocaleFile from '../lang';

function VCBaseTile(props) {
  var title = props.title,
      subtitle = props.subtitle,
      bottomText = props.bottomText,
      buttons = props.buttons;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(ListItem, {
    className: classes.listItem
  }, /*#__PURE__*/React.createElement(Paper, {
    className: classes.paper,
    variant: "outlined",
    "data-testid": "vc-tile"
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6",
    className: classes.title,
    component: "h3",
    "data-testid": "vc-tile-title"
  }, title), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    className: classes.subtitle,
    "data-testid": "vc-tile-subtitle"
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    className: classes.bottomSection
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "overline",
    className: classes.bottomText,
    "data-testid": "vc-tile-bottom-text"
  }, bottomText)), /*#__PURE__*/React.createElement("div", {
    className: classes.buttonSection
  }, buttons)));
}

VCBaseTile.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  bottomText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  buttons: PropTypes.element
};
VCBaseTile.defaultProps = {
  subtitle: '',
  bottomText: '',
  buttons: undefined
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(VCBaseTile, props));
});