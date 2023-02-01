import _defineProperty from "@babel/runtime/helpers/defineProperty";

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

import React from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
/**
 * Add translations to the existing react-intl context
 * This is for child Apps or components that expect an already existing 'react-intl' context
 * (which mean there is an IntlProvider in the upper level).
 *
 * This helper will merge the provided translations with the one available in the current Intl context.
 *
 * @param children node the child receiving the extended intl context
 * @param getLocaleFile function receiving the current language key and returning the translation messages
 */

var AddTranslations = function AddTranslations(_ref) {
  var children = _ref.children,
      getLocaleFile = _ref.getLocaleFile;

  var _useIntl = useIntl(),
      locale = _useIntl.locale,
      messages = _useIntl.messages;

  var appMessages = getLocaleFile(locale) || {}; // only remerge those if the locale change

  var mergedTranslations = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, messages), appMessages);
  }, [locale]);
  return /*#__PURE__*/React.createElement(IntlProvider, {
    locale: locale,
    defaultlocale: "en-US",
    messages: mergedTranslations
  }, children);
};

AddTranslations.propTypes = {
  children: PropTypes.node,
  getLocaleFile: PropTypes.func
};
export default AddTranslations;