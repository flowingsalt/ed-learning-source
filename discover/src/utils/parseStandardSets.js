var parseStandardSets = function parseStandardSets(response) {
  if (Array.isArray(response)) {
    return response === null || response === void 0 ? void 0 : response.map(function (standardSet) {
      return {
        id: standardSet.id,
        fileName: standardSet.fileName,
        state: standardSet.state,
        title: standardSet.title,
        subject: standardSet.subject
      };
    });
  }

  return undefined;
};

export default parseStandardSets;