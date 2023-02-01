import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

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

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { AccessibilityOutOfScreenMessage } from '@hmhco/pls-core';
import { getSubtitleLabel, prependWithLabel } from '@hmhco/flexible-labelling';
import { Box, IconButton } from '@mui/material';
import nextSvg from '@ed/baseline/icons/cts/next-sm.svg';
import previousSvg from '@ed/baseline/icons/cts/previous-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import Slider from 'react-slick';
import getLocaleFile from '../lang';
import DiscoverCarouselCard from './DiscoverCarouselCard';
import useStyles from './DiscoverCarousel.styles';
import { carouselBreakpoints, handleBackwardTab, handleForwardTab, handleAfterChange } from '../utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useBreakpoint from '../useBreakpoint';

var DiscoverCarouselWithoutIntl = function DiscoverCarouselWithoutIntl(props) {
  var _breakpoint$settings$;

  var carouselItems = props.carouselItems,
      programId = props.programId,
      cardClickHandler = props.cardClickHandler,
      accessToken = props.accessToken,
      env = props.env,
      _props$isLearner = props.isLearner,
      isLearner = _props$isLearner === void 0 ? false : _props$isLearner,
      userId = props.userId,
      bookmarkLevel = props.bookmarkLevel;
  var sliderRef = useRef();

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      nextSlide = _useState2[0],
      setNextSlide = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      bookmark = _useState4[0],
      setBookmark = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      activeCardIdx = _useState6[0],
      setActiveCardIdx = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      focusRef = _useState8[0],
      setFocusRef = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      carouselIsMoving = _useState10[0],
      setCarouselIsMoving = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedCardTitle = _useState12[0],
      setSelectedCardTitle = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      showLastViewedAccessibilityMessage = _useState14[0],
      setShowLastViewedAccessibilityMessage = _useState14[1];

  var carouselArrowClickedRef = useRef(null);

  var handleKeyboard = function handleKeyboard(e) {
    var slider = document.querySelector('.slick-initialized');
    var focusedElement = document.activeElement;
    var carouselIsFocused = slider === null || slider === void 0 ? void 0 : slider.contains(focusedElement);

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        return handleBackwardTab(e);
      }

      if (!e.shiftKey) {
        return handleForwardTab(e);
      }
    }

    if (e.key === 'ArrowRight' && carouselIsFocused) {
      setCarouselIsMoving(true);
      setFocusRef(null);
      sliderRef.current.slickNext();
    }

    if (e.key === 'ArrowLeft' && carouselIsFocused) {
      setCarouselIsMoving(true);
      setFocusRef(null);
      sliderRef.current.slickPrev();
    }

    return false;
  };

  var breakpoint = useBreakpoint(carouselBreakpoints);
  var isNextDisabled = carouselItems.length - nextSlide <= ((_breakpoint$settings$ = breakpoint.settings.slidesToShow) !== null && _breakpoint$settings$ !== void 0 ? _breakpoint$settings$ : 4) || carouselIsMoving;
  var isPreviousDisabled = nextSlide < 1 || carouselIsMoving;

  var LeftControl = function LeftControl(slickProps) {
    var _onClick = slickProps.onClick;
    return /*#__PURE__*/React.createElement(Box, {
      className: classes.leftControl
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outlined",
      size: "small",
      "aria-label": formatMessage({
        id: 'discoverCarousel.previous.aria'
      }),
      title: formatMessage({
        id: 'discoverCarousel.previous'
      }),
      onClick: function onClick(e) {
        if (e.type === 'click') {
          carouselArrowClickedRef.current = true;
          setFocusRef(null);
        }

        _onClick();
      },
      onKeyPress: _onClick,
      "data-testid": "previousButton",
      disabled: isPreviousDisabled,
      id: "carousel-previous-button"
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: previousSvg,
      size: "16",
      colour: isPreviousDisabled ? 'var(--ebl-text-white)' : 'var(--ebl-button-outlined-text-color)'
    })));
  };

  var RightControl = function RightControl(slickProps) {
    var _onClick2 = slickProps.onClick;
    return /*#__PURE__*/React.createElement(Box, {
      className: classes.rightControl
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outlined",
      size: "small",
      "aria-label": formatMessage({
        id: 'discoverCarousel.next.aria'
      }),
      title: formatMessage({
        id: 'discoverCarousel.next'
      }),
      onClick: function onClick(e) {
        if (e.type === 'click') {
          carouselArrowClickedRef.current = true;
          setFocusRef(null);
        }

        _onClick2();
      },
      onKeyPress: _onClick2,
      "data-testid": "nextButton",
      id: "carousel-next-button",
      disabled: isNextDisabled
    }, /*#__PURE__*/React.createElement(Icon, {
      svg: nextSvg,
      size: "16",
      colour: isNextDisabled ? 'var(--ebl-text-white)' : 'var(--ebl-button-outlined-text-color)'
    })));
  };

  var settings = _objectSpread({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    accessibility: false,
    beforeChange: function beforeChange(current, next) {
      setNextSlide(next);
    },
    afterChange: function afterChange(index) {
      if (!carouselArrowClickedRef.current) {
        var _document$querySelect;

        var _handleAfterChange = handleAfterChange(index, focusRef, nextSlide),
            elementToFocus = _handleAfterChange.elementToFocus,
            newFocusIndex = _handleAfterChange.newFocusIndex;

        (_document$querySelect = document.querySelector(elementToFocus)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.focus();
        setFocusRef(newFocusIndex);
      }

      carouselArrowClickedRef.current = false;
      setCarouselIsMoving(false);
    },
    nextArrow: /*#__PURE__*/React.createElement(RightControl, null),
    prevArrow: /*#__PURE__*/React.createElement(LeftControl, null)
  }, breakpoint.settings);

  useEffect(function () {
    var hasBookmark = Number(bookmarkLevel) !== 0;

    if (hasBookmark) {
      var lastViewedIndex = Number(bookmarkLevel);
      var levelOverflowFix = carouselItems && carouselItems.length < lastViewedIndex ? 1 : lastViewedIndex;
      sliderRef.current.slickGoTo(levelOverflowFix - 1);
      setActiveCardIdx(levelOverflowFix - 1);
      setBookmark(lastViewedIndex - 1);
    } else {
      setActiveCardIdx(0);
      setBookmark(null);
    }
  }, []);
  useEffect(function () {
    if (carouselItems.length > 0) {
      var currentlySelectedCarouselItem = carouselItems.find(function (item, index) {
        return index === activeCardIdx;
      });

      var _getSubtitleLabel = getSubtitleLabel(currentlySelectedCarouselItem),
          label = _getSubtitleLabel.label;

      setSelectedCardTitle(prependWithLabel(label, currentlySelectedCarouselItem.title));
    }
  }, [carouselItems]);

  var handleFocus = function handleFocus() {
    var elementWithFocus = document.activeElement;
    var dataIndex = elementWithFocus.getAttribute('data-index');

    if (dataIndex) {
      setFocusRef(Number(dataIndex));
    }

    return false;
  };

  useEffect(function () {
    document.addEventListener('keydown', handleKeyboard);
    document.addEventListener('keyup', handleFocus);
    return function () {
      document.removeEventListener('keydown', handleKeyboard);
      document.removeEventListener('keyup', handleFocus);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    className: classes.root,
    "data-testid": "discover-carousel"
  }, /*#__PURE__*/React.createElement(Box, {
    className: "".concat(classes.carouselBox, " ").concat(carouselItems.length < 5 && classes.shortCarousel)
  }, !isLearner && /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    role: "status"
  }, /*#__PURE__*/React.createElement(AccessibilityOutOfScreenMessage, null, showLastViewedAccessibilityMessage && /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "discoverCarousel.currentElement.announcement",
    values: {
      cardTitle: selectedCardTitle
    }
  }))), /*#__PURE__*/React.createElement(Slider, _extends({
    ref: sliderRef
  }, settings), carouselItems.map(function (item, index) {
    return /*#__PURE__*/React.createElement(DiscoverCarouselCard, {
      key: item.contextId[0],
      item: item,
      programId: programId,
      cardClickHandler: cardClickHandler,
      bookmark: bookmark,
      isActive: activeCardIdx === index,
      accessToken: accessToken,
      setBookmark: setBookmark,
      setActiveCardIdx: setActiveCardIdx,
      env: env,
      isLearner: isLearner,
      userId: userId,
      dataIndex: index,
      focusRef: focusRef,
      setFocusRef: setFocusRef,
      setShowLastViewedAccessibilityMessage: setShowLastViewedAccessibilityMessage
    });
  })))));
};

var DiscoverCarousel = function DiscoverCarousel(props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(DiscoverCarouselWithoutIntl, props));
};

DiscoverCarouselWithoutIntl.propTypes = {
  carouselItems: PropTypes.array.isRequired,
  programId: PropTypes.string.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isLearner: PropTypes.bool,
  bookmarkLevel: PropTypes.string
};
export default DiscoverCarousel;