import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'StudentAssignmentsContainer'
})(function () {
  return {
    pageGreeting: {
      marginBottom: "var(--ebl-s4)"
    },
    programLaunch: {
      marginBottom: "var(--ebl-s6)"
    },
    programLaunchCTS: {
      marginBottom: "28px"
    },
    subjectLabel: {
      marginTop: "var(--ebl-s1)"
    },
    programDropdown: {
      width: '245px'
    },
    programDropdownContainer: {
      marginBottom: '-12px'
    },
    container: {
      width: '775px',
      margin: 'var(--ebl-s2) 0 var(--ebl-s2) 0'
    },
    alert: {
      width: '750px',
      padding: 'var(--ebl-s2) 0 var(--ebl-s2) 0'
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});