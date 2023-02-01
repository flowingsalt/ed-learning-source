import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
/* 
 This function updates the status of an assignment to 'IN_PROGRESS'
 Learnosity & Custom assessments handle this when they are begun,
 but other types of assignment do not, so when launching those types, 
 call this function if you want the back end to be aware of the student
 having started work on the assignment.
 
 This should probably reside in a shared API in the Lift repo, but we 
 don't have an assignments library yet, so for now it lives here.
*/

var assignmentStartUrl = function assignmentStartUrl(activityId) {
  return "/api/assignment/v2/activities/".concat(activityId, "/start");
}; // This takes the activity id of the assignment


var handleManualStart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id, sif) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetch(assignmentStartUrl(id), {
              method: 'put',
              headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: sif
              })
            }).then(function (response) {
              return response.json();
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleManualStart(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

export default handleManualStart;