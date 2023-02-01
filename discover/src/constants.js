import { TEACHER_ROLE } from '@hmhco/amp-core/src/userContext/auth';
export var TEACHER = 'Instructor';
export var ADMIN = 'Administrator';
export var isInstructor = function isInstructor(role) {
  return role === TEACHER_ROLE;
};
export var I_READ_K2 = 'ELA_IR_IR_GK_2';
export var PROGRAM_TYPE_CURRICULUM = 'Curriculum';
export var AMIRA_IDENTIFIER = 'HMH_AMIRA_NA19_K3';
export var INTEGRATION_TYPES = {
  I_READ: 'Supplemental',
  WAGGLE: 'Waggle',
  AMIRA: 'Assessment',
  INTERVENTION: 'Intervention',
  WRITABLE: 'Writable',
  WRITING_TASK: 'Writing Task',
  SGM: 'Growth Measure'
};
export var SGM_TYPES = {
  MATH: 'Math',
  READING: 'Reading'
};
export var DISCIPLINE_TYPES = {
  MATH_GM: 'math-gm',
  READING_GM: 'reading-gm',
  SPANISH_GM: 'spanish-growth-measure'
};
export var DISCOVER_BOOKMARK_PROGRAM_KEY = 'ed-ui-bookmarks-discover-program';
export var TEACHER_ERRORS = {
  EXPIRED_PROGRAM: 'expiredProgramTeacher',
  NO_ASSOCIATED_PROGRAMS: 'noAssociatedPrograms'
};