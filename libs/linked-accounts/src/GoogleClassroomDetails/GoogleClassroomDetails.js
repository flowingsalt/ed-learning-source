import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Button from '@mui/material/Button';
import Icon from '@hmhco/icon/src/Icon';
import { MY_CLASSES } from '@hmhco/url-const-myclasses/src/myClassesUrl';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GoogleAuthButton from '@hmhco/google-authentication-button/src/GoogleAuthButton';
import AlertNotification from '@hmhco/alert-notification/src/AlertNotification';
import List from '@mui/material/List';
import googleClassroomIcon from '@ed/baseline/icons/cts/products/products-google-classroom.svg';
import AvatarLogo from '@ed/baseline/images/google-classroom/btn_google_light_normal_ios.svg';
import Permissions from './Permissions';
import useGoogleClassroomUserProfile from '../hooks/useGoogleClassroomUserProfile.hooks';
import useGoogleClassroomCourseList from '../hooks/useGoogleClassroomCourseList.hook';
import useFetchAllClassLinks from '../hooks/useFetchAllClassLinks.hook';
import useFetchTeacherClasses from '../hooks/useFetchTeacherClasses.hook';
import useStyles from './GoogleClassroomDetails.styles';
import GoogleClassroomScopesAlert from '../GoogleClassroomScopesAlert';

