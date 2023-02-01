import { hasFlexibleLabels, prependWithLabel } from '@hmhco/flexible-labelling';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
/* eslint-disable import/prefer-default-export */

import React from 'react';
export var carouselBreakpoints = {
  large: {
    query: '(min-width: 601px) and (max-width: 1024px)',
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  medium: {
    query: '(min-width: 481px) and (max-width: 600px)',
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  },
  small: {
    query: '(min-width: 0px) and (max-width: 480px)',
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
};
export var getFirstActiveSlideIndex = function getFirstActiveSlideIndex() {
  var _currentActiveSlides$;

  var currentActiveSlides = document.querySelectorAll('.slick-active');
  return (_currentActiveSlides$ = currentActiveSlides[0]) === null || _currentActiveSlides$ === void 0 ? void 0 : _currentActiveSlides$.getAttribute('data-index');
};
export var getLastActiveSlideIndex = function getLastActiveSlideIndex() {
  var _currentActiveSlides;

  var currentActiveSlides = document.querySelectorAll('.slick-active');
  return (_currentActiveSlides = currentActiveSlides[currentActiveSlides.length - 1]) === null || _currentActiveSlides === void 0 ? void 0 : _currentActiveSlides.getAttribute('data-index');
};
export var handleForwardTab = function handleForwardTab(e) {
  try {
    var _document = document,
        activeElement = _document.activeElement;
    var isNextDisabled = Boolean(document.getElementById('carousel-next-button').disabled);

    if (activeElement.id === 'carousel-previous-button') {
      document.querySelector("div[data-index=\"".concat(getFirstActiveSlideIndex(), "\"][tabindex=\"0\"]")).focus();
      e.preventDefault();
    }

    if (activeElement.getAttribute('data-index') === getLastActiveSlideIndex() && !isNextDisabled) {
      document.getElementById('carousel-next-button').focus();
      e.preventDefault();
    }
  } catch (error) {
    logErrorWithContext("Discover Carousel - failed to handle forward tab - ".concat(error));
  }
};
export var handleBackwardTab = function handleBackwardTab(e) {
  try {
    var _document2 = document,
        activeElement = _document2.activeElement;
    var isPreviousDisabled = document.getElementById('carousel-previous-button').disabled;

    if (activeElement.id === 'carousel-next-button') {
      document.querySelector("div[data-index=\"".concat(getLastActiveSlideIndex(), "\"][tabindex=\"0\"]")).focus();
      e.preventDefault();
    }

    if (activeElement.getAttribute('data-index') === getFirstActiveSlideIndex() && !isPreviousDisabled) {
      document.getElementById('carousel-previous-button').focus();
      e.preventDefault();
    }
  } catch (error) {
    logErrorWithContext("Discover Carousel - failed to handle backward tab - ".concat(error));
  }
};
export var handleAfterChange = function handleAfterChange(index, focusRef, nextSlide) {
  var elementToFocus;
  var newFocusIndex = null;

  if (index > nextSlide) {
    if (typeof focusRef === 'number') {
      newFocusIndex = Number(focusRef) + 1;
      elementToFocus = "div[data-index=\"".concat(newFocusIndex, "\"][tabindex=\"0\"]");
    } else {
      newFocusIndex = Number(getFirstActiveSlideIndex());
      elementToFocus = "div[data-index=\"".concat(newFocusIndex, "\"][tabindex=\"0\"]");
    }
  }

  if (index < nextSlide) {
    if (typeof focusRef === 'number') {
      newFocusIndex = Number(focusRef) - 1;
      elementToFocus = "div[data-index=\"".concat(newFocusIndex, "\"][tabindex=\"0\"]");
    } else {
      newFocusIndex = Number(getLastActiveSlideIndex());
      elementToFocus = "div[data-index=\"".concat(newFocusIndex, "\"][tabindex=\"0\"]");
    }
  }

  return {
    elementToFocus: elementToFocus,
    newFocusIndex: newFocusIndex
  };
};
export var getUnitLabel = function getUnitLabel(_ref) {
  var type = _ref.type,
      hierarchy = _ref.hierarchy,
      levelLabel = _ref.levelLabel,
      levelNumber = _ref.levelNumber;
  var useFlexibleLabels = hasFlexibleLabels({
    levelLabel: levelLabel,
    levelNumber: levelNumber
  });

  if (!useFlexibleLabels) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, type === null || type === void 0 ? void 0 : type[0], /*#__PURE__*/React.createElement("span", null, " ", hierarchy));
  } // avoid empty unnecessary nodes


  var levelNumberNode = levelNumber !== '' ? /*#__PURE__*/React.createElement("span", null, " ", levelNumber) : '';
  var label = prependWithLabel(levelLabel, '', '');
  return /*#__PURE__*/React.createElement(React.Fragment, null, label, levelNumberNode);
};