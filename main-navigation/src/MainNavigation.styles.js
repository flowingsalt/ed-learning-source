import { makeStyles } from 'tss-react/mui';
export default makeStyles({
  name: 'MainNavigationStyles'
})(function (theme) {
  return {
    menuWrp: {
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      // Needs to be greater than everything other than skiplinks, modals, help panel - there is a ticket raised to control this properly in baseline
      // https://jira.hmhco.com/browse/EF-12018
      zIndex: theme.zIndex.appBar
    },
    dummyHeight: {
      // dummy class, used to simulate space occupied by the main nav
      width: '100%',
      minHeight: 'var(--ebl-nav-height)'
    },
    singleMenuSpace: {
      height: 'var(--ebl-nav-height)'
    },
    twoMenuSpace: {
      height: 'calc(var(--ebl-nav-height) + var(--ebl-subnav-height))'
    }
  };
});