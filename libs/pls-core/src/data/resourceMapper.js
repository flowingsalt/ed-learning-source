import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import hmhPrograms from '../enums/hmhPrograms';

function mapHmhProgramKeys() {
  var programs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var programKeys = programs.map(function (hmhProgram) {
    return Object.keys(hmhPrograms).find(function (p) {
      return p === hmhProgram;
    });
  });
  return programKeys.filter(function (p) {
    return p !== undefined;
  });
}

export default function resourceMapper(r) {
  var authorIDs = r.authorIDs,
      cardImage = r.cardImage,
      contentLinkS3 = r.contentLinkS3,
      id = r.id,
      title = r.title,
      rest = _objectWithoutProperties(r, ["authorIDs", "cardImage", "contentLinkS3", "id", "title"]);

  return _objectSpread(_objectSpread({
    cardImageUrl: cardImage,
    displayTitle: title,
    resourceFileName: id,
    authorName: authorIDs
  }, rest), {}, {
    fileLink: contentLinkS3,
    hmhProgram: mapHmhProgramKeys(rest.hmhPrograms)
  });
}