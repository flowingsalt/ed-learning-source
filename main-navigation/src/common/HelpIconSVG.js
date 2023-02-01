import React from 'react';
import { useIntl } from 'react-intl';
import Icon from '@hmhco/icon/src/Icon';
import helpIcon from '@ed/baseline/icons/cts/help-md.svg';
export default function HelpIconSVG() {
  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(Icon, {
    svg: helpIcon,
    size: "24",
    title: formatMessage({
      id: 'topNav.avatarMenu.help'
    })
  });
}