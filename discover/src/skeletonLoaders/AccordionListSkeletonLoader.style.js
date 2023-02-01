import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'AccordionListSkeletonLoader'
})({
  skeletonIcon: {
    marginLeft: '10px',
    color: 'white',
    fontWeight: 'bold',
    height: '90px',
    borderRadius: '5px',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px'
  },
  skeletonTitle: {
    height: 90,
    marginLeft: 10,
    marginRight: 10
  },
  container: {
    marginLeft: '16px',
    marginRight: '16px',
    width: '100%',
    marginTop: 10
  },
  card: {
    border: '1px solid #949494'
  }
});