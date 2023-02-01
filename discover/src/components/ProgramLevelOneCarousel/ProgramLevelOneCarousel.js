import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import { prependWithLabel as prependWithTitle } from '@hmhco/flexible-labelling';
import { DiscoverCarousel } from '@hmhco/discover-carousel/src/DiscoverCarousel';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import { useIntl } from 'react-intl';
import useDocumentHelper from '@hmhco/document-helper/src/useDocumentHelper';
import PropTypes from 'prop-types';
import programsInfoApi from '@hmhco/onesearch-programs-api/src/programs/programsApi';
import { isEmpty } from 'lodash';
import { Typography } from '@mui/material';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import { programHasUnits, getProgramUnits, getLastViewedCarouselItemLevel } from './util';
import useFetchBookmarkHook from '../../hooks/useFetchBookmark.hook';
import useStyles from './ProgramLevelOneCarousel.styles';
import CarouselSkeletonLoader from '../../skeletonLoaders/CarouselSkeletonLoader';

var ProgramLevelOneCarousel = function ProgramLevelOneCarousel(props) {
  var moduleTitle = props.moduleTitle,
      currentProgram = props.currentProgram,
      cardClickHandler = props.cardClickHandler,
      accessToken = props.accessToken,
      env = props.env,
      isLearner = props.isLearner,
      userId = props.userId;

  var _programsInfoApi = programsInfoApi(),
      getProgramInfoCached = _programsInfoApi.getProgramInfoCached;

  var _useFetchBookmarkHook = useFetchBookmarkHook(),
      _useFetchBookmarkHook2 = _slicedToArray(_useFetchBookmarkHook, 2),
      _useFetchBookmarkHook3 = _useFetchBookmarkHook2[0],
      bookmark = _useFetchBookmarkHook3.bookmark,
      bookmarkFetchError = _useFetchBookmarkHook3.bookmarkFetchError,
      bookmarkLoading = _useFetchBookmarkHook3.bookmarkLoading,
      loadBookmarkData = _useFetchBookmarkHook2[1];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      program = _useState2[0],
      setProgram = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      bookmarkLevel = _useState4[0],
      setBookmarkLevel = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      carousel = _useState6[0],
      setCarousel = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      programLoaded = _useState8[0],
      setProgramLoaded = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      programTitle = _useState10[0],
      setProgramTitle = _useState10[1];

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  useDocumentHelper(formatMessage({
    id: 'programPage.pageTitle'
  }));

  var loadCurrentProgramData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(programId) {
      var programInfo;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBookmarkLevel(null);
              setCarousel(false);
              setProgram([]);
              _context.next = 6;
              return getProgramInfoCached(programId);

            case 6:
              programInfo = _context.sent;

              if (!isEmpty(programInfo) && programHasUnits(programInfo)) {
                setProgramTitle(programInfo === null || programInfo === void 0 ? void 0 : programInfo.title);
                setProgram(getProgramUnits(programInfo));
                setProgramLoaded(true);
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('fetch current program data error in discover carousel', [{
                key: 'errorMessage',
                value: _context.t0
              }]);

            case 13:
              try {
                loadBookmarkData(userId, accessToken, env, programId);
              } catch (error) {
                logErrorWithContext('fetch current bookmark data error in discover carousel', [{
                  key: 'errorMessage',
                  value: error
                }]);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function loadCurrentProgramData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  useEffect(function () {
    loadCurrentProgramData(currentProgram);
  }, [currentProgram]);
  useEffect(function () {
    if (!bookmarkLoading && programLoaded) {
      setCarousel(true);

      if (bookmark === null || bookmark === void 0 ? void 0 : bookmark.level) {
        setBookmarkLevel(getLastViewedCarouselItemLevel(bookmark, bookmarkFetchError));
      }
    }
  }, [bookmark]);
  useEffect(function () {
    logMessageWithContext('Discover: Chapter/Module/Unit');
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.carouselWrapper,
    "data-testid": "program-carousel-wrapper",
    "aria-label": prependWithTitle(moduleTitle, programTitle, ' - '),
    "aria-roledescription": "carousel"
  }, moduleTitle !== '' && /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    component: "h2",
    className: classes.carouselHeading
  }, moduleTitle), carousel ? /*#__PURE__*/React.createElement(DiscoverCarousel, {
    bookmarkLevel: bookmarkLevel,
    carouselItems: program,
    programId: currentProgram,
    cardClickHandler: cardClickHandler,
    accessToken: accessToken,
    env: env,
    isLearner: isLearner,
    userId: userId,
    isLoading: true
  }) : /*#__PURE__*/React.createElement(CarouselSkeletonLoader, {
    count: 4
  }));
};

ProgramLevelOneCarousel.propTypes = {
  currentProgram: PropTypes.string.isRequired,
  moduleTitle: PropTypes.string,
  cardClickHandler: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isLearner: PropTypes.bool
};
export default ProgramLevelOneCarousel;