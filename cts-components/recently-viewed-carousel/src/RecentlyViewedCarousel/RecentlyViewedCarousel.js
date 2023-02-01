import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { Typography, Box, IconButton } from '@mui/material';
import Carousel from 'react-multi-carousel';
import nextSvg from '@ed/baseline/icons/cts/next-sm.svg';
import previousSvg from '@ed/baseline/icons/cts/previous-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import getLocaleFile from '../lang';
import RecentlyViewedProgramCard from './RecentlyViewedProgramCard';
import 'react-multi-carousel/lib/styles.css';
import useStyles from './RecentlyViewedCarousel.styles';
import { getAdditionalProps, carouselBreakpoints, carouselBreakpointsStudentDashboard } from '../utils';
import useWindowSize from '../useWindowSize';

var setBreakpoints = function setBreakpoints(breakpointsStudentDashboard) {
  return breakpointsStudentDashboard ? carouselBreakpointsStudentDashboard : carouselBreakpoints;
};

var RecentlyViewedCarouselWithoutIntl = function RecentlyViewedCarouselWithoutIntl(props) {
  var _breakpoints$carousel2, _carousel$state;

  var carouselItems = props.carouselItems,
      handleItemClick = props.handleItemClick,
      breakpointsStudentDashboard = props.breakpointsStudentDashboard,
      customCarouselTitle = props.customCarouselTitle,
      forceRender = props.forceRender;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useState = useState({
    containerRef: null,
    state: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      carousel = _useState2[0],
      setCarousel = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentSlide = _useState4[0],
      setCurrentSlide = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      totalItems = _useState6[0],
      setTotalItems = _useState6[1];

  var windowSize = useWindowSize();
  var mountedRef = useRef(false);
  var breakpoints = setBreakpoints(breakpointsStudentDashboard);
  useEffect(function () {
    var isCancelled = false;

    if (carousel.state) {
      if (!isCancelled) {
        setCurrentSlide(carousel.state.currentSlide);
        setTotalItems(carousel.state.totalItems);
      }
    }

    return function () {
      isCancelled = true;
    };
  }, [carousel, carousel.state, windowSize]);
  useEffect(function () {
    if (mountedRef.current) {
      carousel.goToSlide(0);
    } else {
      mountedRef.current = true;
    }
  }, [carouselItems]);

  var isPreviousDisabled = function isPreviousDisabled() {
    return currentSlide === 0;
  };

  var isNextDisabled = function isNextDisabled() {
    if (carousel.state) {
      var _breakpoints$carousel;

      return currentSlide + ((_breakpoints$carousel = breakpoints[carousel.state.deviceType]) === null || _breakpoints$carousel === void 0 ? void 0 : _breakpoints$carousel.items) >= totalItems;
    }

    return false;
  };

  var hideControls = carouselItems.length <= ((_breakpoints$carousel2 = breakpoints[carousel === null || carousel === void 0 ? void 0 : (_carousel$state = carousel.state) === null || _carousel$state === void 0 ? void 0 : _carousel$state.deviceType]) === null || _breakpoints$carousel2 === void 0 ? void 0 : _breakpoints$carousel2.items);
  var _breakpoints$xl = breakpoints.xl,
      breakpointItems = _breakpoints$xl.items,
      breakpointSlidesToSlide = _breakpoints$xl.slidesToSlide;
  var breakpointsTestId = "breakpoints-".concat(breakpointItems, "-").concat(breakpointSlidesToSlide);
  var additionalCarouselProps = getAdditionalProps(forceRender); // eslint-disable-next-line no-unused-vars

  var Controls = function Controls() {
    return /*#__PURE__*/React.createElement(Box, {
      className: classes.controls
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outlined",
      size: "small",
      "aria-label": formatMessage({
        id: 'recentlyViewedCarousel.previous.aria'
      }),
      title: formatMessage({
        id: 'recentlyViewedCarousel.previous'
      }),
      onClick: function onClick() {
        return carousel.previous();
      },
      "aria-disabled": isPreviousDisabled(),
      disabled: isPreviousDisabled(),
      "data-testid": "previousButton"
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: previousSvg,
      size: "16",
      colour: isPreviousDisabled() ? 'var(--ebl-text-white)' : 'var(--ebl-button-outlined-text-color)'
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "outlined",
      size: "small",
      "aria-label": formatMessage({
        id: 'recentlyViewedCarousel.next.aria'
      }),
      title: formatMessage({
        id: 'recentlyViewedCarousel.next'
      }),
      onClick: function onClick() {
        return carousel.next();
      },
      "aria-disabled": isNextDisabled(),
      disabled: isNextDisabled(),
      "data-testid": "nextButton"
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: nextSvg,
      size: "16",
      colour: isNextDisabled() ? 'var(--ebl-text-white)' : 'var(--ebl-button-outlined-text-color)'
    })));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    className: classes.root,
    "data-testid": "recently-viewed-carousel"
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.carouselBox,
    "data-testid": breakpointsTestId
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.headerBox
  }, /*#__PURE__*/React.createElement(Box, {
    className: classes.carouselTitle
  }, /*#__PURE__*/React.createElement(Typography, {
    component: "h2",
    variant: "h3"
  }, !customCarouselTitle && /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "recentlyViewedCarousel.recentlyViewed",
    values: {
      numItems: totalItems
    }
  }), customCarouselTitle && /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "recentlyViewedCarousel.customTitle",
    values: {
      customTitle: customCarouselTitle,
      numItems: totalItems
    }
  }))), /*#__PURE__*/React.createElement(Box, {
    ml: 1
  }, !hideControls ? /*#__PURE__*/React.createElement(Controls, null) : null)), /*#__PURE__*/React.createElement(Carousel, _extends({
    beforeChange: function beforeChange(nextSlide) {
      return setCurrentSlide(nextSlide);
    },
    swipeable: true,
    draggable: true,
    responsive: breakpoints,
    containerClass: classes.carousel,
    keyBoardControl: true,
    itemClass: classes.carouselItem,
    arrows: false,
    renderButtonGroupOutside: true,
    ref: function ref(carouselEl) {
      return setCarousel(carouselEl);
    }
  }, additionalCarouselProps), carouselItems.map(function (item) {
    return /*#__PURE__*/React.createElement(RecentlyViewedProgramCard, {
      key: item.id,
      item: item,
      handleItemClick: handleItemClick,
      "data-testid": "carouselItem-".concat(item.id),
      breakpointsStudentDashboard: breakpointsStudentDashboard
    });
  })))));
};

var RecentlyViewedCarousel = function RecentlyViewedCarousel(props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(RecentlyViewedCarouselWithoutIntl, props));
};

RecentlyViewedCarouselWithoutIntl.propTypes = {
  customCarouselTitle: PropTypes.string,
  carouselItems: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func,
  breakpointsStudentDashboard: PropTypes.bool,
  forceRender: PropTypes.bool // Prop only used for testing as the carousel library needs to be forced to render in a node environment

};
RecentlyViewedCarouselWithoutIntl.defaultProps = {
  handleItemClick: function handleItemClick() {},
  breakpointsStudentDashboard: false,
  forceRender: false
};
export default RecentlyViewedCarousel;