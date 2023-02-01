import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import { DashboardCard } from '@hmhco/dashboard-card/src/DashboardCard';
import VCBaseTile from '../VCBaseTile/VCBaseTile';
import useStyles from './VCDashboardCard.styles';
import { NoItemsMessage, VCCardSkeleton, VCList } from './elements';
import getLocaleFile from '../lang';

var VCDashboardCard = function VCDashboardCard(_ref) {
  var items = _ref.items,
      isLoading = _ref.isLoading,
      errorMessage = _ref.errorMessage,
      customTestId = _ref.customTestId;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var cardTitle = formatMessage({
    id: 'studentDashboard.virtualClassroom.title'
  });

  var getContent = function getContent() {
    if (isLoading) {
      return /*#__PURE__*/React.createElement(VCCardSkeleton, null);
    }

    if (errorMessage) {
      return /*#__PURE__*/React.createElement(AlertNotification, {
        severity: "error",
        small: true
      }, errorMessage);
    }

    if (items && items.length) {
      return /*#__PURE__*/React.createElement(VCList, {
        items: items,
        classes: classes
      });
    }

    return /*#__PURE__*/React.createElement(NoItemsMessage, null);
  };

  return /*#__PURE__*/React.createElement(DashboardCard, {
    customTestId: customTestId,
    title: !isLoading && cardTitle,
    classes: {
      card: classes.card,
      scrolledContent: classes.scrolledContent,
      content: classes.content
    },
    headerDomSize: "h2",
    tabIndex: "-1"
  }, getContent());
};

VCDashboardCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(VCBaseTile.propTypes)),
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  customTestId: PropTypes.string
};
VCDashboardCard.defaultProps = {
  isLoading: false,
  items: [],
  errorMessage: null
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(VCDashboardCard, props));
});