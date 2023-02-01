import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import expandIcon from '@ed/baseline/icons/cts/expand-sm.svg';
import Icon from '@hmhco/icon';
import useStyles from './MobileMenuExpandableItem.styles';

var MobileMenuExpandableItem = function MobileMenuExpandableItem(_ref) {
  var id = _ref.id,
      label = _ref.label,
      expanded = _ref.expanded,
      children = _ref.children,
      onChange = _ref.onChange,
      otherProps = _objectWithoutProperties(_ref, ["id", "label", "expanded", "children", "onChange"]);

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(MuiAccordion, _extends({
    component: "li",
    expanded: expanded,
    onChange: onChange,
    className: classes.expansionPanel
  }, otherProps), /*#__PURE__*/React.createElement(MuiAccordionSummary, {
    expandIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: expandIcon,
      size: "16"
    }),
    "aria-controls": "panel-".concat(id, "-content"),
    id: "panel-".concat(id, "-header"),
    className: classes.expansionPanelSummary
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    component: "span"
  }, label)), /*#__PURE__*/React.createElement(MuiAccordionDetails, {
    className: classes.expansionPanelDetails
  }, children));
};

MobileMenuExpandableItem.defaultProps = {
  expanded: false
};
MobileMenuExpandableItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
export default MobileMenuExpandableItem;