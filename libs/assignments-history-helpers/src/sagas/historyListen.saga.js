import _regeneratorRuntime from "@babel/runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(fireAndResetHistoryListen);
/* eslint-disable import/prefer-default-export */


import { put, select } from 'redux-saga/effects';
import { getHistoryListenState } from '../selectors/historyListen.selectors';
import { resetState } from '../actions';
export function fireAndResetHistoryListen() {
  var historyListenState;
  return _regeneratorRuntime.wrap(function fireAndResetHistoryListen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return select(getHistoryListenState);

        case 2:
          historyListenState = _context.sent;

          if (historyListenState.historyUnlisten) {
            historyListenState.historyUnlisten();
          }

          _context.next = 6;
          return put(resetState());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}