import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import Icon from '@hmhco/icon';
import nextSvg from '@ed/baseline/icons/cts/next-sm.svg';
import { isFeatureActive } from '@hmhco/feature-flags';
import { getLessonLabel, getOpenLinkLabel } from '@hmhco/flexible-labelling';
import { getPickerPrefixUrlAllResources, getPickerPrefixUrlDiscover, isPicker } from '@hmhco/picker-helpers/src/pickerHelpers';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import useStyles from './LevelListItem.styles';
import DecorativeHierarchy from './DecorativeHierarchy';

var endIcon = function endIcon() {
  return /*#__PURE__*/React.createElement(Icon, {
    svg: nextSvg,
    size: "16",
    colour: "var(--ebl-action-color)"
  });
};

var LevelListItem = function LevelListItem(_ref) {
  var parentHierarchy = _ref.parentHierarchy,
      programId = _ref.programId,
      isLevelThree = _ref.isLevelThree,
      level = _ref.level,
      endpoint = _ref.endpoint;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var hierarchy = level.hierarchy,
      title = level.title,
      contextId = level.contextId;
  var listItemClass = classNames(classes.listItem, isLevelThree && classes.levelThreeListItem); // If Level label and Level number are available and blank then no Lesson eyebrow should be displayed to the user.
  // If Level Label is blank and level number is populated then level number field should not be used to display
  // on the Lesson eyebrow and instead the Lesson eyebrow should be blank.

  var _getLessonLabel = getLessonLabel(level, true),
      label = _getLessonLabel.label,
      hideLabel = _getLessonLabel.hideLabel;

  var linkLabel = getOpenLinkLabel(level);
  var testId = "discover-program-page-view-".concat(isLevelThree ? 'level1-' : '', "resources-").concat(hierarchy);
  var isBrowseByScopeAndSequence = isFeatureActive('allResourcesBrowseByScopeAndSequence', true);
  var prefixUrlForDiscover = getPickerPrefixUrlDiscover();
  var prefixUrlForAllResources = getPickerPrefixUrlAllResources();
  var href = "#/".concat(prefixUrlForDiscover, "/").concat(programId, "/lesson/").concat(parentHierarchy, "/").concat(endpoint);

  if (isBrowseByScopeAndSequence) {
    href = "#/".concat(prefixUrlForAllResources, "/").concat(programId, "/pCID/").concat(String(contextId));
  }

  return /*#__PURE__*/React.createElement("li", {
    className: listItemClass
  }, /*#__PURE__*/React.createElement(DecorativeHierarchy, {
    level: level
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    component: "h4",
    className: classes.lessonTitle
  }, !hideLabel && /*#__PURE__*/React.createElement("span", {
    className: classes.levelType
  }, label), /*#__PURE__*/React.createElement("span", null, title))), /*#__PURE__*/React.createElement(Button, {
    role: "link",
    "data-testid": testId,
    href: href,
    endIcon: endIcon(),
    variant: "outlined",
    color: "primary",
    disableElevation: true,
    className: classes.openLessonButton,
    "aria-label": formatMessage({
      id: 'programPage.level.openLink'
    }, {
      label: title ? "".concat(linkLabel, " ").concat(title) : "".concat(linkLabel, " ").concat(label)
    }),
    onClick: function onClick() {
      return !isPicker() && logMessageWithContext('Tracking bookmarks - Open Lesson');
    }
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programPage.level.openLink",
    values: {
      label: linkLabel
    }
  })));
};

LevelListItem.defaultProps = {
  endpoint: ''
};
LevelListItem.propTypes = {
  endpoint: PropTypes.string,
  programId: PropTypes.string.isRequired,
  isLevelThree: PropTypes.bool,
  level: PropTypes.object.isRequired,
  parentHierarchy: PropTypes.string.isRequired
};
export default LevelListItem;