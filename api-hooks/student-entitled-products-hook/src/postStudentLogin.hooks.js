import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { useEffect } from 'react';
import postStudentLoginApi from '@hmhco/assignment-api/src/postStudentLoginApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { isFeatureActive } from '@hmhco/feature-flags';
import { PRODUCTS } from './constants';
export default (function (products, requestAlreadySent) {
  var _postStudentLoginApi = postStudentLoginApi(),
      postStudentLogin = _postStudentLoginApi.postStudentLogin,
      cancel = _postStudentLoginApi.cancel;

  var amiraScreeningFeature = isFeatureActive('amiraScreenerAssignment', true);
  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(amiraScreeningFeature && !requestAlreadySent && (products === null || products === void 0 ? void 0 : products.some(function (product) {
                return product.title === PRODUCTS.amira;
              })))) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return postStudentLogin();

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('Student Assignments postStudentLoginApi error', [{
                key: 'errorMessage',
                value: _context.t0
              }]);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }))();

    return function () {
      return cancel();
    };
  }, [products, requestAlreadySent]);
});