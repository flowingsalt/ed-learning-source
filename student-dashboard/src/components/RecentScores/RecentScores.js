import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RecentScoresCard } from '@hmhco/recent-scores-card/src/RecentScoresCard';
import { useQuery } from '@apollo/client';
import { isFeatureActive } from '@hmhco/feature-flags';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import { AssignmentModel } from 'orchid-common';
import RECENT_SCORES_QUERY from '../../api/scores-queries';
import RECENT_SCORES_QUERY_FF from '../../api/scores-queriesFeatureFlag';
import { launchAssignment } from '../Assignments/assignmentsUtils';
import { APIErrorContext } from '../../context/ApiErrorContextProvider';
import { usePartnerModalContext } from '../../context/PartnerModalContextProvider';

var RecentScores = function RecentScores(_ref) {
  var _data$student, _data$student$assignm;

  var position = _ref.position,
      location = _ref.location,
      handleError = _ref.handleError;

  var _usePartnerModalConte = usePartnerModalContext(),
      setIsPartnerModalOpen = _usePartnerModalConte.setIsPartnerModalOpen,
      setPartnerName = _usePartnerModalConte.setPartnerName,
      setHandleCloseModal = _usePartnerModalConte.setHandleCloseModal;

  var query = isFeatureActive('connectedPartner', true) ? RECENT_SCORES_QUERY_FF : RECENT_SCORES_QUERY;

  var _useContext = useContext(APIErrorContext),
      handleLaunchError = _useContext.handleLaunchError;

  var _useQuery = useQuery(query, {
    onError: function onError() {
      handleError(true);
    }
  }),
      loading = _useQuery.loading,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  var partnerModalCallback = function partnerModalCallback() {
    setIsPartnerModalOpen(false);
    refetch();
  };

  function _onClick2(_x) {
    return _onClick.apply(this, arguments);
  }

  function _onClick() {
    _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(assignment) {
      var _getUserCtx, _getUserCtx$rawToken, _getUserCtx$rawToken$;

      var sif, model;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sif = (_getUserCtx = getUserCtx()) === null || _getUserCtx === void 0 ? void 0 : (_getUserCtx$rawToken = _getUserCtx.rawToken) === null || _getUserCtx$rawToken === void 0 ? void 0 : (_getUserCtx$rawToken$ = _getUserCtx$rawToken.sif) === null || _getUserCtx$rawToken$ === void 0 ? void 0 : _getUserCtx$rawToken$.accessToken;

              try {
                model = new AssignmentModel(assignment);

                if (model.isPartnerAssignment()) {
                  setPartnerName(assignment.partnerIdentifier);
                  setIsPartnerModalOpen(true);
                  setHandleCloseModal(partnerModalCallback);
                }

                launchAssignment(sif, assignment);
              } catch (_unused) {
                handleLaunchError({
                  error: true
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClick.apply(this, arguments);
  }

  return /*#__PURE__*/React.createElement(RecentScoresCard, {
    position: position,
    resources: data === null || data === void 0 ? void 0 : (_data$student = data.student) === null || _data$student === void 0 ? void 0 : (_data$student$assignm = _data$student.assignments) === null || _data$student$assignm === void 0 ? void 0 : _data$student$assignm.items,
    isLoading: loading,
    linkCallback: location,
    onClick: function onClick(resource) {
      return _onClick2(resource);
    }
  });
};

RecentScores.propTypes = {
  position: PropTypes.number,
  location: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired
};
RecentScores.defaultProps = {
  position: 5
};
export default RecentScores;