import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { FormControl, Select } from '@mui/material';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from '../../lang';

var FilterDropdown = function FilterDropdown(_ref) {
  var onDropdownChange = _ref.onDropdownChange,
      dropdownValues = _ref.dropdownValues,
      ariaLabel = _ref.ariaLabel;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _React$useState = React.useState(dropdownValues[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dropdownSelection = _React$useState2[0],
      setDropdownSelection = _React$useState2[1];

  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true
  }, /*#__PURE__*/React.createElement(Select, {
    "native": true,
    inputProps: {
      role: 'listbox',
      'aria-label': ariaLabel,
      'data-testid': 'filter-dropdown'
    },
    value: dropdownSelection.id,
    onChange: function onChange(event) {
      var value = event.currentTarget.value;
      setDropdownSelection(dropdownValues[value]);
      onDropdownChange(dropdownValues[value]);
    }
  }, dropdownValues.map(function (dropdownValue, i) {
    var name = dropdownValue.name,
        value = dropdownValue.value;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: i
    }, formatMessage({
      id: name
    }));
  }))));
};

FilterDropdown.propTypes = {
  onDropdownChange: PropTypes.func,
  dropdownValues: PropTypes.array,
  ariaLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node])
};
export default FilterDropdown;