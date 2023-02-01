import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import SecondaryNavLink from './SecondaryNavLink';
import useStyles from './SecondaryNavDesktop.styles';

var SecondaryNavDesktop = function SecondaryNavDesktop(props) {
  var items = props.items,
      activeItemKey = props.activeItemKey;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, items.map(function (_ref) {
    var key = _ref.key,
        route = _ref.route,
        label = _ref.label,
        otherProps = _objectWithoutProperties(_ref, ["key", "route", "label"]);

    return /*#__PURE__*/React.createElement(SecondaryNavLink, _extends({
      key: key,
      isActive: function isActive() {
        return activeItemKey === key;
      },
      to: route,
      "aria-current": activeItemKey === key ? 'location' : undefined
    }, otherProps), label);
  }));
};

SecondaryNavDesktop.defaultProps = {
  activeItemKey: undefined
};
SecondaryNavDesktop.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
  activeItemKey: PropTypes.string
};
export default SecondaryNavDesktop;