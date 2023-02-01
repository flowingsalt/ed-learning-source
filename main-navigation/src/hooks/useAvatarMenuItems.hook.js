import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

import { useIntl } from 'react-intl';
import { getUserCtx } from '@hmhco/amp-core/src/userContext/auth';
import setLocale from '@hmhco/i18n-react/src/localeApi/setLocale';
import { eventRegistry as events } from '@hmhco/amp-core-events';
import { useStateValue } from '../navStateManager';

var useAvatarMenuItems = function useAvatarMenuItems() {
  var userContext = getUserCtx();

  var _useStateValue = useStateValue(),
      _useStateValue2 = _slicedToArray(_useStateValue, 2),
      avatarMenu = _useStateValue2[0].avatarMenu,
      dispatch = _useStateValue2[1];

  var _useIntl = useIntl(),
      locale = _useIntl.locale; // "locale" is the one fetched by LocaleProvider


  var onClickLogout = function onClickLogout(e) {
    e.preventDefault();
    userContext.logout();
  };

  var onClickLocaleSwitch = function onClickLocaleSwitch(e) {
    e.preventDefault();
    var newLocale = locale === 'en-US' ? 'es-US' : 'en-US'; // Change locale using Attila's switcher, update and propagate

    setLocale(newLocale); // if on Discover, also click the hidden button to switch the language
    // This is a temporary hack to get the language updating on Discover, to be removed when we strip out Angular and can use the LocaleProvider

    var hiddenDiscoverLangButton = document.getElementById('hiddenDiscoverLangButton');

    if (hiddenDiscoverLangButton) {
      hiddenDiscoverLangButton.click();
    }
  };

  var onClickRoleSwitchLink = function onClickRoleSwitchLink(e) {
    e.preventDefault();
    dispatch({
      type: 'setIsRoleSwitcherOpen',
      open: true
    });
  };

  var onClickLinkedAccounts = function onClickLinkedAccounts(e) {
    e.preventDefault();
    dispatch({
      type: 'setIsLinkedAccountsOpen',
      open: true
    });
  };

  var onClickUserProfile = function onClickUserProfile(e) {
    e.preventDefault();
    var editUserProfileEvent = new CustomEvent(events.EDIT_USER_PROFILE);
    window.dispatchEvent(editUserProfileEvent);
  };

  return Object.values(avatarMenu).map(function (item) {
    var key = item.key,
        openInNewWindow = item.openInNewWindow;
    var isLogout = key === 'logout';
    var isLocaleSwitch = key === 'localeSwitch';
    var isRoleSwitch = key === 'previewToggle';
    var isUserProfile = key === 'userProfile';
    var isLinkedAccounts = key === 'linkedAccounts';

    var linkProps = _objectSpread({
      'data-test-id': key
    }, openInNewWindow ? {
      target: '_blank',
      rel: 'noopener noreferrer'
    } : {});

    var buttonProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
      'data-test-id': key
    }, isRoleSwitch && {
      onClick: function onClick(e) {
        return onClickRoleSwitchLink(e);
      }
    }), isLogout && {
      onClick: function onClick(e) {
        return onClickLogout(e);
      }
    }), isLocaleSwitch && {
      onClick: function onClick(e) {
        return onClickLocaleSwitch(e);
      }
    }), isUserProfile && {
      onClick: function onClick(e) {
        return onClickUserProfile(e);
      }
    }), isLinkedAccounts && {
      onClick: function onClick(e) {
        return onClickLinkedAccounts(e);
      }
    });

    return {
      item: item,
      linkProps: linkProps,
      buttonProps: buttonProps
    };
  });
};

export default useAvatarMenuItems;