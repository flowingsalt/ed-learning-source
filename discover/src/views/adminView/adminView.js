import _defineProperty from "@babel/runtime/helpers/defineProperty";

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
import PropTypes, { object, string } from 'prop-types';
import { injectIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { getModuleTitle } from '@hmhco/flexible-labelling';
import DiscoverNavigation from '@hmhco/discover-navigation/src/DiscoverNavigation';
import PageLayout1Col from '@hmhco/page-layout-1col';
import useStyles from './adminView.style';
import AllResourcesView from '../../components/AllResourcesView/AllResourcesView';
import getViewType from '../../utils/getViewType';
import getViewContent from '../../utils/getViewContent';
import { programDataSerialization, shouldShowStandards, programHasCurriculumType } from '../../utils/utils';
import ErrorMessage from '../errorMessages/errorMessage';
import StandaloneProgramsView from '../../components/StandaloneProgramsView/StandaloneProgramsView';
import getMappedProgramDetails from '../../utils/getMappedProgramDetails';
import { ADMIN } from '../../constants';
var AdminView = injectIntl(function (props) {
  var _Object$keys, _program$title;

  var intl = props.intl,
      programId = props.programId,
      env = props.env,
      accessToken = props.accessToken,
      programSubLevels = props.programSubLevels,
      programData = props.programData,
      detailsJsonData = props.detailsJsonData,
      sectionRefId = props.sectionRefId,
      loadingSectionsCheck = props.loadingSectionsCheck;
  var location = useLocation();
  var viewType = getViewType(location.pathname);

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var program = programDataSerialization(programData, programSubLevels);
  var programInfoIsValid = Boolean((_Object$keys = Object.keys(program)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length);
  var moduleTitle = getModuleTitle({
    intl: intl,
    levelLabelPlural: program === null || program === void 0 ? void 0 : program.levelLabelPlural,
    levelId: program === null || program === void 0 ? void 0 : program.programType
  });

  if (!programInfoIsValid) {
    return /*#__PURE__*/React.createElement(ErrorMessage, {
      severity: "error",
      id: "noEntitlements.discover.administrator",
      loadingSectionsCheck: loadingSectionsCheck
    });
  } // admin should be redirected to key resources if the opened
  // program is iRead because it's the only item left in the navigation


  if ((program === null || program === void 0 ? void 0 : (_program$title = program.title) === null || _program$title === void 0 ? void 0 : _program$title.includes('iRead')) && programInfoIsValid) {
    var programID = programData === null || programData === void 0 ? void 0 : programData.identifier;
    var baseUrl = "#/discover/".concat(programID, "/keyresources-view");
    window.location.href = baseUrl;
  }

  var mappedProgramDetails = getMappedProgramDetails(detailsJsonData, programData);

  var discoverNavigationLoad = function discoverNavigationLoad() {
    var _program$title2, _mappedProgramDetails;

    return /*#__PURE__*/React.createElement(React.Fragment, null, (program === null || program === void 0 ? void 0 : (_program$title2 = program.title) === null || _program$title2 === void 0 ? void 0 : _program$title2.includes('Rigby')) ? /*#__PURE__*/React.createElement(PageLayout1Col, null, /*#__PURE__*/React.createElement(AllResourcesView, {
      programId: programId,
      detailsJsonData: detailsJsonData,
      programData: programData
    })) : /*#__PURE__*/React.createElement(DiscoverNavigation, {
      programType: moduleTitle,
      programId: programId,
      showProgramPage: program.showProgramPage,
      showConnectedSolutions: false,
      showStandards: shouldShowStandards(detailsJsonData, programData),
      showKeyResourses: (mappedProgramDetails === null || mappedProgramDetails === void 0 ? void 0 : (_mappedProgramDetails = mappedProgramDetails.key) === null || _mappedProgramDetails === void 0 ? void 0 : _mappedProgramDetails.length) > 0
    }, getViewContent(_objectSpread({
      viewType: viewType,
      moduleTitle: moduleTitle,
      programInfoIsValid: programInfoIsValid,
      loadingSectionsCheck: loadingSectionsCheck,
      role: ADMIN
    }, props))));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, !programHasCurriculumType(programData) ? /*#__PURE__*/React.createElement(StandaloneProgramsView, {
    programId: programId,
    programTitle: program.title,
    programType: program.type,
    programData: programData,
    detailsJsonData: detailsJsonData,
    env: env,
    accessToken: accessToken,
    sectionRefId: sectionRefId,
    isAdmin: true
  }) : /*#__PURE__*/React.createElement("section", {
    className: classes.adminView,
    "data-testid": "admin-view-wrapper"
  }, discoverNavigationLoad()));
});
AdminView.propTypes = {
  programId: string.isRequired,
  accessToken: string.isRequired,
  env: string.isRequired,
  programSubLevels: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    levelNumber: PropTypes.string,
    levelLabel: PropTypes.string,
    contentTitle: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.array,
    hierarchy: PropTypes.string,
    studentEdition: PropTypes.shape({
      identifier: PropTypes.string
    })
  }).isRequired,
  programData: PropTypes.oneOfType([object, string]).isRequired,
  detailsJsonData: object.isRequired,
  sectionRefId: string.isRequired,
  loadingSectionsCheck: PropTypes.shape({
    filteredData: PropTypes.bool,
    currentProgramData: PropTypes.bool
  }).isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AdminView, props);
});