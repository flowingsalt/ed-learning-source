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

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import PageLayout2Col from '@hmhco/page-layout-2col';
import { TertiaryNavDesktop } from '@hmhco/tertiary-nav/src/TertiaryNavDesktop';
import { TertiaryNavMobile } from '@hmhco/tertiary-nav/src/TertiaryNavMobile';
import navigationTree from './navigationTree';
import getLocaleFile from './lang';

var DiscoverTertiaryNavLayout = function DiscoverTertiaryNavLayout(props) {
  var programType = props.programType,
      programId = props.programId,
      showProgramPage = props.showProgramPage,
      showConnectedSolutions = props.showConnectedSolutions,
      showStandards = props.showStandards,
      showKeyResourses = props.showKeyResourses,
      children = props.children;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var isWaggle = programType === 'Waggle ELA' || programType === 'Waggle Math';
  var tree = navigationTree(programType, programId, showProgramPage, showConnectedSolutions, showStandards, isWaggle ? !isWaggle : showKeyResourses);
  var menuTranslated = tree.map(function (_ref) {
    var translated = _ref.translated,
        item = _objectWithoutProperties(_ref, ["translated"]);

    return _objectSpread(_objectSpread({}, item), {}, {
      name: translated ? formatMessage({
        id: item.name
      }) : item.name
    });
  });
  var menuAriaLabel = formatMessage({
    id: 'discover.tertiaryNav.ariaLabel'
  });
  var menuName = formatMessage({
    id: 'discover.tertiaryNav.menuName'
  });
  return /*#__PURE__*/React.createElement(PageLayout2Col, {
    component: "div",
    content: children,
    desktopNav: /*#__PURE__*/React.createElement(TertiaryNavDesktop, {
      menuItems: menuTranslated,
      ariaLabel: menuAriaLabel,
      menuName: menuName
    }),
    mobileNav: /*#__PURE__*/React.createElement(TertiaryNavMobile, {
      menuItems: menuTranslated,
      ariaLabel: menuAriaLabel,
      scrollButtons: "auto",
      allowScrollButtonsMobile: true
    })
  });
};

DiscoverTertiaryNavLayout.defaultProps = {
  showStandards: false,
  programType: ''
};
DiscoverTertiaryNavLayout.propTypes = {
  programType: PropTypes.string,
  showProgramPage: PropTypes.bool.isRequired,
  showConnectedSolutions: PropTypes.bool.isRequired,
  showStandards: PropTypes.bool,
  showKeyResourses: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  programId: PropTypes.string.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(DiscoverTertiaryNavLayout, props));
});