export var buildUrlToNavigateTo = function buildUrlToNavigateTo(selectedProgramIdentifier, currentUrlHash) {
  var hashArray = currentUrlHash.split('/').filter(function (value) {
    return !['', '#'].includes(value);
  });

  if (hashArray.length === 1) {
    hashArray = [hashArray[0], selectedProgramIdentifier];
  }

  return "/".concat(hashArray.join('/'));
};
export var findPrimary = function findPrimary(findIn, findWhat) {
  return findIn.find(function (each) {
    return each.identifier === findWhat.identifier;
  });
};
export var getAllUniquePrimaries = function getAllUniquePrimaries(additionalsData) {
  var allPrimaries = {};
  additionalsData.sections.forEach(function (section) {
    section.primaries.forEach(function (primary) {
      allPrimaries[primary.identifier] = primary;
    });
  });
  return allPrimaries;
};
export var getAdditionalsForProgram = function getAdditionalsForProgram(additionalsData, selectedProgram) {
  var isAdditionalProgramSelected = false;

  if (!additionalsData || additionalsData.additionals.length < 1 || !selectedProgram.identifier) {
    return {
      additionalPrograms: [],
      isAdditionalProgramSelected: isAdditionalProgramSelected
    };
  }

  var allPrimaries = getAllUniquePrimaries(additionalsData);
  var selectedProgramPrimary = allPrimaries[selectedProgram.identifier];

  if (selectedProgramPrimary === undefined) {
    isAdditionalProgramSelected = true;
    return {
      additionalPrograms: [selectedProgram],
      isAdditionalProgramSelected: isAdditionalProgramSelected
    };
  }

  var additionalPrograms = selectedProgramPrimary.additionals.map(function (primaryProgramAdditional) {
    return additionalsData.additionals.find(function (additionals) {
      return additionals.identifier === primaryProgramAdditional;
    });
  }).sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  return {
    additionalPrograms: additionalPrograms,
    isAdditionalProgramSelected: isAdditionalProgramSelected
  };
};
export var removeEntitledProgramsFromAdditionals = function removeEntitledProgramsFromAdditionals(additionals, entitled) {
  var entitledProgramCodes = entitled.map(function (program) {
    return program.identifier;
  });
  return additionals.filter(function (additionalProgram) {
    return !entitledProgramCodes.includes(additionalProgram.identifier);
  });
};