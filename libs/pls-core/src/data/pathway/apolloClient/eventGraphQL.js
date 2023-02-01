import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation plsCancelAndRegistration(\n    $cancelEventInstanceId: Int!\n    $registerEventInstanceId: Int!\n    $registerPathwayId: String!\n    $registerPathwayTitle: String!\n  ) {\n    plsCancelAndRegistration(\n      cancelEventInstanceId: $cancelEventInstanceId\n      registerEventInstanceId: $registerEventInstanceId\n      registerPathwayId: $registerPathwayId\n      registerPathwayTitle: $registerPathwayTitle\n    ) {\n      id\n      eventInstance {\n        id\n      }\n      hmhUserId\n      zoomRegistrantId\n      zoomRegistrantJoinLink\n      deletedOn\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation plsCancelRegistration($eventInstanceId: Int!) {\n    plsCancelRegistration(eventInstanceId: $eventInstanceId) {\n      id\n      eventInstance {\n        id\n      }\n      hmhUserId\n      zoomRegistrantId\n      zoomRegistrantJoinLink\n      deletedOn\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation plsRegistration(\n    $eventInstanceId: Int!\n    $pathwayId: String!\n    $pathwayTitle: String!\n  ) {\n    plsRegistration(\n      eventInstanceId: $eventInstanceId\n      pathwayId: $pathwayId\n      pathwayTitle: $pathwayTitle\n    ) {\n      id\n      eventInstance {\n        id\n      }\n      hmhUserId\n      zoomRegistrantId\n      zoomRegistrantJoinLink\n      deletedOn\n      icsUrl\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import getConfigForCurrentEnv from '@hmhco/amp-core-env';
import { gql } from '@apollo/client';
import getPlsApolloClient from '../../apolloClient/getPlsApolloClient';
export var GET_EVENTS = gql("\n  query plsGetEventsByEventId($eventId: String){ \n    plsGetEventsByEventId(eventId: $eventId) {\n      id\n      zoomMeetingId\n      eventId\n      serviceAppointmentId\n      zoomMeetingRegistrationLink\n      zoomMeetingJoinLink\n      startDateTime\n      duration\n      type\n      totalNumberSpots\n      availableSpots\n      recordingLink\n      eventInstancePresenter {\n          presenterId\n      }\n      eventInstanceParticipation {\n        id\n        eventInstance {\n          id\n        }\n        hmhUserId\n        zoomRegistrantId\n        zoomRegistrantJoinLink\n        deletedOn\n      }\n    }\n  }\n");
export var GET_EVENTS_WHERE_USER_IS_PARTICIPANT = gql("\n  query plsGetEventsWhereUserIsParticipantBy($eventIds: [String]){\n    plsGetEventsWhereUserIsParticipantBy(eventIds: $eventIds) {\n      id\n      zoomMeetingId\n      eventId\n      serviceAppointmentId\n      zoomMeetingRegistrationLink\n      zoomMeetingJoinLink\n      startDateTime\n      duration\n      type\n      totalNumberSpots\n      recordingLink\n      eventInstancePresenter { \n        presenterId \n      }\n      eventInstanceParticipation {\n        id\n        eventInstance { \n          id \n        }\n        hmhUserId\n        zoomRegistrantId\n        zoomRegistrantJoinLink\n        deletedOn\n        icsUrl\n      }\n    }\n  }\n");
export var EVENT_REGISTRATION = gql(_templateObject());
export var CANCEL_REGISTRATION = gql(_templateObject2());
export var CANCEL_AND_REGISTER = gql(_templateObject3());
export function fetchEvents(_x) {
  return _fetchEvents.apply(this, arguments);
}

function _fetchEvents() {
  _fetchEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(eventId) {
    var _getConfigForCurrentE, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getConfigForCurrentE = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context.abrupt("return", client.query({
              query: GET_EVENTS,
              variables: {
                eventId: eventId
              }
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchEvents.apply(this, arguments);
}

export function fetchEventsUserParticipant(_x2, _x3) {
  return _fetchEventsUserParticipant.apply(this, arguments);
}

function _fetchEventsUserParticipant() {
  _fetchEventsUserParticipant = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(eventIds, errorHandler) {
    var _getConfigForCurrentE2, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _getConfigForCurrentE2 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE2.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context2.abrupt("return", client.query({
              query: GET_EVENTS_WHERE_USER_IS_PARTICIPANT,
              variables: {
                eventIds: eventIds
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchEventsUserParticipant.apply(this, arguments);
}

export function registerForEvent(_x4, _x5, _x6, _x7) {
  return _registerForEvent.apply(this, arguments);
}

function _registerForEvent() {
  _registerForEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(eventInstanceId, pathwayId, pathwayTitle, errorHandler) {
    var _getConfigForCurrentE3, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _getConfigForCurrentE3 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE3.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context3.abrupt("return", client.mutate({
              mutation: EVENT_REGISTRATION,
              variables: {
                eventInstanceId: eventInstanceId,
                pathwayId: pathwayId,
                pathwayTitle: pathwayTitle
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _registerForEvent.apply(this, arguments);
}

export function cancelAndRegisterForEvent(_x8, _x9, _x10, _x11, _x12) {
  return _cancelAndRegisterForEvent.apply(this, arguments);
}

function _cancelAndRegisterForEvent() {
  _cancelAndRegisterForEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(cancelEventInstanceId, registerEventInstanceId, registerPathwayId, registerPathwayTitle, errorHandler) {
    var _getConfigForCurrentE4, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getConfigForCurrentE4 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE4.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context4.abrupt("return", client.mutate({
              mutation: CANCEL_AND_REGISTER,
              variables: {
                cancelEventInstanceId: cancelEventInstanceId,
                registerEventInstanceId: registerEventInstanceId,
                registerPathwayId: registerPathwayId,
                registerPathwayTitle: registerPathwayTitle
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _cancelAndRegisterForEvent.apply(this, arguments);
}

export function cancelEvent(_x13, _x14) {
  return _cancelEvent.apply(this, arguments);
}

function _cancelEvent() {
  _cancelEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(eventInstanceId, errorHandler) {
    var _getConfigForCurrentE5, edsApiGateway, client;

    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _getConfigForCurrentE5 = getConfigForCurrentEnv(), edsApiGateway = _getConfigForCurrentE5.edsApiGateway;
            client = getPlsApolloClient(edsApiGateway);
            return _context5.abrupt("return", client.mutate({
              mutation: CANCEL_REGISTRATION,
              variables: {
                eventInstanceId: eventInstanceId
              }
            }, errorHandler));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _cancelEvent.apply(this, arguments);
}