import camelCase from 'lodash/camelCase';
import writingActivities from '@ed/baseline/icons/cts/writing-activities-xl.svg';
import teacherAids from '@ed/baseline/icons/cts/teacher-aids-xl.svg';
import studyAids from '@ed/baseline/icons/cts/study-aids-xl.svg';
import standards from '@ed/baseline/icons/cts/standards-xl.svg';
import rubrics from '@ed/baseline/icons/cts/rubrics-xl.svg';
import referenceMaterials from '@ed/baseline/icons/cts/reference-materials-xl.svg';
import readingSupports from '@ed/baseline/icons/cts/reading-supports-xl.svg';
import readers from '@ed/baseline/icons/cts/readers-xl.svg';
import practice from '@ed/baseline/icons/cts/practice-xl.svg';
import guidedReadingWorkbook from '@ed/baseline/icons/cts/guided-reading-workbook-xl.svg';
import graphicOrganizers from '@ed/baseline/icons/cts/graphic-organizers-xl.svg';
import enrichment from '@ed/baseline/icons/cts/enrichment-xl.svg';
import eLL from '@ed/baseline/icons/cts/ell-xl.svg';
import coreTeacher from '@ed/baseline/icons/cts/core-teacher-xl.svg';
import coreStudent from '@ed/baseline/icons/cts/core-student-xl.svg';
import assessments from '@ed/baseline/icons/cts/assessments-xl.svg';
import answerKeys from '@ed/baseline/icons/cts/answer-keys-xl.svg';
import interactiveContent from '@ed/baseline/icons/cts/interactive-xl.svg';
import User from '@ed/baseline/icons/cts/user-xl.svg';
import speakingListeningStudio from '@ed/baseline/icons/cts/speaking-listening-studio-xl.svg';
import readingStudio from '@ed/baseline/icons/cts/reading-studio-xl.svg';
import grammarStudio from '@ed/baseline/icons/cts/grammar-studio-xl.svg';
import writingStudio from '@ed/baseline/icons/cts/writing-studio-xl.svg';
import vocabStudio from '@ed/baseline/icons/cts/vocab-studio-xl.svg';
import plans from '@ed/baseline/icons/cts/plans-xl.svg';
import professionalDevelopment from '@ed/baseline/icons/cts/professional-development-xl.svg';
import assignments from '@ed/baseline/icons/cts/assignments-xl.svg';
import audio from '@ed/baseline/icons/cts/podcast-xl.svg';
import eBook from '@ed/baseline/icons/cts/ebook-xl.svg';
import editableFile from '@ed/baseline/icons/cts/editablefile-xl.svg';
import urlwebsite from '@ed/baseline/icons/cts/urlwebsite-xl.svg';
import pdf from '@ed/baseline/icons/cts/pdf-xl.svg';
import presentation from '@ed/baseline/icons/cts/presentation-xl.svg';
import tool from '@ed/baseline/icons/cts/tool-xl.svg';
import video from '@ed/baseline/icons/cts/video-xl.svg';
import overview from '@ed/baseline/icons/cts/overview-xl.svg';
import lesson from '@ed/baseline/icons/cts/lesson-xl.svg';
import socialEmotionalLearning from '@ed/baseline/icons/cts/sel-xl.svg';
import placeholderSvgXl from '@ed/baseline/icons/cts/xl.svg';
export var icons = {
  writingActivities: writingActivities,
  teacherAids: teacherAids,
  studyAids: studyAids,
  standards: standards,
  rubrics: rubrics,
  referenceMaterials: referenceMaterials,
  readingSupports: readingSupports,
  readers: readers,
  practice: practice,
  guidedReadingWorkbook: guidedReadingWorkbook,
  graphicOrganizers: graphicOrganizers,
  enrichment: enrichment,
  eLL: eLL,
  coreTeacher: coreTeacher,
  coreStudent: coreStudent,
  assessments: assessments,
  answerKeys: answerKeys,
  interactiveContent: interactiveContent,
  User: User,
  speakingListeningStudio: speakingListeningStudio,
  readingStudio: readingStudio,
  grammarStudio: grammarStudio,
  writingStudio: writingStudio,
  vocabStudio: vocabStudio,
  plans: plans,
  professionalDevelopment: professionalDevelopment,
  user: User,
  ell: eLL,
  // mediaType icons
  none: placeholderSvgXl,
  application: placeholderSvgXl,
  audio: audio,
  digital: assessments,
  digitalAssessment: assessments,
  eBook: eBook,
  ebook: eBook,
  editableFile: editableFile,
  flash: placeholderSvgXl,
  graphingCalculator: placeholderSvgXl,
  html: interactiveContent,
  interactive: interactiveContent,
  iwb: placeholderSvgXl,
  java: placeholderSvgXl,
  logo: placeholderSvgXl,
  other: placeholderSvgXl,
  pdf: pdf,
  presentation: presentation,
  studentEbook: eBook,
  tool: tool,
  url: urlwebsite,
  video: video,
  overview: overview,
  lesson: lesson,
  socialEmotionalLearning: socialEmotionalLearning,
  website: urlwebsite
};
export var getKeyResourceIcons = function getKeyResourceIcons(resourceIcon) {
  if (!resourceIcon || typeof resourceIcon !== 'string') {
    return assignments;
  }

  var iconName = camelCase(resourceIcon);

  if (icons[iconName]) {
    return icons[iconName];
  }

  return assignments;
};
export var resourceIcon = function resourceIcon(iconData, resourceData) {
  if (!iconData || Object.keys(iconData).length === 0 || !resourceData) {
    return {
      iconName: null,
      icon: placeholderSvgXl
    };
  }

  return {
    iconName: iconData[parseInt(resourceData, 10)],
    icon: getKeyResourceIcons(iconData[parseInt(resourceData, 10)])
  };
};
export var resourceIconMediaType = function resourceIconMediaType(mediaType) {
  if (mediaType && typeof mediaType === 'string') {
    var iconName = camelCase(mediaType);

    if (icons[iconName]) {
      return {
        iconName: iconName,
        icon: icons[iconName]
      };
    }
  }

  return {
    iconName: null,
    icon: assignments
  };
};