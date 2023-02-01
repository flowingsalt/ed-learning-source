import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'ClassroomClassroom'
})(function () {
  return {
    title: {
      margin: 'var(--ebl-s3) 0 var(--ebl-s3) 0'
    },
    signInBtn: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 'var(--ebl-s6)',
      '& > button': {
        marginLeft: 0
      }
    }
  };
});