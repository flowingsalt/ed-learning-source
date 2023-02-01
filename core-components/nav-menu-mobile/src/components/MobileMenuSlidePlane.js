import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { eventRegistry as events } from '@hmhco/amp-core-events';
import useStyles from './MobileMenuSlidePlane.styles';
/*
  Component is used to facilitate animation of the Hover menu
  Without it, we would have to manage animation translation along X,Y
  The idea is to render two hover menu outside of the screen by providing animationType
*/

var MobileMenuSlidePlane = function MobileMenuSlidePlane(props) {
  var menuType = props.menuType,
      children = props.children,
      isOpen = props.isOpen,
      onClose = props.onClose;

  var _useStyles = useStyles(),
      classes = _useStyles.classes;

  var mainNavHeight = 'var(--ebl-nav-height)';
  /**
   * function sets position of the menu at the give action
   * i.e if menu needs to slide from the top, then animationType = top and menuType = top
   */

  var menuSlideAction = function menuSlideAction(action) {
    var menuAction = {
      top: function top() {
        return {
          top: isOpen ? mainNavHeight : '-100vh',
          left: '0',
          visibility: isOpen ? 'visible' : 'hidden'
        };
      },
      side: function side() {
        return {
          top: mainNavHeight,
          left: isOpen ? '0' : '100vw',
          visibility: isOpen ? 'visible' : 'hidden'
        };
      }
    };
    return menuAction[action]();
  };

  var styleObj = menuSlideAction(menuType); // to facilitate a11y - close mobile menu hover with escape

  useEffect(function () {
    var closeWithEsc = function closeWithEsc(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener(events.KEY_DOWN, closeWithEsc);
    } else {
      document.removeEventListener(events.KEY_DOWN, closeWithEsc);
    }

    return function () {
      document.removeEventListener(events.KEY_DOWN, closeWithEsc);
    };
  }, [isOpen, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    id: "".concat(menuType, "-hover-menu"),
    className: classes.root,
    style: styleObj
  }, children);
};

MobileMenuSlidePlane.defaultProps = {
  isOpen: false
};
MobileMenuSlidePlane.propTypes = {
  menuType: PropTypes.oneOf(['top', 'side']).isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};
export default MobileMenuSlidePlane;