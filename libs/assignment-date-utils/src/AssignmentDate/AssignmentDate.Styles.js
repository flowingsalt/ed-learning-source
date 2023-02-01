import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'AssignmentDate'
})(function () {
  return {
    dateWrapperInherit: {
      display: 'inherit'
    },
    dateWrapperBlock: {
      display: 'block'
    },
    date: {
      display: 'inherit',
      paddingRight: '6px',
      '&:first-letter': {
        textTransform: 'capitalize'
      }
    },
    isBold: {
      fontWeight: 'bold',
      display: 'inherit',
      paddingRight: '6px',
      '&:first-letter': {
        textTransform: 'capitalize'
      }
    }
  };
});