import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

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

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

import { Record } from 'immutable';
import SourceObjectModel from './SourceObjectModel';
import { assignmentStatuses } from './AssignmentFieldTypes';
import AssignmentProficiencyModel from './AssignmentProficiencyModel';
var BaseRecord = Record({
  refId: null,
  sourceObject: new SourceObjectModel(),
  startDate: '',
  status: assignmentStatuses.UNKNOWN,
  studentAssignment: null,
  submitDate: '',
  teacherReviewRefId: null,
  assignmentProficiency: null
});

var ActivityModel = /*#__PURE__*/function (_BaseRecord) {
  _inherits(ActivityModel, _BaseRecord);

  var _super = _createSuper(ActivityModel);

  function ActivityModel() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ActivityModel);

    var sourceObject = new SourceObjectModel(record.sourceObject || {});
    var assignmentProficiency = null;

    if (record.assignmentProficiency) {
      assignmentProficiency = new AssignmentProficiencyModel(record.assignmentProficiency || {});
    }

    return _super.call(this, _objectSpread(_objectSpread({}, record), {}, {
      sourceObject: sourceObject,
      assignmentProficiency: assignmentProficiency
    }));
  }

  return ActivityModel;
}(BaseRecord);

export default ActivityModel;