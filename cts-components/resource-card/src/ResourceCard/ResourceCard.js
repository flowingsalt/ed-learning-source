import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import calendarSml from '@ed/baseline/icons/cts/due-today-sm.svg';
import { resourceIconMediaType } from '@hmhco/resource-icon-mapper/utils/resourceIconMapper';
import { DashboardCard } from '@hmhco/dashboard-card/src/DashboardCard';
import { ResourceCardTile } from '@hmhco/resource-card-tile/src/ResourceCardTile';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import NoDataMessage from './elements/NoDataMessage';
import FilterDropdown from './elements/FilterDropdown';
import AssignmentsLink from './elements/AssignmentsLink';
import ResourceCardSkeleton from './ResourceCardSkeleton';
import useStyles from './ResourceCard.Styles';
import { DROPDOWN_VALUES } from './ResourceCard.data';
import getLocaleFile from '../lang';
export var generateResourcesList = function generateResourcesList(resources, callback) {
  var removeAriaLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return resources.map(function (resource) {
    var refId = resource.refId,
        title = resource.title,
        sectionName = resource.sectionName,
        dueDate = resource.dueDate,
        dueDateStatus = resource.dueDateStatus,
        buttons = resource.buttons,
        _resource$activities = _slicedToArray(resource.activities, 1),
        mediaType = _resource$activities[0].sourceObject.attributes.mediaType;

    var _resourceIconMediaTyp = resourceIconMediaType(mediaType),
        icon = _resourceIconMediaTyp.icon;

    return /*#__PURE__*/React.createElement(ResourceCardTile, {
      key: refId,
      primary: title,
      secondary: sectionName,
      subPrimary: dueDate,
      subPrimaryIcon: calendarSml,
      subPrimaryIconAria: "resourceCardTile.subPrimaryIcon.calendar",
      leftIcon: icon,
      status: dueDateStatus,
      buttons: buttons,
      ariaLabel: removeAriaLabel ? null : title,
      callback: callback,
      headerDomSize: "h3"
    });
  });
};

var ResourceCard = function ResourceCard(props) {
  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var title = props.title,
      resources = props.resources,
      isLoading = props.isLoading,
      btnCallback = props.btnCallback,
      showDropdown = props.showDropdown,
      onDropdownChange = props.onDropdownChange,
      setRef = props.setRef,
      linkCallback = props.linkCallback,
      message = props.message,
      removeAriaLabel = props.removeAriaLabel;
  var content = !resources || resources.length === 0 ? /*#__PURE__*/React.createElement(NoDataMessage, null) : /*#__PURE__*/React.createElement(List, {
    className: classes.list
  }, generateResourcesList(resources, btnCallback, removeAriaLabel));
  var Dropdown = showDropdown ? /*#__PURE__*/React.createElement(FilterDropdown, {
    onDropdownChange: onDropdownChange,
    dropdownValues: DROPDOWN_VALUES,
    ariaLabel: "".concat(title, ".")
  }) : null;
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(DashboardCard, {
    title: isLoading ? null : title,
    headerDomSize: "h2",
    subheader: /*#__PURE__*/React.createElement(AssignmentsLink, {
      callback: linkCallback
    }),
    classes: {
      card: classes.card,
      title: classes.title,
      subheader: classes.subheader,
      scrolledContent: classes.scrolledContent,
      content: classes.content
    },
    message: isLoading ? null : message,
    action: Dropdown,
    tabIndex: "-1",
    setRef: setRef
  }, isLoading ? /*#__PURE__*/React.createElement(ResourceCardSkeleton, null) : content));
};

ResourceCard.propTypes = {
  resources: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.node]),
  showDropdown: PropTypes.bool,
  onDropdownChange: PropTypes.func,
  btnCallback: PropTypes.func.isRequired,
  setRef: PropTypes.object.isRequired,
  linkCallback: PropTypes.func.isRequired,
  message: PropTypes.string,
  removeAriaLabel: PropTypes.bool
};
export default ResourceCard;