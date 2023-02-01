export var ADMIN_HELP_URL = 'http://downloads.hmlt.hmco.com/Help/ImportMngmt/Administrator/';
export var ADMIN_ED_HELP_URL = 'http://downloads.hmlt.hmco.com/Help/Ed/Administrator/#t=Overview_Administrator.htm';
export var ROSTER_LANGUAGE_KEY = 'preferencesForm.setup.step.RosterPreferences';
export var PREFERENCES_GROUPS = [{
  titleId: "".concat(ROSTER_LANGUAGE_KEY, ".authentication"),
  settings: [{
    name: 'forgotPasswordEnabled',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.forgotPassword"),
    customTestId: 'rosterDashboardForgotPasswordCheck'
  }, {
    name: 'welcomeEmailEnabled',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.welcomeEmail"),
    customTestId: 'rosterDashboardWelcomeEmailCheck'
  }]
}, {
  titleId: "".concat(ROSTER_LANGUAGE_KEY, ".teacherPermissions"),
  settings: [{
    name: 'teachersCanManageStudents',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.editAccount"),
    customTestId: 'rosterDashboardEditAccountCheck'
  }, {
    name: 'teachersCanManageClasses',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.editClasses"),
    customTestId: 'rosterDashboardEditClasses'
  }, {
    name: 'teachersCanManageStudentsInClass',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.editStudents"),
    customTestId: 'rosterDashboardEditStudents'
  }, {
    name: 'restrictSaPreferences',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.restrictSaPreferences"),
    customTestId: 'rosterDashboardRestrictSaPreferences'
  }, {
    name: 'restrictSaImporting',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.restrictSaImporting"),
    customTestId: 'rosterDashboarRestrictSaImporting'
  }]
}, {
  titleId: "".concat(ROSTER_LANGUAGE_KEY, ".honorEnrollmentDates"),
  settings: [{
    name: 'honorEnrollmentDates',
    labelId: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.honorEnrollmentDates"),
    infoTip: "".concat(ROSTER_LANGUAGE_KEY, ".checkbox.honorEnrollmentDates.infoTip"),
    customTestId: 'rosterDashboardEnrollmentDates'
  }]
}];