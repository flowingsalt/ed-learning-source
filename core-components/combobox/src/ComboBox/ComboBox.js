import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/* eslint-disable jsx-a11y/label-has-associated-control  */


import React, { forwardRef, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useUIDSeed } from 'react-uid';
import Icon from '@hmhco/icon/src/Icon';
import Popper from '@mui/material/Popper';
import TextField from '@mui/material/TextField';
import { makeStyles } from 'tss-react/mui';
import Autocomplete from '@mui/material/Autocomplete';
import clearIcon from '@ed/baseline/icons/cts/clear-md.svg';
import FormLabel from '@mui/material/FormLabel';
import ReadOnlyField from '@hmhco/form-components/src/ReadOnlyField';
import FormControl from '@mui/material/FormControl';
import { Paper } from '@mui/material';
import { useIntl } from 'react-intl';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import getLocaleFile from './lang';
var useStyles = makeStyles({
  name: 'ComboBox'
})({
  disabled: {
    color: 'var(--ebl-disabled-color)',
    marginTop: 0,
    marginBottom: 0
  },
  disabledLabel: {
    marginLeft: 'var(--ebl-s3)',
    marginTop: 'calc(var(--ebl-s2) + 2px)'
  },
  input: {
    marginBottom: 0
  },
  popper: {},
  noOptions: {
    display: 'none'
  }
});
var ComboBox = /*#__PURE__*/forwardRef(function (props, ref) {
  var renderOption = props.renderOption,
      getOptionLabel = props.getOptionLabel,
      label = props.label,
      options = props.options,
      value = props.value,
      disabled = props.disabled,
      handleChange = props.handleChange,
      innerClasses = props.innerClasses,
      dataTestId = props.dataTestId,
      placeholder = props.placeholder,
      hideNoOptions = props.hideNoOptions,
      labelledby = props.labelledby,
      required = props.required,
      autoHighlight = props.autoHighlight,
      autoSelect = props.autoSelect,
      ariaDescribedBy = props.ariaDescribedBy,
      otherProps = _objectWithoutProperties(props, ["renderOption", "getOptionLabel", "label", "options", "value", "disabled", "handleChange", "innerClasses", "dataTestId", "placeholder", "hideNoOptions", "labelledby", "required", "autoHighlight", "autoSelect", "ariaDescribedBy"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      textInputValue = _useState2[0],
      setTextInputValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      noResultsFound = _useState4[0],
      setNoResultsFound = _useState4[1];

  var noOptionsText = otherProps.noOptionsText;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useStyles = useStyles(props, {
    props: props
  }),
      labelClasses = _useStyles.classes;

  var seed = useUIDSeed();
  var labelId = labelledby || seed('textfield');
  var title = value ? getOptionLabel(value) : '';

  var PopperAutoWidth = function PopperAutoWidth(popperProps) {
    var style = popperProps.style,
        otherPopperProps = _objectWithoutProperties(popperProps, ["style"]);

    var maxWidth = Math.max(style.width, 320);
    return /*#__PURE__*/React.createElement(Popper, _extends({}, otherPopperProps, {
      style: {
        minWidth: style.width,
        width: 'auto',
        maxWidth: maxWidth
      },
      placement: "bottom-start"
    }));
  };

  if (disabled && title) {
    return /*#__PURE__*/React.createElement(FormControl, {
      margin: "none",
      required: required
    }, /*#__PURE__*/React.createElement(ReadOnlyField, {
      label: label,
      value: title,
      "data-testid": "".concat(dataTestId, "-readOnly")
    }));
  }

  var NumResultsHeader = function NumResultsHeader(paperProps) {
    var children = paperProps.children,
        otherPaperProps = _objectWithoutProperties(paperProps, ["children"]);

    var _useState5 = useState(null),
        _useState6 = _slicedToArray(_useState5, 2),
        numOptions = _useState6[0],
        setNumOptions = _useState6[1];

    var paperRef = useRef();
    useEffect(function () {
      var results = paperRef.current.querySelectorAll('li[data-option-index]').length;
      setNoResultsFound(results === 0 && (textInputValue === null || textInputValue === void 0 ? void 0 : textInputValue.length) > 0);
      setNumOptions(results);
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, numOptions > 0 && textInputValue && /*#__PURE__*/React.createElement("span", {
      "aria-live": "assertive",
      role: "alert",
      "aria-label": formatMessage({
        id: 'comboBox.ariaLabel.optionsReturned'
      }, {
        count: numOptions
      })
    }), numOptions === 0 && textInputValue && /*#__PURE__*/React.createElement("span", {
      "aria-live": "assertive",
      role: "alert",
      "aria-label": formatMessage({
        id: 'comboBox.ariaLabel.no.optionsReturned'
      })
    }), /*#__PURE__*/React.createElement(Paper, _extends({
      ref: paperRef
    }, otherPaperProps), children));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormLabel, {
    required: required,
    disabled: disabled,
    id: labelId
  }, label), disabled && !title &&
  /*#__PURE__*/
  // We're using a separate TextField for the disabled state
  // for a11y reasons.  Passing InputProps into the TextField
  // in the Autocomplete's renderInput section causes a11y issues
  // with the TextField when it's not disabled.  So this method
  // is cleaner and simpler.
  React.createElement(TextField, {
    "data-testid": "disabledAutocomplete",
    variant: "outlined",
    fullWidth: true,
    disabled: true,
    value: title,
    inputProps: {
      'aria-labelledby': labelId,
      'data-testid': dataTestId && "".concat(dataTestId, "Disabled")
    },
    className: labelClasses.disabled,
    required: required
  }), !disabled && /*#__PURE__*/React.createElement(Autocomplete, _extends({}, otherProps, {
    renderOption: renderOption,
    autoHighlight: autoHighlight,
    autoSelect: autoSelect,
    PopperComponent: PopperAutoWidth,
    clearOnEscape: true,
    classes: _objectSpread({
      option: labelClasses.option,
      popper: labelClasses.popper,
      noOptions: "".concat(hideNoOptions ? labelClasses.noOptions : '')
    }, innerClasses),
    id: seed('autocomplete'),
    options: options,
    value: value,
    onChange: handleChange,
    getOptionLabel: getOptionLabel,
    PaperComponent: NumResultsHeader,
    onClose: function onClose() {
      return setNoResultsFound(false);
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement("label", {
        "aria-labelledby": labelId
      }, /*#__PURE__*/React.createElement(TextField, _extends({}, params, {
        inputRef: ref,
        variant: "outlined",
        fullWidth: true,
        inputProps: _objectSpread(_objectSpread(_objectSpread({}, params.inputProps), ariaDescribedBy && {
          'aria-describedby': ariaDescribedBy
        }), {}, {
          'data-testid': 'input-aria-field'
        }),
        "data-testid": dataTestId,
        placeholder: placeholder,
        required: required,
        className: labelClasses.input,
        onChange: function onChange(e) {
          return setTextInputValue(e.target.value);
        },
        error: noResultsFound,
        helperText: noResultsFound ? noOptionsText : null
      })));
    },
    clearIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: clearIcon,
      size: "24",
      colour: "var(--ebl-text-gray)"
    })
  })));
});
ComboBox.defaultProps = {
  disabled: false,
  innerClasses: {},
  getOptionLabel: function getOptionLabel(value) {
    return value;
  },
  hideNoOptions: false,
  labelledby: null,
  autoHighlight: false,
  autoSelect: false,
  value: undefined,
  required: false,
  label: null,
  dataTestId: null,
  placeholder: null,
  renderOption: null,
  ariaDescribedBy: null
};
var OptionType = PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  title: PropTypes.node.isRequired
}), PropTypes.object]);
ComboBox.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  handleChange: PropTypes.func.isRequired,
  value: OptionType,
  getOptionLabel: PropTypes.func,
  innerClasses: PropTypes.object,
  options: PropTypes.arrayOf(OptionType).isRequired,
  dataTestId: PropTypes.string,
  placeholder: PropTypes.string,
  hideNoOptions: PropTypes.bool,
  labelledby: PropTypes.string,
  autoHighlight: PropTypes.bool,
  autoSelect: PropTypes.bool,
  renderOption: PropTypes.func,
  ariaDescribedBy: PropTypes.string
};
export default /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(ComboBox, _extends({}, props, {
    ref: ref
  })));
});