import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
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
import AttributesModel from './AttributesModel';
import { sifRefObjectTypes } from './AssignmentFieldTypes';
var BaseRecord = Record({
  attributes: new AttributesModel(),
  connectedPartnerLaunch: null,
  customLessonId: null,
  isbn: null,
  deepLinkParameters: null,
  disciplineId: null,
  manualScoring: null,
  name: '',
  programId: '',
  recommendedBy: null,
  sif_RefObject: '',
  sifRefObject: '',
  statusCount: null,
  subjectCode: null,
  value: ''
});

var SourceObjectModel = /*#__PURE__*/function (_BaseRecord) {
  _inherits(SourceObjectModel, _BaseRecord);

  var _super = _createSuper(SourceObjectModel);

  function SourceObjectModel() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SourceObjectModel);

    var attributes = new AttributesModel(record.attributes || {});
    return _super.call(this, _objectSpread(_objectSpread({}, record), {}, {
      attributes: attributes
    }));
  }

  _createClass(SourceObjectModel, [{
    key: "isCustomAssessment",
    value: function isCustomAssessment() {
      return this.sif_RefObject === sifRefObjectTypes.CUSTOM_ASSESSMENT;
    }
  }, {
    key: "isProgramAssessment",
    value: function isProgramAssessment() {
      return this.sif_RefObject === sifRefObjectTypes.PROGRAM_ASSESSMENT;
    }
  }, {
    key: "isOtherTextResource",
    value: function isOtherTextResource() {
      return this.sif_RefObject === sifRefObjectTypes.OTHER_TEXT_RESOURCE;
    }
  }, {
    key: "isPerformanceTask",
    value: function isPerformanceTask() {
      return this.sif_RefObject === sifRefObjectTypes.PERFORMANCE_TASK;
    }
  }, {
    key: "isAmira",
    value: function isAmira() {
      return this.sif_RefObject === sifRefObjectTypes.HMH_AMIRA;
    }
  }, {
    key: "isStudentGrowthMeasure",
    value: function isStudentGrowthMeasure() {
      return this.sif_RefObject === sifRefObjectTypes.STUDENT_GROWTH_MEASURE;
    }
  }, {
    key: "isHMHAssessment",
    value: function isHMHAssessment() {
      return this.sif_RefObject === sifRefObjectTypes.HMH_ASSESSMENT;
    }
  }]);

  return SourceObjectModel;
}(BaseRecord);

export default SourceObjectModel;