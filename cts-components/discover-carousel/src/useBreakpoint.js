import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function useBreakpoint(carouselBreakpoints) {
  var isSmall = useMediaQuery(carouselBreakpoints.small.query);
  var isMedium = useMediaQuery(carouselBreakpoints.medium.query);
  var isLarge = useMediaQuery(carouselBreakpoints.large.query);
  return useMemo(function () {
    if (isSmall) return carouselBreakpoints.small;
    if (isMedium) return carouselBreakpoints.medium;
    if (isLarge) return carouselBreakpoints.large;
    return {
      settings: {}
    };
  }, [carouselBreakpoints, isSmall, isMedium, isLarge]);
}