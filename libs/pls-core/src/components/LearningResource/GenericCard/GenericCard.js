import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import useStyles from './GenericCard.style';
export default function GenericCard(_ref) {
  var mediaImageUrl = _ref.mediaImageUrl,
      mediaUrl = _ref.mediaUrl,
      mediaSkeletonContent = _ref.mediaSkeletonContent,
      mediaExtra = _ref.mediaExtra,
      contentIntro = _ref.contentIntro,
      contentTitle = _ref.contentTitle,
      contentTitleUrl = _ref.contentTitleUrl,
      contentDescription = _ref.contentDescription,
      action = _ref.action,
      actionMessage = _ref.actionMessage,
      useMaxHeight = _ref.useMaxHeight,
      useIntro = _ref.useIntro;

  var _useStyles = useStyles({
    useMaxHeight: useMaxHeight
  }),
      classes = _useStyles.classes;

  var hasMediaImgUrl = Boolean(mediaImageUrl);
  var accessibilitySameUrlProps = mediaUrl && contentTitleUrl === mediaUrl ? {
    'data-testid': 'mediaImgWithSameUrl',
    'aria-hidden': 'true',
    tabIndex: '-1'
  } : {};

  var mediaCard = function mediaCard() {
    return hasMediaImgUrl && /*#__PURE__*/React.createElement("div", {
      className: classes.cardMediaWrapper
    }, /*#__PURE__*/React.createElement(CardMedia, {
      key: mediaImageUrl,
      className: classes.mediaImgUrl,
      image: mediaImageUrl,
      "aria-hidden": "true"
    }));
  };

  var mediaImgUrlCard = function mediaImgUrlCard() {
    return /*#__PURE__*/React.createElement(Link, _extends({}, accessibilitySameUrlProps, {
      key: mediaUrl,
      className: classes.mediaUrl,
      to: mediaUrl,
      "aria-label": "".concat(contentTitle)
    }), hasMediaImgUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, mediaCard(), mediaExtra) : /*#__PURE__*/React.createElement(Skeleton, {
      className: classes.mediaImgSkeleton,
      variant: "rectangular",
      animation: false
    }, mediaSkeletonContent));
  };

  var introCard = function introCard() {
    return contentIntro && useIntro && /*#__PURE__*/React.createElement(Box, {
      className: classes.contentIntro,
      key: contentIntro
    }, /*#__PURE__*/React.createElement("span", {
      "data-testid": "contentIntroSection",
      className: classes.contentDivider
    }, contentIntro));
  };

  var titleCard = function titleCard() {
    return contentTitle && /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      "data-testid": "contentTitleSection",
      key: contentTitle,
      component: "h4",
      className: classes.contentTitle
    }, contentTitle);
  };

  var titleUrlCard = function titleUrlCard() {
    return contentTitleUrl ? /*#__PURE__*/React.createElement(Link, {
      "data-testid": "contentTitleUrlLink",
      key: contentTitle,
      className: classes.contentTitle,
      to: contentTitleUrl,
      "aria-label": "".concat(contentTitle)
    }, titleCard()) : titleCard();
  };

  var descriptionCard = function descriptionCard() {
    return contentDescription && /*#__PURE__*/React.createElement(Typography, {
      variant: "body1",
      key: contentDescription,
      className: classes.contentDescription,
      component: "p"
    }, contentDescription);
  };

  var actionMessageCard = function actionMessageCard() {
    return actionMessage && /*#__PURE__*/React.createElement("span", {
      key: actionMessage,
      className: classes.contentDividerFavorites,
      "data-testid": "actionMessageSpan"
    }, actionMessage);
  };

  var actionCard = function actionCard() {
    return action && /*#__PURE__*/React.createElement(Button, {
      key: action,
      className: classes.actionCardButton,
      "aria-label": "".concat(action)
    }, "".concat(action));
  };

  return /*#__PURE__*/React.createElement(Card, {
    className: classes.root,
    "data-testid": "GenericCard"
  }, mediaImgUrlCard(), /*#__PURE__*/React.createElement(Box, {
    className: classes.bodyCardWrapper
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: classes.bodyCardContent
  }, introCard(), titleUrlCard(), descriptionCard()), /*#__PURE__*/React.createElement(CardActions, {
    className: classes.bodyCardFooter
  }, /*#__PURE__*/React.createElement("span", {
    className: classes.bodyCardFooterAction
  }, actionMessageCard(), actionCard()))));
}
GenericCard.propTypes = {
  mediaUrl: propTypes.string,
  mediaImageUrl: propTypes.string,
  mediaSkeletonContent: propTypes.string,
  mediaExtra: propTypes.oneOfType([propTypes.array, propTypes.string]),
  contentIntro: propTypes.oneOfType([propTypes.array, propTypes.string, propTypes.object]),
  contentTitle: propTypes.string,
  contentTitleUrl: propTypes.string,
  contentDescription: propTypes.string,
  action: propTypes.string,
  actionMessage: propTypes.oneOfType([propTypes.array, propTypes.object]),
  useMaxHeight: propTypes.bool,
  useIntro: propTypes.bool
};
GenericCard.defaultProps = {
  mediaUrl: 'https://s3.amazonaws.com/pls-pipeline.static-content.test/SS00004_Math+Fluency+Quiz/index.html#/lessons/z8kQtW9JoPzKyhFYFl4zpPNXyyK6ORpD',
  mediaImageUrl: null,
  mediaSkeletonContent: 'media skeleton text',
  mediaExtra: [],
  contentIntro: [],
  contentTitle: 'content title text',
  contentTitleUrl: 'https://s3.amazonaws.com/pls-pipeline.static-content.test/SS00004_Math+Fluency+Quiz/index.html#/lessons/z8kQtW9JoPzKyhFYFl4zpPNXyyK6ORpD',
  contentDescription: 'content description',
  action: 'action',
  actionMessage: [],
  useMaxHeight: true,
  useIntro: true
};