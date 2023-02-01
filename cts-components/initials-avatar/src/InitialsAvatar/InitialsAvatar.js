import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/* eslint-disable react/jsx-props-no-spreading */


import React from 'react';
import PropTypes from 'prop-types';
import { BaseAvatar } from '@hmhco/base-avatar/src/BaseAvatar';
import { getInitials } from './InitialsAvatar.util';

function InitialsAvatar(props) {
  var forename = props.forename,
      surname = props.surname,
      otherProps = _objectWithoutProperties(props, ["forename", "surname"]);

  return /*#__PURE__*/React.createElement(BaseAvatar, otherProps, getInitials(forename, surname));
}

InitialsAvatar.propTypes = _objectSpread(_objectSpread({}, BaseAvatar.propTypes), {}, {
  forename: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
});
export default InitialsAvatar;