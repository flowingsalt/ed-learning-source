import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { UserContextProvider } from '@hmhco/amp-core-react/src/userContextProvider';
import { IntlProvider } from 'react-intl';
import ctsDefaultTheme from '@hmhco/cts-default-theme';
import { ApolloProvider } from '@apollo/client';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import LocaleProvider from '@hmhco/i18n-react/src/LocaleProvider/LocaleProvider';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import TopLevelThemeProvider from '@hmhco/toplevel-theme-provider';
import PageLayout1Col from '@hmhco/page-layout-1col';
import useFetchProducts from '@hmhco/student-entitled-products-hook/src/fetchEntitledProducts.hooks';
import { useEdsEntitlements } from '@hmhco/eds-auth-helpers';
import { useFilterProductsforEdsEntitlements } from '@hmhco/eds-filter-helpers';
import usePostLogin from '@hmhco/student-entitled-products-hook/src/postStudentLogin.hooks';
import { getLocaleFile } from './lang';
import wormholeUrls from './api/wormholeUrls';
import { StudentDashboardContainer } from './components/StudentDashboardContainer';
import getLocation from './getLocation.util';
import createApolloClient from './createApolloClient';
import { APIContextProvider } from './context/ApiErrorContextProvider';
import { PartnerModalContextProvider } from './context/PartnerModalContextProvider';

var App = function App() {
  var _products$response, _products$response$pr;

  var userCtx = getUserCtx();
  var accessToken = userCtx.rawToken.sif.accessToken;

  var _useFetchProducts = useFetchProducts(userCtx.userId),
      _useFetchProducts2 = _slicedToArray(_useFetchProducts, 1),
      products = _useFetchProducts2[0];

  var client = useMemo(function () {
    return createApolloClient(accessToken);
  }, [accessToken]);
  var areProductsCached = products === null || products === void 0 ? void 0 : products.fromCache;
  var entitledProducts = products === null || products === void 0 ? void 0 : (_products$response = products.response) === null || _products$response === void 0 ? void 0 : (_products$response$pr = _products$response.programs) === null || _products$response$pr === void 0 ? void 0 : _products$response$pr.program;

  var _useEdsEntitlements = useEdsEntitlements(entitledProducts),
      edsEntitlements = _useEdsEntitlements.data;

  entitledProducts = useFilterProductsforEdsEntitlements(entitledProducts, edsEntitlements);
  var apiConfig = {
    env: getEnvironment(),
    sif: userCtx.rawToken.sif.accessToken,
    userId: userCtx.userId
  };
  usePostLogin(entitledProducts, areProductsCached);
  var location = getLocation;
  var props = {
    apiConfig: apiConfig,
    location: location,
    env: getEnvironment(),
    userName: userCtx.userName,
    firstName: userCtx.firstName,
    token: userCtx.rawToken
  };

  if (!products.isLoadingProducts) {
    props.entitledProducts = entitledProducts || [];
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserContextProvider, null, /*#__PURE__*/React.createElement(APIContextProvider, null, /*#__PURE__*/React.createElement(ApolloProvider, {
    client: client,
    urls: wormholeUrls
  }, /*#__PURE__*/React.createElement(LocaleProvider, null, function (languageKey) {
    return /*#__PURE__*/React.createElement(IntlProvider, {
      locale: languageKey,
      messages: getLocaleFile(languageKey)
    }, /*#__PURE__*/React.createElement(TopLevelThemeProvider, {
      theme: ctsDefaultTheme
    }, /*#__PURE__*/React.createElement(PartnerModalContextProvider, null, /*#__PURE__*/React.createElement(PageLayout1Col, null, /*#__PURE__*/React.createElement(StudentDashboardContainer, props)))));
  })))));
};

App.propTypes = {
  apiConfig: PropTypes.shape({
    env: PropTypes.string,
    sif: PropTypes.string,
    userId: PropTypes.string
  }),
  entitledProducts: PropTypes.array,
  languageKey: PropTypes.string,
  location: PropTypes.func,
  isDemoUser: PropTypes.bool
};
export default App;