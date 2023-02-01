import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'StudentAssignmentsTabPanel'
})(function () {
  return {
    tabPanelInstructionalText: {
      marginBottom: "var(--ebl-s3)"
    },
    tableContainer: {
      marginTop: "var(--ebl-s3)"
    }
  };
});