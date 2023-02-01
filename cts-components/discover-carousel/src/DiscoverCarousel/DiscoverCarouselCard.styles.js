import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'discoverCarouselCard'
})({
  programCarouselCard: {
    minHeight: '325px',
    width: '100%',
    '@media (min-width: 600px)': {
      margin: '3px'
    },
    '&:focus': {
      outline: 'var(--ebl-focus-color) var(--ebl-s0)',
      outlineColor: 'var(--ebl-focus-color)',
      outlineStyle: 'solid',
      outlineWidth: 'var(--ebl-s0)'
    }
  },
  programCarouselCardActive: {
    width: '100%',
    position: 'relative',
    '&:before': {
      border: '3px solid var(--ebl-brand)',
      content: '""',
      width: '100%',
      height: '100%',
      zIndex: '2',
      position: 'absolute'
    },
    '&:focus': {
      outline: 'var(--ebl-focus-color) var(--ebl-s0)',
      outlineColor: 'var(--ebl-focus-color)',
      outlineStyle: 'solid',
      outlineWidth: 'var(--ebl-s0)'
    }
  },
  cardArrow: {
    '&:after': {
      width: '29px',
      height: '24px',
      borderLeft: '29px solid transparent',
      borderRight: '29px solid transparent',
      borderTop: '24px solid var(--ebl-brand)',
      position: 'absolute',
      bottom: '-24px',
      left: 'calc(50% - 40px)',
      zIndex: '3',
      content: '""',
      display: 'block'
    }
  },
  teacherCard: {
    '&:after': {
      content: '""'
    }
  },
  lastViewed: {
    zIndex: '1',
    fontWeight: 'bold',
    paddingLeft: 'var(--ebl-s3)',
    alignContent: 'center',
    display: 'grid',
    gridTemplateColumns: '30px auto',
    textTransform: 'uppercase',
    width: '100%',
    height: '40px',
    background: 'linear-gradient(to right, var(--ebl-brand) 60%, rgba(255,0,0,0) 95%)',
    position: 'absolute',
    '& span': {
      display: 'grid',
      alignContent: 'center'
    }
  },
  cardImage: {
    objectPosition: '0px 0px',
    width: '100%',
    objectFit: 'cover',
    height: '240px'
  },
  cardTitle: {
    fontSize: 'var(--ebl-h4)',
    textTransform: 'capitalize',
    lineHeight: '1.1',
    padding: '12px var(--ebl-s3)',
    paddingLeft: 'var(--ebl-s3) !important',
    background: 'linear-gradient(to top, rgb(0, 0, 0) 20%, rgba(255, 0, 0, 0))',
    color: 'var(--ebl-brand)',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    letterSpacing: 'var(--ebl-h2-letter-spacing)',
    margin: 0,
    fontWeight: 'var(--ebl-h2-weight)',
    fontFamily: 'var(--ebl-wf-headings)',
    '& span': {
      fontSize: '2.2rem'
    }
  },
  cardFooter: {
    paddingLeft: 'var(--ebl-s3)',
    paddingTop: 'var(--ebl-s3)',
    paddingBottom: 'var(--ebl-s2)',
    minHeight: '100px',
    background: '#3D3F3F',
    paddingRight: '10px',
    backgroundColor: 'var(--cool-gray-c70)'
  },
  cardSubtitle: {
    margin: 0,
    fontFamily: 'var(--ebl-wf-headings)',
    fontSize: 'var(--ebl-h4)',
    letterSpacing: 'var(--ebl-h4-letter-spacing)',
    fontWeight: 'var(--ebl-h4-weight)',
    lineHeight: '1.1',
    color: 'white',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical'
  },
  imageContainer: {
    position: 'relative'
  }
});