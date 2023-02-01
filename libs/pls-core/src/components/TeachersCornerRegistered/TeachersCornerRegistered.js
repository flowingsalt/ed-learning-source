import React from 'react';
import { FormattedMessage } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import useStyles from './TeachersCornerRegistered.style';
import getLocaleFile from '../../lang';

function TeachersCornerRegistered() {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement("span", {
    "data-testid": "TeachersCornerRegistered"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "banner.teacherCorner.registered",
    values: {
      sup: function sup() {
        for (var _len = arguments.length, chunks = new Array(_len), _key = 0; _key < _len; _key++) {
          chunks[_key] = arguments[_key];
        }

        return /*#__PURE__*/React.createElement("sup", {
          className: classes.registeredSign
        }, chunks);
      }
    }
  })));
}

export default TeachersCornerRegistered;