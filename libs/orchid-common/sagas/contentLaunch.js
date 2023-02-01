import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(watchLaunchRequest),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(watchCustomLaunchRequest),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(watchIosLaunchRequest);

import { takeLatest, call, put, select } from 'redux-saga/effects';
import { get } from 'lodash';
import { CONTENT_LAUNCH_PREVIEW, CUSTOM_CONTENT_LAUNCH_PREVIEW, LAUNCH_IOS_APP } from '../actions/types';
import { getLaunchDetails } from '../api/contentProviderApi';
import { launchPreviewAssessment, launchPreviewLearnosityAssessment, postTheForm } from '@hmhco/content-launch/src/contentLaunchWithSideEffects';
import { getSifToken } from '../reducers/user.selectors';
import { toastrErrorAction } from '../actions';
import { getEnvFromStore } from '../../orchid-common/reducers/env.selectors';
import { getLocationObject } from '@hmhco/url-builders/src/edAssignmentApp';
export var fetchLaunchDetails = /*#__PURE__*/_regeneratorRuntime.mark(function fetchLaunchDetails(action) {
  var id, sif, response;
  return _regeneratorRuntime.wrap(function fetchLaunchDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = action.fetchParams.resourceId;
          _context.next = 4;
          return select(getSifToken);

        case 4:
          sif = _context.sent;
          _context.next = 7;
          return call(getLaunchDetails, id, sif);

        case 7:
          response = _context.sent;

          if (!response.launchByUI) {
            _context.next = 13;
            break;
          }

          _context.next = 11;
          return call(launchPreviewLearnosityAssessment, response, action.target);

        case 11:
          _context.next = 15;
          break;

        case 13:
          _context.next = 15;
          return call(postTheForm, response, action.target);

        case 15:
          _context.next = 21;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          _context.next = 21;
          return put(toastrErrorAction('notification.error.contentLaunchDetails'));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, fetchLaunchDetails, null, [[0, 17]]);
});
export function watchLaunchRequest() {
  return _regeneratorRuntime.wrap(function watchLaunchRequest$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return takeLatest(CONTENT_LAUNCH_PREVIEW, fetchLaunchDetails);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}
export var fetchCustomLaunchDetails = /*#__PURE__*/_regeneratorRuntime.mark(function fetchCustomLaunchDetails(action) {
  var assessment;
  return _regeneratorRuntime.wrap(function fetchCustomLaunchDetails$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          assessment = get(action, 'fetchParams.assessment');

          if (!assessment) {
            _context3.next = 6;
            break;
          }

          _context3.next = 4;
          return call(launchPreviewAssessment, assessment);

        case 4:
          _context3.next = 8;
          break;

        case 6:
          _context3.next = 8;
          return put(toastrErrorAction('notification.error.contentLaunchDetails'));

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  }, fetchCustomLaunchDetails);
});
export function watchCustomLaunchRequest() {
  return _regeneratorRuntime.wrap(function watchCustomLaunchRequest$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return takeLatest(CUSTOM_CONTENT_LAUNCH_PREVIEW, fetchCustomLaunchDetails);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}
var iosLaunchUrls = {
  dev: 'https://cert.hmhco.com/mobileapp',
  "int": 'https://cert.hmhco.com/mobileapp',
  cert: 'https://one.hmhco.com/mobileapp',
  prod: 'https://one.hmhco.com/mobileapp'
};
export var launchIOSApplication = /*#__PURE__*/_regeneratorRuntime.mark(function launchIOSApplication(action) {
  var sif, env, launchUriOrigin, location;
  return _regeneratorRuntime.wrap(function launchIOSApplication$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return select(getSifToken);

        case 3:
          sif = _context5.sent;
          _context5.next = 6;
          return select(getEnvFromStore);

        case 6:
          env = _context5.sent;
          launchUriOrigin = iosLaunchUrls[env];
          location = getLocationObject();
          location.assign("".concat(launchUriOrigin, "/").concat(action.path, "/?sif=").concat(sif, "&referrer=").concat(location.origin));
          _context5.next = 16;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 16;
          return put(toastrErrorAction('notification.error.contentLaunchDetails'));

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, launchIOSApplication, null, [[0, 12]]);
});
export function watchIosLaunchRequest() {
  return _regeneratorRuntime.wrap(function watchIosLaunchRequest$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return takeLatest(LAUNCH_IOS_APP, launchIOSApplication);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3);
}