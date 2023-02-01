import _defineProperty from "@babel/runtime/helpers/defineProperty";

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

import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import { BASE_URL, MEETING_URL, CHECK_ZOOM_DISTRICT, ZOOM } from '../constants';
import { formatVcServiceData } from '../utils/response.helpers';

function getMeetingsApi() {
  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  function getMeetings() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        provider = _ref.provider,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$formatData = _ref.formatData,
        formatData = _ref$formatData === void 0 ? formatVcServiceData : _ref$formatData;

    return client.get(provider === ZOOM ? CHECK_ZOOM_DISTRICT : MEETING_URL, _objectSpread({
      cancelToken: cancelToken,
      baseURL: BASE_URL
    }, config)).then(function (response) {
      return response.data;
    }).then(formatData)["catch"](function (error) {
      if (!isCancel(error)) {
        // if we have cancelled we don't want to throw the 'error'
        throw error;
      }
    });
  }

  return {
    getMeetings: getMeetings,
    cancel: cancel
  };
}

export default getMeetingsApi;