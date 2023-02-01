import React from 'react';
import propTypes from 'prop-types';
import { useIntl } from 'react-intl';
import debounce from '@hmhco/amp-core/src/utils/debounce';
import AddTranslations from '@hmhco/i18n-react/src/AddTranslations/AddTranslations';
import FavoriteIconButton from './FavoriteIconButton';
import FavoriteDefaultButton from './FavoriteDefaultButton';
import getLocaleFile from './lang';

function FavoriteButton(_ref) {
  var isFavorite = _ref.isFavorite,
      resourceFileName = _ref.resourceFileName,
      addFavorite = _ref.addFavorite,
      removeFavorite = _ref.removeFavorite,
      displayTitle = _ref.displayTitle,
      isIcon = _ref.isIcon;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  var toggleFavorite = debounce(function () {
    var method = isFavorite ? removeFavorite : addFavorite;
    method(resourceFileName);
  }, 400);
  var ariaLabelFavoriteCard = formatMessage({
    id: isFavorite ? 'favoriteButton.remove.favorite.card' : 'favoriteButton.add.favorite.card'
  }, {
    titleCard: displayTitle
  });
  var favoriteButtonLabel = formatMessage({
    id: isFavorite ? 'favoriteButton.remove.favorite' : 'favoriteButton.add.favorite'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isIcon ? /*#__PURE__*/React.createElement(FavoriteIconButton, {
    toggleFavorite: toggleFavorite,
    ariaLabelFavoriteCard: ariaLabelFavoriteCard,
    isFavorite: isFavorite
  }) : /*#__PURE__*/React.createElement(FavoriteDefaultButton, {
    toggleFavorite: toggleFavorite,
    ariaLabelFavoriteCard: ariaLabelFavoriteCard,
    favoriteButtonLabel: favoriteButtonLabel,
    isFavorite: isFavorite
  }));
}

FavoriteButton.propTypes = {
  isFavorite: propTypes.bool.isRequired,
  resourceFileName: propTypes.string,
  addFavorite: propTypes.func.isRequired,
  removeFavorite: propTypes.func.isRequired,
  displayTitle: propTypes.string,
  isIcon: propTypes.bool.isRequired
};
export default (function (props) {
  return /*#__PURE__*/React.createElement(AddTranslations, {
    getLocaleFile: getLocaleFile
  }, /*#__PURE__*/React.createElement(FavoriteButton, props));
});