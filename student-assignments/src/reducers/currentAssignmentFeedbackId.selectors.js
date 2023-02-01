import { createSelector } from 'reselect';
import { getStudentTeachersArray, getStudentTeachersLoading } from 'orchid-common/reducers/studentsTeachers.selectors';
import { Set } from 'immutable';
import { getAssignmentFeedback } from './assignmentListFeedback.selectors';
import { getAssignmentList } from './assignmentList.selectors';
export var getShowCurrentAssignmentFeedbackModal = function getShowCurrentAssignmentFeedbackModal(state) {
  return state.currentAssignmentFeedbackId.showModal;
};
export var getCurrentAssignmentFeedbackId = function getCurrentAssignmentFeedbackId(state) {
  return state.currentAssignmentFeedbackId.id;
};
export var getCurrentAssignmentFeedback = createSelector([getCurrentAssignmentFeedbackId, getAssignmentFeedback], function (feedbackId, assignmentFeedback) {
  if (assignmentFeedback.loading || assignmentFeedback.error) {
    return null;
  }

  return assignmentFeedback.feedback.get(feedbackId);
});
export var getFlattenedFeedback = createSelector([getCurrentAssignmentFeedback], function (feedbackList) {
  if (!feedbackList) {
    return null;
  }

  return feedbackList.map(function (feedback) {
    return {
      key: feedback.key,
      text: feedback.data.text
    };
  });
});
export var getCurrentFeedbackTeacherIds = createSelector([getCurrentAssignmentFeedback], function (assignmentFeedback) {
  if (!assignmentFeedback) {
    return Set();
  }

  return assignmentFeedback.reduce(function (acc, feedback) {
    return acc.add(feedback.createdBy);
  }, Set());
});
export var getTeacherNamesForFeedback = createSelector([getStudentTeachersArray, getCurrentFeedbackTeacherIds], function (studentsTeachers, teacherIds) {
  return teacherIds.reduce(function (acc, teacherId) {
    var teacher = studentsTeachers.find(function (teacherInList) {
      return teacherInList.refId === teacherId;
    });

    if (teacher) {
      var name = teacher.name;
      acc.push("".concat(name.firstName, " ").concat(name.lastName));
    }

    return acc;
  }, []);
});
export var getTeacherNamesAsString = createSelector([getTeacherNamesForFeedback], function (teacherNames) {
  return teacherNames.join(', ');
});
export var getAssignmentForFeedback = createSelector([getCurrentAssignmentFeedbackId, getAssignmentList], function (feedbackId, assignmentList) {
  var assignment = assignmentList.assignments.find(function (assignmentInList) {
    return assignmentInList.teacherAssignmentRefId === feedbackId;
  });
  return assignment || null;
});
export var getFeedbackForModal = createSelector([getFlattenedFeedback, getAssignmentForFeedback, getTeacherNamesAsString, getStudentTeachersLoading, getShowCurrentAssignmentFeedbackModal], function (feedback, assignment, teachers, teacherLoading, showModal) {
  if (!feedback || !assignment || !showModal) {
    return null;
  }

  return {
    title: assignment.title,
    teacher: teachers,
    loading: teacherLoading,
    feedback: feedback
  };
});