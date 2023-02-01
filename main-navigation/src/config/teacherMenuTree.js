import { TEACHER_ASSIGNMENTS_OVERVIEW_AMP } from '@hmhco/url-const-assignments/src/teacherAssignmentOverviewUrl';
import { TEACHER_ASSIGNMENTS_DETAILS_AMP_ROUTE } from '@hmhco/url-const-assignmentsdetails/src/teacherAssignmentDetailsUrl';
import { TEACHER_MANUAL_SCORING_ROUTE } from '@hmhco/url-const-manualscoring/src/manualScoringUrl';
import { TEACHER_ASSIGNMENT_REVIEW_ROUTE } from '@hmhco/url-const-assignmentreview/src/teacherAssessmentReviewUrl';
import { TEACHER_GROUPS_AMP_URL } from '@hmhco/url-const-groups/src/groupsUrl';
import { VIRTUAL_CLASSROOM_AMP_URL } from '@hmhco/url-const-virtualclassroom/src/virtualClassroomUrl';
import { DIRECT_ENTRY_URL_ROUTE } from '@hmhco/url-const-directentry/src/directEntryURL';
import { MY_CLASS_SETTINGS_URL, STUDENT_SETTINGS_URL, CLASSROOM_SETTINGS_URL } from '@hmhco/url-const-settings/src/settingsUrl';
import { TEACHER_ROSTER_URL_AMP } from '@hmhco/url-const-roster/src/teacherRosterUrl';
import { ROSTER_STUDENTS_URL } from '@hmhco/url-const-students/src/rosterStudentsUrl';
var teacherMenuTree = {
  dashboard: {
    id: 1,
    key: 'dashboard',
    menuName: 'topNav.primaryMenu.dashboard',
    route: '/dashboard',
    subMenu: [],
    isActiveFor: [] // routes this menu is active for

  },
  myClasses: {
    id: 2,
    key: 'myClasses',
    menuName: 'topNav.primaryMenu.myClasses',
    route: '/my-classes',
    subMenu: [],
    isActiveFor: ["/".concat(TEACHER_ASSIGNMENTS_OVERVIEW_AMP), TEACHER_ASSIGNMENTS_DETAILS_AMP_ROUTE, TEACHER_ASSIGNMENT_REVIEW_ROUTE, TEACHER_MANUAL_SCORING_ROUTE, "/".concat(TEACHER_GROUPS_AMP_URL), "/".concat(VIRTUAL_CLASSROOM_AMP_URL), "/".concat(MY_CLASS_SETTINGS_URL), "/".concat(TEACHER_ROSTER_URL_AMP, "/:schoolId?"), "/".concat(ROSTER_STUDENTS_URL), "/".concat(STUDENT_SETTINGS_URL), "/".concat(CLASSROOM_SETTINGS_URL), "/".concat(DIRECT_ENTRY_URL_ROUTE)]
  },
  discover: {
    id: 3,
    key: 'discover',
    menuName: 'topNav.primaryMenu.discover',
    route: '/discover',
    subMenu: [{
      id: 1,
      key: 'hmhLibrary',
      subMenuName: 'topNav.secondaryMenu.hmhLibrary',
      route: '/discover',
      isActiveFor: ['/allResources/:any', '/allResources/:any/:any', '/allResources/:any/:any/:any', '/resource-details/:any']
    }, {
      id: 2,
      key: 'myStuff',
      subMenuName: 'topNav.secondaryMenu.myStuff',
      route: '/my-stuff'
    }],
    isActiveFor: ['/my-stuff/:any', '/my-stuff/:any/:any', '/my-stuff/:any/:any/:any', '/product/:any', '/product/:any/:any', '/allResources/:any', '/allResources/:any/:any', '/allResources/:any/:any/:any'] // routes this menu is active for

  },
  reports: {
    id: 4,
    key: 'reports',
    menuName: 'topNav.primaryMenu.reports',
    route: '/reports/assessment-report',
    subMenu: [],
    isActiveFor: ['/reports/:any'] // routes this menu is active for

  },
  teachersCorner: {
    id: 5,
    key: 'teachersCorner',
    menuName: 'topNav.primaryMenu.teachersCorner',
    route: '/TeachersCorner',
    subMenu: [],
    isActiveFor: [] // routes this menu is active for

  }
};
export default teacherMenuTree;