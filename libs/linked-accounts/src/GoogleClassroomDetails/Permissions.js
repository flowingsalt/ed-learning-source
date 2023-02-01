import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Typography from '@mui/material/Typography';
import Accordion from '@hmhco/accordion/src/Accordion/Accordion';
import useStyles from './Permissions.styles';

var Permissions = function Permissions() {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var bulletPermissionsList = [{
    key: '1',
    permission: formatMessage({
      id: 'linked.accounts.modal.permission1'
    })
  }, {
    key: '2',
    permission: formatMessage({
      id: 'linked.accounts.modal.permission2'
    })
  }, {
    key: '3',
    permission: formatMessage({
      id: 'linked.accounts.modal.permission3'
    })
  }, {
    key: '4',
    permission: formatMessage({
      id: 'linked.accounts.modal.permission4'
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: classes.permissionsWrapper
  }, /*#__PURE__*/React.createElement(Accordion, {
    expandButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.permissions.expandButtonText"
    }),
    collapseButtonText: /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.permissions.collapseButtonText"
    }),
    expandButtonAriaText: formatMessage({
      id: 'linked.accounts.modal.permissions.expandButtonText'
    }),
    collapseButtonAriaText: formatMessage({
      id: 'linked.accounts.modal.permissions.collapseButtonText'
    }),
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
      variant: "h6"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.permissions"
    })), /*#__PURE__*/React.createElement(Typography, {
      variant: "body2"
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.permissions.subTitle"
    })))
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.modal.permissions.collapsible.content",
    values: {
      br: /*#__PURE__*/React.createElement("br", null)
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.bulletListWrapper
  }, /*#__PURE__*/React.createElement("ul", {
    "aria-labelledby": "permissions"
  }, bulletPermissionsList === null || bulletPermissionsList === void 0 ? void 0 : bulletPermissionsList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: "section-".concat(item.key)
    }, /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "body2"
    }, item === null || item === void 0 ? void 0 : item.permission));
  }))), /*#__PURE__*/React.createElement(Typography, {
    className: classes.subTitle,
    variant: "body2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.modal.permissions.collapsible.content.bottom"
  }))));
};

export default Permissions;