import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { makeStyles } from 'tss-react/mui';
import TopLevelThemeProvider from '@hmhco/toplevel-theme-provider';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { getUserCtx, isLegacyPlatformToken } from '@hmhco/amp-core/src/userContext/auth';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import { isDemoUser } from '@hmhco/demo-entitlements-utils/src/utils/isDemoUser';
import useIsMounted from '@hmhco/react-useismounted-hook/src/useIsMounted.hook';
import useFetchPreferences from '@hmhco/rostering-preferences/src/hooks/useFetchPreferences.hook';
import useGoogleClassroomSetting from '@hmhco/google-classroom-setting-hook/src/useGoogleClassroomSetting.hooks';
import { getLocaleFile } from './lang';
import { getMenuConfigBasedOnUserRole } from './config/getMenu';
import { StateProvider } from './navStateManager';
import { getInitialState, reducer } from './navState.reducer';
import MainNavigation from './MainNavigation';
var useStyles = makeStyles({
  name: 'MainNavigationApp'
})({
  app: {
    width: '100%',
    left: 0,
    top: 0
  }
});
var defaultLocale = 'en-US';

var App = function App(_ref) {
  var _rawToken$sif;

  var basename = _ref.basename,
      theme = _ref.theme;
  var componentIsMounted = useIsMounted();
  var hasGoogleClassroomEnabled = useGoogleClassroomSetting();

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _getUserCtx = getUserCtx(),
      role = _getUserCtx.role,
      rawToken = _getUserCtx.rawToken,
      sif = _getUserCtx.sif,
      isPreviewUser = _getUserCtx.isPreviewUser,
      isEvaluator = _getUserCtx.isEvaluator,
      isSchoolAdmin = _getUserCtx.isSchoolAdmin;

  var _useFetchPreferences = useFetchPreferences(),
      preferences = _useFetchPreferences.data;

  var isLegacyPlatformUser = isLegacyPlatformToken(sif);

  var _useState = useState({
    menuTree: {},
    avatarMenu: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _useState2[0],
      menuTree = _useState2$.menuTree,
      avatarMenu = _useState2$.avatarMenu,
      setMenuTrees = _useState2[1];

  sessionStorage.removeItem('sectionId');
  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var isDemo, _getMenuConfigBasedOn, mainMenuTree, avatarMenuTree;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isDemoUser();

            case 2:
              isDemo = _context.sent;
              _getMenuConfigBasedOn = getMenuConfigBasedOnUserRole({
                role: role,
                rawToken: rawToken,
                isLegacyPlatformUser: isLegacyPlatformUser,
                isDemoUser: isDemo,
                isPreviewUser: isPreviewUser,
                isEvaluator: isEvaluator,
                isSchoolAdmin: isSchoolAdmin,
                restrictSaImporting: preferences === null || preferences === void 0 ? void 0 : preferences.restrictSaImporting,
                hasGoogleClassroomEnabled: hasGoogleClassroomEnabled
              }), mainMenuTree = _getMenuConfigBasedOn.mainMenuTree, avatarMenuTree = _getMenuConfigBasedOn.avatarMenuTree;

              if (componentIsMounted.current) {
                setMenuTrees({
                  menuTree: mainMenuTree || {},
                  avatarMenu: avatarMenuTree || {}
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [role, rawToken === null || rawToken === void 0 ? void 0 : (_rawToken$sif = rawToken.sif) === null || _rawToken$sif === void 0 ? void 0 : _rawToken$sif.accessToken, sif, preferences, hasGoogleClassroomEnabled]);

  if (!role || !Object.keys(menuTree).length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Router, {
    basename: basename
  }, /*#__PURE__*/React.createElement(LocaleProvider, null, function (languageKey) {
    return /*#__PURE__*/React.createElement(IntlProvider, {
      locale: languageKey,
      defaultLocale: defaultLocale,
      messages: getLocaleFile(languageKey)
    }, /*#__PURE__*/React.createElement(TopLevelThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.app
    }, /*#__PURE__*/React.createElement(StateProvider, {
      initState: getInitialState({
        menuTree: menuTree,
        avatarMenu: avatarMenu
      }),
      reducer: reducer
    }, /*#__PURE__*/React.createElement(MainNavigation, {
      avatarMenu: avatarMenu,
      hasGoogleClassroomEnabled: hasGoogleClassroomEnabled
    })))));
  }));
};

App.defaultProps = {
  theme: ctsDefaultTheme
};
App.propTypes = {
  basename: PropTypes.string.isRequired,
  theme: PropTypes.object
};
export default App;