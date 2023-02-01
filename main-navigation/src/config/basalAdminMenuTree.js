// NOTE: For TC and HMO admins only
var basalAdminMenuTree = {
  rosterDashboard: {
    id: 1,
    key: 'rosterDashboard',
    menuName: 'topNav.adminMenu.roster',
    route: '/roster',
    subMenu: [{
      id: 1,
      key: 'overview',
      subMenuName: 'topNav.secondaryMenu.overview',
      route: '/roster/overview'
    }, {
      id: 2,
      key: 'configuration',
      subMenuName: 'topNav.secondaryMenu.configuration',
      route: '/roster/setup'
    }],
    isActiveFor: [] // routes this menu is active for

  }
};
export default basalAdminMenuTree;