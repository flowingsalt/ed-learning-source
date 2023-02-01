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

export var addMinutes = function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
};
export var formatVcServiceMeeting = function formatVcServiceMeeting(meeting) {
  var attributes = meeting.attributes,
      creator = meeting.creator,
      rest = _objectWithoutProperties(meeting, ["attributes", "creator"]);

  return _objectSpread(_objectSpread(_objectSpread({}, rest), attributes), {}, {
    endDateTime: addMinutes(new Date(meeting.startDateTime), meeting.duration).toISOString(),
    teacherRefId: creator === null || creator === void 0 ? void 0 : creator.hmhUserRefId
  });
};
export var formatVcServiceData = function formatVcServiceData(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    meetings: data.meetings.map(formatVcServiceMeeting)
  });
};