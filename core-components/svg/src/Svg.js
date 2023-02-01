import React from 'react';
import PropTypes from 'prop-types';

var attachSvg = function attachSvg(element, svg, useShadowDom) {
  if (useShadowDom && element.attachShadow) {
    var shadow = element.attachShadow({
      mode: 'open'
    });
    shadow.innerHTML = svg;
  } else {
    element.insertAdjacentHTML('afterbegin', svg);
  }
};

var Svg = function Svg(_ref) {
  var useShadowDom = _ref.useShadowDom,
      className = _ref.className,
      svg = _ref.svg,
      Component = _ref.Component,
      ariaHidden = _ref.ariaHidden,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/React.createElement(Component, {
    ref: function ref(element) {
      if (element && !element.innerHTML && // when mocked there won't be children but a text
      element.children.length === 0 && !element.shadowRoot) {
        attachSvg(element, svg, useShadowDom);
      }
    },
    className: className,
    "aria-hidden": ariaHidden,
    "aria-label": ariaLabel
  });
};

Svg.defaultProps = {
  className: '',
  useShadowDom: false,
  Component: 'div',
  ariaHidden: false,
  ariaLabel: ''
};
Svg.propTypes = {
  // Import the svg you want to use from @ed/baseline and use this prop
  svg: PropTypes.string.isRequired,
  useShadowDom: PropTypes.bool,
  className: PropTypes.string,
  Component: PropTypes.node,
  ariaHidden: PropTypes.bool,
  ariaLabel: PropTypes.string
};
export default Svg;