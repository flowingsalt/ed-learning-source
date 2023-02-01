import React from 'react';
import propTypes from 'prop-types';
import { useIntl } from 'react-intl';
import FavoriteButton from '@hmhco/favorite-button/src/FavoriteButton';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import GenericCard from '../GenericCard/GenericCard';
import GradeLevel from '../GradeLevel/GradeLevel';
import LearningResourceDuration from '../Duration/Duration';
import Petal from '../Petal/Petal';
import resourceTypes, { resourceTypeMap as translationResourceTypes } from '../../../enums/resourceTypes';
import translationHmhPrograms from '../../../enums/hmhPrograms';
import LearningResourceDate from '../Date/LearningResourceDate';
import Themes from '../../../enums/themes';
import { useBasePathContext } from '../../../hooks/basePathContext';
import getLocaleFile from '../../../lang';

function Card(_ref) {
  var cardImageUrl = _ref.cardImageUrl,
      displayTitle = _ref.displayTitle,
      resourceFileName = _ref.resourceFileName,
      description = _ref.description,
      resourceType = _ref.resourceType,
      gradeLevelList = _ref.gradeLevelList,
      liveEventStart = _ref.liveEventStart,
      hmhProgram = _ref.hmhProgram,
      durationSecs = _ref.durationSecs,
      isFavorite = _ref.isFavorite,
      addFavorite = _ref.addFavorite,
      removeFavorite = _ref.removeFavorite,
      isIcon = _ref.isIcon,
      publicationDate = _ref.publicationDate,
      useMaxHeight = _ref.useMaxHeight,
      useIntro = _ref.useIntro,
      theme = _ref.theme;
  var isDurationVisible = durationSecs > 0;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var professionalLearning = formatMessage({
    id: 'card.professionalLearning'
  });

  var _useBasePathContext = useBasePathContext(),
      training = _useBasePathContext.training;

  var hasHmhProgram = hmhProgram && hmhProgram.length > 0;

  var program = function program() {
    return hasHmhProgram && /*#__PURE__*/React.createElement("span", {
      "data-testid": "hmhProgramSection",
      key: "".concat(resourceFileName).concat(hmhProgram[0])
    }, formatMessage({
      id: "".concat(translationHmhPrograms[hmhProgram[0]])
    }));
  };

  var gradeLevel = function gradeLevel() {
    return gradeLevelList && /*#__PURE__*/React.createElement(GradeLevel, {
      key: "".concat(resourceFileName).concat(gradeLevelList),
      gradeLevelList: gradeLevelList
    });
  };

  var dateOfPublication = function dateOfPublication() {
    return publicationDate && /*#__PURE__*/React.createElement(LearningResourceDate, {
      key: "".concat(resourceFileName).concat(publicationDate),
      value: publicationDate
    });
  };

  var LiveEvent = function LiveEvent() {
    return liveEventStart && /*#__PURE__*/React.createElement(LearningResourceDate, {
      key: "".concat(resourceFileName).concat(liveEventStart),
      value: liveEventStart,
      useDateTime: true
    });
  };

  var themeGettingStarted = function themeGettingStarted() {
    return theme === Themes.GETTING_STARTED && /*#__PURE__*/React.createElement(React.Fragment, null, program(), gradeLevel());
  };

  var themeProgramSupport = function themeProgramSupport() {
    return theme === Themes.PROGRAM_SUPPORT && /*#__PURE__*/React.createElement(React.Fragment, null, program(), gradeLevel());
  };

  var themeBreakRoom = function themeBreakRoom() {
    return theme === Themes.BREAK_ROOM && /*#__PURE__*/React.createElement(React.Fragment, null, dateOfPublication());
  };

  var themeLiveEvent = function themeLiveEvent() {
    return theme === Themes.LIVE_EVENT && /*#__PURE__*/React.createElement(React.Fragment, null, LiveEvent());
  };

  var intro = function intro() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, themeGettingStarted(), themeProgramSupport(), themeBreakRoom(), themeLiveEvent());
  };

  var petal = function petal() {
    return [resourceType && [/*#__PURE__*/React.createElement(Petal, {
      "data-testid": "petalSection",
      key: "".concat(resourceFileName).concat(resourceType),
      resourceType: resourceType
    })]];
  };

  var duration = function duration() {
    var isResourceTypeRead = resourceTypes.ARTICLE.includes(resourceType);
    return isDurationVisible && /*#__PURE__*/React.createElement(LearningResourceDuration, {
      key: "".concat(resourceFileName).concat(durationSecs),
      "data-testid": "durationSection",
      durationSecs: durationSecs,
      isResourceTypeRead: isResourceTypeRead
    });
  };

  var typeOfResource = function typeOfResource() {
    return resourceType && /*#__PURE__*/React.createElement("span", {
      "data-testid": "resourceTypeFooterSection",
      key: "".concat(resourceFileName).concat(resourceType)
    }, formatMessage({
      id: translationResourceTypes[resourceType]
    }));
  };

  var footer = function footer() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FavoriteButton, {
      isFavorite: isFavorite,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      resourceFileName: resourceFileName,
      displayTitle: displayTitle,
      isIcon: isIcon
    }), duration(), typeOfResource());
  };

  return /*#__PURE__*/React.createElement(GenericCard, {
    key: displayTitle,
    mediaImageUrl: cardImageUrl,
    contentTitle: displayTitle,
    contentTitleUrl: training.getUrl(resourceFileName),
    mediaUrl: training.getUrl(resourceFileName),
    mediaExtra: petal(),
    contentDescription: description,
    contentIntro: intro(),
    resourceType: resourceType,
    actionMessage: footer(),
    mediaSkeletonContent: professionalLearning,
    action: "",
    useMaxHeight: useMaxHeight,
    useIntro: useIntro
  });
}

Card.propTypes = {
  resourceFileName: propTypes.string,
  displayTitle: propTypes.string,
  cardImageUrl: propTypes.string,
  description: propTypes.string,
  resourceType: propTypes.string,
  gradeLevelList: propTypes.array,
  liveEventStart: propTypes.string,
  hmhProgram: propTypes.array,
  durationSecs: propTypes.number,
  isFavorite: propTypes.bool,
  addFavorite: propTypes.func,
  removeFavorite: propTypes.func,
  isIcon: propTypes.bool,
  publicationDate: propTypes.string,
  useMaxHeight: propTypes.bool,
  useIntro: propTypes.bool,
  theme: propTypes.string
};
Card.defaultProps = {
  resourceFileName: null,
  displayTitle: null,
  cardImageUrl: null,
  description: null,
  resourceType: null,
  gradeLevelList: [],
  liveEventStart: null,
  hmhProgram: [],
  durationSecs: null,
  isFavorite: false,
  addFavorite: null,
  removeFavorite: null,
  isIcon: true,
  publicationDate: null,
  useMaxHeight: true,
  useIntro: true,
  theme: null
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Card, props));
});