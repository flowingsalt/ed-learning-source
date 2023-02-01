import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
export var PartnerModalContext = /*#__PURE__*/createContext();
PartnerModalContext.displayName = 'PartnerModalContext';
export var PartnerModalContextProvider = function PartnerModalContextProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPartnerModalOpen = _useState2[0],
      setIsPartnerModalOpen = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      partnerName = _useState4[0],
      setPartnerName = _useState4[1];

  var _useState5 = useState(function () {}),
      _useState6 = _slicedToArray(_useState5, 2),
      handleCloseModal = _useState6[0],
      _setHandleCloseModal = _useState6[1];

  return /*#__PURE__*/React.createElement(PartnerModalContext.Provider, {
    value: {
      isPartnerModalOpen: isPartnerModalOpen,
      setIsPartnerModalOpen: setIsPartnerModalOpen,
      partnerName: partnerName,
      setPartnerName: setPartnerName,
      handleCloseModal: handleCloseModal,
      setHandleCloseModal: function setHandleCloseModal(clientCallback) {
        _setHandleCloseModal(function () {
          return clientCallback;
        });
      }
    }
  }, children);
};
export var usePartnerModalContext = function usePartnerModalContext() {
  return React.useContext(PartnerModalContext);
};
PartnerModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};