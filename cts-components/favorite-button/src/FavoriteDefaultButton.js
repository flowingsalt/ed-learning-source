import React from 'react';
import className from 'classnames';
import Icon from '@hmhco/icon/src/Icon';
import Button from '@mui/material/Button';
import favoriteIcon from '@ed/baseline/icons/cts/favourite-filled-md.svg';
import favoriteIconOff from '@ed/baseline/icons/cts/favourite-outlined-md.svg';
import propTypes from 'prop-types';
import useStyles from './FavoriteButton.style';
export default function FavoriteDefaultButton(_ref) {
  var toggleFavorite = _ref.toggleFavorite,
      ariaLabelFavoriteCard = _ref.ariaLabelFavoriteCard,
      favoriteButtonLabel = _ref.favoriteButtonLabel,
      isFavorite = _ref.isFavorite;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  return /*#__PURE__*/React.createElement(Button, {
    "data-testid": "FavoriteDefaultButton",
    onClick: toggleFavorite,
    color: "primary",
    variant: "outlined",
    className: className(classes.favoriteButton, isFavorite ? classes.favoriteIconOn : classes.favoriteIconOff),
    "aria-label": ariaLabelFavoriteCard,
    "aria-pressed": isFavorite,
    startIcon: /*#__PURE__*/React.createElement(Icon, {
      svg: isFavorite ? favoriteIcon : favoriteIconOff,
      size: "16"
    })
  }, favoriteButtonLabel);
}
FavoriteDefaultButton.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  toggleFavorite: propTypes.func.isRequired,
  ariaLabelFavoriteCard: propTypes.string.isRequired,
  favoriteButtonLabel: propTypes.string.isRequired
};