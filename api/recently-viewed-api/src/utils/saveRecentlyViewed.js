import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* eslint-disable import/prefer-default-export */

import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import createRecentlyViewedResourceItem from './createRecentlyViewedResourceItem';
import setRecentlyViewedContentApi from '../setRecentlyViewedContentApiCancelable';
export var saveRecentlyViewed = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(props) {
    var _setRecentlyViewedCon, setRecentlyViewed, item, programDetails, programId, programTitle, sif, env, userId, resource, carouselItems, icon, ResourceItem;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _setRecentlyViewedCon = setRecentlyViewedContentApi(), setRecentlyViewed = _setRecentlyViewedCon.setRecentlyViewed;
            item = props.item, programDetails = props.programDetails, programId = props.programId, programTitle = props.programTitle, sif = props.sif, env = props.env, userId = props.userId, resource = props.resource, carouselItems = props.carouselItems;
            icon = props.sgmIconTitle || props.iconTitle;
            ResourceItem = createRecentlyViewedResourceItem(item, resource, programId, programTitle, programDetails, icon, carouselItems);
            _context.next = 7;
            return setRecentlyViewed({
              userRefId: userId,
              sif: sif,
              env: env,
              contentObject: ResourceItem
            });

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            logErrorWithContext('saveRecentlyViewed', [{
              key: 'errorMessage',
              value: _context.t0
            }]);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function saveRecentlyViewed(_x) {
    return _ref.apply(this, arguments);
  };
}();