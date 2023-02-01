import React from 'react';
import { object, string, bool } from 'prop-types';
import PageLayout1Col from '@hmhco/page-layout-1col';
import { useLocation } from 'react-router-dom';
import DiscoverNavigation from '@hmhco/discover-navigation/src/DiscoverNavigation';
import ConnectedSolutionsView from '../ConnectedSolutionsView/ConnectedSolutionsView';
import getViewType from '../../utils/getViewType';
import AllResourcesView from '../AllResourcesView/AllResourcesView';
import StandaloneProgramItem from '../StandaloneProgramItem/StandaloneProgramItem';
import { shouldShowConnectedSolutions, isTrueStandaloneProgram } from '../../utils/utils';
import getMappedProgramDetails from '../../utils/getMappedProgramDetails';

var StandaloneProgramsView = function StandaloneProgramsView(props) {
  var _mappedProgramDetails;

  var programId = props.programId,
      programTitle = props.programTitle,
      programData = props.programData,
      detailsJsonData = props.detailsJsonData,
      env = props.env,
      accessToken = props.accessToken,
      sectionRefId = props.sectionRefId,
      isAdmin = props.isAdmin;
  var location = useLocation();
  var viewType = getViewType(location.pathname);
  var isAdminOnIreadProgram = isAdmin && (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('iRead'));
  var mappedProgramDetails = getMappedProgramDetails(detailsJsonData, programData);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isTrueStandaloneProgram(programData) || isAdminOnIreadProgram ? /*#__PURE__*/React.createElement(PageLayout1Col, {
    "data-testid": "standalone-programs-view-no-sidenav"
  }, /*#__PURE__*/React.createElement(StandaloneProgramItem, {
    accessToken: accessToken,
    env: env,
    programData: programData,
    programTitle: programTitle,
    sectionRefId: sectionRefId,
    isAdmin: isAdmin
  }), isAdminOnIreadProgram && /*#__PURE__*/React.createElement(AllResourcesView, {
    programId: programId,
    detailsJsonData: detailsJsonData,
    programData: programData
  })) : /*#__PURE__*/React.createElement(DiscoverNavigation, {
    programType: programTitle,
    programId: programId,
    showProgramPage: true,
    showConnectedSolutions: !isAdmin && shouldShowConnectedSolutions(programData),
    showStandards: false,
    showKeyResourses: (mappedProgramDetails === null || mappedProgramDetails === void 0 ? void 0 : (_mappedProgramDetails = mappedProgramDetails.key) === null || _mappedProgramDetails === void 0 ? void 0 : _mappedProgramDetails.length) > 0
  }, viewType === 'content-view' && /*#__PURE__*/React.createElement(StandaloneProgramItem, {
    accessToken: accessToken,
    env: env,
    programData: programData,
    programTitle: programTitle,
    sectionRefId: sectionRefId,
    isAdmin: isAdmin
  }), viewType === 'keyresources-view' && /*#__PURE__*/React.createElement(AllResourcesView, {
    programId: programId,
    detailsJsonData: detailsJsonData,
    programData: programData
  }), viewType === 'connected-view' && /*#__PURE__*/React.createElement(ConnectedSolutionsView, {
    programId: programId,
    programData: programData,
    accessToken: accessToken,
    env: env,
    sectionRefId: sectionRefId
  })));
};

StandaloneProgramsView.defaultProps = {
  isAdmin: false
};
StandaloneProgramsView.propTypes = {
  programTitle: string.isRequired,
  programId: string.isRequired,
  programData: object.isRequired,
  detailsJsonData: object.isRequired,
  env: string.isRequired,
  accessToken: string.isRequired,
  sectionRefId: string.isRequired,
  isAdmin: bool
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(StandaloneProgramsView, props);
});