import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import { forEach, noop } from 'lodash';
import { getPreviewUrl, getLiveUrl } from '@hmhco/url-builders/src/edAssignmentApp';
import { clearUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import trackEvents from 'orchid-common/conf/trackEvents';
import { getReportsUrl } from '@hmhco/url-builders/src/edReports';
import logErrorWithContext from '@hmhco/client-monitoring/src/context/logErrorWithContext';
export function storeAuthInSessionStorage(authInfo, env) {
  window.sessionStorage.setItem("com.hmhco.security.openID.authInfo.".concat(env), JSON.stringify(authInfo)); // next call to getUserCtx will get updated data

  clearUserCtx();
}
export function launchPreviewAssessment(_x, _x2) {
  return _launchPreviewAssessment.apply(this, arguments);
}

function _launchPreviewAssessment() {
  _launchPreviewAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(assessment, target) {
    var previewUrl;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            previewUrl = getPreviewUrl();
            window.sessionStorage.removeItem('learnosityAssessment');
            window.sessionStorage.setItem('learnosityAssessment', JSON.stringify(assessment));

            if (target === 'self') {
              window.open(previewUrl, '_self');
            } else {
              window.open(previewUrl);
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _launchPreviewAssessment.apply(this, arguments);
}

export function launchLiveCustomAssessment(_x3, _x4) {
  return _launchLiveCustomAssessment.apply(this, arguments);
}

function _launchLiveCustomAssessment() {
  _launchLiveCustomAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(assignment, target) {
    var launchWindow, customAssessment, liveUrl;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            customAssessment = {
              refId: assignment.refId,
              isCustomAssessment: true,
              title: assignment.title,
              studentPersonalRefId: '',
              status: assignment.status,
              teacherAssignmentRefId: assignment.teacherAssignmentRefId,
              activities: [{
                refId: assignment.getActivityId(),
                sourceObject: {
                  value: assignment.getAssessmentId(),
                  customLessonId: assignment.getCustomLessonId()
                }
              }]
            };
            window.sessionStorage.setItem('learnosityAssessment', JSON.stringify(customAssessment)); // IE edge does not support sharing session storage across tabs - copy session storage to localstorage, when the app loads in a new window this will be copied back to session storage and removed (see app.js)

            window.localStorage.setItem('sessionStorage', JSON.stringify(window.sessionStorage));
            liveUrl = getLiveUrl();

            if (target !== 'self') {
              launchWindow = window.open(liveUrl, target, '');
            } else {
              launchWindow = window;
              launchWindow.location.href = liveUrl;
            }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _launchLiveCustomAssessment.apply(this, arguments);
}

export function launchLiveLearnosityAssessment(_x5, _x6, _x7) {
  return _launchLiveLearnosityAssessment.apply(this, arguments);
}

function _launchLiveLearnosityAssessment() {
  _launchLiveLearnosityAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(assignment, rawTarget, trackEventCallback) {
    var _rawTarget$value;

    var target, canLaunchLiveAssessment, liveUrl, launchWindow, _assignment$activitie, resourceId;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // this fixes a bug where new Learnosity assignments were not opening in new tabs
            target = (rawTarget === null || rawTarget === void 0 ? void 0 : (_rawTarget$value = rawTarget.value) === null || _rawTarget$value === void 0 ? void 0 : _rawTarget$value.target) || rawTarget;
            canLaunchLiveAssessment = assignment.status === 'NOT_STARTED' || assignment.status === 'IN_PROGRESS';

            if (canLaunchLiveAssessment) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", {
              error: true
            });

          case 4:
            window.sessionStorage.setItem('learnosityAssessment', JSON.stringify({
              assignment: assignment
            }));
            liveUrl = getLiveUrl();

            if (target === 'self' || target === '_self') {
              launchWindow = window;
              launchWindow.location.href = liveUrl;
            } else {
              launchWindow = window.open(liveUrl, target, '');
            }

            if (!(trackEventCallback && target !== 'self' && (!launchWindow || launchWindow.closed))) {
              _context3.next = 11;
              break;
            }

            _assignment$activitie = _slicedToArray(assignment.activities, 1), resourceId = _assignment$activitie[0].sourceObject.attributes.refId;
            trackEventCallback(trackEvents.contentLaunch.blocked, false, {
              resourceId: resourceId,
              target: target
            });
            return _context3.abrupt("return", {
              error: true
            });

          case 11:
            return _context3.abrupt("return", {
              error: false
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _launchLiveLearnosityAssessment.apply(this, arguments);
}

export function launchPreviewLearnosityAssessment(_x8) {
  return _launchPreviewLearnosityAssessment.apply(this, arguments);
}

function _launchPreviewLearnosityAssessment() {
  _launchPreviewLearnosityAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(assessment) {
    var target,
        launchWindow,
        poolId,
        hmhId,
        resourceId,
        previewUrl,
        _args4 = arguments;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            target = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : '_blank';
            poolId = assessment.assessmentBankID, hmhId = assessment.assessmentID, resourceId = assessment.resourceId;
            window.sessionStorage.setItem('learnosityAssessment', JSON.stringify({
              poolId: poolId,
              hmhId: hmhId,
              resourceId: resourceId
            }));
            previewUrl = getPreviewUrl();

            if (target === 'self' || target === '_self') {
              launchWindow = window;
              launchWindow.location.href = previewUrl;
            } else {
              launchWindow = window.open(previewUrl, target, '');
            }

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _launchPreviewLearnosityAssessment.apply(this, arguments);
}

export function buildForm(launchParams, formAttributes) {
  var form = document.createElement('form');
  Object.keys(formAttributes).forEach(function (attributeName) {
    form.setAttribute(attributeName, formAttributes[attributeName]);
  });
  forEach(launchParams, function (value, key) {
    var hiddenField = document.createElement('input');
    hiddenField.setAttribute('name', key);
    hiddenField.setAttribute('value', value);
    form.appendChild(hiddenField);
  });
  return form;
}
export function postTheForm(_x9) {
  return _postTheForm.apply(this, arguments);
}
/**
 * intention is to use the html/text request for the LTI 1.3.0 endpoint
 * which will return a self-submitting form. We'd need to open that in a
 * new tab and all should work without requiring this method
 * Short on time so I didn't want to try that approach until MVP launched...
 */
// eslint-disable-next-line camelcase

function _postTheForm() {
  _postTheForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(response) {
    var target,
        formID,
        form,
        _args5 = arguments;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            target = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : '_blank';
            formID = _args5.length > 2 ? _args5[2] : undefined;
            form = buildForm(response.launchParameters, {
              method: response.httpMethod,
              action: response.launchUrl,
              name: 'ltiForm',
              id: formID || 'ltiForm',
              style: 'display:none',
              encType: response.encType,
              target: target
            });
            document.body.appendChild(form); // In Edge form.submit() fails if user clicks 'Stay' when closing the test tab

            _context5.prev = 4;
            _context5.next = 7;
            return form.submit();

          case 7:
            _context5.next = 11;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](4);

          case 11:
            _context5.next = 13;
            return form.remove();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 9]]);
  }));
  return _postTheForm.apply(this, arguments);
}

