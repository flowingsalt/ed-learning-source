// This is needed to compute the "launchType" property for the resource items in the HMH Go Offline app and has been lifted
// wholesale from their codebase. https://scm.eng.hmhco.com/Ed-Learning/alver/blob/develop/src/domain/Library/components/services/libraryService.js
// This property is not used in the Ed implementation, but is required for cross compatibility
export var ED_MEDIA_TYPE = {
  EBOOK: 'ebook',
  PDF: 'pdf',
  INTERACTIVE: 'interactive',
  DIGITAL: 'digital',
  ASSESSMENT: 'assessment',
  DIGITAL_ASSESSMENT: 'digital assessment',
  LEARNOSITY: 'digital assessmet',
  // NOTE Spelling mistake in service response for digital assessment
  PRESENTATION: 'presentation'
};
export var ED_ICON_TYPE = {
  CORE_TEACHER: 'core-teacher',
  READERS: 'readers',
  ASSESSMENTS: 'assessments',
  PROFESSIONAL_DEVELOPMENT: 'professional-development',
  BRIDGE_AND_GROW: 'bridge-and-grow'
};
export var ED_LTI_MEDIA_TYPE = {
  EBOOK: 'ltiRceEbook',
  PDF: 'ltiUrl',
  LINK: 'ltiLink',
  ASSESSMENT: 'assessment',
  LEARNOSITY: 'learnosity'
};

var getOfflineAppLaunchType = function getOfflineAppLaunchType(resource) {
  var launchType = '';

  switch (resource.mediaType.toLowerCase()) {
    case ED_MEDIA_TYPE.EBOOK:
      launchType = ED_LTI_MEDIA_TYPE.EBOOK;
      break;

    case ED_MEDIA_TYPE.PDF:
      launchType = ED_LTI_MEDIA_TYPE.PDF;
      break;

    case ED_MEDIA_TYPE.DIGITAL_ASSESSMENT:
    case ED_MEDIA_TYPE.LEARNOSITY:
      launchType = ED_LTI_MEDIA_TYPE.LEARNOSITY;
      break;

    default:
      launchType = ED_LTI_MEDIA_TYPE.LINK;
      break;
  }

  return launchType;
};

export default getOfflineAppLaunchType;