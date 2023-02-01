import React from 'react';
import { FormattedMessage } from 'react-intl';

var CustomToastrButton = function CustomToastrButton(props) {
  var ESC = 27;

  var handleOnKeyUp = function handleOnKeyUp(e) {
    var code = e.keyCode;

    if (code === ESC) {
      props.remove(e);
    }
  };

  return /*#__PURE__*/React.createElement(FormattedMessage, {
    id: props.toastMsgId
  }, function (text) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rrt-right-container"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: props.remove,
      tabIndex: "0",
      type: "button",
      className: "close-toastr toast-close-button toastr-control",
      "aria-label": text,
      onKeyUp: handleOnKeyUp,
      "data-testid": "closeToastrButton"
    }, "\u2715"));
  });
};

export default CustomToastrButton;