import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import AssignmentResultsPage from './AssignmentResult/AssignmentResultsPage.component';

var WrapperWithProvider = function WrapperWithProvider(props) {
  var store = props.store;
  return /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(AssignmentResultsPage, props));
};

WrapperWithProvider.propTypes = {
  store: PropTypes.object
};
export default WrapperWithProvider;