import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bool, object, string } from 'prop-types';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import { launchIread, launchTeacherAmira, launchTeacherWaggle, launchTVSSMath180, launchTeacherWritable, launchTVSSRead180 } from '@hmhco/content-launch';
import Svg from '@hmhco/svg/src/Svg';
import OpenInNew from '@ed/baseline/icons/cts/open-sm.svg';
import AmiraPng from '@ed/baseline/images/student-products/logo-amira.png';
import WagglePng from '@ed/baseline/images/student-products/logo-waggle.png';
import IReadPng from '@ed/baseline/images/student-products/logo-iread.png';
import WritablePng from '@ed/baseline/images/student-products/logo-writable.png';
import Math180 from '@ed/baseline/images/student-products/logo-math180.png';
import Read180 from '@ed/baseline/images/student-products/logo-read180.png';
import WritingTaskPng from '@ed/baseline/images/student-products/logo-writing.png';
import GrowthMeasurePng from '@ed/baseline/images/student-products/logo-sgm.png';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import useStyles from './ConnectedSolutionsView.styles';
import { returnJustFirstIntegrationOfType } from '../../utils/utils';
import { INTEGRATION_TYPES, SGM_TYPES, DISCIPLINE_TYPES } from '../../constants';
import launchIRead from './utils'; // Spanish programs can always be identified by a program ID ending with _SP.

export var isProgramSpanish = function isProgramSpanish(urlPath) {
  var programId = urlPath.split('/')[2];
  return programId === null || programId === void 0 ? void 0 : programId.endsWith('_SP');
};
export var getSGMType = function getSGMType(discipline, urlPath) {
  var type;
  var isSpanish = isProgramSpanish(urlPath);

  if (discipline === null || discipline === void 0 ? void 0 : discipline.includes(SGM_TYPES.MATH)) {
    type = DISCIPLINE_TYPES.MATH_GM;
  }

  if (discipline === null || discipline === void 0 ? void 0 : discipline.includes(SGM_TYPES.READING)) {
    type = DISCIPLINE_TYPES.READING_GM;
  }

  if (isSpanish === true && (discipline === null || discipline === void 0 ? void 0 : discipline.includes(SGM_TYPES.READING))) {
    type = DISCIPLINE_TYPES.SPANISH_GM;
  }

  return type;
};
export var launchSGM = function launchSGM(id, discipline, urlPath) {
  window.location.href = "#/product/".concat(getSGMType(discipline, urlPath), "/").concat(id);
};

