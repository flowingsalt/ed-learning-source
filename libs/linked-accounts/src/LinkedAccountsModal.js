import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable @hmhco/amp-internal/registered-events-only */

import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import ModalDialog from '@hmhco/modal-dialog/src/ModalDialog';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import TabsComponent from '@hmhco/tabs/src/Tabs';
import Icon from '@hmhco/icon/src/Icon';
import useIsMobile from '@hmhco/breakpoints-helpers/src/useIsMobile';
import googleClassroomIcon from '@ed/baseline/icons/cts/products/products-google-classroom.svg';
import getLocaleFile from '../lang';
import GoogleClassroom from './GoogleClassroom/GoogleClassroom';
import useStyles from './LinkedAccountsModal.styles';

var LinkedAccountsModal = function LinkedAccountsModal(_ref) {
  var isOpen = _ref.isOpen,
      handleClose = _ref.handleClose;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var isMobile = useIsMobile();

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  var setCurrentTabCallback = function setCurrentTabCallback() {
    return setCurrentTab.apply(void 0, arguments);
  };

  var getTabProp = [{
    id: '1',
    wrapped: false,
    label: formatMessage({
      id: 'linked.accounts.modal.tab.title'
    }),
    ariaLabel: formatMessage({
      id: 'linked.accounts.modal.tab.title'
    }),
    icon: /*#__PURE__*/React.createElement(Icon, {
      svg: googleClassroomIcon,
      size: "29"
    }),
    component: /*#__PURE__*/React.createElement(GoogleClassroom, {
      handleClose: handleClose
    })
  }];
  return /*#__PURE__*/React.createElement(ModalDialog, {
    width: "720px",
    open: isOpen,
    handleAction: handleClose,
    handleClose: handleClose,
    actionButtonText: formatMessage({
      id: 'linked.accounts.modal.actionButtonText'
    }),
    title: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.title"
    }),
    customTestId: "linked-accounts-modal",
    customClasses: {
      paper: isMobile && classes.updateLinkedAccountsModal
    },
    hideCancelButton: true
  }, /*#__PURE__*/React.createElement(TabsComponent, {
    tabChangeCallback: function tabChangeCallback() {
      return setCurrentTabCallback(parseInt(getTabProp[currentTab].id, 10));
    }
  }, getTabProp.map(function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      tabId: tab.id,
      label: tab.label,
      ariaLabel: tab.ariaLabel,
      key: tab.id,
      icon: tab.icon,
      iconPosition: "start"
    }, tab.component);
  })));
};

LinkedAccountsModal.defaultProps = {
  isOpen: false
};
LinkedAccountsModal.propTypes = {
  isOpen: bool,
  handleClose: func.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(LinkedAccountsModal, props));
});