import uniqBy from 'lodash/uniqBy';
import { IREAD_STANDALONE_ID } from '@hmhco/product-constants/src/iRead';

var filterManifests = function filterManifests(manifests) {
  return manifests.filter(function (manifest) {
    return manifest.type.length && (manifest.type.includes('Curriculum') || manifest.identifier.includes(IREAD_STANDALONE_ID));
  });
};

export var filterProgramsForStudentWithNoClasses = function filterProgramsForStudentWithNoClasses(response) {
  var manifests = response['manifest-info'].manifest; // Save raw programs data that have "Curriculum" type or 'iRead' identifier

  return filterManifests(manifests);
};
export var filterProgramsForStudentWithClasses = function filterProgramsForStudentWithClasses(response) {
  var sections = response['manifest-info'].section; // Find the sections with programs

  var filteredSectionsData = sections.filter(function (section) {
    return section.manifest;
  });
  var curriculumPrograms = []; // For each section, for each manifest, filter programs data that have "Curriculum" type or 'iRead' identifier

  filteredSectionsData.forEach(function (section) {
    var filteredPrograms = filterManifests(section.manifest);
    curriculumPrograms = curriculumPrograms.concat(filteredPrograms);
  }); // Remove any duplicates

  return uniqBy(curriculumPrograms, 'identifier');
};