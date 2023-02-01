import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query plsGetDisciplines {\n    plsGetDisciplines {\n      code\n      displayValue\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query plsGetUserPathways {\n    plsGetUserPathways {\n      pathwayId\n      title\n      discipline\n      grades\n      hmhPrograms\n      completedOn\n      archived\n      topics {\n        topicId\n        title\n        description\n        topicType\n        duration\n        recordingLink\n        contentLinkS3\n        recordingTimeIndex\n        startedOn\n        completedOn\n        topicResources {\n          id\n          publicationDate\n          topicResourceType\n          title\n          reference\n          order\n          asset {\n            id\n            publicationDate\n            filename\n            assetFileType\n            altText\n            contentLinkS3\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import getConfigForCurrentEnv from '@hmhco/amp-core-env';
import { gql } from '@apollo/client';
import getPlsApolloClient from '../../apolloClient/getPlsApolloClient';
export var GET_PATHWAYS = gql(_templateObject());
export var GET_DISCIPLINES = gql(_templateObject2());
export function fetchPathways(_x) {
  return _fetchPathways.apply(this, arguments);
}

function _fetchPathways() {
  _fetchPathways = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(errorHandler) {
    var _getConfigForCurrentE, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getConfigForCurrentE = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context.abrupt("return", client.query({
              query: GET_PATHWAYS
            }, errorHandler));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchPathways.apply(this, arguments);
}

export function fetchDisciplines(_x2) {
  return _fetchDisciplines.apply(this, arguments);
}

function _fetchDisciplines() {
  _fetchDisciplines = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(errorHandler) {
    var _getConfigForCurrentE2, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _getConfigForCurrentE2 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE2.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context2.abrupt("return", client.query({
              query: GET_DISCIPLINES
            }, errorHandler));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchDisciplines.apply(this, arguments);
}