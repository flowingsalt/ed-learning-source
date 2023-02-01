import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

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
var BaseModel = Record({
  googleCourseId: '',
  hmhId: null,
  mediaType: '',
  pauseAssessment: false,
  pool: '',
  printable: false,
  programId: null,
  refId: null,
  resourceType: '',
  sif_RefObject: '',
  sifRefObject: '',
  teacherManualEntry: null
});

var AttributesModel = /*#__PURE__*/function (_BaseModel) {
  _inherits(AttributesModel, _BaseModel);

  var _super = _createSuper(AttributesModel);

  function AttributesModel() {
    var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AttributesModel);

    return _super.call(this, record);
  }

  return AttributesModel;
}(BaseModel);

export default AttributesModel;