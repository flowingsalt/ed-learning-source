import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Icon from '@hmhco/icon/src/Icon';
import googleClassroomIcon from '@ed/baseline/icons/cts/products/products-google-classroom.svg';
import useStyles from './AssignmentSharedIconCell.component.style';

var AssignmentSharedIconCell = function AssignmentSharedIconCell(_ref) {
  var originalAssignmentTitle = _ref.originalAssignmentTitle,
      dataTestId = _ref.dataTestId;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement("div", {
    className: classes.assignmentDetails,
    "data-testid": dataTestId,
    "aria-label": formatMessage({
      id: "studentAssignment.title.googleClassroom"
    }, {
      assignmentTitle: originalAssignmentTitle
    })
  }, originalAssignmentTitle, /*#__PURE__*/React.createElement(Icon, {
    svg: googleClassroomIcon,
    size: "32",
    className: classes.googleClassroomIcon,
    "data-testid": "googleClassroomIcon",
    role: "img",
    "aria-hidden": "true"
  }));
};

AssignmentSharedIconCell.propTypes = {
  originalAssignmentTitle: PropTypes.string,
  dataTestId: PropTypes.string
};
export default AssignmentSharedIconCell;