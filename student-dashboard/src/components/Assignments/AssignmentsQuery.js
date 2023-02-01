import React from 'react';
import PropTypes from 'prop-types';
import { Query } from '@apollo/client/react/components';
import getTimezoneOffset from '@hmhco/core-network/src/utils/getTimezoneOffset';
import AssignmentsImDoneMutation from './AssignmentsImDoneMutation';
import { ASSIGNMENTS_LIST_QUERY } from '../../api/assignments-queries';

var AssignmentsQuery = function AssignmentsQuery(_ref) {
  var handleError = _ref.handleError,
      location = _ref.location,
      showMessage = _ref.showMessage;
  return /*#__PURE__*/React.createElement(Query, {
    query: ASSIGNMENTS_LIST_QUERY,
    variables: {
      timeZoneOffset: String(getTimezoneOffset)
    },
    onError: function onError() {
      return handleError(true);
    },
    notifyOnNetworkStatusChange: true
  }, function (_ref2) {
    var loading = _ref2.loading,
        data = _ref2.data,
        refetch = _ref2.refetch;
    var overdueAssignments;
    var dueTodayAssignments;

    if (data) {
      var _data$student = data.student;
      overdueAssignments = _data$student.overdueAssignments;
      dueTodayAssignments = _data$student.dueTodayAssignments;
    }

    return /*#__PURE__*/React.createElement(AssignmentsImDoneMutation, {
      overdueAssignments: overdueAssignments,
      dueTodayAssignments: dueTodayAssignments,
      isLoading: loading,
      location: location,
      showMessage: showMessage,
      refetch: refetch
    });
  });
};

export default AssignmentsQuery;
AssignmentsQuery.propTypes = {
  handleError: PropTypes.func.isRequired,
  location: PropTypes.func.isRequired,
  showMessage: PropTypes.bool
};
AssignmentsQuery.defaultProps = {
  showMessage: false
};