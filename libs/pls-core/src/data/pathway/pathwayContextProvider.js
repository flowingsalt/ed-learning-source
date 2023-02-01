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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

import React from 'react';
import PropTypes from 'prop-types';
import authorsFetcher from '@hmhco/pls-core/src/data/authors/authorsFetcher';
import { fetchEventsUserParticipant as eventUserParticipantFetcher, registerForEvent as register, cancelEvent as cancelRegistration, fetchEvents as eventFetcher, cancelAndRegisterForEvent as cancelAndRegister } from '@hmhco/pls-core/src/data/pathway/apolloClient/eventGraphQL';
import { plsUpdateUserTopicProgress } from '../userProfile/apolloClient/userProfileClient';
import { fetchPathways as pathwaysFetcher } from './apolloClient/pathwayGraphQL';
import PathwayContextReducer from './pathwayContextReducer';
import actions from './pathwayContextReducerActions';
var PathwayContext = /*#__PURE__*/React.createContext();

var PathwayContextProvider = function PathwayContextProvider(_ref) {
  var children = _ref.children;

  var _React$useReducer = React.useReducer(PathwayContextReducer, {
    pathways: [],
    authors: []
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return /*#__PURE__*/React.createElement(PathwayContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

PathwayContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
export default PathwayContextProvider;
export var usePathwayContext = function usePathwayContext() {
  var pathwayContext = React.useContext(PathwayContext);

  var fetchAuthors = function fetchAuthors(errorHandler) {
    authorsFetcher([], errorHandler).then(function (payload) {
      pathwayContext.dispatch({
        type: actions.LOAD_AUTHORS,
        payload: payload
      });
    });
  };

  var fetchPathways = function fetchPathways(errorHandler) {
    return pathwaysFetcher(errorHandler).then(function (payload) {
      var _payload$data;

      pathwayContext.dispatch({
        type: actions.LOAD_PATHWAYS,
        payload: (_payload$data = payload.data) === null || _payload$data === void 0 ? void 0 : _payload$data.plsGetUserPathways.filter(function (each) {
          return each.archived !== true;
        })
      });
    });
  };

  var updateUserProgress = function updateUserProgress(input, errorHandler) {
    return plsUpdateUserTopicProgress(input, errorHandler).then(function (response) {
      if (response.data) {
        var _response$data$plsUpd = response.data.plsUpdateUserTopicProgress,
            startedOn = _response$data$plsUpd.startedOn,
            completedOn = _response$data$plsUpd.completedOn;
        var topics = pathwayContext.state.pathways.map(function (p) {
          return p.topics.find(function (t) {
            return t.topicId === input.topicId;
          });
        }).filter(function (topic) {
          return Boolean(topic);
        }); // eslint-disable-next-line no-restricted-syntax

        var _iterator = _createForOfIteratorHelper(topics),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var element = _step.value;
            element.startedOn = startedOn;
            element.completedOn = completedOn;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        pathwayContext.dispatch({
          type: actions.LOAD_PATHWAYS,
          payload: pathwayContext.state.pathways
        });
      }
    });
  };

  var fetchEvents = function fetchEvents(topicId, errorHandler) {
    return eventFetcher(topicId, errorHandler).then(function (payload) {
      var _payload$data2;

      pathwayContext.dispatch({
        type: actions.LOAD_EVENT_INSTANCES,
        payload: {
          topicId: topicId,
          eventInstances: ((_payload$data2 = payload.data) === null || _payload$data2 === void 0 ? void 0 : _payload$data2.plsGetEventsByEventId) || []
        }
      });
    });
  };

  var cancelEvent = function cancelEvent(eventInstance, errorHandler) {
    return cancelRegistration(eventInstance.id, errorHandler).then(function (response) {
      if (response.data) {
        var deletedOn = response.data.plsCancelRegistration.deletedOn;
        var pathways = pathwayContext.state.pathways.map(function (pathway) {
          var topics = pathway.topics.map(function (topic) {
            if (topic.topicId === eventInstance.eventId) {
              return _objectSpread(_objectSpread({}, topic), {}, {
                deletedOn: deletedOn
              });
            }

            return topic;
          });
          return _objectSpread(_objectSpread({}, pathway), {}, {
            topics: topics
          });
        });
        pathwayContext.dispatch({
          type: actions.CANCEL_EVENT,
          payload: {
            eventId: eventInstance.id,
            pathways: pathways
          }
        });
      }
    });
  };

  var registerForEvent = function registerForEvent(eventInstance, errorHandler) {
    var pathway = pathwayContext.state.pathways.find(function (p) {
      return p.topics.find(function (topic) {
        return topic.topicId === eventInstance.eventId;
      });
    });
    return register(eventInstance.id, pathway.pathwayId, pathway.title, errorHandler).then(function (response) {
      if (response.data) {
        pathwayContext.dispatch({
          type: actions.REGISTER_TO_EVENT,
          payload: {
            eventId: eventInstance.eventId,
            zoomMeetingId: eventInstance.zoomMeetingId,
            eventInstanceParticipation: [response.data.plsRegistration]
          }
        });
      }
    });
  };

  var cancelAndRegisterForEvent = function cancelAndRegisterForEvent(cancelEventInstance, registerEventInstance, errorHandler) {
    var pathway = pathwayContext.state.pathways.find(function (p) {
      return p.topics.find(function (topic) {
        return topic.topicId === registerEventInstance.eventId;
      });
    });
    return cancelAndRegister(cancelEventInstance.id, registerEventInstance.id, pathway.pathwayId, pathway.title, errorHandler).then(function (response) {
      if (response.data) {
        var canceledEvent = response.data.plsCancelAndRegistration.find(function (event) {
          return event.deletedOn;
        });
        var registeredEvent = response.data.plsCancelAndRegistration.find(function (event) {
          return !event.deletedOn;
        });
        var deletedOn = canceledEvent.deletedOn;
        var pathways = pathwayContext.state.pathways.map(function (p) {
          var topics = p.topics.map(function (topic) {
            if (topic.topicId === cancelEventInstance.eventId) {
              return _objectSpread(_objectSpread({}, topic), {}, {
                deletedOn: deletedOn
              });
            }

            return topic;
          });
          return _objectSpread(_objectSpread({}, p), {}, {
            topics: topics
          });
        });
        pathwayContext.dispatch({
          type: actions.CANCEL_AND_REGISTER_TO_EVENT,
          payload: {
            registeredEvent: {
              eventId: registerEventInstance.eventId,
              zoomMeetingId: registerEventInstance.zoomMeetingId,
              eventInstanceParticipation: [registeredEvent]
            },
            canceledEventId: cancelEventInstance.id,
            pathways: pathways
          }
        });
      }
    });
  };

  var fetchEventsUserParticipant = function fetchEventsUserParticipant(eventIds, errorHandler) {
    return eventUserParticipantFetcher(eventIds, errorHandler).then(function (payload) {
      var _payload$data3;

      pathwayContext.dispatch({
        type: actions.LOAD_EVENTS_USER_PARTICIPANT,
        payload: ((_payload$data3 = payload.data) === null || _payload$data3 === void 0 ? void 0 : _payload$data3.plsGetEventsWhereUserIsParticipantBy) || []
      });
    });
  };

  return {
    pathwayContext: pathwayContext,
    fetchAuthors: fetchAuthors,
    fetchPathways: fetchPathways,
    fetchEvents: fetchEvents,
    cancelEvent: cancelEvent,
    registerForEvent: registerForEvent,
    cancelAndRegisterForEvent: cancelAndRegisterForEvent,
    updateUserProgress: updateUserProgress,
    fetchEventsUserParticipant: fetchEventsUserParticipant
  };
};