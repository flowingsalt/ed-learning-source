import { useEffect, useRef } from 'react';
/**
 * Helper hook created to determine if the component is mounted
 *
 * This was meant to solve "update on unmounted component" warning.
 *
 * @returns reference with boolean indicating if this is mounted or not
 *
 * @deprecated
 * More official information on why you should not use this:
 * https://github.com/reactwg/react-18/discussions/82
 */

var useIsMounted = function useIsMounted() {
  var componentIsMounted = useRef(true);
  useEffect(function () {
    return function () {
      componentIsMounted.current = false;
    };
  }, []);
  return componentIsMounted;
};

export default useIsMounted;