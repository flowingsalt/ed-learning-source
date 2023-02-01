import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable jsx-a11y/label-has-associated-control  */

import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useUIDSeed } from 'react-uid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@ed/baseline/icons/cts/search-sm.svg';
import Icon from '@hmhco/icon/src/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import ClearMd from '@ed/baseline/icons/cts/clear-md.svg';
import useStyles from './SimpleSearch.styles';

var handleSubmitWithMinCharacterLength = function handleSubmitWithMinCharacterLength(currentText, minCharacterLength, onSubmit) {
  if (currentText.length >= minCharacterLength) {
    onSubmit(currentText);
  }
};

var SimpleSearch = /*#__PURE__*/forwardRef(function (props, ref) {
  var value = props.value,
      label = props.label,
      disabled = props.disabled,
      placeholder = props.placeholder,
      labelledby = props.labelledby,
      dataTestId = props.dataTestId,
      onSubmit = props.onSubmit,
      minCharacterLength = props.minCharacterLength,
      minCharacterLengthHelperText = props.minCharacterLengthHelperText,
      clearSearchCallback = props.clearSearchCallback,
      className = props.className;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes,
      cx = _useStyles.cx;

  var seed = useUIDSeed();

  var _useState = useState(value || ''),
      _useState2 = _slicedToArray(_useState, 2),
      currentText = _useState2[0],
      setCurrentText = _useState2[1];

  var showMinCharacterHelperText = minCharacterLength && currentText.length > 0 && currentText.length < minCharacterLength;

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        if (minCharacterLength) {
          handleSubmitWithMinCharacterLength(currentText, minCharacterLength, onSubmit);
        } else {
          onSubmit(currentText);
        }

        break;

      case 'Escape':
        setCurrentText('');
        break;

      default:
        break;
    }
  };

  useEffect(function () {
    if ((currentText === null || currentText === void 0 ? void 0 : currentText.length) === 0) {
      clearSearchCallback(currentText);
    }
  }, [currentText]);
  return /*#__PURE__*/React.createElement("div", {
    className: cx(classes.root, className),
    "data-testid": "SimpleSearch",
    role: "search"
  }, /*#__PURE__*/React.createElement("label", {
    id: seed('textfield')
  }, /*#__PURE__*/React.createElement(TextField, {
    variant: "outlined",
    inputRef: ref,
    "data-testid": dataTestId,
    placeholder: placeholder,
    value: currentText,
    disabled: disabled,
    className: cx(classes.searchInput, 'searchInput'),
    onChange: function onChange(e) {
      setCurrentText(e.target.value);
    },
    onKeyDown: handleKeyDown,
    fullWidth: true,
    helperText: showMinCharacterHelperText ? minCharacterLengthHelperText : null,
    InputProps: {
      type: 'search',
      'data-testid': 'SearchInput',
      inputProps: {
        'aria-label': label
      },
      endAdornment: currentText && /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(Icon, {
        svg: ClearMd,
        size: "24",
        onClick: function onClick() {
          return setCurrentText('');
        },
        className: classes.clearIndicator,
        colour: "var(--ebl-dark-gray)",
        "data-testid": "clear-indicator"
      }))
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    className: classes.submitBtn,
    disabled: disabled,
    "aria-label": labelledby || seed('button'),
    onClick: function onClick() {
      return minCharacterLength ? handleSubmitWithMinCharacterLength(currentText, minCharacterLength, onSubmit) : onSubmit(currentText);
    },
    "data-testid": "submitBtn",
    variant: "contained",
    size: "large"
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: SearchIcon,
    size: "16",
    colour: "var(--ebl-button-contained-text-color)"
  })));
});
SimpleSearch.defaultProps = {
  disabled: false,
  labelledby: '',
  dataTestId: '',
  placeholder: '',
  value: undefined,
  minCharacterLength: undefined,
  minCharacterLengthHelperText: '',
  clearSearchCallback: function clearSearchCallback() {
    return null;
  },
  className: undefined
};
SimpleSearch.propTypes = {
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  dataTestId: PropTypes.string,
  placeholder: PropTypes.string,
  labelledby: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  minCharacterLength: PropTypes.number,
  minCharacterLengthHelperText: PropTypes.string,
  clearSearchCallback: PropTypes.func,
  className: PropTypes.string
};
export default SimpleSearch;