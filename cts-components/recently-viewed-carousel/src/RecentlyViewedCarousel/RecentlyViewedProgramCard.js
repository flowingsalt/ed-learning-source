import React from 'react';
import PropTypes from 'prop-types';
import { ProgramCard } from '@hmhco/program-card/src/ProgramCard';
import { resourceIconMediaType } from '@hmhco/resource-icon-mapper/utils/resourceIconMapper';
import useStyles from './RecentlyViewedProgramCard.Styles';

var RecentlyViewedProgramCard = function RecentlyViewedProgramCard(_ref) {
  var item = _ref.item,
      handleItemClick = _ref.handleItemClick,
      breakpointsStudentDashboard = _ref.breakpointsStudentDashboard;
  var programTitle = item.programTitle,
      title = item.title,
      mediaType = item.mediaType;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(ProgramCard, {
    thumb: item.imageUrl,
    name: title,
    iconProps: {
      svg: resourceIconMediaType(mediaType).icon,
      size: '64',
      color: 'var(--ebl-secondary-2)',
      background: 'var(--ebl-signal-info-light)',
      transform: 'rotate(-15deg) scale(4)'
    },
    classes: {
      iconHolder: breakpointsStudentDashboard ? classes.studentIconHolder : null,
      media: breakpointsStudentDashboard ? classes.studentMedia : null
    },
    type: programTitle,
    ariaLabel: programTitle,
    onClick: function onClick() {
      return handleItemClick(item);
    }
  });
};

RecentlyViewedProgramCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    icon: PropTypes.string,
    imageUrl: PropTypes.string,
    programTitle: PropTypes.string,
    title: PropTypes.string,
    mediaType: PropTypes.string
  }).isRequired,
  handleItemClick: PropTypes.func.isRequired,
  breakpointsStudentDashboard: PropTypes.bool
};
RecentlyViewedProgramCard.defaultProps = {
  breakpointsStudentDashboard: false
};
export default RecentlyViewedProgramCard;