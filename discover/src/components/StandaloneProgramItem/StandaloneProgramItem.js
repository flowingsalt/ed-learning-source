import React from 'react';
import { bool, object, string } from 'prop-types';
import { useIntl } from 'react-intl';
import Card from '@mui/material/Card';
import Svg from '@hmhco/svg/src/Svg';
import OpenInNew from '@ed/baseline/icons/cts/open-sm.svg';
import AmiraPng from '@ed/baseline/images/student-products/logo-amira.png';
import WagglePng from '@ed/baseline/images/student-products/logo-waggle.png';
import IReadPng from '@ed/baseline/images/student-products/logo-iread.png';
import WritablePng from '@ed/baseline/images/student-products/logo-writable.png';
import GrowthMeasurePng from '@ed/baseline/images/student-products/logo-sgm.png';
import { launchTeacherAmira, launchTeacherWaggle, launchTeacherWritable } from '@hmhco/content-launch';
import useStyles from './StandaloneProgramItem.styles';
import { SGM_TYPES, DISCIPLINE_TYPES } from '../../constants';

var StandaloneProgramItem = function StandaloneProgramItem(props) {
  var accessToken = props.accessToken,
      env = props.env,
      programData = props.programData,
      programTitle = props.programTitle,
      sectionRefId = props.sectionRefId,
      isAdmin = props.isAdmin;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var discipline = programData === null || programData === void 0 ? void 0 : programData.discipline;
  var programId = programData === null || programData === void 0 ? void 0 : programData.identifier;

  var sgmType = function sgmType() {
    var type;

    if (discipline === null || discipline === void 0 ? void 0 : discipline.includes(SGM_TYPES.MATH)) {
      type = DISCIPLINE_TYPES.MATH_GM;
    }

    if (discipline === null || discipline === void 0 ? void 0 : discipline.includes(SGM_TYPES.READING)) {
      type = DISCIPLINE_TYPES.READING_GM;
    }

    return type;
  };

  var launchSGM = function launchSGM(id) {
    window.location.href = "#/product/".concat(sgmType(), "/").concat(id);
  };

  var launchTeacherIRead = function launchTeacherIRead(id) {
    window.location.href = "#/iread-teacher-page?programId=".concat(id);
  };

  return /*#__PURE__*/React.createElement("section", {
    className: classes.standaloneProgramItem
  }, (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('Amira')) && /*#__PURE__*/React.createElement(Card, {
    elevation: 3
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "link",
    "data-testid": "standalone-program-launch-amira",
    onClick: function onClick() {
      return launchTeacherAmira({
        sif: accessToken,
        env: env,
        sectionId: sectionRefId
      });
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AmiraPng,
    alt: formatMessage({
      id: 'programPage.connectedSolutions.alt.amira'
    })
  }), /*#__PURE__*/React.createElement(Svg, {
    svg: OpenInNew,
    className: classes.linkIcon,
    Component: "span",
    ariaLabel: formatMessage({
      id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
    })
  }))), (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('iRead')) && !isAdmin && /*#__PURE__*/React.createElement(Card, {
    elevation: 3
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "link",
    "data-testid": "standalone-program-launch-iread",
    onClick: function onClick() {
      return launchTeacherIRead(programId);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IReadPng,
    alt: formatMessage({
      id: 'programPage.connectedSolutions.alt.iread'
    })
  }))), (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('Waggle')) && /*#__PURE__*/React.createElement(Card, {
    elevation: 3
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "link",
    "data-testid": "standalone-program-launch-waggle",
    onClick: function onClick() {
      return launchTeacherWaggle({
        sif: accessToken,
        env: env,
        sectionId: sectionRefId
      });
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WagglePng,
    alt: formatMessage({
      id: 'programPage.connectedSolutions.alt.waggle'
    })
  }), /*#__PURE__*/React.createElement(Svg, {
    svg: OpenInNew,
    className: classes.linkIcon,
    Component: "span",
    ariaLabel: formatMessage({
      id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
    })
  }))), (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('Writable')) && /*#__PURE__*/React.createElement(Card, {
    elevation: 3
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "link",
    "data-testid": "standalone-program-launch-writable",
    onClick: function onClick() {
      launchTeacherWritable(accessToken, env, sectionRefId, programId);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: WritablePng,
    alt: formatMessage({
      id: 'programPage.connectedSolutions.alt.writable'
    })
  }), /*#__PURE__*/React.createElement(Svg, {
    svg: OpenInNew,
    className: classes.linkIcon,
    Component: "span",
    ariaLabel: formatMessage({
      id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
    })
  }))), (programTitle === null || programTitle === void 0 ? void 0 : programTitle.includes('Growth Measure')) && /*#__PURE__*/React.createElement(Card, {
    elevation: 3
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "link",
    "data-testid": "standalone-program-launch-sgm",
    onClick: function onClick() {
      return launchSGM(programId);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: GrowthMeasurePng,
    alt: formatMessage({
      id: 'programPage.connectedSolutions.alt.sgm'
    })
  }))));
};

StandaloneProgramItem.propTypes = {
  programTitle: string.isRequired,
  programData: object.isRequired,
  env: string.isRequired,
  accessToken: string.isRequired,
  sectionRefId: string.isRequired,
  isAdmin: bool.isRequired
};
export default StandaloneProgramItem;