import React from 'react';
import { Typography, Button } from '@mui/material';
import { getSubtitleLabel as getUnitLabel } from '@hmhco/flexible-labelling';
import nextSvg from '@ed/baseline/icons/cts/next-sm.svg';
import coreTeacherLg from '@ed/baseline/icons/cts/core-teacher-lg.svg';
import coreStudentLg from '@ed/baseline/icons/cts/core-student-lg.svg';
import { getPickerPrefixUrlAllResources } from '@hmhco/picker-helpers/src/pickerHelpers';
import PropTypes, { string, func } from 'prop-types';
import Icon from '@hmhco/icon';
import useStyles from './LevelOneDetailsHeader.styles';
import DetailsHeaderSkeletonLoader from '../../skeletonLoaders/DetailsHeaderSkeletonLoader';

var LevelOneDetailsHeader = function LevelOneDetailsHeader(props) {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var handleOpenResource = props.handleOpenResource,
      levelDetails = props.levelDetails,
      userId = props.userId,
      accessToken = props.accessToken,
      env = props.env,
      programId = props.programId;
  var contextId = levelDetails.contextId;
  var viewResourcesLink = "#/".concat(getPickerPrefixUrlAllResources(), "/").concat(programId, "/pCID/").concat(contextId);

  if (!levelDetails.teacherEdition && !levelDetails.studentEdition && !levelDetails.hierarchy) {
    return /*#__PURE__*/React.createElement(DetailsHeaderSkeletonLoader, {
      count: 3
    });
  }

  var unitLabel = getUnitLabel(levelDetails).label;
  return /*#__PURE__*/React.createElement("section", {
    className: classes.detailsHeader
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.headerTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "h3"
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.levelType,
    "data-testid": "level-one-type"
  }, unitLabel), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: classes.levelTitle
  }, levelDetails.title))), /*#__PURE__*/React.createElement("div", {
    className: classes.headerControls
  }, /*#__PURE__*/React.createElement("ul", null, levelDetails.teacherEdition && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "discover-program-page-open-teacher-edition",
    onClick: function onClick() {
      return handleOpenResource({
        resourceId: levelDetails.teacherEdition.identifier,
        item: levelDetails,
        uId: userId,
        sif: accessToken,
        environment: env,
        program: programId,
        hierarchy: levelDetails.hierarchy,
        isSourceCarousel: false
      });
    },
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: coreTeacherLg,
      size: "16",
      colour: "white"
    }),
    variant: "contained",
    color: "primary",
    disableElevation: true
  }, levelDetails.teacherEdition.productDisplayTitle)), levelDetails.studentEdition && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "discover-program-page-open-student-edition",
    onClick: function onClick() {
      return handleOpenResource({
        resourceId: levelDetails.studentEdition.identifier,
        item: levelDetails,
        uId: userId,
        sif: accessToken,
        environment: env,
        program: programId,
        hierarchy: levelDetails.hierarchy,
        isSourceCarousel: false
      });
    },
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: coreStudentLg,
      size: "16",
      colour: "white"
    }),
    variant: "contained",
    color: "primary",
    disableElevation: true
  }, levelDetails.studentEdition.productDisplayTitle)), levelDetails.hierarchy && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Button, {
    "data-testid": "discover-program-page-view-resources",
    href: viewResourcesLink,
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: nextSvg,
      size: "16",
      colour: "#065ec2"
    }),
    variant: "outlined",
    color: "primary",
    disableElevation: true
  }, "View Resources")))));
};

LevelOneDetailsHeader.propTypes = {
  userId: string.isRequired,
  accessToken: string.isRequired,
  env: string.isRequired,
  programId: string.isRequired,
  handleOpenResource: func.isRequired,
  levelDetails: PropTypes.shape({
    id: PropTypes.string,
    contextId: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    imageUrl: PropTypes.string,
    levelNumber: PropTypes.string,
    levelType: PropTypes.string,
    contentTitle: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.array,
    hierarchy: PropTypes.string,
    studentEdition: PropTypes.shape({
      identifier: PropTypes.string,
      productDisplayTitle: PropTypes.string
    }),
    teacherEdition: PropTypes.shape({
      identifier: PropTypes.string,
      productDisplayTitle: PropTypes.string
    })
  }).isRequired
};
export default LevelOneDetailsHeader;