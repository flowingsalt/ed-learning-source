import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Paper, Typography } from '@mui/material';
import showSvg from '@ed/baseline/icons/cts/show-md.svg';
import Icon from '@hmhco/icon/src/Icon';
import classnames from 'classnames';
import useStyles from './DiscoverCarouselCard.styles';
import { getUnitLabel } from '../utils';

var DiscoverCarouselCard = function DiscoverCarouselCard(props) {
  var _classnames;

  var programId = props.programId,
      item = props.item,
      cardClickHandler = props.cardClickHandler,
      bookmark = props.bookmark,
      isActive = props.isActive,
      accessToken = props.accessToken,
      env = props.env,
      isLearner = props.isLearner,
      userId = props.userId,
      dataIndex = props.dataIndex,
      setBookmark = props.setBookmark,
      setActiveCardIdx = props.setActiveCardIdx,
      setFocusRef = props.setFocusRef,
      setShowLastViewedAccessibilityMessage = props.setShowLastViewedAccessibilityMessage;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var isBookmarked = bookmark === dataIndex;
  var shouldPseudoClickCarousel = isBookmarked || bookmark === null && dataIndex === 0;
  var unitLabel = getUnitLabel(item);
  useEffect(function () {
    if (shouldPseudoClickCarousel && !isLearner) {
      var _item$studentEdition;

      cardClickHandler({
        resourceId: item === null || item === void 0 ? void 0 : (_item$studentEdition = item.studentEdition) === null || _item$studentEdition === void 0 ? void 0 : _item$studentEdition.identifier,
        item: item,
        uId: userId,
        sif: accessToken,
        environment: env,
        program: programId,
        hierarchy: item.hierarchy,
        isSourceCarousel: true,
        shouldSetBookmark: false
      });
    }
  }, [isBookmarked]);
  var cardHierarchyIdx = Number(item.hierarchy) - 1;

  var onClickCarouselItem = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _item$studentEdition2;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFocusRef(Number(dataIndex));
              setBookmark(cardHierarchyIdx);
              setActiveCardIdx(cardHierarchyIdx);
              cardClickHandler({
                resourceId: (_item$studentEdition2 = item.studentEdition) === null || _item$studentEdition2 === void 0 ? void 0 : _item$studentEdition2.identifier,
                item: item,
                uId: userId,
                sif: accessToken,
                environment: env,
                program: programId,
                hierarchy: item.hierarchy,
                isSourceCarousel: true,
                shouldSetBookmark: true
              });
              setShowLastViewedAccessibilityMessage(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onClickCarouselItem() {
      return _ref.apply(this, arguments);
    };
  }();

  var CAROUSEL_STYLES = classnames((_classnames = {}, _defineProperty(_classnames, classes.programCarouselCardActive, isActive), _defineProperty(_classnames, classes.programCarouselCard, !isActive), _defineProperty(_classnames, "teacherCard", !isLearner), _defineProperty(_classnames, classes.cardArrow, !isLearner && isActive), _classnames));
  return /*#__PURE__*/React.createElement(Paper, {
    onKeyDown: function onKeyDown(e) {
      var validKeys = ['enter', 'space'];
      var key = (e.key || e.code || '').toLowerCase();

      if (validKeys.includes(key)) {
        e.preventDefault();
        onClickCarouselItem();
      }
    },
    onClick: onClickCarouselItem,
    className: CAROUSEL_STYLES,
    role: isLearner ? 'link' : 'button',
    tabIndex: 0,
    elevation: 0,
    "data-testid": "carousel-card-".concat(item.hierarchy),
    id: "carousel-card-".concat(item.hierarchy),
    "data-index": dataIndex,
    "data-carousel-card-active": isActive,
    "aria-current": isActive
  }, isBookmarked && /*#__PURE__*/React.createElement("div", {
    className: classes.lastViewed
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: showSvg,
    size: "24",
    colour: "black"
  }), /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "itemLabel.lastViewed"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.imageContainer
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.cardImage,
    src: "/content/ui/manifest/".concat(programId, "/images/").concat(item.hierarchy, ".jpg"),
    alt: ""
  }), /*#__PURE__*/React.createElement(Typography, {
    className: classes.cardTitle
  }, unitLabel)), /*#__PURE__*/React.createElement("div", {
    className: classes.cardFooter
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.cardSubtitle
  }, item.title)));
};

DiscoverCarouselCard.propTypes = {
  programId: PropTypes.string.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    levelNumber: PropTypes.string,
    levelLabel: PropTypes.string,
    contentTitle: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.array,
    hierarchy: PropTypes.string,
    studentEdition: PropTypes.shape({
      identifier: PropTypes.string
    })
  }).isRequired,
  bookmark: PropTypes.number,
  isActive: PropTypes.bool.isRequired,
  accessToken: PropTypes.string.isRequired,
  env: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  setBookmark: PropTypes.func.isRequired,
  setActiveCardIdx: PropTypes.func.isRequired,
  isLearner: PropTypes.bool.isRequired,
  dataIndex: PropTypes.number.isRequired,
  setFocusRef: PropTypes.func.isRequired,
  setShowLastViewedAccessibilityMessage: PropTypes.func
};
export default DiscoverCarouselCard;