var getProductCategories = function getProductCategories(program) {
  return (program === null || program === void 0 ? void 0 : program.productCategory) || [];
};

var mapKeyResources = function mapKeyResources(keyResources) {
  if (!keyResources) {
    return [];
  }

  return keyResources.map(function (resource) {
    var content = resource.content[0];
    return {
      id: content.api_id,
      type: content.type || '',
      content: [{
        title: content.title || '',
        api_id: content.api_id,
        type: content.type || '',
        role: content.role || [],
        icon: content.icon ? "#".concat(content.icon) : ''
      }]
    };
  });
};

export var filterCategories = function filterCategories(data, productCategory) {
  if (productCategory) {
    var _data$key;

    return data === null || data === void 0 ? void 0 : (_data$key = data.key) === null || _data$key === void 0 ? void 0 : _data$key.filter(function (item) {
      var _content$;

      var content = item.content;
      return (content === null || content === void 0 ? void 0 : content.length) && productCategory.includes((_content$ = content[0]) === null || _content$ === void 0 ? void 0 : _content$.api_id);
    });
  }

  return [];
};

var getMappedProgramDetails = function getMappedProgramDetails(data, programManifest) {
  var _data$book, _data$book2, _data$book3, _data$book4;

  var filteredCategories = filterCategories(data, getProductCategories(programManifest));
  var mappedResources = mapKeyResources(filteredCategories);
  return {
    book: data.book,
    key: mappedResources,
    featured: data.featured ? data.featured : [],
    correlations: {
      type: (_data$book = data.book) === null || _data$book === void 0 ? void 0 : _data$book.type,
      url: (_data$book2 = data.book) === null || _data$book2 === void 0 ? void 0 : _data$book2.url,
      title: (_data$book3 = data.book) === null || _data$book3 === void 0 ? void 0 : _data$book3.title,
      standards: (_data$book4 = data.book) === null || _data$book4 === void 0 ? void 0 : _data$book4.standards
    }
  };
};

export default getMappedProgramDetails;