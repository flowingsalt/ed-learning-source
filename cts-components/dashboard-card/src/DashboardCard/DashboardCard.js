import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ScrolledContent } from '@hmhco/scrolled-content/src/ScrolledContent';
import useStyles from './DashboardCard.Styles';

var DashboardCard = function DashboardCard(props) {
  var action = props.action,
      children = props.children,
      hideScrollbarOnMobile = props.hideScrollbarOnMobile,
      styles = props.styles,
      subheader = props.subheader,
      title = props.title,
      tabIndex = props.tabIndex,
      setRef = props.setRef,
      cardActions = props.cardActions,
      titleSeparator = props.titleSeparator,
      headerDomSize = props.headerDomSize,
      customTestId = props.customTestId,
      message = props.message;

  var _useStyles = useStyles(props, {
    props: props
  }),
      classes = _useStyles.classes;

  var headerClassName = titleSeparator ? classes.headerWithSeparator : classes.header;
  return /*#__PURE__*/React.createElement(Grid, {
    item: true,
    "data-testid": customTestId
  }, /*#__PURE__*/React.createElement(Paper, {
    elevation: 3
  }, /*#__PURE__*/React.createElement(Card, {
    className: classes.card,
    style: styles
  }, (title || action) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardHeader, {
    classes: {
      action: classes.action,
      content: classes.title
    },
    className: headerClassName,
    title: /*#__PURE__*/React.createElement(Typography, {
      component: headerDomSize,
      variant: "h3",
      fontWeight: "bold"
    }, title),
    subheader: subheader,
    action: action
  })), /*#__PURE__*/React.createElement(React.Fragment, null, message && /*#__PURE__*/React.createElement("span", {
    "data-testid": "card-message"
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.message,
    variant: "body1"
  }, message))), /*#__PURE__*/React.createElement(CardContent, {
    className: classes.content,
    ref: setRef,
    "data-testid": "scrolled-card-content"
  }, /*#__PURE__*/React.createElement(ScrolledContent, {
    hideScrollbarOnMobile: hideScrollbarOnMobile,
    className: classes.scrolledContent,
    style: {
      height: '100%'
    },
    tabIndex: tabIndex
  }, children)), cardActions ? /*#__PURE__*/React.createElement(CardActions, {
    "data-testid": "card-action",
    className: classes.cardAction
  }, cardActions) : null)));
};

DashboardCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  hideScrollbarOnMobile: PropTypes.bool,
  styles: PropTypes.object,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setRef: PropTypes.object,
  cardActions: PropTypes.node,
  titleSeparator: PropTypes.bool,
  headerDomSize: PropTypes.string,
  customTestId: PropTypes.string,
  message: PropTypes.string
};
DashboardCard.defaultProps = {
  tabIndex: 0,
  cardActions: undefined,
  titleSeparator: undefined,
  headerDomSize: 'h3',
  message: null
};
export default DashboardCard;