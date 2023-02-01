import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState, useEffect } from 'react';

var useWindowSize = function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  var _useState = useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  useEffect(function () {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;