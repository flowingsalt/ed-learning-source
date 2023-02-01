import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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

import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ResourceCard } from '@hmhco/resource-card/src/ResourceCard';
import { attemptToParseJson } from 'orchid-common/utils/jsonUtil.util';
import { eventRegistry as events } from '@hmhco/amp-core-events';
import { useApolloClient } from '@apollo/client';
import { useUserContext } from '@hmhco/amp-core-react/src/userContextProvider';
import fetchAssignmentCheckAvailableApi from '@hmhco/assignment-api/src/fetchAssignmentCheckAvailableApi';
import { PARTNER_MODAL_TIMEOUT } from '@hmhco/connected-partner-helper/src/constants';
import { launchAssignment, mapAssignments } from './assignmentsUtils';
import AssignmentDirectionsModal from './AssignmentDirectionsModal';
import AssignmentNotAvailableModal from './AssignmentNotAvailableModal';
import { updateCache, updateAssignmentStatusToInProgress, removeAssignmentFromList } from './apolloUtils';
import { APIErrorContext } from '../../context/ApiErrorContextProvider';
import { usePartnerModalContext } from '../../context/PartnerModalContextProvider'; // This is the minimum number of assignments in the list we should
// have before the filter dropdown is displayed, any less it is hidden.

var MINIMUM_NUM_ASSIGNMENTS = 8;
export var iamDone = function iamDone(assignment, apolloIAmDoneCall) {
  var _assignment$activitie = _slicedToArray(assignment.activities, 1),
      refId = _assignment$activitie[0].refId;

  apolloIAmDoneCall({
    variables: {
      assignmentActivityRefId: refId
    }
  });
};

var shouldShowDropdown = function shouldShowDropdown(resourceTypes) {
  return resourceTypes.dueToday.length > 0 && resourceTypes.overdue.length > 0 && resourceTypes.viewAll.length > MINIMUM_NUM_ASSIGNMENTS;
};

var shouldResetDropdown = function shouldResetDropdown(resources, resourcesState) {
  return resources.length === 0 && resourcesState !== 'viewAll';
};

var hasAssignments = function hasAssignments(dueToday, overdue) {
  return dueToday.items.length > 0 || overdue.items.length > 0;
};

var setCardTitle = function setCardTitle(resourceTypes, resourcesState) {
  var title = resourcesState;
  var overdue = resourceTypes.overdue,
      dueToday = resourceTypes.dueToday;
  title = overdue.length === 0 && dueToday.length > 0 ? 'dueToday' : title;
  title = dueToday.length === 0 && overdue.length > 0 ? 'overdue' : title;
  return title;
};

function processAssignmentLaunch(sif, assignment, updateAssignmentToInProgressInCache, openSelectedDirectionsModal, openSelectedNotAvailableModal, openPartnerAssignmentModal, handleLaunchError) {
  var launchAssignmentReturn = launchAssignment(sif, assignment, updateAssignmentToInProgressInCache, openSelectedDirectionsModal, openSelectedNotAvailableModal, openPartnerAssignmentModal);
  launchAssignmentReturn["catch"](function () {
    handleLaunchError({
      error: true
    });
  });
}

function processAssignmentFlow(msg, resources, apolloIAmDoneCall, updateAssignmentToInProgressInCache, removeAssignmentInCache, scrollToTop) {
  var index = resources.findIndex(function (resource) {
    return resource.refId === msg.itemRefId;
  }); // Learnosity Assignment

  if (msg.itemSource !== 'rce') {
    if (msg.msgType === 'userhasPressedStart') {
      updateAssignmentToInProgressInCache(msg.itemRefId);
    } else if (msg.msgType === 'userhasPressedSubmit') {
      iamDone(resources[index], apolloIAmDoneCall);
      scrollToTop();
    }
  } else {
    // RCE Assignment
    removeAssignmentInCache(msg.itemRefId);
    scrollToTop();
  }
}

