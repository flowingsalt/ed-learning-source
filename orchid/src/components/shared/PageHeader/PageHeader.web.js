import React from 'react';
import Styles from './PageHeader.css';
import { string, array } from 'prop-types';
export var PageHeader = function PageHeader(props) {
  return /*#__PURE__*/React.createElement("header", {
    className: Styles.pageHeader,
    "data-test-id": props.dataTestId
  }, props.title ? /*#__PURE__*/React.createElement("h1", null, props.title) : null, props.children);
};
PageHeader.propTypes = {
  /** Text to display */
  title: string.isRequired,

  /** Any children elements */
  children: array,

  /** Any data test id */
  dataTestId: string
};