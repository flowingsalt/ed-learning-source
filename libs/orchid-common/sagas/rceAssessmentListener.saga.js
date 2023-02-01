import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(listenForChangesFromRce),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(closeChannelWhenAssignmentIsSubmitted),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(rceLiveMessageListener);

import assignConfig from '../utils/assignConfig';
import { submitAssignmentFromPostMessage } from '../actions';
import { attemptToParseJson } from '../utils/jsonUtil.util';
import { call, put, take, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ASSIGNMENT_ACTIONS } from '../actions/types';
export function listenForChangesFromRce(assignment) {
  var channel, event;
  return _regeneratorRuntime.wrap(function listenForChangesFromRce$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return call(createEventChannel);

        case 2:
          channel = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return fork(closeChannelWhenAssignmentIsSubmitted, assignment, channel);

        case 6:
          if (!true) {
            _context.next = 14;
            break;
          }

          _context.next = 9;
          return take(channel);

        case 9:
          event = _context.sent;
          _context.next = 12;
          return call(rceLiveMessageListener, event, assignment);

        case 12:
          _context.next = 6;
          break;

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          channel.close();

        case 19:
          _context.prev = 19;
          channel.close();
          return _context.finish(19);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 16, 19, 22]]);
}
export var assignmentAction = function assignmentAction(assignment, action) {
  return (action === null || action === void 0 ? void 0 : action.type) === ASSIGNMENT_ACTIONS.SUBMIT_ASSIGNMENT_FROM_POSTMESSAGE && (action === null || action === void 0 ? void 0 : action.assignment) === assignment;
};
export function closeChannelWhenAssignmentIsSubmitted(assignment, channel) {
  return _regeneratorRuntime.wrap(function closeChannelWhenAssignmentIsSubmitted$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return take(function (action) {
            return assignmentAction(assignment, action);
          });

        case 2:
          channel.close();

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
export function createEventChannel() {
  return eventChannel(function (emitter) {
    var eventEmitter = function eventEmitter(event) {
      emitter(event);
    };

    window.addEventListener('message', eventEmitter, false);
    return function () {
      window.removeEventListener('message', eventEmitter);
    };
  });
}
export function rceLiveMessageListener(event, assignment) {
  var activityRefId, msg;
  return _regeneratorRuntime.wrap(function rceLiveMessageListener$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          activityRefId = assignment.getActivityId();

          if (!(event.origin === window.location.origin)) {
            _context3.next = 6;
            break;
          }

          msg = attemptToParseJson(event.data);

          if (!(msg.msgType === assignConfig.msgType.userhasPressedSubmit && msg.itemRefId === activityRefId)) {
            _context3.next = 6;
            break;
          }

          _context3.next = 6;
          return put(submitAssignmentFromPostMessage(assignment));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}