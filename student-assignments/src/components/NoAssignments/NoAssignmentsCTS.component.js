import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import EmptyMessage from '@hmhco/empty-message/src/EmptyMessage/EmptyMessage';
import Assignment from '@ed/baseline/icons/cts/assignments-xl.svg';
import { makeStyles } from 'tss-react/mui';
var useStyles = makeStyles()(function () {
  return {
    multiLineString: {
      whiteSpace: 'pre-wrap'
    }
  };
});

var NoAssignmentsCTS = function NoAssignmentsCTS(_ref) {
  var tabId = _ref.tabId,
      hasEntitledProducts = _ref.hasEntitledProducts;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var tabCombination = "mixedTabs.".concat(tabId);
  var subtitleId = "studentAssignmentList.empty.".concat(tabCombination, ".subtitleCTS");

  if (hasEntitledProducts) {
    subtitleId = "".concat(subtitleId, ".connected");
  }

  var subText = formatMessage({
    id: subtitleId
  });
  return /*#__PURE__*/React.createElement(EmptyMessage, {
    classes: {
      root: classes.multiLineString
    },
    title: formatMessage({
      id: "studentAssignmentList.empty.".concat(tabCombination, ".titleCTS")
    }),
    text: subText,
    iconProps: {
      svg: Assignment,
      size: '64'
    }
  });
};

NoAssignmentsCTS.propTypes = {
  tabId: PropTypes.string,
  hasEntitledProducts: PropTypes.bool
};
export default NoAssignmentsCTS;