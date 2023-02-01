import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
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

import React, { useEffect, useState } from 'react';
import programsInfoApi from '@hmhco/onesearch-programs-api/src/programs/programsApi';
import { ADMIN_ROLES, getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
import launchPreviewContent from '@hmhco/content-launch/src/launchPreviewContent';
import { getEnvironment } from '@hmhco/get-environment/src/getEnvironment';
import { saveRecentlyViewed } from '@hmhco/recently-viewed-api/src/utils/saveRecentlyViewed';
import { useEdsEntitlements } from '@hmhco/eds-auth-helpers';
import { useFilterProgramsForEdsEntitlements } from '@hmhco/eds-filter-helpers';
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import useFetchPrograms from './hooks/useFetchPrograms.hook';
import ProgramSelector from './components/ProgramSelector/ProgramSelector';
import setLastViewed from './hooks/setLastViewed.hook';
import useFetchBookmarkHook from './hooks/useFetchBookmark.hook';
import useFetchClassesHook from './hooks/useFetchClasses.hook';
import useFetchAdditionalsHook from './hooks/useFetchAdditionals.hook';
import TeacherView from './views/teacherView/teacherView';
import StudentView from './views/studentView/studentView';
import AdminView from './views/adminView/adminView';
import { filterProgramsForRole, getSelectedProgram, loadingDataCondition, programHasCurriculumType, getRecentlyViewedProps } from './utils/utils';
var PROGRAM_ID = 2;

var AppViewByRole = function AppViewByRole() {
  var location = useLocation();
  var programIdFromUrl = location.pathname.split('/')[PROGRAM_ID];
  var env = getEnvironment();

  var _programsInfoApi = programsInfoApi(),
      getProgramInfoCached = _programsInfoApi.getProgramInfoCached;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      programId = _useState2[0],
      setProgramId = _useState2[1];

  var _getUserCtx = getUserCtx(),
      accessToken = _getUserCtx.rawToken.sif.accessToken,
      userId = _getUserCtx.userId,
      role = _getUserCtx.role,
      isLearner = _getUserCtx.isLearner;

  var isAdmin = role === ADMIN_ROLES.ADMINISTRATOR;

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      programSubLevels = _useState4[0],
      setProgramSublevels = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      programData = _useState6[0],
      setProgramData = _useState6[1];

  var _useState7 = useState({}),
      _useState8 = _slicedToArray(_useState7, 2),
      detailsJsonData = _useState8[0],
      setDetailsJsonData = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      sectionId = _useState10[0],
      setSectionId = _useState10[1];

  var _useState11 = useState({
    filteredData: false,
    currentProgramData: false,
    bookmarkData: false
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      loadingSectionsCheck = _useState12[0],
      setLoadingSectionsCheck = _useState12[1];

  var loadCurrentProgramData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id) {
      var data;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getProgramInfoCached(id);

            case 3:
              data = _context.sent;
              setProgramData(data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              logErrorWithContext('fetch current program data error in discover page', [{
                key: 'errorMessage',
                value: _context.t0
              }]);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function loadCurrentProgramData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleProgramIdChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(id, details) {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setProgramId(id);
              setDetailsJsonData(details);
              setLoadingSectionsCheck({
                filteredData: false,
                currentProgramData: false,
                bookmarkData: false
              });
              setProgramSublevels({});
              _context2.next = 6;
              return loadCurrentProgramData(id).then(function () {
                setLoadingSectionsCheck(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    currentProgramData: true
                  });
                });
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleProgramIdChange(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var setDetails = function setDetails(details) {
    setDetailsJsonData(details);
  };

  var _useFetchClassesHook = useFetchClassesHook(userId, role, isLearner),
      userClasses = _useFetchClassesHook.userClasses,
      isLoadingClasses = _useFetchClassesHook.loading;

  var _useFetchPrograms = useFetchPrograms(),
      _useFetchPrograms2 = _slicedToArray(_useFetchPrograms, 2),
      _useFetchPrograms2$ = _useFetchPrograms2[0],
      programs = _useFetchPrograms2$.programs,
      programsLoading = _useFetchPrograms2$.programsLoading,
      programsError = _useFetchPrograms2$.programsError,
      loadProgramsData = _useFetchPrograms2[1];

  var _useState13 = useState(''),
      _useState14 = _slicedToArray(_useState13, 2),
      filteredData = _useState14[0],
      setFilteredData = _useState14[1];

  var _useEdsEntitlements = useEdsEntitlements(programs),
      edsEntitlements = _useEdsEntitlements.data; // here we use a memo to ensure filteredPrograms does not have a new reference on each render


  var filteredPrograms = useFilterProgramsForEdsEntitlements(programs, edsEntitlements);

  var _useFetchBookmarkHook = useFetchBookmarkHook(),
      _useFetchBookmarkHook2 = _slicedToArray(_useFetchBookmarkHook, 2),
      _useFetchBookmarkHook3 = _useFetchBookmarkHook2[0],
      bookmarkedProgramId = _useFetchBookmarkHook3.currentProgram,
      bookmarkFetchError = _useFetchBookmarkHook3.bookmarkFetchError,
      isBookmarkLoading = _useFetchBookmarkHook3.bookmarkLoading,
      loadBookmarkData = _useFetchBookmarkHook2[1];

  useEffect(function () {
    loadingDataCondition(programs, programData, filteredData, programsLoading, isBookmarkLoading, setLoadingSectionsCheck);
  }, [filteredData, programData, isBookmarkLoading]);
  useEffect(function () {
    if ((filteredPrograms === null || filteredPrograms === void 0 ? void 0 : filteredPrograms.length) > 0) {
      var filteredDataResponse = filterProgramsForRole(filteredPrograms, role); // sort programs

      filteredDataResponse.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      setFilteredData(filteredDataResponse);
    }
  }, [filteredPrograms]);

  var _useFetchAdditionalsH = useFetchAdditionalsHook(),
      _useFetchAdditionalsH2 = _slicedToArray(_useFetchAdditionalsH, 2),
      _useFetchAdditionalsH3 = _useFetchAdditionalsH2[0],
      additionals = _useFetchAdditionalsH3.additionals,
      additionalsState = _objectWithoutProperties(_useFetchAdditionalsH3, ["additionals"]),
      loadAdditionals = _useFetchAdditionalsH2[1];

  useEffect(function () {
    var sectionIds = (userClasses === null || userClasses === void 0 ? void 0 : userClasses.length) > 0 ? userClasses.map(function (section) {
      return section.sectionRefId;
    }) : null;

    if (!isLoadingClasses) {
      loadProgramsData(sectionIds);
      loadAdditionals(sectionIds, role);
    }

    if (sectionIds !== null) {
      setSectionId(sectionIds === null || sectionIds === void 0 ? void 0 : sectionIds[0]);
    }
  }, [userClasses]);
  var currentProgramId = programIdFromUrl || bookmarkedProgramId;
  useEffect(function () {
    loadBookmarkData(userId, accessToken, env);
  }, []);
  var selectedProgram = getSelectedProgram(_objectSpread({
    currentProgramId: currentProgramId,
    bookmarkFetchError: bookmarkFetchError,
    isBookmarkLoading: isBookmarkLoading,
    programsError: programsError,
    filteredData: filteredData,
    programsLoading: programsLoading,
    additionals: additionals
  }, additionalsState));

  var handleOpenResource = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(_ref3) {
      var resourceId, item, uId, sif, environment, program, hierarchy, isSourceCarousel, shouldSetBookmark;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              resourceId = _ref3.resourceId, item = _ref3.item, uId = _ref3.uId, sif = _ref3.sif, environment = _ref3.environment, program = _ref3.program, hierarchy = _ref3.hierarchy, isSourceCarousel = _ref3.isSourceCarousel, shouldSetBookmark = _ref3.shouldSetBookmark;
              setProgramSublevels(item);

              if (!shouldSetBookmark) {
                _context3.next = 5;
                break;
              }

              _context3.next = 5;
              return setLastViewed(uId, sif, environment, program, hierarchy);

            case 5:
              setLoadingSectionsCheck(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  bookmarkData: true
                });
              });

              if (isLearner) {
                saveRecentlyViewed(getRecentlyViewedProps({
                  resourceItem: item,
                  resourceId: resourceId,
                  hierarchy: hierarchy,
                  filteredData: filteredData,
                  selectedProgram: selectedProgram,
                  programId: programId,
                  env: env,
                  accessToken: accessToken,
                  userId: userId
                }));
                launchPreviewContent(resourceId, sif, environment);
              } else {
                setProgramSublevels(item);

                if (!isSourceCarousel) {
                  launchPreviewContent(resourceId, sif, environment);
                  saveRecentlyViewed(getRecentlyViewedProps({
                    resourceItem: item,
                    resourceId: resourceId,
                    hierarchy: hierarchy,
                    filteredData: filteredData,
                    selectedProgram: selectedProgram,
                    programId: programId,
                    env: env,
                    accessToken: accessToken,
                    userId: userId
                  }));
                }
              }

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleOpenResource(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(Grid, {
    component: "main"
  }, !programsLoading && filteredData !== undefined && filteredData.length > 0 && /*#__PURE__*/React.createElement(ProgramSelector, {
    userId: userId,
    accessToken: accessToken,
    env: env,
    programData: filteredData,
    isLearner: isLearner,
    onChangeProgramId: handleProgramIdChange,
    selectedProgram: selectedProgram,
    setDetails: setDetails,
    isAdmin: isAdmin,
    additionals: additionals,
    hasCurriculum: programHasCurriculumType(programData)
  }), role === 'Instructor' && /*#__PURE__*/React.createElement(TeacherView, {
    loadingSectionsCheck: loadingSectionsCheck,
    detailsJsonData: detailsJsonData,
    programData: programData,
    programSubLevels: programSubLevels,
    handleOpenResource: handleOpenResource,
    accessToken: accessToken,
    env: env,
    userId: userId,
    programId: programId,
    sectionRefId: sectionId
  }), role === 'Learner' && /*#__PURE__*/React.createElement(StudentView, {
    loadingSectionsCheck: loadingSectionsCheck,
    programData: programData,
    programSubLevels: programSubLevels,
    detailsJsonData: detailsJsonData,
    handleOpenResource: handleOpenResource,
    accessToken: accessToken,
    env: env,
    userId: userId,
    programId: programId,
    isLearner: isLearner
  }), role === 'Administrator' && /*#__PURE__*/React.createElement(AdminView, {
    loadingSectionsCheck: loadingSectionsCheck,
    detailsJsonData: detailsJsonData,
    programData: programData,
    programSubLevels: programSubLevels,
    handleOpenResource: handleOpenResource,
    accessToken: accessToken,
    env: env,
    userId: userId,
    programId: programId,
    sectionRefId: sectionId
  }));
};

export default AppViewByRole;