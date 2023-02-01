import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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

import React, { useEffect, useState } from 'react';
import ProductCard from '@hmhco/product-card/src/ProductCard/ProductCard';
import { useIntl } from 'react-intl';
import { launchIread, launchStudentWritable, launchStudentAmira, launchStudentWaggle, launchStudentMath180, launchStudentRead180 } from '@hmhco/content-launch';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import AmiraPng from '@ed/baseline/images/student-products/logo-amira.png';
import WagglePng from '@ed/baseline/images/student-products/logo-waggle.png';
import IReadPng from '@ed/baseline/images/student-products/logo-iread.png';
import WritablePng from '@ed/baseline/images/student-products/logo-writable.png';
import Math180 from '@ed/baseline/images/student-products/logo-math180.png';
import WritingTaskPng from '@ed/baseline/images/student-products/logo-writing.png';
import Read180 from '@ed/baseline/images/student-products/logo-read180.png';
import getLocaleFile from '../lang';
export var PRODUCT_LAUNCH_DEBOUNCED_TIME = 5000;
var READ_180_STAGE_PREFIX = 'READ 180 Stage ';
export var programs = {
  iRead: 'iRead',
  amira: 'Amira',
  waggle: 'Waggle',
  waggleEla: 'Waggle ELA',
  waggleMath: 'Waggle Math',
  writable: 'Writable',
  writingTask: 'Writing Task',
  math180: 'Math 180',
  read180: 'Read 180'
};
export var mapProducts = function mapProducts(entitledProducts, ariaLabels, userContext, env, languageKey) {
  var products = [];
  var sif = userContext.rawToken.sif.accessToken;
  entitledProducts.forEach(function (product) {
    var title = product.title;

    if (title === programs.amira) {
      products.push({
        image: AmiraPng,
        name: programs.amira,
        ariaLabel: ariaLabels.amira,
        callback: function callback() {
          return launchStudentAmira({
            sif: sif,
            env: env
          });
        }
      });
    }

    if (title === programs.waggleEla || title === programs.waggleMath) {
      // We wanna display Waggle icon only once
      if (products.filter(function (prod) {
        return prod.name === programs.waggle;
      }).length === 0) {
        products.push({
          image: WagglePng,
          name: programs.waggle,
          ariaLabel: ariaLabels.waggle,
          callback: function callback() {
            return launchStudentWaggle({
              sif: sif,
              env: env
            });
          }
        });
      }
    }

    if (title === programs.iRead) {
      products.push({
        image: IReadPng,
        name: programs.iRead,
        ariaLabel: ariaLabels.iRead,
        callback: function callback() {
          return launchIread(sif, env);
        }
      });
    }

    if (title === programs.writable) {
      products.push({
        image: WritablePng,
        name: programs.writable,
        ariaLabel: ariaLabels.writable,
        callback: function callback() {
          return launchStudentWritable(sif, env, languageKey);
        }
      });
    }

    if (title === programs.writingTask) {
      // We only want to display WritingTask or Writable
      if (products.filter(function (prod) {
        return prod.name === programs.writable;
      }).length === 0) {
        products.push({
          image: WritingTaskPng,
          name: programs.writingTask,
          ariaLabel: ariaLabels.writingTask,
          callback: function callback() {
            return launchStudentWritable(sif, env, languageKey);
          }
        });
      }
    }

    if (title === programs.math180) {
      products.push({
        image: Math180,
        name: programs.math180,
        ariaLabel: ariaLabels.math180,
        callback: function callback() {
          return launchStudentMath180(sif, env);
        }
      });
    }

    if (title === programs.read180) {
      var _product$product;

      var tempSubProduct = product === null || product === void 0 ? void 0 : (_product$product = product.product) === null || _product$product === void 0 ? void 0 : _product$product.filter(function (value) {
        return value.title.includes(READ_180_STAGE_PREFIX);
      });
      var stage = '';

      if ((tempSubProduct === null || tempSubProduct === void 0 ? void 0 : tempSubProduct.length) > 0) {
        var _tempSubProduct$, _tempSubProduct$$titl;

        stage = (_tempSubProduct$ = tempSubProduct[0]) === null || _tempSubProduct$ === void 0 ? void 0 : (_tempSubProduct$$titl = _tempSubProduct$.title) === null || _tempSubProduct$$titl === void 0 ? void 0 : _tempSubProduct$$titl.replace(READ_180_STAGE_PREFIX, '');
      }

      products.push({
        image: Read180,
        name: programs.read180,
        ariaLabel: ariaLabels.read180,
        callback: function callback() {
          return launchStudentRead180(sif, env, stage);
        }
      });
    }
  });
  return products;
};
export var addDebounceToProductCallback = function addDebounceToProductCallback(products) {
  return products.map(function (product) {
    var callback = product.callback;
    var debouncedCallback = debounce(callback, PRODUCT_LAUNCH_DEBOUNCED_TIME, {
      leading: true,
      trailing: false,
      maxWait: PRODUCT_LAUNCH_DEBOUNCED_TIME
    });
    return _objectSpread(_objectSpread({}, product), {}, {
      callback: debouncedCallback
    });
  });
};

var ProgramLaunch = function ProgramLaunch(_ref) {
  var entitledProducts = _ref.entitledProducts,
      env = _ref.env,
      languageKey = _ref.languageKey,
      fullWidth = _ref.fullWidth;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var ariaLabelID = 'studentDashboard.programLaunch.productCardTile.ariaLabel';
  var userContext = getUserCtx();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      products = _useState2[0],
      setProducts = _useState2[1];

  var ariaLabels = {
    amira: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.amira
    }),
    waggle: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.waggle
    }),
    iRead: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.iRead
    }),
    writable: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.writable
    }),
    writingTask: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.writingTask
    }),
    math180: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.math180
    }),
    read180: formatMessage({
      id: ariaLabelID
    }, {
      product: programs.read180
    })
  };

  var productActivationCallback = function productActivationCallback() {
    var mappedProducts = mapProducts(entitledProducts, ariaLabels, userContext, env, languageKey);
    var mappedProductsWithDebounce = addDebounceToProductCallback(mappedProducts);
    return setProducts(mappedProductsWithDebounce);
  };

  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productActivationCallback();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [entitledProducts.length]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, products.length > 0 && /*#__PURE__*/React.createElement(ProductCard, {
    fullWidth: fullWidth,
    title: formatMessage({
      id: 'studentDashboard.programLaunch.productCard.title'
    }),
    products: products,
    isLoading: false
  }));
};

ProgramLaunch.propTypes = {
  entitledProducts: PropTypes.array.isRequired,
  env: PropTypes.string,
  languageKey: PropTypes.string,
  fullWidth: PropTypes.bool.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ProgramLaunch, props));
});