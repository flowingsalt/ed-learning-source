import _extends from "@babel/runtime/helpers/extends";
import { resourceIconMediaType } from '@hmhco/resource-icon-mapper/utils/resourceIconMapper';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@hmhco/icon';
import { hasFlexibleLabels } from '@hmhco/flexible-labelling';
import useStyles from './DecorativeHierarchy.styles';
/* eslint-disable react/jsx-props-no-spreading */

var MAX_SYMBOLS_LENGTH = 4;

var _resourceIconMediaTyp = resourceIconMediaType('eBook'),
    defaultIcon = _resourceIconMediaTyp.icon;

var getDecorativeChildrenAndStyles = function getDecorativeChildrenAndStyles(hierarchy) {
  var children = hierarchy === null || hierarchy === void 0 ? void 0 : hierarchy.slice(0, MAX_SYMBOLS_LENGTH);

  switch (children === null || children === void 0 ? void 0 : children.length) {
    case 1:
      return {
        children: children,
        style: {
          fontSize: '2.25rem'
        }
      };

    case 2:
      return {
        children: children,
        style: {
          fontSize: '2rem'
        }
      };

    case 3:
      return {
        children: children,
        style: {
          fontSize: '1.75rem'
        }
      };

    case 4:
      return {
        children: children,
        style: {
          fontSize: '1.375rem'
        }
      };

    default:
      return {
        children: ''
      };
  }
};

var DecorativeHierarchy = function DecorativeHierarchy(_ref) {
  var level = _ref.level;
  var hierarchy = level.hierarchy,
      levelLabel = level.levelLabel,
      levelNumber = level.levelNumber;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  if (!hasFlexibleLabels({
    levelLabel: levelLabel,
    levelNumber: levelNumber
  })) {
    return /*#__PURE__*/React.createElement("span", _extends({}, getDecorativeChildrenAndStyles(hierarchy), {
      "aria-hidden": "true",
      className: classes.root
    }));
  }

  var _ref2 = levelNumber ? getDecorativeChildrenAndStyles(levelNumber) : {
    children: /*#__PURE__*/React.createElement(Icon, {
      "data-testid": "default-icon",
      svg: defaultIcon,
      size: "32"
    })
  },
      children = _ref2.children,
      style = _ref2.style;

  return /*#__PURE__*/React.createElement("div", {
    style: style,
    "aria-hidden": "true",
    className: classes.root
  }, children);
};

DecorativeHierarchy.propTypes = {
  level: PropTypes.shape({
    hierarchy: PropTypes.string,
    levelNumber: PropTypes.string,
    levelLabel: PropTypes.string
  }).isRequired
};
export default DecorativeHierarchy;