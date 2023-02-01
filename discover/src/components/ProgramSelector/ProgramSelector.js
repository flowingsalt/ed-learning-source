import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { FormattedMessage, useIntl } from 'react-intl';
import Grid from '@mui/material/Grid';
import Icon from '@hmhco/icon/src/Icon';
import { useHistory, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import dropdownOpen from '@ed/baseline/icons/cts/expand-sm.svg';
import openInNewTab from '@ed/baseline/icons/cts/open-sm.svg';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { detailsJson } from '@hmhco/content-api/src/detailsJsonApi';
import { array, bool, func, shape, string } from 'prop-types';
import SimpleSearch from '@hmhco/simple-search/src/SimpleSearch';
import { getPickerPrefixUrlDiscover, getPickerPrefixUrlAllResources } from '@hmhco/picker-helpers/src/pickerHelpers';
import logMessageWithContext from '@hmhco/client-monitoring/src/context/logMessageWithContext';
import setCurrentProgram from '../../hooks/setCurrentProgram.hook';
import usePrevious from '../../hooks/usePrevious.hook';
import useStyles from './ProgramSelector.styles';
import { AMIRA_IDENTIFIER, I_READ_K2, PROGRAM_TYPE_CURRICULUM } from '../../constants';
import { buildUrlToNavigateTo, getAdditionalsForProgram, removeEntitledProgramsFromAdditionals } from './utils';

var ProgramSelector = function ProgramSelector(props) {
  var userId = props.userId,
      accessToken = props.accessToken,
      env = props.env,
      onChangeProgramId = props.onChangeProgramId,
      programData = props.programData,
      isLearner = props.isLearner,
      selectedProgram = props.selectedProgram,
      setDetails = props.setDetails,
      isAdmin = props.isAdmin,
      additionals = props.additionals,
      hasCurriculum = props.hasCurriculum;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var history = useHistory();
  var location = useLocation();
  var previousLocation = usePrevious(location);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      programHeaderTitle = _useState2[0],
      setProgramHeaderTitle = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      programCode = _useState4[0],
      setProgramCode = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      programImagePath = _useState6[0],
      setProgramImagePath = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      programImagePathError = _useState8[0],
      setProgramImagePathError = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      optionalContent = _useState10[0],
      setOptionalContent = _useState10[1];

  var _useState11 = useState({}),
      _useState12 = _slicedToArray(_useState11, 2),
      detailsJsonData = _useState12[0],
      setDetailsJson = _useState12[1];

  var _getAdditionalsForPro = getAdditionalsForProgram(additionals, selectedProgram),
      additionalPrograms = _getAdditionalsForPro.additionalPrograms;

  useEffect(function () {
    var _previousLocation$pat, _selectedProgram$iden;

    var previousProgramId = previousLocation === null || previousLocation === void 0 ? void 0 : (_previousLocation$pat = previousLocation.pathname) === null || _previousLocation$pat === void 0 ? void 0 : _previousLocation$pat.split('/')[2];

    if (previousProgramId && (selectedProgram === null || selectedProgram === void 0 ? void 0 : (_selectedProgram$iden = selectedProgram.identifier) === null || _selectedProgram$iden === void 0 ? void 0 : _selectedProgram$iden.length) && previousProgramId !== (selectedProgram === null || selectedProgram === void 0 ? void 0 : selectedProgram.identifier)) {
      setCurrentProgram(userId, accessToken, env, selectedProgram.identifier);
    }
  }, [previousLocation, selectedProgram, location]);

  var setNewProgram = function setNewProgram(program, urlToNavigateTo) {
    logMessageWithContext("Discover: Set program to ".concat(program === null || program === void 0 ? void 0 : program.identifier));
    detailsJson().fetchDetailsJson(program.identifier).then(function (data) {
      var _data$book, _data$book2;

      setDetailsJson(data);

      if (data && (data === null || data === void 0 ? void 0 : (_data$book = data.book) === null || _data$book === void 0 ? void 0 : _data$book.type) === 'reviewer' && (data === null || data === void 0 ? void 0 : (_data$book2 = data.book) === null || _data$book2 === void 0 ? void 0 : _data$book2.url)) {
        var _data$book3;

        setOptionalContent({
          title: data === null || data === void 0 ? void 0 : (_data$book3 = data.book) === null || _data$book3 === void 0 ? void 0 : _data$book3.title,
          url: data === null || data === void 0 ? void 0 : data.book.url
        });
      } else {
        setOptionalContent('');
      }
    });
    setProgramCode(program.identifier);
    setProgramHeaderTitle(program.title);
    setProgramImagePath("/content/ui/manifest/".concat(program.identifier, "/images/p.jpg"));
    setProgramImagePathError(false);
    window.location.hash = urlToNavigateTo;
    onChangeProgramId(program.identifier, detailsJsonData);
  };

  useEffect(function () {
    if ((selectedProgram === null || selectedProgram === void 0 ? void 0 : selectedProgram.identifier) !== '') {
      var urlToNavigateTo = buildUrlToNavigateTo(selectedProgram.identifier, window.location.hash);
      setNewProgram(selectedProgram, urlToNavigateTo);
    }
  }, [selectedProgram]);
  useEffect(function () {
    setDetails(detailsJsonData);
  }, [detailsJsonData]);

  var _useState13 = useState(null),
      _useState14 = _slicedToArray(_useState13, 2),
      anchorEl = _useState14[0],
      setAnchorEl = _useState14[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var handleSelection = function handleSelection(program) {
    handleClose(); // changing the URL will re-render AppViewByRole thanks to useLocation,
    // which will re-render this component with a new selectedProgram
    // this will update all necessary data

    var prefixUrl = getPickerPrefixUrlDiscover();
    window.location.assign("#/".concat(prefixUrl, "/").concat(program.identifier));
    history.push("/discover/".concat(program.identifier));
  };

  var handleSearch = function handleSearch(term) {
    window.location = window.location.href.replace(window.location.hash, "#/".concat(getPickerPrefixUrlAllResources(), "/").concat(programCode, "/all?q=").concat(term));
  };

  var programDataOrdered = programData.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  var roleBasedProgram = [];

  if (isLearner || isAdmin) {
    roleBasedProgram = programDataOrdered.filter(function (programItem) {
      var _programItem$type;

      if (isAdmin && programItem.identifier === AMIRA_IDENTIFIER) {
        return true;
      }

      return ((_programItem$type = programItem.type) === null || _programItem$type === void 0 ? void 0 : _programItem$type.includes(PROGRAM_TYPE_CURRICULUM)) || (programItem === null || programItem === void 0 ? void 0 : programItem.identifier) === I_READ_K2;
    });
  } else {
    roleBasedProgram = programDataOrdered;
  }

  var additionalsClean = removeEntitledProgramsFromAdditionals(additionalPrograms, roleBasedProgram);

  var getAllyProgramLabel = function getAllyProgramLabel(programTitle, isSelected) {
    return formatMessage({
      id: isSelected ? 'programHeader.programList.program.selected' : 'programHeader.programList.program.unselected'
    }, {
      programTitle: programTitle
    });
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.container
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    className: classes.component
  }, programImagePath !== '' && !programImagePathError ? /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.programImage,
    src: programImagePath,
    alt: "",
    onError: function onError() {
      return setProgramImagePathError(true);
    }
  })) : null, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "column",
    className: classes.selectorSection
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "p",
    className: classes.eyebrow
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programHeader.selectAProgram"
  })), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    className: classes.selectorTitle
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: classes.selectorButton,
    variant: "outlined",
    size: "small",
    "data-testid": "discoverProgramDropdown",
    "aria-label": formatMessage({
      id: 'programHeader.ariaLabel.openDropdown'
    }),
    title: formatMessage({
      id: 'programHeader.title.openDropdown'
    }),
    onClick: handleClick,
    "aria-expanded": "false"
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: dropdownOpen,
    size: "16",
    colour: "var(--ebl-button-outlined-text-color)"
  })), /*#__PURE__*/React.createElement(Menu, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, roleBasedProgram ? roleBasedProgram.map(function (program) {
    var isSelected = program.identifier === programCode;

    if (program.title !== 'Ed Demo') {
      return /*#__PURE__*/React.createElement(MenuItem, {
        className: "".concat(isSelected ? classes.selectedMenuItem : classes.unselectedMenuItem, " ").concat(classes.menuItem),
        "aria-label": getAllyProgramLabel(program.title, isSelected),
        key: program.identifier,
        onClick: function onClick() {
          return handleSelection(program);
        },
        selected: isSelected
      }, program.title);
    }

    return null;
  }) : '', additionalsClean.length > 0 && /*#__PURE__*/React.createElement(MenuItem, {
    disabled: true,
    className: classes.additionalTitle,
    id: "additionalProgramsTitle",
    key: "additionalProgramsTitle"
  }, formatMessage({
    id: 'programHeader.additionalProgramsTitle'
  })), additionalsClean.length > 0 && additionalsClean.map(function (program) {
    var isSelected = program.identifier === programCode;
    return /*#__PURE__*/React.createElement(MenuItem, {
      className: isSelected ? classes.selectedMenuItem : classes.menuItem,
      "aria-describedby": "additionalProgramsTitle",
      "aria-label": getAllyProgramLabel(program.title, isSelected),
      key: program.identifier,
      onClick: function onClick() {
        return handleSelection(program);
      },
      selected: isSelected
    }, program.title);
  })), programHeaderTitle !== '' && /*#__PURE__*/React.createElement(Typography, {
    "aria-live": "polite",
    variant: "h3",
    component: "h1",
    className: classes.headerTitle
  }, programHeaderTitle)), optionalContent !== '' && !isLearner && /*#__PURE__*/React.createElement(Button, {
    className: classes.optionalContent,
    size: "large",
    variant: "outlined",
    target: "_blank",
    href: optionalContent.url,
    endIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: openInNewTab,
      size: "16",
      colour: "var(--ebl-button-outlined-text-color)"
    }),
    "aria-label": formatMessage({
      id: 'programHeader.optionalContent.button.ariaLabel'
    }, {
      buttonTitle: optionalContent.title
    })
  }, optionalContent.title), isLearner && /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    component: "p",
    className: classes.studentMessage
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "programHeader.studentInfo.cantFindProgram"
  })))), !isLearner && hasCurriculum && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    className: classes.search
  }, /*#__PURE__*/React.createElement(SimpleSearch, {
    onSubmit: handleSearch,
    placeholder: formatMessage({
      id: 'programHeader.search.label'
    }),
    label: formatMessage({
      id: 'programHeader.search.label'
    }),
    labelledby: "search"
  }))));
};

ProgramSelector.defaultProps = {
  selectedProgram: {
    identifier: '',
    title: ''
  },
  additionals: {
    additionals: [],
    primaries: []
  }
};
ProgramSelector.propTypes = {
  userId: string.isRequired,
  accessToken: string.isRequired,
  env: string.isRequired,
  onChangeProgramId: func.isRequired,
  programData: array.isRequired,
  isLearner: bool.isRequired,
  selectedProgram: shape({
    identifier: string,
    title: string
  }),
  setDetails: func.isRequired,
  isAdmin: bool.isRequired,
  additionals: shape({
    additionals: array,
    primaries: array
  }),
  hasCurriculum: bool.isRequired
};
export default ProgramSelector;