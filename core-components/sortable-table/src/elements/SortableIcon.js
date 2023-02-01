import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@hmhco/icon';
import sortDescSvg from '@ed/baseline/icons/cts/dropdown-open-md.svg';
import sortAscSvg from '@ed/baseline/icons/cts/dropdown-close-md.svg';

var SortableIcon = function SortableIcon(_ref) {
  var active = _ref.active,
      direction = _ref.direction,
      classes = _ref.classes;

  if (active) {
    return /*#__PURE__*/React.createElement("span", {
      "data-testid": "sortable-icon-".concat(direction)
    }, /*#__PURE__*/React.createElement(Icon, {
      className: classes.sortableIconAscDec,
      svg: direction === 'asc' ? sortAscSvg : sortDescSvg,
      size: "24"
    }));
  }

  return /*#__PURE__*/React.createElement("span", {
    className: classes.sortableIcon,
    "data-testid": "sortable-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: sortAscSvg,
    colour: "var(--ebl-text-gray)",
    size: "24"
  }), /*#__PURE__*/React.createElement(Icon, {
    svg: sortDescSvg,
    colour: "var(--ebl-text-gray)",
    size: "24"
  }));
};

export default SortableIcon;
SortableIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};