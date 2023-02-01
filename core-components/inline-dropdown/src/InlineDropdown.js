import React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from 'tss-react/mui';
import { func, string, arrayOf, shape, object, bool, node, oneOfType } from 'prop-types';
var useStyles = makeStyles({
  name: 'InlineDropdown'
})(function () {
  return {
    fullWidth: {
      width: '100%'
    },
    labelHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px'
    }
  };
});

var InlineDropdown = function InlineDropdown(props) {
  var labelId = props.labelId,
      labelText = props.labelText,
      dropdownId = props.dropdownId,
      options = props.options,
      handleChange = props.handleChange,
      error = props.error,
      placeholder = props.placeholder,
      defaultIfValueNotExists = props.defaultIfValueNotExists,
      displayEmpty = props.displayEmpty,
      value = props.value,
      onOpen = props.onOpen,
      onClose = props.onClose,
      disabled = props.disabled,
      labelHidden = props.labelHidden;
  var selectedValue = value;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  if (defaultIfValueNotExists !== null) {
    var isValueExists = options.some(function (option) {
      return option.id === value;
    });
    selectedValue = isValueExists ? value : defaultIfValueNotExists;
  }

  return /*#__PURE__*/React.createElement(FormControl, {
    className: classes.fullWidth,
    error: Boolean(error)
  }, /*#__PURE__*/React.createElement(InputLabel, {
    className: labelHidden ? classes.labelHidden : null,
    id: labelId
  }, labelText), /*#__PURE__*/React.createElement(Select, {
    labelId: labelId,
    id: dropdownId,
    value: selectedValue,
    onChange: function onChange(event) {
      var newValue = event.target.value;
      handleChange(newValue);
    },
    inputProps: {
      role: 'listbox',
      'data-testid': dropdownId
    },
    displayEmpty: Boolean(placeholder) || displayEmpty,
    onOpen: onOpen,
    onClose: onClose,
    disabled: disabled,
    MenuProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    }
  }, placeholder && /*#__PURE__*/React.createElement(MenuItem, {
    key: "placeholder",
    value: "",
    disabled: true
  }, placeholder), options.map(function (item) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: item.id,
      value: item.id,
      "data-testid": item.id,
      disabled: item.disabled
    }, item.name);
  })), /*#__PURE__*/React.createElement(FormHelperText, null, (error === null || error === void 0 ? void 0 : error.message) || ''));
};

InlineDropdown.defaultProps = {
  onOpen: undefined,
  onClose: undefined,
  error: undefined,
  placeholder: null,
  defaultIfValueNotExists: null,
  displayEmpty: false,
  disabled: false,
  labelHidden: false
};
InlineDropdown.propTypes = {
  /** MUI uses this value to associate the InputLabel with the Select element */
  labelId: string.isRequired,

  /** This is the text label that will show above the InlineDropdown component (translate your text!) */
  labelText: string.isRequired,

  /** this is a uniqueId for the select component */
  dropdownId: string.isRequired,

  /**
   * this string will render as an initial value, but can't be selected. We can this as a placeholder (ex: Please Select)
   * <br/><b style="color: red;">IMPORTANT: This is not a11y compatible option</b>
   */
  placeholder: string,

  /** selectable options dropdown list, must have have the following properties at minimum */
  defaultIfValueNotExists: string,

  /** Value to consider if the provided value is not in the list */
  options: arrayOf(shape({
    /** human readable name for the option */
    name: oneOfType([string, node]).isRequired,

    /** unique id value for the option */
    id: string.isRequired
  }).isRequired).isRequired,

  /** this is the 'id' of the option that should be selected */
  value: string.isRequired,

  /** called on change with the id of the newly selected value */
  handleChange: func.isRequired,

  /**
   * Generic javascript error object in format <br/>
   * <b>{ message: 'some rror message' }</b>
   */
  error: object,

  /** displays an empty field when set to true */
  displayEmpty: bool,

  /** onOpen func passed in to MUI Select, can be used when rendered inside a modal to disable modals FocusTrap */
  onOpen: func,

  /** onClose func passed in to MUI Select, can be used when rendered inside a modal to enable modals FocusTrap */
  onClose: func,

  /**  */
  disabled: bool,
  labelHidden: bool
};
export default InlineDropdown;