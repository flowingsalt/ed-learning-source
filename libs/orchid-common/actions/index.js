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

import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as Types from './types';
import { NotificationSuccessLge, NotificationErrorLge } from '../../orchid-common/svg/lge';
import { assignmentStatuses } from '@hmhco/business-logic-models/src/models/Assignment/AssignmentFieldTypes';
import CustomToastrButton from '../../orchid-common/components/CustomToastrButton';
import { getRandomId } from '@hmhco/correlation-id-helper/utils/guidUtil';
export var makeAction = function makeAction(type) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({
    type: type
  }, payload);
};
/**
 * Creates a bundle of action creators that mirror the three action types in the supplied requestType object
 * @param {{ REQUEST: string, SUCCESS: string, FAILURE: string }} requestType - An object with three keys
 */

export var makeRequestBundle = function makeRequestBundle(_ref) {
  var requestType = _ref.requestType;
  return {
    request: function request(fetchParams) {
      return makeAction(requestType.REQUEST, {
        fetchParams: fetchParams
      });
    },
    success: function success(_ref2) {
      var fetchParams = _ref2.fetchParams,
          response = _ref2.response;
      return makeAction(requestType.SUCCESS, {
        fetchParams: fetchParams,
        response: response
      });
    },
    failure: function failure(error) {
      return makeAction(requestType.FAILURE, {
        error: error
      });
    }
  };
};
export var loadStates = function loadStates() {
  return makeAction(Types.LOAD_STATES);
};
export var loadEnv = function loadEnv() {
  return makeAction(Types.LOAD_ENV);
};
export var loadEnvironment = function loadEnvironment(env) {
  return {
    type: Types.LOAD_ENVIRONMENT,
    payload: {
      env: env
    }
  };
};
export var authenticateUser = function authenticateUser() {
  return makeAction(Types.AUTHENTICATE_USER);
};
export var programSelected = function programSelected(programId) {
  return makeAction(Types.PROGRAM_SELECTED, {
    programId: programId
  });
};
export var currentStateChanged = function currentStateChanged(selectedState) {
  return makeAction(Types.CURRENT_STATE_CHANGED, {
    selectedState: selectedState
  });
};
export var setEnv = function setEnv(env) {
  return makeAction(Types.SET_ENV_SUCCESS, {
    env: env
  });
};
export var setEnvFailed = function setEnvFailed(error) {
  return makeAction(Types.SET_ENV_FAILURE, {
    error: error
  });
};
export var apiSuccess = function apiSuccess(requestType, payload) {
  return makeAction(Types.API_SUCCESS, _objectSpread(_objectSpread({}, payload), {}, {
    requestType: requestType
  }));
};
export var apiFailure = function apiFailure(requestType, payload) {
  return makeAction(Types.API_FAILURE, _objectSpread(_objectSpread({}, payload), {}, {
    requestType: requestType
  }));
};
export var apiRequest = function apiRequest(requestType, payload) {
  return makeAction(Types.API_REQUEST, _objectSpread(_objectSpread({}, payload), {}, {
    requestType: requestType
  }));
};
export var loadManifest = function loadManifest() {
  return makeAction(Types.LOAD_MANIFEST);
};
export var loadManifestItems = function loadManifestItems(manifestId) {
  return makeAction(Types.LOAD_MANIFEST_ITEMS, {
    fetchParams: {
      manifestId: manifestId
    }
  });
};
export var loadManifestResources = function loadManifestResources(query) {
  return makeAction(Types.LOAD_MANIFEST_RESOURCES, {
    fetchParams: {
      query: query
    }
  });
};
export var selectCarouselItem = function selectCarouselItem(selectedCarouselItem) {
  return makeAction(Types.SELECT_CAROUSEL_ITEM, {
    selectedCarouselItem: selectedCarouselItem
  });
};
export var carouselItemSelected = function carouselItemSelected(item) {
  return makeAction(Types.CAROUSEL_ITEM_SELECTED, {
    levelOne: item
  });
};
export var fetchContentLaunchDetails = function fetchContentLaunchDetails(resourceId, target) {
  return makeAction(Types.CONTENT_LAUNCH_PREVIEW, {
    fetchParams: {
      resourceId: resourceId
    },
    target: target
  });
};
export var fetchCustomContentLaunchDetails = function fetchCustomContentLaunchDetails(assessment, target) {
  return {
    type: Types.CUSTOM_CONTENT_LAUNCH_PREVIEW,
    fetchParams: {
      assessment: assessment
    },
    target: target
  };
};
export var redirectUserWithRouter = function redirectUserWithRouter(pathname) {
  return makeAction(Types.REDIRECT_USER_WITH_ROUTER, {
    pathname: pathname
  });
}; // deprecated: please use toastrSucessAction or toastrErrorAction

