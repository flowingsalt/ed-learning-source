import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(getSignature),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(renderWidgets),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(watchReviewAssessmentAction);

import { select, call, put } from 'redux-saga/effects';
import { getCurrentUserId, getSifToken } from 'orchid-common/reducers/user.selectors';
import { getEnvFromStore } from 'orchid-common/reducers/env.selectors';
import { launchReviewLearnosityAssessment } from '@hmhco/content-launch/src/contentLaunchWithSideEffects';
import { reportNetworkFail } from 'orchid-common/actions';
import { getCurrentTimestampForAssignmentService } from 'orchid-common/utils/dateTimeFormatters';
import { getItemsAPISignature } from '../api';
import { getRequestDataForLearnosityReview } from '../reducers/selectors';
export function getSignature() {
  var env, sif, userId, request;
  return _regeneratorRuntime.wrap(function getSignature$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getEnvFromStore);

        case 2:
          env = _context.sent;
          _context.next = 5;
          return select(getSifToken);

        case 5:
          sif = _context.sent;
          _context.next = 8;
          return select(getCurrentUserId);

        case 8:
          userId = _context.sent;
          _context.next = 11;
          return select(getRequestDataForLearnosityReview);

        case 11:
          request = _context.sent;
          _context.next = 14;
          return call(getItemsAPISignature, env, sif, userId, request);

        case 14:
          return _context.abrupt("return", _context.sent);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
export function renderWidgets(consumerKey, signature) {
  var request, env, initOptions;
  return _regeneratorRuntime.wrap(function renderWidgets$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return select(getRequestDataForLearnosityReview);

        case 2:
          request = _context2.sent;
          _context2.next = 5;
          return select(getEnvFromStore);

        case 5:
          env = _context2.sent;
          initOptions = {
            security: {
              consumer_key: consumerKey,
              domain: window.location.hostname,
              timestamp: getCurrentTimestampForAssignmentService(),
              signature: signature,
              user_id: request.reports[0].user_id
            },
            request: request
          };
          _context2.prev = 7;
          _context2.next = 10;
          return call(launchReviewLearnosityAssessment, env, initOptions);

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](7);
          _context2.next = 16;
          return put(reportNetworkFail());

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[7, 12]]);
}
export function watchReviewAssessmentAction(action) {
  var signatureResponse, consumerKey;
  return _regeneratorRuntime.wrap(function watchReviewAssessmentAction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return call(getSignature);

        case 2:
          signatureResponse = _context3.sent;

          if (!signatureResponse.error) {
            _context3.next = 7;
            break;
          }

          _context3.next = 6;
          return put(reportNetworkFail());

        case 6:
          return _context3.abrupt("return");

        case 7:
          consumerKey = action.consumerKey;
          _context3.next = 10;
          return call(renderWidgets, consumerKey, signatureResponse.signature);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}