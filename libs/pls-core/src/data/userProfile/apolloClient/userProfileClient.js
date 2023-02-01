import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query plsGetRecommendedPathways {\n    plsGetRecommendedPathways {\n      matchingTraceId\n      pathwayId\n      title\n      archived\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { gql } from '@apollo/client';
import getConfigForCurrentEnv from '@hmhco/amp-core-env';
import getPlsApolloClient from '../../apolloClient/getPlsApolloClient';
export var GET_USER_PROFILE = gql("\n  query plsGetUserProfile {\n    plsGetUserProfile {\n      id\n      hmhUserId\n      disciplines\n      grades\n    }\n  }\n");
export var SAVE_USER_PROFILE = gql("\n  mutation plsSaveUserProfile($details: UserProfileInput) { \n    plsSaveUserProfile(\n      details: $details\n    )  {\n      disciplines\n      grades\n      userPathway { \n        pathwayId\n        matchingTraceId\n        archived\n      } \n    }\n  }\n");
export var UPDATE_USER_TOPIC_PROGRESS = gql("\n  mutation plsUpdateUserTopicProgress($userTopicProgress: UserTopicProgressInput) { \n    plsUpdateUserTopicProgress(\n      userTopicProgress: $userTopicProgress\n    )  {\n      topicId\n      recordingTimeIndex\n      startedOn\n      completedOn\n    }\n  }\n");
export var GET_RECOMMENDED_PATHWAYS = gql(_templateObject());
export var GET_CERTIFICATE_PDF = gql("\nquery plsGetCertificate($certificateRequest: CertificateRequestInput) {\n    plsGetCertificate(certificateRequest: $certificateRequest) {\n        encodedPdfFile\n        }\n}\n");
export function getCertificate(_x, _x2) {
  return _getCertificate.apply(this, arguments);
}

function _getCertificate() {
  _getCertificate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(certificateRequest, errorHandler) {
    var _getConfigForCurrentE, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getConfigForCurrentE = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE.edsApiGateway;
            client = getPlsApolloClient("".concat(edsApiGateway));
            return _context.abrupt("return", client.query({
              query: GET_CERTIFICATE_PDF,
              variables: {
                certificateRequest: certificateRequest
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCertificate.apply(this, arguments);
}

export default function fetchUserProfile(_x3) {
  return _fetchUserProfile.apply(this, arguments);
}

function _fetchUserProfile() {
  _fetchUserProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(errorHandler) {
    var _getConfigForCurrentE2, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _getConfigForCurrentE2 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE2.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context2.abrupt("return", client.query({
              query: GET_USER_PROFILE
            }, errorHandler));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchUserProfile.apply(this, arguments);
}

export function plsSaveUserProfile(_x4, _x5) {
  return _plsSaveUserProfile.apply(this, arguments);
}

function _plsSaveUserProfile() {
  _plsSaveUserProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(details, errorHandler) {
    var _getConfigForCurrentE3, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _getConfigForCurrentE3 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE3.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context3.abrupt("return", client.mutate({
              mutation: SAVE_USER_PROFILE,
              variables: {
                details: {
                  disciplines: details === null || details === void 0 ? void 0 : details.disciplines,
                  grades: details === null || details === void 0 ? void 0 : details.grades,
                  hmhUserId: details === null || details === void 0 ? void 0 : details.hmhUserId,
                  id: details === null || details === void 0 ? void 0 : details.id,
                  userPathway: details === null || details === void 0 ? void 0 : details.userPathway
                }
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _plsSaveUserProfile.apply(this, arguments);
}

export function plsUpdateUserTopicProgress(_x6, _x7) {
  return _plsUpdateUserTopicProgress.apply(this, arguments);
}

function _plsUpdateUserTopicProgress() {
  _plsUpdateUserTopicProgress = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(userTopicProgress, errorHandler) {
    var _getConfigForCurrentE4, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getConfigForCurrentE4 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE4.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context4.abrupt("return", client.mutate({
              mutation: UPDATE_USER_TOPIC_PROGRESS,
              variables: {
                userTopicProgress: userTopicProgress
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _plsUpdateUserTopicProgress.apply(this, arguments);
}

export function fetchRecommendedPathways(_x8) {
  return _fetchRecommendedPathways.apply(this, arguments);
}

function _fetchRecommendedPathways() {
  _fetchRecommendedPathways = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(errorHandler) {
    var _getConfigForCurrentE5, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _getConfigForCurrentE5 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE5.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context5.abrupt("return", client.query({
              query: GET_RECOMMENDED_PATHWAYS
            }, errorHandler));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fetchRecommendedPathways.apply(this, arguments);
}