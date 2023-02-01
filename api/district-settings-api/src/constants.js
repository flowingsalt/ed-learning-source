export var SETTINGS_RESTRICTIONS_QUERY = 'settings.restrictions.query';
export var SETTINGS_RESTRICTIONS_SET = 'settings.restrictions.set';
export var SETTINGS_VALUES_QUERY = 'settings.values.query';
export var SETTINGS_VALUES_SET = 'settings.values.set';
export var TARGETS = {
  DISTRICT: 'district',
  SCHOOL: 'school',
  STUDENT: 'student',
  TEACHER: 'teacher',
  DISTRICT_ADMIN: 'da',
  SCHOOL_ADMIN: 'sa'
};
export var ROLES = {
  ADMIN: 'Administrator',
  STUDENT: 'Learner',
  TEACHER: 'Instructor'
};
export var DMPS_CONTEXTS = {
  ORG: 'ORG',
  ROLE: 'ROLE'
};
export var DMPS_BATCH_URL = '/api/v1/batch';
export var FORM_TO_DMPS_SETTINGS_MAP = {
  checkEditAccounts: 'identity.rostering.allow_add_edit_student',
  checkEditClasses: 'identity.rostering.allow_add_edit_class',
  checkRemoveStudent: 'identity.rostering.allow_add_students_to_class',
  sourceUrl: 'identity.rostering.oneroster.api_source_url',
  apiKey: 'identity.rostering.oneroster.api_key',
  secret: 'identity.rostering.oneroster.api_secret',
  scheduledOneRosterApi: 'identity.rostering.oneroster.scheduled',
  scheduledTime: 'identity.rostering.oneroster.scheduled_time',
  authenticationMethod: 'identity.authentication.platform',
  orStudentUsername: 'identity.rostering.oneroster.student_username_template',
  orTeacherUsername: 'identity.rostering.oneroster.teacher_username_template',
  sffStudentUsername: 'identity.rostering.sff.student_username_template',
  sffTeacherUsername: 'identity.rostering.sff.teacher_username_template',
  hmhClassName: 'identity.rostering.oneroster.section_name_template',
  rosterType: 'identity.rostering.type',
  courseFilterOption: 'identity.rostering.oneroster.course_filter_option'
};
export var EVALUATOR_DMPS_SETTINGS_MAP = {
  evaluatorPageId: 'ui.evaluatorPage.config'
};