export var toastrAction = function toastrAction(config) {
  return {
    type: Types.SHOW_TOASTR_NOTIFICATION,
    payload: {
      id: config.id ? config.id : undefined,
      message: config.message,
      options: config.options ? config.options : {
        removeOnHover: false,
        showCloseButton: true
      },
      position: config.position ? config.position : 'top-right',
      title: config.title,
      type: config.type ? config.type : 'info'
    }
  };
};
export var toastrSuccessAction = function toastrSuccessAction(messageId, onHideCompleteCallBack, optionalValues, toastrId) {
  var action = {
    type: Types.SHOW_TOASTR_NOTIFICATION,
    payload: {
      id: toastrId || getRandomId(),
      // react-redux-toastr will keep track of the id internally for closing via CustomToastrButton
      message: messageId ? /*#__PURE__*/React.createElement(FormattedMessage, {
        id: messageId,
        values: optionalValues
      }) : null,
      options: {
        timeOut: 5000,
        icon: /*#__PURE__*/React.createElement(NotificationSuccessLge, null),
        removeOnHover: false,
        showCloseButton: false,
        component: /*#__PURE__*/React.createElement(CustomToastrButton, {
          toastMsgId: "toast.closeSuccessToast"
        })
      },
      position: 'top-right',
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "notification.success"
      }),
      type: 'success'
    }
  };

  if (onHideCompleteCallBack) {
    action.payload.options.onHideComplete = onHideCompleteCallBack;
  }

  return action;
};
export var toastrErrorAction = function toastrErrorAction(messageId, onHideCompleteCallback, optionalValues) {
  var action = {
    type: Types.SHOW_TOASTR_NOTIFICATION,
    payload: {
      message: messageId ? /*#__PURE__*/React.createElement(FormattedMessage, {
        id: messageId,
        values: optionalValues
      }) : null,
      options: {
        timeOut: 0,
        icon: /*#__PURE__*/React.createElement(NotificationErrorLge, null),
        removeOnHover: false,
        showCloseButton: false,
        component: /*#__PURE__*/React.createElement(CustomToastrButton, {
          toastMsgId: "toast.closeErrorToast"
        })
      },
      position: 'top-right',
      title: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "notification.error"
      }),
      type: 'error'
    }
  };

  if (onHideCompleteCallback) {
    action.payload.options.onHideComplete = onHideCompleteCallback;
  }

  return action;
};
export var removeToastrAction = function removeToastrAction(id) {
  return {
    type: Types.REMOVE_TOASTR_NOTIFICATION,
    payload: id
  };
};
export var loadJwtLaunchUserToken = function loadJwtLaunchUserToken(sif, roles) {
  return {
    type: Types.JWT_LAUNCH_TOKEN_LOADED,
    sif: sif,
    roles: roles
  };
};
export var loadUserToken = function loadUserToken(sif, roles) {
  return {
    type: Types.TOKEN_LOADED,
    sif: sif,
    roles: roles
  };
};
export var loadUserEntitlements = function loadUserEntitlements(entitlements) {
  return {
    type: Types.ENTITLEMENTS_LOADED,
    entitlements: entitlements
  };
};
export var dispatchTrackEvent = function dispatchTrackEvent(eventName, autogeneratedFlag, data) {
  return {
    type: Types.TRACK_EVENT_ACTIONS.DISPATCH_EVENT,
    value: eventName,
    autogeneratedFlag: autogeneratedFlag,
    data: data
  };
};
export var loadTrackEventFunction = function loadTrackEventFunction(eventFunction) {
  return {
    type: Types.TRACK_EVENT_ACTIONS.LOAD_EVENT_FUNCTION,
    value: eventFunction
  };
};
export var loadDmpsFunctions = function loadDmpsFunctions(functions) {
  return {
    type: Types.LOAD_DMPS_FUNCTIONS,
    value: functions
  };
};
export var loadAssignment = function loadAssignment(assignment) {
  return {
    type: Types.ASSIGNMENT_ACTIONS.LOAD_ASSIGNMENT,
    value: assignment
  };
};
export var fetchAvailableSchools = function fetchAvailableSchools() {
  return {
    type: Types.SCHOOL_ACTIONS.FETCH_AVAILABLE_SCHOOLS
  };
};
export var launchWritable = function launchWritable(params, customParams) {
  return {
    type: Types.ASSIGNMENT_ACTIONS.LAUNCH_WRITABLE,
    value: {
      params: params,
      customParams: customParams
    }
  };
};
export var launchWritableTeacher = function launchWritableTeacher(_ref3) {
  var sectionId = _ref3.sectionId,
      customParams = _ref3.customParams;
  return {
    type: Types.ASSIGNMENT_ACTIONS.LAUNCH_WRITABLE,
    value: {
      params: {
        integration: 'writable',
        integrationpoint: 'dashboard',
        context: 'coursesection',
        contextid: sectionId
      },
      customParams: customParams
    }
  };
};
export var launchWritableStudent = function launchWritableStudent() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      customParams = _ref4.customParams;

  return {
    type: Types.ASSIGNMENT_ACTIONS.LAUNCH_WRITABLE,
    value: {
      params: {
        integration: 'writable',
        integrationpoint: 'student-dashboard',
        context: 'coursesection',
        contextid: 'student'
      },
      customParams: customParams
    }
  };
};
export var launchIosApp = function launchIosApp() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    type: Types.LAUNCH_IOS_APP,
    path: path
  };
};
export var startAssignmentFromLearnosity = function startAssignmentFromLearnosity(assignment) {
  return {
    type: Types.ASSIGNMENT_ACTIONS.START_ASSIGNMENT_FROM_LEARNOSITY,
    assignment: assignment,
    status: assignmentStatuses.IN_PROGRESS
  };
};
export var submitAssignmentFromPostMessage = function submitAssignmentFromPostMessage(assignment) {
  return {
    type: Types.ASSIGNMENT_ACTIONS.SUBMIT_ASSIGNMENT_FROM_POSTMESSAGE,
    assignment: assignment,
    status: assignmentStatuses.READY_FOR_SCORING
  };
};
export var reportNetworkFail = function reportNetworkFail() {
  return {
    type: Types.NETWORK_ACTIONS.NETWORK_DISCONNECT_NOTIFICATION
  };
};
export var reportLaunchFail = function reportLaunchFail() {
  return {
    type: Types.NETWORK_ACTIONS.NETWORK_LAUNCH_ERROR
  };
};
export var dismissNetworkError = function dismissNetworkError() {
  return {
    type: Types.NETWORK_ACTIONS.SET_STATUS_AND_DISMISS_NETWORK_ERROR
  };
};
export * from './types';