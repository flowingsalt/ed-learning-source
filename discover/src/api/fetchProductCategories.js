import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import productCategoriesApi from '@hmhco/onesearch-product-categories-api/src/productCategoriesApi';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';

var fetchProductCategories = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(programId, showIntegratedResources) {
    var _productCategoriesApi, getProductCategories;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _productCategoriesApi = productCategoriesApi(), getProductCategories = _productCategoriesApi.getProductCategories;
            return _context.abrupt("return", getProductCategories(programId, showIntegratedResources)["catch"](function (error) {
              logErrorWithContext('fetch product categories sets error', [{
                key: 'errorMessage',
                value: error
              }]);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchProductCategories(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

export default fetchProductCategories;