var GoogleClassroomDetails = function GoogleClassroomDetails(_ref) {
  var handleSignInClick = _ref.handleSignInClick,
      handleSignOutClick = _ref.handleSignOutClick,
      signInSuccess = _ref.signInSuccess,
      sufficientScopes = _ref.sufficientScopes,
      isMobile = _ref.isMobile,
      handleClose = _ref.handleClose;

  var _useState = useState(signInSuccess),
      _useState2 = _slicedToArray(_useState, 2),
      successNotification = _useState2[0],
      setSuccessNotification = _useState2[1];

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var _useGoogleClassroomUs = useGoogleClassroomUserProfile(),
      userEmail = _useGoogleClassroomUs.userEmail,
      userName = _useGoogleClassroomUs.userName,
      getUserProfile = _useGoogleClassroomUs.getUserProfile;

  var _useFetchAllClassLink = useFetchAllClassLinks(),
      allFetchClassLinksData = _useFetchAllClassLink.results.data,
      fetchAllClassLinks = _useFetchAllClassLink.fetchAll;

  var _useGoogleClassroomCo = useGoogleClassroomCourseList(),
      _useGoogleClassroomCo2 = _slicedToArray(_useGoogleClassroomCo, 2),
      state = _useGoogleClassroomCo2[0],
      getCourseList = _useGoogleClassroomCo2[1];

  var _useFetchTeacherClass = useFetchTeacherClasses(),
      teacherClasses = _useFetchTeacherClass.teacherResults.classes,
      fetchTeachersClasses = _useFetchTeacherClass.fetchTeachersClasses;

  var backToRoute = "#/".concat(MY_CLASSES);
  var sectionsLength = allFetchClassLinksData === null || allFetchClassLinksData === void 0 ? void 0 : allFetchClassLinksData.length;
  var matchedClasses = allFetchClassLinksData === null || allFetchClassLinksData === void 0 ? void 0 : allFetchClassLinksData.map(function (_ref2, index) {
    var _state$data$courses;

    var clientSectionId = _ref2.clientSectionId,
        hmhSectionRefId = _ref2.hmhSectionRefId;
    var googleClassroomClasses = (_state$data$courses = state.data.courses) === null || _state$data$courses === void 0 ? void 0 : _state$data$courses.find(function (googleClasses) {
      return googleClasses.id === clientSectionId;
    });
    var edPlatformClasses = teacherClasses === null || teacherClasses === void 0 ? void 0 : teacherClasses.find(function (edClasses) {
      return edClasses.sectionRefId === hmhSectionRefId;
    });
    return {
      key: index,
      googleClassroomClasses: googleClassroomClasses,
      edPlatformClasses: edPlatformClasses
    };
  });

  var handleClickNotification = function handleClickNotification() {
    setSuccessNotification(false);
  };

  useEffect(function () {
    getUserProfile();
    getCourseList();
    fetchAllClassLinks();
    fetchTeachersClasses();
  }, []);

  var checkLaunchUrl = function checkLaunchUrl(sectionRefId) {
    window.location.hash = "/teacher-settings-classroom?sectionRefId=".concat(sectionRefId);
    handleClose();
  };

  if (!sufficientScopes) {
    return /*#__PURE__*/React.createElement(Stack, {
      className: classes.container,
      spacing: 2,
      alignItems: "flex-end"
    }, /*#__PURE__*/React.createElement(GoogleClassroomScopesAlert, {
      handleClick: handleSignInClick
    }), /*#__PURE__*/React.createElement(GoogleAuthButton, {
      handleClick: handleSignOutClick,
      type: "signOut"
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "column",
    "data-testid": "googleClassroomDetails"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.avatarWrapper
  }, /*#__PURE__*/React.createElement(Avatar, {
    className: classes.avatarIcon,
    variant: "square",
    "data-testid": "avatar-logo"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "100",
    svg: AvatarLogo,
    alt: formatMessage({
      id: 'linked.accounts.modal.avatar.logo'
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6"
  }, userName.fullName), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1"
  }, userEmail))), /*#__PURE__*/React.createElement(GoogleAuthButton, {
    handleClick: handleSignOutClick,
    type: "signOut"
  })), successNotification && /*#__PURE__*/React.createElement("div", {
    className: classes.alert
  }, /*#__PURE__*/React.createElement(AlertNotification, {
    severity: "success",
    autoFocus: true,
    "data-testid": "google-classroom-linked-success-alert",
    onClose: handleClickNotification
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "alertModal.title.success"
  })))), /*#__PURE__*/React.createElement(Permissions, {
    isMobile: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.gcContainer
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Typography, {
    variant: "h6"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.modal.GC.title",
    values: {
      count: sectionsLength || '0'
    }
  })), !sectionsLength ? /*#__PURE__*/React.createElement(Typography, {
    sx: {
      marginBottom: '32px'
    },
    variant: "body2"
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.modal.GC.info2",
    values: {
      link: /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Link, {
        to: backToRoute,
        onClick: handleClose
      }, /*#__PURE__*/React.createElement(FormattedMessage, {
        id: "linked.accounts.modal.GC.info2.link"
      })))
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    className: classes.subTitle
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: "linked.accounts.modal.GC.info1"
  })), /*#__PURE__*/React.createElement(List, {
    sx: {
      position: 'relative',
      overflow: 'auto',
      maxHeight: 150,
      '& ul': {
        padding: 0
      },
      '& li': {
        paddingBottom: 2
      }
    },
    "data-testid": "linkedClassesList"
  }, matchedClasses === null || matchedClasses === void 0 ? void 0 : matchedClasses.map(function (item) {
    var _item$edPlatformClass2, _item$edPlatformClass3, _item$googleClassroom;

    return /*#__PURE__*/React.createElement("li", {
      key: "section-".concat(item.key)
    }, /*#__PURE__*/React.createElement("div", {
      className: classes.avatarWrapper
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.ED.classes.link",
      values: {
        strong: function strong() {
          for (var _len = arguments.length, chunks = new Array(_len), _key = 0; _key < _len; _key++) {
            chunks[_key] = arguments[_key];
          }

          return /*#__PURE__*/React.createElement("strong", null, chunks);
        }
      }
    }), /*#__PURE__*/React.createElement(Button, {
      className: classes.linkedTo,
      onClick: function onClick() {
        var _item$edPlatformClass;

        return checkLaunchUrl((_item$edPlatformClass = item.edPlatformClasses) === null || _item$edPlatformClass === void 0 ? void 0 : _item$edPlatformClass.sectionRefId);
      },
      "aria-label": formatMessage({
        id: 'linked.accounts.modal.ED.classes.link.aria'
      }, {
        edClass: (_item$edPlatformClass2 = item.edPlatformClasses) === null || _item$edPlatformClass2 === void 0 ? void 0 : _item$edPlatformClass2.name
      }),
      "data-testid": "classButton"
    }, /*#__PURE__*/React.createElement("span", null, (_item$edPlatformClass3 = item.edPlatformClasses) === null || _item$edPlatformClass3 === void 0 ? void 0 : _item$edPlatformClass3.name))), /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "body2",
      className: classes.linkedTo
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "linked.accounts.modal.GC.classes.link",
      values: {
        strong: function strong() {
          for (var _len2 = arguments.length, chunks = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            chunks[_key2] = arguments[_key2];
          }

          return /*#__PURE__*/React.createElement("strong", null, chunks);
        },
        linkedClass: (_item$googleClassroom = item.googleClassroomClasses) === null || _item$googleClassroom === void 0 ? void 0 : _item$googleClassroom.name
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      svg: googleClassroomIcon,
      size: "23",
      className: classes.icon
    })));
  }))))));
};

GoogleClassroomDetails.propTypes = {
  handleSignInClick: PropTypes.func.isRequired,
  handleSignOutClick: PropTypes.func.isRequired,
  signInSuccess: PropTypes.bool.isRequired,
  sufficientScopes: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool,
  handleClose: PropTypes.func
};
export default GoogleClassroomDetails;