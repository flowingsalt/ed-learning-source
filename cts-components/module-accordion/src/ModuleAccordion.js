import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import removeAccordionItem from './utils/utils';
import useStyles from './ModuleAccordion.styles';

var ModuleAccordion = function ModuleAccordion(props) {
  var label = props.label,
      summaryButton = props.summaryButton,
      children = props.children,
      dataTestId = props.dataTestId,
      defaultExpanded = props.defaultExpanded,
      setExpandedElements = props.setExpandedElements,
      level = props.level;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showButton = _useState2[0],
      setShowButton = _useState2[1];

  useEffect(function () {
    if (showButton) {
      setExpandedElements(function (prevState) {
        return [].concat(_toConsumableArray(prevState), [level]);
      });
    } else {
      setExpandedElements(function (prevState) {
        return removeAccordionItem(prevState, level);
      });
    }
  }, [showButton]);

  var handleChange = function handleChange() {
    if (!summaryButton) {
      return;
    }

    setShowButton(!showButton);
  };

  return /*#__PURE__*/React.createElement(MuiAccordion, {
    elevation: 0,
    square: true,
    onChange: handleChange,
    className: classes.accordion,
    defaultExpanded: defaultExpanded
  }, /*#__PURE__*/React.createElement(MuiAccordionSummary, {
    className: classes.summaryContainer,
    expandIcon: /*#__PURE__*/React.createElement(ExpandMoreIcon, null),
    classes: {
      expandIconWrapper: classes.expandMoreIcon,
      content: classes.summaryContent
    },
    "data-testid": "".concat(dataTestId, "-summary")
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    wrap: "wrap",
    spacing: 0,
    alignItems: "stretch"
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: true,
    className: classes.labelContainer
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "p",
    className: classes.labelText
  }, label)), showButton && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: "auto",
    className: classes.summaryButtonContainer
  }, summaryButton))), /*#__PURE__*/React.createElement(MuiAccordionDetails, {
    className: classes.accordionDetails,
    "data-testid": "".concat(dataTestId, "-details")
  }, children));
};

ModuleAccordion.propTypes = {
  label: PropTypes.string.isRequired,
  summaryButton: PropTypes.node,
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool.isRequired,
  setExpandedElements: PropTypes.func.isRequired,
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};
ModuleAccordion.defaultProps = {
  summaryButton: null
};
export default ModuleAccordion;