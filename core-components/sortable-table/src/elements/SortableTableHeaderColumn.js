import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import classNames from 'classnames';
import SortableIcon from './SortableIcon';

var SortableTableHeaderColumn = function SortableTableHeaderColumn(props) {
  var _classNames;

  var header = props.header,
      index = props.index,
      classes = props.classes,
      customClass = props.customClass,
      createSortHandler = props.createSortHandler,
      sortedLabel = props.sortedLabel,
      unsortedLabel = props.unsortedLabel,
      buttonHeaderTemplate = props.buttonHeaderTemplate,
      direction = props.direction,
      orderBy = props.orderBy,
      isDirectEntry = props.isDirectEntry;
  var actionCell = isDirectEntry ? classes.headerCell : header.isAction;
  var isFirstRealCell = index === 0;
  var cellClasses = classNames(classes.headerCell, (_classNames = {}, _defineProperty(_classNames, classes.firstRealHeaderCell, isFirstRealCell), _defineProperty(_classNames, customClass.firstRealHeaderCell, customClass.firstRealHeaderCell && isFirstRealCell), _defineProperty(_classNames, customClass.headerCell, customClass.headerCell), _classNames), _defineProperty({}, classes.isAction, actionCell));

  if (header.isSortable) {
    var sortableLabel = orderBy === header.id ? sortedLabel : unsortedLabel;
    return /*#__PURE__*/React.createElement(TableCell, {
      className: cellClasses,
      sortDirection: orderBy === header.id ? direction : false,
      "data-testid": header.id,
      "data-align": header.align,
      align: header.align || 'inherit',
      style: {
        minWidth: header.minWidth || 0
      }
    }, /*#__PURE__*/React.createElement(TableSortLabel, {
      active: orderBy === header.id,
      direction: direction,
      IconComponent: function IconComponent() {
        return /*#__PURE__*/React.createElement(SortableIcon, {
          active: orderBy === header.id,
          direction: direction,
          classes: classes
        });
      },
      onClick: createSortHandler(header.id),
      "data-track-event": header.trackEvent,
      "data-testid": "".concat(header.id).concat(buttonHeaderTemplate),
      "aria-live": "polite",
      "aria-atomic": "true"
    }, header.label, sortableLabel && /*#__PURE__*/React.createElement("p", {
      className: "zero-dimensions"
    }, sortableLabel)));
  }

  return /*#__PURE__*/React.createElement(TableCell, {
    className: cellClasses,
    key: header.id,
    "data-testid": header.id
  }, header.label);
};

SortableTableHeaderColumn.propTypes = {
  classes: PropTypes.object.isRequired,
  index: PropTypes.number,
  direction: PropTypes.string.isRequired,
  createSortHandler: PropTypes.func.isRequired,
  sortedLabel: PropTypes.string.isRequired,
  unsortedLabel: PropTypes.string,
  buttonHeaderTemplate: PropTypes.string.isRequired,
  customClass: PropTypes.object,
  orderBy: PropTypes.string.isRequired,
  header: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isSortable: PropTypes.bool,
    trackEvent: PropTypes.string,
    align: PropTypes.string,
    minWidth: PropTypes.number,
    isAction: PropTypes.bool
  }).isRequired,
  isDirectEntry: PropTypes.bool
};
export default SortableTableHeaderColumn;