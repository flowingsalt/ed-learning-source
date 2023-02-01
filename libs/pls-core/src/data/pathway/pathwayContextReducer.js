import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
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

import actions from './pathwayContextReducerActions';
import { mapPathway } from './mapper';

function bindState(state) {
  var _state$rawData = state.rawData,
      _state$rawData$pathwa = _state$rawData.pathways,
      pathways = _state$rawData$pathwa === void 0 ? [] : _state$rawData$pathwa,
      _state$rawData$eventI = _state$rawData.eventInstances,
      eventInstances = _state$rawData$eventI === void 0 ? [] : _state$rawData$eventI,
      _state$rawData$partic = _state$rawData.participations,
      participations = _state$rawData$partic === void 0 ? [] : _state$rawData$partic,
      _state$rawData$author = _state$rawData.authors,
      authors = _state$rawData$author === void 0 ? [] : _state$rawData$author;
  return _objectSpread(_objectSpread({}, state), {}, {
    pathways: pathways.map(function (pathway) {
      return mapPathway(pathway, eventInstances, participations, authors);
    })
  });
}

function PathwayContextReducer(state, action) {
  var _state$rawData2;

  switch (action.type) {
    case actions.LOAD_AUTHORS:
      return bindState(_objectSpread(_objectSpread({}, state), {}, {
        rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
          authors: action.payload
        })
      }));

    case actions.LOAD_PATHWAYS:
      return bindState(_objectSpread(_objectSpread({}, state), {}, {
        rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
          pathways: action.payload
        })
      }));

    case actions.LOAD_EVENT_INSTANCES:
      return bindState(_objectSpread(_objectSpread({}, state), {}, {
        rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
          eventInstances: _objectSpread(_objectSpread({}, ((_state$rawData2 = state.rawData) === null || _state$rawData2 === void 0 ? void 0 : _state$rawData2.eventInstances) || {}), {}, _defineProperty({}, action.payload.topicId, action.payload.eventInstances))
        })
      }));

    case actions.CANCEL_EVENT:
      {
        var _state$rawData$partic2;

        var _action$payload = action.payload,
            eventId = _action$payload.eventId,
            pathways = _action$payload.pathways;
        return bindState(_objectSpread(_objectSpread({}, state), {}, {
          rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
            participations: _toConsumableArray(((_state$rawData$partic2 = state.rawData.participations) === null || _state$rawData$partic2 === void 0 ? void 0 : _state$rawData$partic2.filter(function (participation) {
              var _participation$eventI;

              return ((_participation$eventI = participation.eventInstanceParticipation[0].eventInstance) === null || _participation$eventI === void 0 ? void 0 : _participation$eventI.id) !== eventId;
            })) || []),
            pathways: pathways
          })
        }));
      }

    case actions.REGISTER_TO_EVENT:
      {
        return bindState(_objectSpread(_objectSpread({}, state), {}, {
          rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
            participations: [].concat(_toConsumableArray(state.rawData.participations || []), [action.payload])
          })
        }));
      }

    case actions.CANCEL_AND_REGISTER_TO_EVENT:
      {
        var _state$rawData$partic3;

        var _action$payload2 = action.payload,
            registeredEvent = _action$payload2.registeredEvent,
            canceledEventId = _action$payload2.canceledEventId,
            _pathways = _action$payload2.pathways;
        return bindState(_objectSpread(_objectSpread({}, state), {}, {
          rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
            participations: [].concat(_toConsumableArray(((_state$rawData$partic3 = state.rawData.participations) === null || _state$rawData$partic3 === void 0 ? void 0 : _state$rawData$partic3.filter(function (participation) {
              var _participation$eventI2;

              return ((_participation$eventI2 = participation.eventInstanceParticipation[0].eventInstance) === null || _participation$eventI2 === void 0 ? void 0 : _participation$eventI2.id) !== canceledEventId;
            })) || []), [registeredEvent]),
            pathways: _pathways
          })
        }));
      }

    case actions.LOAD_EVENTS_USER_PARTICIPANT:
      return bindState(_objectSpread(_objectSpread({}, state), {}, {
        rawData: _objectSpread(_objectSpread({}, state.rawData), {}, {
          participations: action.payload
        })
      }));

    default:
      return state;
  }
}

export default PathwayContextReducer;