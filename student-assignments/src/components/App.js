import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { isRunningInAmp } from '@hmhco/amp-core/src/environmentHelpers';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import TopLevelThemeProvider from '@hmhco/toplevel-theme-provider';
import PageLayout1Col from '@hmhco/page-layout-1col';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import getCurrentEnvLearnosityKey from '@hmhco/learnosity-consumer-keys/src/getCurrentEnvLearnosityKey';
import useFetchProducts from '@hmhco/student-entitled-products-hook/src/fetchEntitledProducts.hooks';
import usePostLogin from '@hmhco/student-entitled-products-hook/src/postStudentLogin.hooks';
import { useEdsEntitlements } from '@hmhco/eds-auth-helpers';
import { useFilterProductsforEdsEntitlements } from '@hmhco/eds-filter-helpers';
import useGoogleClassroomSetting from '@hmhco/google-classroom-setting-hook/src/useGoogleClassroomSetting.hooks';
import useFetchEntitlements from './hooks/useFetchEntitlements.hooks';
import rootReducer from '../reducers';
import Routes from './Routes/Routes.component';
import rootSaga from '../sagas';
import history from '../history';
import getLocaleFile from '../lang'; // These CSS imports are a quick-fix to get the Orchid styles appearing in AMP, they should be removed when this is app is updated with CTS components

import 'orchid-common/styles/constants.css'; // This is still needed because the Orchid WritableStudentLaunch app uses Redux and writable button will appear in wrong place without it on AMP

import '@ed/orchid/src/css/toasterCustom.css';

var App = function App(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      store = _useState2[0],
      setStore = _useState2[1];

  var hasGoogleClassroomSetting = useGoogleClassroomSetting();
  useEffect(function () {
    // Create the store and saga listeners on mount, so that they can be cancelled on unmount to avoid any URL updates after a user has navigated away from the page
    var sagaMiddleware = createSagaMiddleware();
    var mergedMiddleware = [sagaMiddleware, routerMiddleware(history)];
    setStore(createStore(rootReducer, applyMiddleware.apply(void 0, mergedMiddleware)));
    var sagaTasks = sagaMiddleware.run(rootSaga);
    return function () {
      sagaTasks.cancel();
    };
  }, []);
  var languageKey = props.languageKey,
      trackEventFunction = props.trackEventFunction,
      entitledPrograms = props.entitledPrograms,
      entitledProducts = props.entitledProducts,
      basename = props.basename;

  var _getUserCtx = getUserCtx(),
      sif = _getUserCtx.rawToken.sif,
      userId = _getUserCtx.userId;

  var env = getEnvironment();
  var isInAmp = isRunningInAmp();
  var entitledProgramsForStudent = entitledPrograms;
  var entitledProductsForStudent = entitledProducts;

  var _useFetchEntitlements = useFetchEntitlements(userId),
      _useFetchEntitlements2 = _slicedToArray(_useFetchEntitlements, 2),
      programs = _useFetchEntitlements2[0],
      isLoadingInAmp = _useFetchEntitlements2[1];

  var _useFetchProducts = useFetchProducts(userId),
      _useFetchProducts2 = _slicedToArray(_useFetchProducts, 1),
      products = _useFetchProducts2[0];

  var areProductsCached = products === null || products === void 0 ? void 0 : products.fromCache;

  if (isInAmp) {
    var _products$response, _products$response$pr;

    entitledProgramsForStudent = programs;
    entitledProductsForStudent = (products === null || products === void 0 ? void 0 : (_products$response = products.response) === null || _products$response === void 0 ? void 0 : (_products$response$pr = _products$response.programs) === null || _products$response$pr === void 0 ? void 0 : _products$response$pr.program) || [];
  }

  var _useEdsEntitlements = useEdsEntitlements(entitledProductsForStudent),
      edsEntitlements = _useEdsEntitlements.data;

  entitledProductsForStudent = useFilterProductsforEdsEntitlements(entitledProductsForStudent, edsEntitlements);
  usePostLogin(entitledProductsForStudent, areProductsCached); // We'll be able to remove this "InnerApp" component when we switch fully to AMP

  /* eslint-disable-next-line react/prop-types */

  var InnerApp = function InnerApp(_ref) {
    var locale = _ref.locale;
    return /*#__PURE__*/React.createElement(PageLayout1Col, null, /*#__PURE__*/React.createElement(IntlProvider, {
      locale: locale,
      messages: getLocaleFile(locale)
    }, /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(Routes, {
      entitledPrograms: entitledProgramsForStudent,
      entitledProducts: entitledProductsForStudent,
      consumerKey: getCurrentEnvLearnosityKey(),
      sif: sif,
      env: env,
      trackEventFunction: trackEventFunction,
      isLoadingInAmp: isLoadingInAmp,
      store: store,
      hasGoogleClassroomSetting: hasGoogleClassroomSetting
    }))));
  };

  if (!store) {
    return null;
  }

  return /*#__PURE__*/React.createElement(TopLevelThemeProvider, {
    theme: ctsDefaultTheme
  }, isInAmp ? /*#__PURE__*/React.createElement(LocaleProvider, null, function (ampLanguageKey) {
    return /*#__PURE__*/React.createElement(BrowserRouter, {
      basename: basename
    }, /*#__PURE__*/React.createElement(InnerApp, {
      locale: ampLanguageKey
    }));
  }) : /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(InnerApp, {
    locale: languageKey
  })));
};

App.propTypes = {
  // Ed props
  languageKey: PropTypes.oneOf(['en-US', 'es-US']),
  trackEventFunction: PropTypes.func,
  entitledProducts: PropTypes.array,

  /** List of programs available to the student from OneSearch, needed to determine when to show the writable button and for what subjects in the dropdown */
  entitledPrograms: PropTypes.array,
  // AMP props
  basename: PropTypes.string
};
App.defaultProps = {
  languageKey: 'en-US'
};
export default App;