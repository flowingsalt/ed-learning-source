import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecentlyViewedCarousel } from '@hmhco/recently-viewed-carousel/src/RecentlyViewedCarousel';
import launchPreviewContent from '@hmhco/content-launch/src/launchPreviewContent';
import getRecentlyViewedContentApiCancelable from '@hmhco/recently-viewed-api/src/getRecentlyViewedContentApiCancelable';
import setRecentlyViewedContentApi from '@hmhco/recently-viewed-api/src/setRecentlyViewedContentApiCancelable';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import debounce from '@hmhco/amp-core/src/utils/debounce';
import useStyles from './RecentlyViewed.Styles';

var RecentlyViewed = function RecentlyViewed(_ref) {
  var userId = _ref.userId,
      sif = _ref.sif,
      env = _ref.env,
      width = _ref.width;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      recentlyViewedItems = _useState2[0],
      setRecentlyViewedItems = _useState2[1];

  var setItems = function setItems(response) {
    if (!(response === null || response === void 0 ? void 0 : response.isCancelled)) {
      setRecentlyViewedItems(response.data);
    }
  };

  var setRecentlyViewedContent = function setRecentlyViewedContent(userRefId, contentObject) {
    var _setRecentlyViewedCon = setRecentlyViewedContentApi(),
        setRecentlyViewed = _setRecentlyViewedCon.setRecentlyViewed;

    setRecentlyViewed({
      userRefId: userRefId,
      sif: sif,
      env: env,
      contentObject: contentObject
    }).then(function (response) {
      setItems(response);
    })["catch"](function (error) {
      return logErrorWithContext('student-dashboard - setRecentlyViewed', [{
        key: 'errorMessage',
        value: error
      }]);
    });
  };

  var getRecentlyViewedContent = function getRecentlyViewedContent() {
    var _getRecentlyViewedCon = getRecentlyViewedContentApiCancelable(),
        getRecentlyViewed = _getRecentlyViewedCon.getRecentlyViewed;

    getRecentlyViewed({
      userId: userId,
      sif: sif,
      env: env
    }).then(function (response) {
      setItems(response);
    })["catch"](function (error) {
      return logErrorWithContext('student-dashboard - fetchRecentlyViewed', [{
        key: 'errorMessage',
        value: error
      }]);
    });
  };

  var handleOpenResource = function handleOpenResource(resource) {
    var resourceId = resource.id || resource.studentEdition;
    setRecentlyViewedContent(userId, resource);
    launchPreviewContent(resourceId, sif, env);
  };

  var debouncedOnClick = debounce(function (resource) {
    handleOpenResource(resource);
  }, 600);
  useEffect(function () {
    getRecentlyViewedContent();
  }, []);
  return recentlyViewedItems.length > 0 ? /*#__PURE__*/React.createElement(RecentlyViewedCarousel, {
    carouselItems: recentlyViewedItems,
    handleItemClick: debouncedOnClick,
    classes: {
      root: classes.root
    },
    breakpointsStudentDashboard: width !== 12
  }) : null;
};

RecentlyViewed.propTypes = {
  userId: PropTypes.string.isRequired,
  sif: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
export default RecentlyViewed;