function AssignmentsCenter(_ref) {
  var overdueAssignments = _ref.overdueAssignments,
      dueTodayAssignments = _ref.dueTodayAssignments,
      isLoading = _ref.isLoading,
      apolloIAmDoneCall = _ref.apolloIAmDoneCall,
      location = _ref.location,
      showMessage = _ref.showMessage,
      refetch = _ref.refetch;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useState = useState('viewAll'),
      _useState2 = _slicedToArray(_useState, 2),
      resourcesState = _useState2[0],
      setResourcesState = _useState2[1];

  var client = useApolloClient();

  var _useContext = useContext(APIErrorContext),
      handleLaunchError = _useContext.handleLaunchError;

  var _usePartnerModalConte = usePartnerModalContext(),
      setIsPartnerModalOpen = _usePartnerModalConte.setIsPartnerModalOpen,
      setPartnerName = _usePartnerModalConte.setPartnerName,
      setHandleCloseModal = _usePartnerModalConte.setHandleCloseModal;

  var _ref2 = useUserContext() || {},
      _ref2$rawToken = _ref2.rawToken;

  _ref2$rawToken = _ref2$rawToken === void 0 ? {} : _ref2$rawToken;
  var _ref2$rawToken$sif = _ref2$rawToken.sif;
  _ref2$rawToken$sif = _ref2$rawToken$sif === void 0 ? {} : _ref2$rawToken$sif;
  var _ref2$rawToken$sif$ac = _ref2$rawToken$sif.accessToken,
      sif = _ref2$rawToken$sif$ac === void 0 ? '' : _ref2$rawToken$sif$ac;
  var instructionalMessage = showMessage ? formatMessage({
    id: 'studentDashboard.assignmentsCenter.message'
  }) : null;
  var componentRef = useRef();

  var addButtonTranslations = function addButtonTranslations(resource) {
    var buttons = resource.buttons.map(function (item) {
      var btn = _objectSpread({}, item);

      var text = btn.text,
          arialabel = btn['aria-label'];
      btn.text = formatMessage({
        id: text
      });
      btn['aria-label'] = formatMessage({
        id: arialabel
      }, {
        assignmentTitle: resource.title
      });
      return btn;
    });
    return _objectSpread(_objectSpread({}, resource), {}, {
      buttons: buttons
    });
  };

  var scrollToTop = function scrollToTop() {
    componentRef.current.scrollTop = 0;
  };

  var resources = [];
  var total = 0;
  var showDropdown = false;
  var cardTitle = 'viewAll';

  if (hasAssignments(dueTodayAssignments, overdueAssignments)) {
    var dueToday = mapAssignments(dueTodayAssignments.items, 'dueToday');
    var overdue = mapAssignments(overdueAssignments.items, 'overdue');
    var resourceTypes = {
      dueToday: dueToday.map(function (resource) {
        return addButtonTranslations(resource);
      }),
      overdue: overdue.map(function (resource) {
        return addButtonTranslations(resource);
      }),

      get viewAll() {
        return [].concat(_toConsumableArray(resourceTypes.overdue), _toConsumableArray(resourceTypes.dueToday));
      }

    };
    cardTitle = setCardTitle(resourceTypes, resourcesState);
    showDropdown = shouldShowDropdown(resourceTypes);
    resources = resourceTypes[resourcesState];

    if (shouldResetDropdown(resources, resourcesState)) {
      setResourcesState('viewAll');
    }

    total = resources.length;
  }

  var onDropdownChange = function onDropdownChange(filterState) {
    setResourcesState(filterState.value);
    scrollToTop();
  };

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openDirectionsModal = _useState4[0],
      setOpenDirectionsModal = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openNotAvailableModal = _useState6[0],
      setOpenNotAvailableModal = _useState6[1];

  var handleCloseDirectionsModal = function handleCloseDirectionsModal() {
    setOpenDirectionsModal(false);
  };

  var handleCloseNotAvailableModal = function handleCloseNotAvailableModal() {
    setOpenNotAvailableModal(false);
  };

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedAssignment = _useState8[0],
      setSelectedAssignment = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      availableResponse = _useState10[0],
      setAvailableResponse = _useState10[1];

  var openSelectedDirectionsModal = function openSelectedDirectionsModal(assignment) {
    setSelectedAssignment(assignment);
    setOpenDirectionsModal(true);
  };

  var openSelectedNotAvailableModal = function openSelectedNotAvailableModal(assignment, checkAvailableResponse) {
    setSelectedAssignment(assignment);
    setAvailableResponse(checkAvailableResponse);
    setOpenNotAvailableModal(true);
  };

  var handleClosePartnerAssignmentModel = function handleClosePartnerAssignmentModel() {
    setIsPartnerModalOpen(false);
    refetch();
  };

  var openPartnerAssignmentModal = function openPartnerAssignmentModal(assignment) {
    setSelectedAssignment(assignment);
    setPartnerName(assignment.partnerIdentifier);
    setHandleCloseModal(handleClosePartnerAssignmentModel);
    setTimeout(setIsPartnerModalOpen, PARTNER_MODAL_TIMEOUT, true);
  };

  var updateAssignmentToInProgressInCache = function updateAssignmentToInProgressInCache(id) {
    return updateCache(client, id, updateAssignmentStatusToInProgress);
  };

  var removeAssignmentInCache = function removeAssignmentInCache(id) {
    updateCache(client, id, removeAssignmentFromList);
  };

  function btnCallback(_x) {
    return _btnCallback.apply(this, arguments);
  } // Updates the UI live as students start and submit Learnosity assignments.


  function _btnCallback() {
    _btnCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(event) {
      var buttonType, assignment, _fetchAssignmentCheck, fetchCheckAvailable, isAvailableResponse;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              buttonType = event.buttonType, assignment = event.assignment;

              if (!(buttonType === 'iamdone')) {
                _context.next = 9;
                break;
              }

              _fetchAssignmentCheck = fetchAssignmentCheckAvailableApi(), fetchCheckAvailable = _fetchAssignmentCheck.fetchCheckAvailable;
              _context.next = 5;
              return fetchCheckAvailable(assignment.refId, sif);

            case 5:
              isAvailableResponse = _context.sent;

              if (isAvailableResponse.available !== true) {
                openSelectedNotAvailableModal(assignment, isAvailableResponse);
              } else {
                iamDone(assignment, apolloIAmDoneCall);
                scrollToTop();
              }

              _context.next = 10;
              break;

            case 9:
              processAssignmentLaunch(sif, assignment, updateAssignmentToInProgressInCache, openSelectedDirectionsModal, openSelectedNotAvailableModal, openPartnerAssignmentModal, handleLaunchError);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _btnCallback.apply(this, arguments);
  }

  useEffect(function () {
    function updateAssignmentUI(event) {
      var msg = attemptToParseJson(event.data);
      processAssignmentFlow(msg, resources, apolloIAmDoneCall, updateAssignmentToInProgressInCache, removeAssignmentInCache, scrollToTop);
    }

    window.addEventListener(events.MESSAGE, updateAssignmentUI, false);
    return function () {
      window.removeEventListener(events.MESSAGE, updateAssignmentUI);
    };
  }, [resources]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, openNotAvailableModal && /*#__PURE__*/React.createElement(AssignmentNotAvailableModal, {
    open: openNotAvailableModal,
    handleClose: handleCloseNotAvailableModal,
    assignment: selectedAssignment,
    availableResponse: availableResponse,
    removeAssignmentInCache: removeAssignmentInCache
  }), openDirectionsModal && /*#__PURE__*/React.createElement(AssignmentDirectionsModal, {
    open: openDirectionsModal,
    handleClose: handleCloseDirectionsModal,
    sif: sif,
    assignment: selectedAssignment,
    writeCache: updateAssignmentToInProgressInCache,
    openPartnerAssignmentModal: openPartnerAssignmentModal
  }), /*#__PURE__*/React.createElement(ResourceCard, {
    title: formatMessage({
      id: "studentDashboard.assignmentsCenter.".concat(cardTitle)
    }, {
      total: total
    }),
    resources: resources,
    isLoading: isLoading,
    showDropdown: showDropdown && !isLoading,
    onDropdownChange: onDropdownChange,
    btnCallback: btnCallback,
    setRef: componentRef,
    linkCallback: location,
    message: instructionalMessage,
    removeAriaLabel: true
  }));
}

AssignmentsCenter.propTypes = {
  overdueAssignments: PropTypes.shape({
    items: PropTypes.array,
    total: PropTypes.number
  }),
  dueTodayAssignments: PropTypes.shape({
    items: PropTypes.array,
    total: PropTypes.number
  }),
  isLoading: PropTypes.bool,
  apolloIAmDoneCall: PropTypes.func,
  location: PropTypes.func.isRequired,
  showMessage: PropTypes.bool,
  refetch: PropTypes.func.isRequired
};
AssignmentsCenter.defaultProps = {
  overdueAssignments: {
    items: [],
    total: 0
  },
  dueTodayAssignments: {
    items: [],
    total: 0
  },
  showMessage: false
};
export default AssignmentsCenter;