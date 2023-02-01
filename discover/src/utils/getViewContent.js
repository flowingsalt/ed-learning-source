import React from 'react';
import PropTypes, { func, object, string } from 'prop-types';
import { shouldFetchWaggleAndWritableResources } from '@hmhco/connected-partner-helper/src/util';
import { isFeatureActive } from '@hmhco/feature-flags';
import ProgramLevelOneCarousel from '../components/ProgramLevelOneCarousel/ProgramLevelOneCarousel';
import LevelOneDetailsHeader from '../components/LevelOneDetailsHeader/LevelOneDetailsHeader';
import LevelOneAccordionList from '../components/LevelOneAccordionList/LevelOneAccordionList';
import ConnectedSolutionsView from '../components/ConnectedSolutionsView/ConnectedSolutionsView';
import StandardsView from '../components/StandardsView/StandardsView';
import AllResourcesView from '../components/AllResourcesView/AllResourcesView';

var getViewContent = function getViewContent(props) {
  var moduleTitle = props.moduleTitle,
      programId = props.programId,
      userId = props.userId,
      env = props.env,
      handleOpenResource = props.handleOpenResource,
      accessToken = props.accessToken,
      programSubLevels = props.programSubLevels,
      programData = props.programData,
      detailsJsonData = props.detailsJsonData,
      sectionRefId = props.sectionRefId,
      viewType = props.viewType,
      programInfoIsValid = props.programInfoIsValid,
      loadingSectionsCheck = props.loadingSectionsCheck,
      role = props.role;
  var isFeatureEnabled = isFeatureActive('connectedPartner', true);
  var viewContent = {
    'content-view': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProgramLevelOneCarousel, {
      moduleTitle: moduleTitle,
      userId: userId,
      env: env,
      accessToken: accessToken,
      currentProgram: programId,
      cardClickHandler: handleOpenResource,
      programData: programData
    }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LevelOneDetailsHeader, {
      handleOpenResource: handleOpenResource,
      levelDetails: programSubLevels,
      userId: userId,
      accessToken: accessToken,
      env: env,
      programId: programId
    }), /*#__PURE__*/React.createElement(LevelOneAccordionList, {
      programId: programId,
      levelDetails: programSubLevels,
      programInfoIsValid: programInfoIsValid,
      loadingSectionsCheck: loadingSectionsCheck,
      role: role
    }))),
    'keyresources-view': /*#__PURE__*/React.createElement(AllResourcesView, {
      programId: programId,
      detailsJsonData: detailsJsonData,
      programData: programData
    }),
    'connected-view': /*#__PURE__*/React.createElement(ConnectedSolutionsView, {
      programId: programId,
      programData: programData,
      accessToken: accessToken,
      env: env,
      sectionRefId: sectionRefId
    }),
    'standards-view': /*#__PURE__*/React.createElement(StandardsView, {
      programId: programId,
      hasIntegrations: shouldFetchWaggleAndWritableResources(programData, isFeatureEnabled, role)
    })
  };
  return viewContent[viewType];
};

getViewContent.propTypes = {
  moduleTitle: PropTypes.string.isRequired,
  programId: string.isRequired,
  userId: string.isRequired,
  handleOpenResource: func.isRequired,
  accessToken: string.isRequired,
  env: string.isRequired,
  programSubLevels: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    levelNumber: PropTypes.string,
    levelType: PropTypes.string,
    contentTitle: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.array,
    hierarchy: PropTypes.string,
    studentEdition: PropTypes.shape({
      identifier: PropTypes.string
    })
  }).isRequired,
  programData: object.isRequired,
  detailsJsonData: object.isRequired,
  sectionRefId: string.isRequired,
  viewType: PropTypes.string
};
export default getViewContent;