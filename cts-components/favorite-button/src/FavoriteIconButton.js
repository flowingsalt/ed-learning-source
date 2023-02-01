import React from 'react';
import Icon from '@hmhco/icon/src/Icon';
import IconButton from '@mui/material/IconButton';
import favoriteIcon from '@ed/baseline/icons/cts/favourite-filled-md.svg';
import favoriteIconOff from '@ed/baseline/icons/cts/favourite-outlined-md.svg';
import propTypes from 'prop-types';
import useStyles from './FavoriteButton.style';
export default function FavoriteIconButton(_ref) {
  var toggleFavorite = _ref.toggleFavorite,
      ariaLabelFavoriteCard = _ref.ariaLabelFavoriteCard,
      isFavorite = _ref.isFavorite;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(IconButton, {
    "data-testid": "FavoriteButton",
    onClick: toggleFavorite,
    className: "\n        ".concat(classes.favoriteButton, "\n        ").concat(isFavorite ? classes.favoriteIconOn : classes.favoriteIconOff, "\n      "),
    "aria-label": ariaLabelFavoriteCard,
    "aria-pressed": Boolean(isFavorite),
    size: "large"
  }, /*#__PURE__*/React.createElement(Icon, {
    svg: "".concat(isFavorite ? favoriteIcon : favoriteIconOff),
    size: "24"
  }));
}
FavoriteIconButton.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  toggleFavorite: propTypes.func.isRequired,
  ariaLabelFavoriteCard: propTypes.string.isRequired
};