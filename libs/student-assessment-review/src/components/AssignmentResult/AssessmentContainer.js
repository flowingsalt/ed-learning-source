import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchAssignment, launchReview } from '../../actions';

var AssessmentContainer = function AssessmentContainer(props) {
  var dispatch = useDispatch();
  var assignment = props.assignment,
      assignmentId = props.assignmentId,
      consumerKey = props.consumerKey;
  useEffect(function () {
    // Check if the assignment in the store (refId) matches the assignmentId prop
    // If not, fetch the new assignment using the assignmentId prop from the endpoint
    // Otherwise, launch the assignment from the store
    if (assignmentId !== null && assignment.refId !== assignmentId) {
      dispatch(fetchAssignment(assignmentId, consumerKey));
    } else if (assignment && assignment.refId) {
      dispatch(launchReview(assignment, consumerKey));
    } else {
      dispatch(fetchAssignment(assignmentId, consumerKey));
    }
  }, []);
  return (
    /*#__PURE__*/

    /*
     * We have a double div because learnosity's way of rendering is imcompatible with how react resolves
     * the shadow DOM with the real DOM. Learnosity replaces the learnosity_assess element with it's
     * own content. When React comes along to remove the learnosity_assess element, it's no longer in the
     * DOM and throws an error.
     */
    React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      id: "learnosity_assess"
    }))
  );
};

AssessmentContainer.propTypes = {
  assignment: PropTypes.object,
  assignmentId: PropTypes.string,
  consumerKey: PropTypes.string
};
export default AssessmentContainer;