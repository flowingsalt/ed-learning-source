import { useRef, useEffect } from 'react';
/**
 * usePrevious - gets the previous value based on the
 * @param {any} value
 * @returns {value} previous value
 */

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = useRef(value); // Store current value in ref

  useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

export default usePrevious;