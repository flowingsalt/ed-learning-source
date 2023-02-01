import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import PrimaryNavLink from './PrimaryNavLink';
import useStyles from './PrimaryNavDesktop.styles';

var PrimaryNavDesktop = function PrimaryNavDesktop(props) {
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

    return /*#__PURE__*/React.createElement(PrimaryNavLink, _extends({
      key: key,
      isActive: function isActive() {
        return activeItemKey === key;
      },
      to: route
    }, otherProps), label);
  }));
};

PrimaryNavDesktop.defaultProps = {
  activeItemKey: undefined
};
PrimaryNavDesktop.propTypes = {
  /** array of nav items to be displayed;
   * all additional values in the object will be passed to NavLink component */
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
  activeItemKey: PropTypes.string
};
export default PrimaryNavDesktop;