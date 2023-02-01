import _extends from "@babel/runtime/helpers/extends";
/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/click-events-have-key-events */
// TODO - Fix this in another PR

/* eslint-disable jsx-a11y/no-static-element-interactions */
// TODO - Fix this in another PR

import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TabsComponent from '@hmhco/tabs/src/Tabs';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import { TAB_STATES } from '@hmhco/assignments-constants/src/assignments.util';
import AssignmentsTableContainer from './AssignmentsTableContainer.component';
import { setCurrentTab } from '../../actions/index';
import useStyles from './AssignmentsTabs.Styles';
import { getDoneTabCount, getTodoTabCount, getOverdueTabCount } from '../../reducers/tabCounts.selectors';

var AssignmentsTabs = function AssignmentsTabs(props) {
  var currentTab = props.currentTab,
      initialTabOnLoad = props.initialTabOnLoad,
      queries = props.queries,
      launchError = props.launchError,
      handleClickErrorNotification = props.handleClickErrorNotification;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var doneCount = useSelector(getDoneTabCount);
  var todoCount = useSelector(getTodoTabCount);
  var overdueCount = useSelector(getOverdueTabCount);
  var dispatch = useDispatch();

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var setCurrentTabCallback = function setCurrentTabCallback() {
    return dispatch(setCurrentTab.apply(void 0, arguments));
  };

  var todoLabel = formatMessage({
    id: "assignmentList.tabs.todo"
  });
  var overdueLabel = formatMessage({
    id: "assignmentList.tabs.overdue"
  });
  var doneLabel = formatMessage({
    id: "assignmentList.tabs.done"
  });
  var todoAriaLabel = formatMessage({
    id: "assignmentList.tabs.ariaLabel.numberOfAssignments.todo"
  }, {
    count: todoCount
  });
  var overdueAriaLabel = formatMessage({
    id: "assignmentList.tabs.ariaLabel.numberOfAssignments.overdue"
  }, {
    count: overdueCount
  });
  var doneAriaLabel = formatMessage({
    id: "assignmentList.tabs.ariaLabel.numberOfAssignments.done"
  }, {
    count: doneCount
  });
  var tabsLoadingAriaLabel = formatMessage({
    id: "studentAssignmentList.tabsLoading"
  });
  var tabProps = [{
    tabId: TAB_STATES.TODO,
    label: "".concat(todoLabel, " (").concat(todoCount, ")"),
    ariaLabel: todoAriaLabel
  }, {
    tabId: TAB_STATES.OVERDUE,
    label: "".concat(overdueLabel, " (").concat(overdueCount, ")"),
    ariaLabel: overdueAriaLabel
  }, {
    tabId: TAB_STATES.DONE,
    label: "".concat(doneLabel, " (").concat(doneCount, ")"),
    ariaLabel: doneAriaLabel
  }];

  var getTabNumberFromTabId = function getTabNumberFromTabId(tabValue) {
    var tabIndex = tabProps.findIndex(function (tab) {
      return tab.tabId === tabValue;
    });
    return tabIndex !== -1 ? tabIndex : 0;
  };

  var isCountValid = function isCountValid(count) {
    return count || count === 0;
  };

  var countsAreLoading = isCountValid(doneCount) && isCountValid(overdueCount) && isCountValid(todoCount);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TabsComponent, {
    componentId: "studentAssignmentsTabs",
    tabChangeCallback: function tabChangeCallback(value) {
      return setCurrentTabCallback(tabProps[value].tabId);
    },
    defaultValue: getTabNumberFromTabId(initialTabOnLoad),
    isLoading: !countsAreLoading,
    isLoadingAriaLabel: tabsLoadingAriaLabel,
    tabValueOverride: getTabNumberFromTabId(currentTab)
  }, tabProps.map(function (tab) {
    return /*#__PURE__*/React.createElement("div", _extends({}, tab, {
      key: tab.tabId
    }), /*#__PURE__*/React.createElement("div", {
      className: classes.tabPanelInstructionalText
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "studentAssignmentList.instructionalText.".concat(currentTab)
    })), launchError.value ? /*#__PURE__*/React.createElement(AlertNotification, {
      severity: "error",
      label: /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "studentAssigments.GoogleScopesAlert.label"
      }),
      autoFocus: true,
      "data-testid": "assignment-launch-error-notification",
      onClose: handleClickErrorNotification
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "notification.error.contentLaunchDetails"
    })) : null, /*#__PURE__*/React.createElement("div", {
      className: classes.tableContainer
    }, /*#__PURE__*/React.createElement(AssignmentsTableContainer, _extends({}, props, {
      currentTab: currentTab,
      todoCount: todoCount,
      overdueCount: overdueCount,
      doneCount: doneCount,
      queries: queries,
      setToDoneTab: function setToDoneTab(value) {
        return setCurrentTabCallback(tabProps[value].tabId);
      }
    }))));
  })));
};

AssignmentsTabs.propTypes = {
  currentTab: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  initialTabOnLoad: PropTypes.string,
  queries: PropTypes.object,
  launchError: PropTypes.object,
  handleClickErrorNotification: PropTypes.func
};
export default AssignmentsTabs;