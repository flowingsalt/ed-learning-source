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
import DiscoverNavigation from '@hmhco/discover-navigation/src/DiscoverNavigation';
import { useLocation } from 'react-router-dom';
import { getModuleTitle } from '@hmhco/flexible-labelling';
import PageLayout1Col from '@hmhco/page-layout-1col';
import { isPicker } from '@hmhco/picker-helpers/src/pickerHelpers';
import { injectIntl } from 'react-intl';
import useStyles from './teacherView.style';
import AllResourcesView from '../../components/AllResourcesView/AllResourcesView';
import StandaloneProgramsView from '../../components/StandaloneProgramsView/StandaloneProgramsView';
import getViewType from '../../utils/getViewType';
import getViewContent from '../../utils/getViewContent';
import { programDataSerialization, shouldShowStandards, shouldShowConnectedSolutions, programHasCurriculumType } from '../../utils/utils';
import ErrorMessage from '../errorMessages/errorMessage';
import getMappedProgramDetails from '../../utils/getMappedProgramDetails';
import { TEACHER, TEACHER_ERRORS } from '../../constants';
var TeacherView = injectIntl(function (props) {
  var _Object$keys;

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
  var errorType = programData.data === '' ? TEACHER_ERRORS.EXPIRED_PROGRAM : TEACHER_ERRORS.NO_ASSOCIATED_PROGRAMS;

  if (!programInfoIsValid) {
    return /*#__PURE__*/React.createElement(ErrorMessage, {
      severity: "error",
      id: "noEntitlements.discover.".concat(errorType),
      loadingSectionsCheck: loadingSectionsCheck,
      programInfoIsValid: programInfoIsValid
    });
  }

  var showConnectedSolutions = isPicker() ? false : shouldShowConnectedSolutions(programData);
  var mappedProgramDetails = getMappedProgramDetails(detailsJsonData, programData);

  var discoverNavigationLoad = function discoverNavigationLoad(progTitle) {
    var _mappedProgramDetails;

    return /*#__PURE__*/React.createElement(React.Fragment, null, (progTitle === null || progTitle === void 0 ? void 0 : progTitle.includes('Rigby')) ? /*#__PURE__*/React.createElement(PageLayout1Col, null, /*#__PURE__*/React.createElement(AllResourcesView, {
      programId: programId,
      detailsJsonData: detailsJsonData,
      programData: programData
    })) : /*#__PURE__*/React.createElement(DiscoverNavigation, {
      programType: moduleTitle,
      program: programData,
      programId: programId,
      showProgramPage: Boolean(program === null || program === void 0 ? void 0 : program.showProgramPage),
      showConnectedSolutions: showConnectedSolutions,
      showStandards: shouldShowStandards(detailsJsonData, programData),
      showKeyResourses: (mappedProgramDetails === null || mappedProgramDetails === void 0 ? void 0 : (_mappedProgramDetails = mappedProgramDetails.key) === null || _mappedProgramDetails === void 0 ? void 0 : _mappedProgramDetails.length) > 0
    }, getViewContent(_objectSpread({
      viewType: viewType,
      moduleTitle: moduleTitle,
      programInfoIsValid: programInfoIsValid,
      loadingSectionsCheck: loadingSectionsCheck,
      role: TEACHER
    }, props))));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, !programHasCurriculumType(programData) ? /*#__PURE__*/React.createElement(StandaloneProgramsView, {
    programId: programId,
    programTitle: program === null || program === void 0 ? void 0 : program.title,
    programData: programData,
    detailsJsonData: detailsJsonData,
    env: env,
    accessToken: accessToken,
    sectionRefId: sectionRefId
  }) : /*#__PURE__*/React.createElement("section", {
    className: classes.teacherView,
    "data-testid": "teacher-view-wrapper"
  }, discoverNavigationLoad(program === null || program === void 0 ? void 0 : program.title)));
});
TeacherView.propTypes = {
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
export default TeacherView;