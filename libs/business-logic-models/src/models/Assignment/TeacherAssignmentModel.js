import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
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
var BaseRecord = Record({
  refId: null,
  title: '',
  createdBy: '',
  dueDate: '',
  availableDate: '',
  sourceObjects: [],
  students: [],
  sharedAssignmentType: null,
  status: null,
  lockedAfterDueDate: null
});

var TeacherAssignmentModel = /*#__PURE__*/function (_BaseRecord) {
  _inherits(TeacherAssignmentModel, _BaseRecord);

  var _super = _createSuper(TeacherAssignmentModel);

  function TeacherAssignmentModel() {
    var _this;

    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TeacherAssignmentModel);

    _this = _super.call(this, _objectSpread({}, record));
    return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
  }

  _createClass(TeacherAssignmentModel, [{
    key: "getAssignmentTitle",
    value: function getAssignmentTitle() {
      return this.title;
    }
  }, {
    key: "getStartDate",
    value: function getStartDate() {
      return this.availableDate;
    }
  }, {
    key: "getDueDate",
    value: function getDueDate() {
      return this.dueDate;
    }
  }, {
    key: "getLockedAfterDueDate",
    value: function getLockedAfterDueDate() {
      return this.lockedAfterDueDate;
    }
  }, {
    key: "getCreatedBy",
    value: function getCreatedBy() {
      return this.createdBy;
    }
  }, {
    key: "getSharedAssignmentType",
    value: function getSharedAssignmentType() {
      return this.sharedAssignmentType;
    }
  }, {
    key: "getStudentsLength",
    value: function getStudentsLength() {
      return this.students.length;
    }
  }, {
    key: "getNotStartedCount",
    value: function getNotStartedCount() {
      var _this$sourceObjects$, _this$sourceObjects$$;

      return ((_this$sourceObjects$ = this.sourceObjects[0]) === null || _this$sourceObjects$ === void 0 ? void 0 : (_this$sourceObjects$$ = _this$sourceObjects$.statusCount) === null || _this$sourceObjects$$ === void 0 ? void 0 : _this$sourceObjects$$.NOT_STARTED) || 0;
    }
  }, {
    key: "getStartedCount",
    value: function getStartedCount() {
      var _this$sourceObjects$2, _this$sourceObjects$3;

      return ((_this$sourceObjects$2 = this.sourceObjects[0]) === null || _this$sourceObjects$2 === void 0 ? void 0 : (_this$sourceObjects$3 = _this$sourceObjects$2.statusCount) === null || _this$sourceObjects$3 === void 0 ? void 0 : _this$sourceObjects$3.IN_PROGRESS) || 0;
    }
  }, {
    key: "getReadyForScoringCount",
    value: function getReadyForScoringCount() {
      var _this$sourceObjects$4, _this$sourceObjects$5, _this$sourceObjects$6, _this$sourceObjects$7;

      var readForScoringCount = ((_this$sourceObjects$4 = this.sourceObjects[0]) === null || _this$sourceObjects$4 === void 0 ? void 0 : (_this$sourceObjects$5 = _this$sourceObjects$4.statusCount) === null || _this$sourceObjects$5 === void 0 ? void 0 : _this$sourceObjects$5.READY_FOR_SCORING) || 0;
      var scoringInProgressCount = ((_this$sourceObjects$6 = this.sourceObjects[0]) === null || _this$sourceObjects$6 === void 0 ? void 0 : (_this$sourceObjects$7 = _this$sourceObjects$6.statusCount) === null || _this$sourceObjects$7 === void 0 ? void 0 : _this$sourceObjects$7.SCORING_IN_PROGRESS) || 0;
      return readForScoringCount + scoringInProgressCount;
    }
  }, {
    key: "getCompletedCount",
    value: function getCompletedCount() {
      var _this$sourceObjects$8, _this$sourceObjects$9;

      return ((_this$sourceObjects$8 = this.sourceObjects[0]) === null || _this$sourceObjects$8 === void 0 ? void 0 : (_this$sourceObjects$9 = _this$sourceObjects$8.statusCount) === null || _this$sourceObjects$9 === void 0 ? void 0 : _this$sourceObjects$9.COMPLETED) || 0;
    }
  }]);

  return TeacherAssignmentModel;
}(BaseRecord);

export default TeacherAssignmentModel;