import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useEffect, useState } from 'react';
import ModuleAccordion from '@hmhco/module-accordion/src/ModuleAccordion';
import Icon from '@hmhco/icon';
import nextSvg from '@ed/baseline/icons/cts/next-sm.svg';
import { getSubtitleLabel as getAccordionLabel, prependWithLabel } from '@hmhco/flexible-labelling';
import { getPickerPrefixUrlAllResources } from '@hmhco/picker-helpers/src/pickerHelpers';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PropTypes, { oneOf, string } from 'prop-types';
import { isFeatureActive } from '@hmhco/feature-flags';
import useStyles from './LevelOneAccordionList.styles';
import { isLevelThreeData, parseSessionStorage, markEmptySectionsAndLessons } from './util';
import AccordionListSkeletonLoader from '../../skeletonLoaders/AccordionListSkeletonLoader';
import LevelListItem from './LevelListItem';
import { ADMIN, TEACHER } from '../../constants';

var LevelOneAccordionList = function LevelOneAccordionList(_ref) {
  var levelDetails = _ref.levelDetails,
      programId = _ref.programId,
      programInfoIsValid = _ref.programInfoIsValid,
      loadingSectionsCheck = _ref.loadingSectionsCheck,
      role = _ref.role;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var isLevelThree = isLevelThreeData(levelDetails);

  var _useState = useState(parseSessionStorage(sessionStorage)),
      _useState2 = _slicedToArray(_useState, 2),
      expandedElements = _useState2[0],
      setExpandedElements = _useState2[1];

  var isConnectedPartnerFeatureFlagEnabled = isFeatureActive('connectedPartner', true);
  var filteredLevelDetails = markEmptySectionsAndLessons(levelDetails === null || levelDetails === void 0 ? void 0 : levelDetails.item, role, isLevelThree, isConnectedPartnerFeatureFlagEnabled);

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      staticListOfExpandedElements = _useState4[0],
      setStaticListOfExpandedElements = _useState4[1];

  useEffect(function () {
    setStaticListOfExpandedElements(parseSessionStorage(sessionStorage));
  }, []);
  useEffect(function () {
    sessionStorage.setItem('expandedElements', JSON.stringify(expandedElements));
  }, [expandedElements]);

  var loadContent = function loadContent() {
    return /*#__PURE__*/React.createElement("section", {
      className: classes.accordionList
    }, isLevelThree ? /*#__PURE__*/React.createElement(React.Fragment, null, filteredLevelDetails === null || filteredLevelDetails === void 0 ? void 0 : filteredLevelDetails.map(function (levelTwo, levelTwoIndex) {
      var _levelTwo$item;

      if (!levelTwo.hasResources) {
        return undefined;
      }

      return /*#__PURE__*/React.createElement(ModuleAccordion, {
        defaultExpanded: staticListOfExpandedElements.includes(levelTwo.hierarchy),
        setExpandedElements: setExpandedElements,
        level: Number(levelTwo.hierarchy),
        label: prependWithLabel(getAccordionLabel(levelTwo).label, levelTwo === null || levelTwo === void 0 ? void 0 : levelTwo.title),
        key: levelTwo.contextId[0],
        summaryButton: /*#__PURE__*/React.createElement(Button, {
          "data-testid": "discover-program-page-view-level2-resources",
          href: "#/".concat(getPickerPrefixUrlAllResources(), "/").concat(programId, "/pCID/").concat(levelDetails === null || levelDetails === void 0 ? void 0 : levelDetails.item[levelTwoIndex].contextId),
          endIcon: /*#__PURE__*/React.createElement(Icon, {
            svg: nextSvg,
            size: "16",
            colour: "#065ec2"
          })
        }, /*#__PURE__*/React.createElement(FormattedMessage, {
          id: "programPage.levelOneDetailsHeader.viewResources"
        })),
        dataTestId: "moduleAccordion"
      }, /*#__PURE__*/React.createElement("ul", {
        className: "".concat(classes.levelThree, " ").concat(classes.list),
        role: "list"
      }, levelTwo === null || levelTwo === void 0 ? void 0 : (_levelTwo$item = levelTwo.item) === null || _levelTwo$item === void 0 ? void 0 : _levelTwo$item.map(function (levelThree, levelThreeIndex) {
        if (!levelThree.hasResources) {
          return undefined;
        }

        return /*#__PURE__*/React.createElement(LevelListItem, {
          key: levelThree.contextId[0],
          isLevelThree: isLevelThree,
          endpoint: "".concat(levelTwoIndex + 1, "/").concat(levelThreeIndex + 1),
          level: levelThree,
          parentHierarchy: levelDetails.hierarchy,
          programId: programId
        });
      })));
    })) : /*#__PURE__*/React.createElement("ul", {
      className: "".concat(classes.levelTwo, " ").concat(classes.list),
      role: "list"
    }, filteredLevelDetails === null || filteredLevelDetails === void 0 ? void 0 : filteredLevelDetails.map(function (levelTwo, levelTwoIndex) {
      if (!levelTwo.hasResources) {
        return undefined;
      }

      return /*#__PURE__*/React.createElement(LevelListItem, {
        key: levelTwo.contextId[0],
        isLevelThree: isLevelThree,
        level: levelTwo,
        endpoint: "".concat(levelTwoIndex + 1),
        programId: programId,
        parentHierarchy: levelDetails.hierarchy
      });
    })));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, programInfoIsValid && loadingSectionsCheck.filteredData && loadingSectionsCheck.currentProgramData && loadingSectionsCheck.bookmarkData ? loadContent() : /*#__PURE__*/React.createElement(AccordionListSkeletonLoader, {
    count: 10
  }));
};

LevelOneAccordionList.propTypes = {
  programInfoIsValid: PropTypes.bool.isRequired,
  loadingSectionsCheck: PropTypes.shape({
    filteredData: PropTypes.bool,
    currentProgramData: PropTypes.bool,
    bookmarkData: PropTypes.bool
  }).isRequired,
  programId: string.isRequired,
  levelDetails: PropTypes.shape({
    levelLabel: PropTypes.string,
    levelNumber: PropTypes.string,
    hierarchy: PropTypes.string,
    item: PropTypes.array,
    type: PropTypes.array
  }).isRequired,
  role: oneOf([TEACHER, ADMIN])
};
export default LevelOneAccordionList;