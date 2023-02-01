import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
var useStyles = makeStyles({
  name: 'SimpleNotification'
})(function (_theme, _ref) {
  var justifyContent = _ref.justifyContent;
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: justifyContent
    }
  };
});

var SimpleNotification = function SimpleNotification(props) {
  var icon = props.icon,
      variant = props.variant,
      component = props.component,
      children = props.children,
      id = props.id;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Box, {
    className: classes.root
  }, icon && /*#__PURE__*/React.createElement(Box, {
    marginRight: 2
  }, icon), /*#__PURE__*/React.createElement(Typography, {
    id: id,
    variant: variant,
    component: component
  }, children));
};

SimpleNotification.propTypes = {
  children: PropTypes.node.isRequired,
  // justifyContent is used for styling but eslint doesn't see it
  // eslint-disable-next-line react/no-unused-prop-types
  justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  icon: PropTypes.node,
  id: PropTypes.string,
  variant: PropTypes.string,
  component: PropTypes.string
};
SimpleNotification.defaultProps = {
  justifyContent: 'center',
  icon: undefined,
  id: null,
  variant: 'subtitle1',
  component: 'p'
};
export default SimpleNotification;