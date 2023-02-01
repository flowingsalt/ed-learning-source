import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'DiscoverCarousel'
})({
  root: {
    minWidth: '100%',
    maxWidth: 'calc(100vw - var(--ebl-s4))',
    padding: '0 var(--ebl-s0)'
  },
  carousel: {
    paddingBottom: '40px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  carouselBox: {
    '& > div': {
      '& .slick-slide': {
        position: 'relative',
        width: '100%',
        '@media (min-width: 600px)': {
          paddingRight: '11px',
          paddingLeft: '3px'
        }
      },
      '& .slick-list': {
        width: 'calc(100% - 120px)',
        "float": 'left',
        paddingTop: '3px',
        paddingBottom: '25px',
        '& .slick-track': {
          marginLeft: '0',
          marginRight: '0'
        }
      }
    }
  },
  shortCarousel: {
    paddingLeft: '60px'
  },
  leftControl: {
    marginTop: '135px',
    width: '60px',
    "float": 'left',
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    '& button': {
      border: 'none'
    }
  },
  rightControl: {
    marginTop: '135px',
    "float": 'right',
    width: '60px',
    display: 'grid',
    justifySelf: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    '& button': {
      border: 'none'
    }
  },
  carouselItem: {
    display: 'flex',
    width: '100%',
    padding: '0 calc(var(--ebl-s4) / 2)'
  }
});