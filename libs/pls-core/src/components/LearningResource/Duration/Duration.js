import React from 'react';
import propTypes from 'prop-types';
import { useIntl, FormattedMessage } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getReadingDuration from '../../../formatters/getReadingDuration';
import AccessibilityOutOfScreenMessage from '../../Accessibility/AccessibilityOutOfScreenMessage';
import getLocaleFile from '../../../lang';
import useStyles from './Duration.style';

function Duration(_ref) {
  var durationSecs = _ref.durationSecs,
      isResourceTypeRead = _ref.isResourceTypeRead;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var read = formatMessage({
    id: 'card.article.read'
  });
  var durationConverted = getReadingDuration(durationSecs, read, isResourceTypeRead);
  return /*#__PURE__*/React.createElement("span", {
    "data-testid": "LearningResourceDuration",
    className: classes.resourceDuration
  }, /*#__PURE__*/React.createElement(AccessibilityOutOfScreenMessage, null, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "card.accessibility.duration"
  })), durationConverted);
}

Duration.propTypes = {
  durationSecs: propTypes.number,
  isResourceTypeRead: propTypes.bool
};
Duration.defaultProps = {
  durationSecs: null,
  isResourceTypeRead: false
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(Duration, props));
});