import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FormattedMessage, useIntl } from 'react-intl';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import { bool, string } from 'prop-types';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import { getPickerPrefixUrlAllResources } from '@hmhco/picker-helpers/src/pickerHelpers';
import { CardBody, CardColumn, CardTitle } from '@hmhco/card';
import Button from '@mui/material/Button';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import parseStandardSets from '../../utils/parseStandardSets';
import fetchStandardSets from '../../api/fetchStandardSets';
import useStyles from './StandardsView.styles';
import StandardsViewSkeleton from './StandardsViewSkeleton';

var NoStandardsNotification = function NoStandardsNotification() {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var notificationMessage = formatMessage({
    id: 'standardsList.noStandardsMessage'
  });
  return /*#__PURE__*/React.createElement(AlertNotification, {
    severity: "info",
    textMode: "wrap",
    label: formatMessage({
      id: 'infoMessage.customTitle'
    })
  }, notificationMessage);
};

var StandardsView = function StandardsView(props) {
  var programId = props.programId,
      hasIntegrations = props.hasIntegrations;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl2 = useIntl(),
      formatMessage = _useIntl2.formatMessage;

  useDocumentHelper(formatMessage({
    id: 'standardsList.pageTitle'
  }));
  var skeletonCount = 5;
  var prefixUrl = getPickerPrefixUrlAllResources();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      standardSets = _useState2[0],
      setStandardSets = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDataLoading = _useState4[0],
      setIsDataLoading = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      noStandardsForProgram = _useState6[0],
      setNoStandardsForProgram = _useState6[1];

  var getStandardSets = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var response, parsedStandardSets;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsDataLoading(true);
              _context.next = 3;
              return fetchStandardSets(programId, hasIntegrations);

            case 3:
              response = _context.sent;
              parsedStandardSets = parseStandardSets(response);

              if ((parsedStandardSets === null || parsedStandardSets === void 0 ? void 0 : parsedStandardSets.length) === 0) {
                setNoStandardsForProgram(true);
              } else {
                setStandardSets(parsedStandardSets);
              }

              setIsDataLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getStandardSets() {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    logMessageWithContext('Discover: Standards');

    if (programId) {
      getStandardSets();
    }
  }, [programId]);
  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    className: classes.standardsView
  }, isDataLoading && /*#__PURE__*/React.createElement(StandardsViewSkeleton, {
    count: skeletonCount
  }), !isDataLoading && noStandardsForProgram && /*#__PURE__*/React.createElement(NoStandardsNotification, null), !isDataLoading && !noStandardsForProgram && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: classes.standardSetTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "h2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "standardsList.title"
  })), /*#__PURE__*/React.createElement("p", {
    className: classes.standardSetSubtitle
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "standardsList.subtitle"
  }))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("ul", {
    className: classes.standardsList
  }, standardSets === null || standardSets === void 0 ? void 0 : standardSets.map(function (set) {
    return /*#__PURE__*/React.createElement("li", {
      key: set.id
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3,
      className: classes.standardSetCard,
      id: "standards-card-".concat(set.id)
    }, /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(CardColumn, {
      grow: true
    }, /*#__PURE__*/React.createElement(CardTitle, {
      title: /*#__PURE__*/React.createElement(Typography, {
        variant: "h4",
        component: "span",
        id: set.id
      }, formatMessage({
        id: 'standardsList.standardCard.title'
      }, {
        state: set.state,
        subject: set.subject,
        title: set.title,
        divider: /*#__PURE__*/React.createElement("span", {
          "aria-hidden": true
        }, "\u2022")
      }))
    })), /*#__PURE__*/React.createElement(CardColumn, {
      className: classes.buttonContainer
    }, /*#__PURE__*/React.createElement(Button, {
      id: "view-button-".concat(set.id),
      role: "link",
      variant: "outlined",
      color: "primary",
      disableElevation: true,
      className: classes.viewButton,
      "aria-labelledby": "view-button-".concat(set.id, " ").concat(set.id),
      "data-testid": "button-".concat(set.id),
      href: "/ui/#/".concat(prefixUrl, "/").concat(programId, "/standards/").concat(set.fileName)
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "standardsList.viewButton"
    }))))));
  })))));
};

StandardsView.propTypes = {
  programId: string.isRequired,
  hasIntegrations: bool
};
export default StandardsView;