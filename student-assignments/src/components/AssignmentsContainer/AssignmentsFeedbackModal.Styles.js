import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'StudentAssignmentsFeedbackModal'
})(function () {
  return {
    ctsAssignmentTitle: {
      marginBottom: "var(--ebl-s3)"
    },
    ctsAssignmentMessage: {
      marginBottom: 'var(--ebl-s4)'
    },
    feedbackSkeleton: {
      display: 'inline-block',
      width: '70px'
    }
  };
});