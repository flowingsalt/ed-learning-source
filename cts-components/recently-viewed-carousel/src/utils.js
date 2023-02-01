export var carouselBreakpoints = {
  xl: {
    breakpoint: {
      max: 10000,
      min: 1600
    },
    items: 4,
    slidesToSlide: 2
  },
  lg: {
    breakpoint: {
      max: 1600,
      min: 1200
    },
    items: 3,
    slidesToSlide: 3
  },
  md: {
    breakpoint: {
      max: 1200,
      min: 960
    },
    items: 2,
    slidesToSlide: 2
  },
  sm: {
    breakpoint: {
      max: 960,
      min: 820
    },
    items: 2,
    slidesToSlide: 2
  },
  xs: {
    breakpoint: {
      max: 820,
      min: 370
    },
    items: 1
  },
  xxs: {
    breakpoint: {
      max: 370,
      min: 0
    },
    items: 1
  }
};
export var carouselBreakpointsStudentDashboard = {
  xl: {
    breakpoint: {
      max: 10000,
      min: 1800
    },
    items: 3,
    slidesToSlide: 3
  },
  lg: {
    breakpoint: {
      max: 1800,
      min: 1280
    },
    items: 3,
    slidesToSlide: 3
  },
  md: {
    breakpoint: {
      max: 1280,
      min: 960
    },
    items: 3,
    slidesToSlide: 3
  },
  sm: {
    breakpoint: {
      max: 960,
      min: 600
    },
    items: 2
  },
  xs: {
    breakpoint: {
      max: 600,
      min: 370
    },
    items: 1
  },
  xxs: {
    breakpoint: {
      max: 370,
      min: 0
    },
    items: 1
  }
};
/*
 * The additional props function is used to fetch the props needed to force
 * the carousel to render in a node/test environment. Will return the additional
 * props when forceRender is true.
 */

export var getAdditionalProps = function getAdditionalProps(forceRender) {
  if (!forceRender) {
    return {};
  }

  return {
    ssr: true,
    deviceType: 'lg'
  };
};