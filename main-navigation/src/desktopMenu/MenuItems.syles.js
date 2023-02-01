import { makeStyles } from 'tss-react/mui';
import { LanguageGlobeSml, SwitchRolesSml, LogoutSml } from '@hmhco/language-icon';
export default makeStyles({
  name: 'MenuItems'
})({
  menuItem: {
    '&.Mui-focusVisible': {
      boxShadow: 'var(--ebl-focus-ring)'
    },
    '& > a': {
      textDecoration: 'none',
      color: 'var(--ebl-nav-btn-font-color)',
      '&::before': {
        "float": 'left',
        padding: '2px var(--ebl-s3) 0 0'
      },
      '&[data-test-id="logout"]': {
        padding: '24px'
      },
      '&[data-test-id="localeSwitch"]::before': {
        content: "url('data:image/svg+xml;utf8,".concat(LanguageGlobeSml(), "')")
      },
      '&[data-test-id="familyRoom"]::before': {
        content: "url('data:image/svg+xml;utf8,".concat(SwitchRolesSml(), "')")
      },
      boxShadow: 'none !important'
    },
    '& > button': {
      justifyContent: 'start !important',
      textDecoration: 'none',
      color: 'var(--ebl-nav-btn-font-color)',
      padding: 0,
      margin: 0,
      flexGrow: 1,
      '&:hover': {
        backgroundColor: 'initial'
      },
      '& > span': {
        display: 'flex'
      },
      '&[data-test-id="previewToggle"] > span > div': {
        marginRight: '16px'
      },
      '&[data-test-id="localeSwitch"] > span::before': {
        content: "url('data:image/svg+xml;utf8,".concat(LanguageGlobeSml(), "')"),
        "float": 'left',
        padding: '6px var(--ebl-s3) 0 0'
      },
      '&[data-test-id="logout"] > span::before': {
        content: "url('data:image/svg+xml;utf8,".concat(LogoutSml(), "')"),
        "float": 'left',
        padding: '6px var(--ebl-s3) 0 0'
      }
    }
  }
});