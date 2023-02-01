import React from 'react';
import propTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import gradeFormatter from '../../../formatters/gradeFormatter';
import getLocaleFile from '../../../lang';

function GradeLevel(_ref) {
  var gradeLevelList = _ref.gradeLevelList;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var grade = formatMessage({
    id: 'card.grade'
  });
  var gradeList = gradeFormatter(gradeLevelList);
  return /*#__PURE__*/React.createElement("span", {
    "data-testid": "GradeLevel"
  }, grade, " ", gradeList);
}

GradeLevel.propTypes = {
  gradeLevelList: propTypes.array
};
GradeLevel.defaultProps = {
  gradeLevelList: []
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(GradeLevel, props));
});