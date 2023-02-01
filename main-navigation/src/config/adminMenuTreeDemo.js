var adminMenuTreeDemo = {
  mySchools: {
    id: 14,
    key: 'mySchools',
    menuName: 'topNav.adminMenu.mySchools',
    route: '/admin/my-schools',
    subMenu: [],
    isActiveFor: ['/admin/preferences', '/admin/roster', '/admin/lms-settings'] // routes this menu is active for

  },
  licenses: {
    id: 10,
    // double-digit to avoid conflicts with adminMenuTree
    key: 'licenses',
    menuName: 'topNav.adminMenu.licenses',
    route: '/licenses',
    subMenu: [],
    isActiveFor: [] // routes this menu is active for

  },
  discover: {
    id: 13,
    key: 'discover',
    menuName: 'topNav.primaryMenu.discover',
    route: '/discover',
    subMenu: [{
      id: 1,
      key: 'hmhLibrary',
      subMenuName: 'topNav.secondaryMenu.hmhLibrary',
      route: '/discover'
    }, {
      id: 2,
      key: 'myStuff',
      subMenuName: 'topNav.secondaryMenu.myStuff',
      route: '/my-stuff'
    }],
    isActiveFor: ['/my-stuff/:any', '/my-stuff/:any/:any', '/my-stuff/:any/:any/:any', '/product/:any', '/product/:any/:any'] // routes this menu is active for

  },
  reports: {
    id: 12,
    key: 'reports',
    menuName: 'topNav.primaryMenu.reports',
    route: '/admin-growth-report',
    subMenu: [],
    isActiveFor: ['/admin-growth-report', '/admin-usage-report'] // routes this menu is active for

  },
  professionalLearning: {
    id: 11,
    key: 'professionalLearning',
    menuName: 'topNav.adminMenu.professionalLearning',
    route: '/LeadersCorner',
    subMenu: [],
    isActiveFor: [] // routes this menu is active for

  }
};
export default adminMenuTreeDemo;