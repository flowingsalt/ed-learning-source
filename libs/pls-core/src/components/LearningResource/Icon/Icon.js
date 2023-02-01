import React from 'react';
import propTypes from 'prop-types';
import articleIcon from '@ed/baseline/icons/cts/PL-leaf-icons/article-md.svg';
import interactiveIcon from '@ed/baseline/icons/cts/PL-leaf-icons/interactive-md.svg';
import podcastIcon from '@ed/baseline/icons/cts/PL-leaf-icons/podcast-md.svg';
import videoIcon from '@ed/baseline/icons/cts/PL-leaf-icons/video-md.svg';
import liveEventIcon from '@ed/baseline/icons/cts/events-md.svg';
import BaseIcon from '@hmhco/icon/src/Icon';
import courseIcon from '@ed/baseline/icons/cts/PL-leaf-icons/course-md.svg';
import resourceTypes from '../../../enums/resourceTypes';
export default function Icon(_ref) {
  var resourceType = _ref.resourceType;

  switch (resourceType) {
    case resourceTypes.VIDEO:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: videoIcon,
        dataTestId: "Icon-".concat(resourceTypes.VIDEO)
      });

    case resourceTypes.ARTICLE:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: articleIcon,
        dataTestId: "Icon-".concat(resourceTypes.ARTICLE)
      });

    case resourceTypes.INTERACTIVE_MEDIA:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: interactiveIcon,
        dataTestId: "Icon-".concat(resourceTypes.INTERACTIVE_MEDIA)
      });

    case resourceTypes.AUDIO:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: podcastIcon,
        dataTestId: "Icon-".concat(resourceTypes.AUDIO)
      });

    case resourceTypes.LIVE_ONLINE_EVENT:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: liveEventIcon,
        dataTestId: "Icon-".concat(resourceTypes.LIVE_ONLINE_EVENT)
      });

    case resourceTypes.COURSE:
      return /*#__PURE__*/React.createElement(ResourceTypeIcon, {
        iconType: courseIcon,
        dataTestId: "Icon-".concat(resourceTypes.COURSE)
      });

    default:
      return null;
  }
}
var SVGProps = {
  color: 'var(--ebl-white)',
  size: '24'
};

var ResourceTypeIcon = function ResourceTypeIcon(icon) {
  return /*#__PURE__*/React.createElement(BaseIcon, {
    "data-testid": icon.dataTestId,
    svg: icon.iconType,
    size: SVGProps.size,
    colour: SVGProps.color
  });
};

Icon.propTypes = {
  resourceType: propTypes.string
};
Icon.defaultProps = {
  resourceType: null
};