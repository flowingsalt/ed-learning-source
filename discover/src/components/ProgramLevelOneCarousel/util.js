export var getProgramUnits = function getProgramUnits(program) {
  var _program$items, _program$items$item, _program$items$item$;

  return program === null || program === void 0 ? void 0 : (_program$items = program.items) === null || _program$items === void 0 ? void 0 : (_program$items$item = _program$items.item) === null || _program$items$item === void 0 ? void 0 : (_program$items$item$ = _program$items$item[0]) === null || _program$items$item$ === void 0 ? void 0 : _program$items$item$.item;
};
export var programHasUnits = function programHasUnits(program) {
  return getProgramUnits(program) !== undefined;
};
export var getLastViewedCarouselItemLevel = function getLastViewedCarouselItemLevel(bookmark, bookmarkFetchError) {
  var NO_BOOKMARK_RESPONSE = '0';
  return !bookmarkFetchError ? bookmark === null || bookmark === void 0 ? void 0 : bookmark.level : NO_BOOKMARK_RESPONSE;
};