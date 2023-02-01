import React from 'react';
import PropTypes, { func, string, object, bool } from 'prop-types';
import PageLayout1Col from '@hmhco/page-layout-1col';
import { getModuleTitle } from '@hmhco/flexible-labelling';
import { injectIntl } from 'react-intl';
import useStyles from './studentView.style';
import ProgramLevelOneCarousel from '../../components/ProgramLevelOneCarousel/ProgramLevelOneCarousel';
import AllResourcesView from '../../components/AllResourcesView/AllResourcesView';
import ConnectedSolutionsView from '../../components/ConnectedSolutionsView/ConnectedSolutionsView';
import { programDataSerialization, checkHasIRead, programHasCurriculumType, programHasCurriculumData } from '../../utils/utils';
import ErrorMessage from '../errorMessages/errorMessage';
import getMappedProgramDetails from '../../utils/getMappedProgramDetails';
var StudentView = injectIntl(function (_ref) {
  var _Object$keys, _programInfo$title, _mappedProgramDetails;

  var programId = _ref.programId,
      intl = _ref.intl,
      userId = _ref.userId,
      env = _ref.env,
      handleOpenResource = _ref.handleOpenResource,
      programData = _ref.programData,
      accessToken = _ref.accessToken,
      detailsJsonData = _ref.detailsJsonData,
      isLearner = _ref.isLearner,
      loadingSectionsCheck = _ref.loadingSectionsCheck;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var programInfo = programDataSerialization(programData, {});
  var isProgramInfoValid = Boolean((_Object$keys = Object.keys(programInfo)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length);
  var moduleTitle = getModuleTitle({
    intl: intl,
    levelLabelPlural: programInfo === null || programInfo === void 0 ? void 0 : programInfo.levelLabelPlural,
    levelId: programInfo === null || programInfo === void 0 ? void 0 : programInfo.programType
  });

  if (!isProgramInfoValid) {
    return /*#__PURE__*/React.createElement(ErrorMessage, {
      severity: "error",
      id: "noEntitlements.discover.expiredProgramStudent",
      loadingSectionsCheck: loadingSectionsCheck
    });
  }

  var canShowCarousel = function canShowCarousel(program) {
    return programHasCurriculumType(program) && programHasCurriculumData(program);
  };

  var isReading = programInfo === null || programInfo === void 0 ? void 0 : (_programInfo$title = programInfo.title) === null || _programInfo$title === void 0 ? void 0 : _programInfo$title.includes('Into Reading');
  var hasIReadIntegration = checkHasIRead(programInfo === null || programInfo === void 0 ? void 0 : programInfo.integration);
  var mappedProgramDetails = getMappedProgramDetails(detailsJsonData, programData);
  return /*#__PURE__*/React.createElement("section", {
    className: classes.studentView
  }, /*#__PURE__*/React.createElement(PageLayout1Col, null, canShowCarousel(programData) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProgramLevelOneCarousel, {
    userId: userId,
    moduleTitle: moduleTitle,
    env: env,
    programData: programData,
    accessToken: accessToken,
    currentProgram: programId,
    cardClickHandler: handleOpenResource,
    isLearner: isLearner
  })), isReading && hasIReadIntegration && /*#__PURE__*/React.createElement(ConnectedSolutionsView, {
    programId: programId,
    programData: programData,
    accessToken: accessToken,
    env: env,
    isLearner: isLearner
  }), (mappedProgramDetails === null || mappedProgramDetails === void 0 ? void 0 : (_mappedProgramDetails = mappedProgramDetails.key) === null || _mappedProgramDetails === void 0 ? void 0 : _mappedProgramDetails.length) > 0 && /*#__PURE__*/React.createElement(AllResourcesView, {
    programId: programId,
    detailsJsonData: detailsJsonData,
    isLearner: isLearner,
    programData: programData
  })));
});
StudentView.propTypes = {
  programId: string.isRequired,
  userId: string.isRequired,
  handleOpenResource: func.isRequired,
  accessToken: string.isRequired,
  env: string.isRequired,
  detailsJsonData: object.isRequired,
  programData: PropTypes.oneOfType([object, string]).isRequired,
  isLearner: bool.isRequired,
  loadingSectionsCheck: PropTypes.shape({
    filteredData: PropTypes.bool,
    currentProgramData: PropTypes.bool
  }).isRequired
};
export default StudentView;