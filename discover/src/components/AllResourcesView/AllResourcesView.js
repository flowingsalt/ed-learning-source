import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import { bool, object, string } from 'prop-types';
import Card from '@mui/material/Card';
import { Button, Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import { getKeyResourceIcons } from '@hmhco/resource-icon-mapper/utils/resourceIconMapper';
import Icon from '@hmhco/icon';
import { isPicker, getPickerPrefixUrlAllResources } from '@hmhco/picker-helpers/src/pickerHelpers';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import { shouldFetchWaggleAndWritableResources } from '@hmhco/connected-partner-helper/src/util';
import { isFeatureActive } from '@hmhco/feature-flags';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import useStyles from './AllResourcesView.style';
import getMappedProgramDetails from '../../utils/getMappedProgramDetails';
import fetchProductCategories from '../../api/fetchProductCategories';

var AllResourcesView = function AllResourcesView(props) {
  var _detailsJsonWithMappe;

  var programId = props.programId,
      detailsJsonData = props.detailsJsonData,
      isLearner = props.isLearner,
      programData = props.programData;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      detailsJsonWithMappedKeys = _useState2[0],
      setDetailsJsonWithMappedKeys = _useState2[1];

  var showAllResources = function showAllResources(id) {
    window.location.hash = "#/".concat(getPickerPrefixUrlAllResources(), "/").concat(id, "/all");
  };

  var showCategoryResources = function showCategoryResources(id, categoryId) {
    window.location.hash = "#/".concat(getPickerPrefixUrlAllResources(), "/").concat(id, "/all?programCategory=").concat(categoryId);
  };

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  useDocumentHelper(formatMessage({
    id: isLearner ? 'programPage.pageTitle' : 'allResources.pageTitle'
  }));
  var isFeatureEnabled = isFeatureActive('connectedPartner', true);
  var userContext = getUserCtx();

  var getKeyResources = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(details) {
      var hasIntegrations, response, parsedKeyResources;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              hasIntegrations = shouldFetchWaggleAndWritableResources(programData, isFeatureEnabled, userContext.role, isPicker());
              _context.next = 3;
              return fetchProductCategories(programId, hasIntegrations);

            case 3:
              response = _context.sent;
              parsedKeyResources = getMappedProgramDetails(details, response);
              setDetailsJsonWithMappedKeys(parsedKeyResources);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getKeyResources(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      sideMenu = _useState4[0],
      setSideMenu = _useState4[1];

  useEffect(function () {
    getKeyResources(detailsJsonData);
    logMessageWithContext('Discover: All resources');
    setSideMenu(document.querySelector('[data-testid="tertiary-nav-desktop"]')); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsJsonData]);
  return /*#__PURE__*/React.createElement("section", {
    className: classes.allResourcesView
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "h2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programPage.featuredCategoriesAndComponents.heading2"
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2,
    component: "ul",
    className: classes.allResourcesGrid
  }, detailsJsonWithMappedKeys === null || detailsJsonWithMappedKeys === void 0 ? void 0 : (_detailsJsonWithMappe = detailsJsonWithMappedKeys.key) === null || _detailsJsonWithMappe === void 0 ? void 0 : _detailsJsonWithMappe.map(function (category) {
    var _category$content$;

    return /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: sideMenu ? 4 : 3,
      key: category.content[0].api_id
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3,
      className: classes.card
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return showCategoryResources(programId, category.content[0].api_id);
      },
      className: classes.categoryContent,
      "data-testid": "resource-card"
    }, /*#__PURE__*/React.createElement(Icon, {
      colour: "",
      size: "32",
      svg: getKeyResourceIcons(category.content[0].icon)
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      component: "h3"
    }, category === null || category === void 0 ? void 0 : (_category$content$ = category.content[0]) === null || _category$content$ === void 0 ? void 0 : _category$content$.title))));
  })), !isLearner && /*#__PURE__*/React.createElement("div", {
    className: classes.allResourcesViewFooter
  }, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "allResourcesView-showMeEverything",
    onClick: function onClick() {
      return showAllResources(programId);
    },
    variant: "outlined",
    size: "large"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programPage.featuredCategoriesAndComponents.button.label"
  }))));
};

AllResourcesView.defaultProps = {
  isLearner: false
};
AllResourcesView.propTypes = {
  programId: string.isRequired,
  detailsJsonData: object.isRequired,
  programData: object.isRequired,
  isLearner: bool
};
export default AllResourcesView;