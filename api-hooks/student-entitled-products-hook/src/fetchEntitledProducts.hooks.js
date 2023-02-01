import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import studentApi from '@hmhco/student-api/src/studentApi';
import productAPI, { SECTION_ID_PARAM } from '@hmhco/onesearch-product-api/src/product/productAPI';
import { MAX_CHARACTERS_PERMITTED_IN_URL, PRODUCTS_ONESEARCH_URL } from './constants';
export var getClassSectionIds = function getClassSectionIds(studentClasses) {
  return studentClasses.reduce(function (classIDArr, studentClass) {
    if (studentClass.sectionRefId) {
      classIDArr.push(studentClass.sectionRefId);
    }

    return classIDArr;
  }, []);
};
export var divideClassesByMaxAllowedInURL = function divideClassesByMaxAllowedInURL() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var classIDs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var maxURLLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_CHARACTERS_PERMITTED_IN_URL;
  return classIDs.reduce(function (divisions, classID) {
    var currentDivision = divisions[divisions.length - 1];
    url.searchParams.append(SECTION_ID_PARAM, currentDivision.join());

    if (decodeURIComponent(url.href).length + ",".concat(classID).length < maxURLLength) {
      currentDivision.push(classID);
    } else {
      divisions.push([classID]);
    }

    url.searchParams["delete"](SECTION_ID_PARAM);
    return divisions;
  }, [[]]);
};
export var sortProductsResponses = function sortProductsResponses() {
  var _responses$;

  var responses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var singleEmptyResponse = responses.length === 1 && ((_responses$ = responses[0]) === null || _responses$ === void 0 ? void 0 : _responses$.programs) === '';

  if (responses.length === 0) {
    return {
      programs: ''
    };
  }

  if (singleEmptyResponse) {
    return responses[0];
  }

  var emptyResponsesRemoved = responses.filter(function (response) {
    var _response$programs;

    return (_response$programs = response.programs) === null || _response$programs === void 0 ? void 0 : _response$programs.program;
  });
  var flattenedResponses = emptyResponsesRemoved.map(function (response) {
    return response.programs.program;
  }).flat();
  var duplicateProductsRemoved = flattenedResponses.reduce(function (result, product) {
    if (!result.some(function (addedProduct) {
      return product.title === addedProduct.title;
    })) {
      result.push(product);
    }

    return result;
  }, []);
  return {
    programs: {
      program: duplicateProductsRemoved
    }
  };
};
export default (function (studentid) {
  var _productAPI = productAPI({}, true),
      getProductsCached = _productAPI.getProductsCached,
      cancel = _productAPI.cancel;

  var _useState = useState({
    isLoadingProducts: true,
    response: {},
    fromCache: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setResult = _useState2[1];

  var _studentApi = studentApi(),
      fetchStudentClasses = _studentApi.fetchStudentClasses;

  useEffect(function () {
    var productsCallSuccess = false;

    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var classResponse, allClassIDs, classIDsForEachApiCall, responseForEachDivision, fromCache, dataFromResponses, productsResponse;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetchStudentClasses(studentid);

            case 3:
              classResponse = _context.sent;
              allClassIDs = getClassSectionIds(classResponse);

              if (!(allClassIDs.length > 0)) {
                _context.next = 15;
                break;
              }

              classIDsForEachApiCall = divideClassesByMaxAllowedInURL(PRODUCTS_ONESEARCH_URL, allClassIDs);
              _context.next = 9;
              return Promise.all(classIDsForEachApiCall.map(function (ids) {
                return getProductsCached(ids);
              }));

            case 9:
              responseForEachDivision = _context.sent;
              fromCache = responseForEachDivision.some(function (resp) {
                var _resp$request;

                return (_resp$request = resp.request) === null || _resp$request === void 0 ? void 0 : _resp$request.fromCache;
              });
              dataFromResponses = responseForEachDivision.map(function (division) {
                return division.data;
              });
              productsResponse = sortProductsResponses(dataFromResponses);
              productsCallSuccess = true;
              setResult({
                isLoadingProducts: false,
                response: productsResponse,
                fromCache: fromCache
              });

            case 15:
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('fetch classes error', [{
                key: 'errorMessage',
                value: _context.t0
              }]);

            case 20:
              if (!productsCallSuccess) {
                setResult({
                  isLoadingProducts: false,
                  response: {},
                  fromCache: false
                });
              }

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 17]]);
    }))();

    return function () {
      cancel();
    };
  }, []);
  return [products, getProductsCached];
});