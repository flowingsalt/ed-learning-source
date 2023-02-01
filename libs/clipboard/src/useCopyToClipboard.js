import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
/**
 * Hook to copy content from an existing Input to the clipboard
 *
 * @param {object} passcodeInputRef reference to the form input
 */

var useCopyToClipboard = function useCopyToClipboard(_ref) {
  var passcodeInputRef = _ref.passcodeInputRef;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      textCopied = _React$useState2[0],
      setTextCopied = _React$useState2[1];

  var copyToClipboard = function copyToClipboard() {
    var copyText = passcodeInputRef.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    /* For mobile devices */

    document.execCommand('copy');
    setTextCopied(true);
  };

  return {
    copyToClipboard: copyToClipboard,
    textCopied: textCopied
  };
};

export default useCopyToClipboard;