var ConnectedSolutionsView = function ConnectedSolutionsView(props) {
  var _useLocation;

  var programId = props.programId,
      programData = props.programData,
      accessToken = props.accessToken,
      env = props.env,
      isLearner = props.isLearner,
      sectionRefId = props.sectionRefId;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  useDocumentHelper(formatMessage({
    id: 'connectedSolutions.pageTitle'
  }));
  var urlPath = (_useLocation = useLocation()) === null || _useLocation === void 0 ? void 0 : _useLocation.pathname;
  var programTitle = programData === null || programData === void 0 ? void 0 : programData.title;
  var integrations = programData === null || programData === void 0 ? void 0 : programData.integration;
  var discipline = programData === null || programData === void 0 ? void 0 : programData.discipline;
  useEffect(function () {
    logMessageWithContext('Discover: Connected solutions');
  }, []);
  var amiraIntegrations = [];
  var allIntegrations = [];

  if (isLearner) {
    integrations === null || integrations === void 0 ? void 0 : integrations.forEach(function (integration) {
      // eslint-disable-next-line no-unused-expressions
      integration.type.includes(INTEGRATION_TYPES.I_READ) && allIntegrations.push(integration);
    });
  } else {
    integrations === null || integrations === void 0 ? void 0 : integrations.forEach(function (integration) {
      // eslint-disable-next-line no-unused-expressions
      integration.edition === 'TE' && !integration.title.includes('Amira') && // eslint-disable-next-line no-unused-expressions
      allIntegrations.push(integration); // eslint-disable-next-line no-unused-expressions

      integration.edition === 'TE' && integration.title.includes('Amira') && amiraIntegrations.push(integration);
    });

    if (amiraIntegrations.length > 1) {
      amiraIntegrations.length = 1;
      allIntegrations.push(amiraIntegrations[0]);
    }
  }

  var isWritablePremium = allIntegrations.some(function (integration) {
    return integration === null || integration === void 0 ? void 0 : integration.type[0].includes(INTEGRATION_TYPES.WRITABLE);
  });
  var isMath180 = programId.includes('M180');
  var isRead180 = programId.includes('READ180');

  var extractedWritableLauncher = function extractedWritableLauncher() {
    return launchTeacherWritable(accessToken, env, sectionRefId, programId);
  };

  var normalizedIntegrations = returnJustFirstIntegrationOfType(INTEGRATION_TYPES.WRITING_TASK, returnJustFirstIntegrationOfType(INTEGRATION_TYPES.WRITABLE, allIntegrations));

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("section", {
    className: classes.connectedSolutionsView
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "h2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programPage.connectedSolutions.heading"
  })), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    component: "p"
  }, formatMessage({
    id: 'programPage.connectedSolutions.subHeading'
  }, {
    programTitle: programTitle
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 2,
    component: "ul",
    role: "list",
    className: classes.connectedSolutionsGrid
  }, normalizedIntegrations === null || normalizedIntegrations === void 0 ? void 0 : normalizedIntegrations.map(function (integrationItem) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: integrationItem.productId
    }, (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.I_READ)) && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-iread",
      onClick: function onClick() {
        launchIRead(accessToken, env, launchIread, "#/iread-teacher-page?programId=".concat(programId), isLearner);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: IReadPng,
      alt: formatMessage({
        id: 'programPage.connectedSolutions.alt.iread'
      })
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.WAGGLE)) && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-waggle",
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
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.AMIRA)) && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-amira",
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
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.INTERVENTION)) && isMath180 && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-math180",
      onClick: function onClick() {
        return launchTVSSMath180(accessToken, env);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: Math180,
      alt: formatMessage({
        id: 'programPage.connectedSolutions.alt.math180'
      })
    }), /*#__PURE__*/React.createElement(Svg, {
      svg: OpenInNew,
      className: classes.linkIcon,
      Component: "span",
      ariaLabel: formatMessage({
        id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
      })
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.INTERVENTION)) && isRead180 && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-read180",
      onClick: function onClick() {
        return launchTVSSRead180(accessToken, env);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: Read180,
      alt: formatMessage({
        id: 'programPage.connectedSolutions.alt.read180'
      })
    }), /*#__PURE__*/React.createElement(Svg, {
      svg: OpenInNew,
      className: classes.linkIcon,
      Component: "span",
      ariaLabel: formatMessage({
        id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
      })
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.WRITABLE)) && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-writable",
      onClick: extractedWritableLauncher
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
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.WRITING_TASK)) && !isWritablePremium && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-writing-task",
      onClick: extractedWritableLauncher
    }, /*#__PURE__*/React.createElement("img", {
      src: WritingTaskPng,
      alt: formatMessage({
        id: 'programPage.connectedSolutions.alt.writingTask'
      })
    }), /*#__PURE__*/React.createElement(Svg, {
      svg: OpenInNew,
      className: classes.linkIcon,
      Component: "span",
      ariaLabel: formatMessage({
        id: 'programPage.connectedSolutions.newTabIcon.ariaLabel'
      })
    })))), (integrationItem === null || integrationItem === void 0 ? void 0 : integrationItem.type[0].includes(INTEGRATION_TYPES.SGM)) && /*#__PURE__*/React.createElement(Grid, {
      component: "li",
      item: true,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 4
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: 3
    }, /*#__PURE__*/React.createElement("button", {
      tabIndex: 0,
      type: "button",
      role: "link",
      "data-testid": "connected-solutions-launch-sgm",
      onClick: function onClick() {
        return launchSGM(programId, discipline, urlPath);
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: GrowthMeasurePng,
      alt: formatMessage({
        id: 'programPage.connectedSolutions.alt.sgm'
      })
    })))));
  })));
};

ConnectedSolutionsView.propTypes = {
  programId: string.isRequired,
  programData: object.isRequired,
  env: string.isRequired,
  accessToken: string.isRequired,
  isLearner: bool,
  sectionRefId: string
};
export default ConnectedSolutionsView;