export function postTheForm_1_3_0(_x10, _x11) {
  return _postTheForm_1_3_.apply(this, arguments);
}

function _postTheForm_1_3_() {
  _postTheForm_1_3_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(launchParams, _ref) {
    var _ref$target, target, _ref$httpMethod, httpMethod, _ref$encType, encType, targetURL, form;

    return _regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref$target = _ref.target, target = _ref$target === void 0 ? '_blank' : _ref$target, _ref$httpMethod = _ref.httpMethod, httpMethod = _ref$httpMethod === void 0 ? 'post' : _ref$httpMethod, _ref$encType = _ref.encType, encType = _ref$encType === void 0 ? 'multipart/form-data' : _ref$encType, targetURL = _ref.targetURL;
            form = buildForm(launchParams, {
              method: httpMethod,
              action: targetURL,
              name: 'ltiForm_1_3_0',
              id: 'ltiForm_1_3_0',
              style: 'display:none',
              encType: encType,
              target: target
            });
            document.body.appendChild(form);
            _context6.next = 5;
            return form.submit();

          case 5:
            _context6.next = 7;
            return form.remove();

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _postTheForm_1_3_.apply(this, arguments);
}

export function learnosityReviewErrorHandler(error) {
  logErrorWithContext('ReviewLearnosityAssessmentFailed', [{
    key: 'error',
    value: error
  }]);
}
export function getLearnosityEventOptions() {
  return {
    readyListener: noop,
    errorListener: learnosityReviewErrorHandler
  };
}
export function launchReviewLearnosityAssessment(_x12, _x13) {
  return _launchReviewLearnosityAssessment.apply(this, arguments);
}

function _launchReviewLearnosityAssessment() {
  _launchReviewLearnosityAssessment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(env, initOptions) {
    var learnosityReportsURL, eventOptions, script;
    return _regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            learnosityReportsURL = getReportsUrl(env);
            eventOptions = getLearnosityEventOptions();

            if (window.LearnosityReports) {
              _context7.next = 12;
              break;
            }

            script = document.createElement('script');
            script.src = learnosityReportsURL;
            document.body.appendChild(script);
            _context7.next = 8;
            return new Promise(function (resolve, reject) {
              script.onload = function () {
                window.LearnosityReports.init(initOptions, eventOptions);
                resolve();
              };

              script.onerror = reject;
            });

          case 8:
            _context7.next = 10;
            return script.remove();

          case 10:
            _context7.next = 13;
            break;

          case 12:
            window.LearnosityReports.init(initOptions, eventOptions);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _launchReviewLearnosityAssessment.apply(this, arguments);
}