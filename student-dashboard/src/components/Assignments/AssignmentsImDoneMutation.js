import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from '@apollo/client/react/components';
import { IM_DONE_MUTATION } from '../../api/assignments-queries';
import { updateCache, removeAssignmentFromList } from './apolloUtils';
import AssignmentsCenter from './AssignmentsCenter'; // Function will remove any assignments that match the activityRefId returned from the mutation

export var removeAssignmentFromCache = function removeAssignmentFromCache(client, _ref) {
  var data = _ref.data;
  updateCache(client, data.markAssignmentActivityDone.refId, removeAssignmentFromList);
};

var AssignmentsImDoneMutation = function AssignmentsImDoneMutation(_ref2) {
  var overdueAssignments = _ref2.overdueAssignments,
      dueTodayAssignments = _ref2.dueTodayAssignments,
      isLoading = _ref2.isLoading,
      location = _ref2.location,
      showMessage = _ref2.showMessage,
      refetch = _ref2.refetch;
  return /*#__PURE__*/React.createElement(Mutation, {
    mutation: IM_DONE_MUTATION,
    update: removeAssignmentFromCache
  }, function (apolloIAmDoneCall, _ref3) {
    var loading = _ref3.loading;
    return /*#__PURE__*/React.createElement(AssignmentsCenter, {
      overdueAssignments: overdueAssignments,
      dueTodayAssignments: dueTodayAssignments,
      isLoading: isLoading || loading,
      apolloIAmDoneCall: apolloIAmDoneCall,
      location: location,
      showMessage: showMessage,
      refetch: refetch
    });
  });
};

export default AssignmentsImDoneMutation;
AssignmentsImDoneMutation.propTypes = {
  overdueAssignments: PropTypes.shape({
    items: PropTypes.array,
    total: PropTypes.number
  }),
  dueTodayAssignments: PropTypes.shape({
    items: PropTypes.array,
    total: PropTypes.number
  }),
  isLoading: PropTypes.bool,
  location: PropTypes.func.isRequired,
  showMessage: PropTypes.bool,
  refetch: PropTypes.func.isRequired
};
AssignmentsImDoneMutation.defaultProps = {
  showMessage: false
};