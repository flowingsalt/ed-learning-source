import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Skeleton, Box } from '@mui/material';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { useIntl } from 'react-intl';
import useStyles from './VCBaseTile.styles';
import getLocaleFile from '../lang';

function VCBaseTileSkeleton(props) {
  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(ListItem, {
    className: classes.listItem,
    "aria-label": formatMessage({
      id: 'vcBaseTile.loading'
    })
  }, /*#__PURE__*/React.createElement(Paper, {
    className: classes.paper,
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: classes.skeletonH6
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "60%",
    className: "".concat(classes.subtitle, " ").concat(classes.skeletonP2)
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.bottomSection
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.bottomText
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "60%",
    className: "".concat(classes.skeletonOverline)
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    width: "80px",
    className: "".concat(classes.skeletonButton)
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rectangular",
    className: "".concat(classes.skeletonButton),
    width: "32px"
  })))));
}

export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(VCBaseTileSkeleton, props));
});