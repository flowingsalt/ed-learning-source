/**
 * TODO: Use this for all app registrations,
 * so DOM element names only have to be maintained
 * in the Container
 *
 * @param {string} id
 */
var getDomElementGetter = function getDomElementGetter(id) {
  return function () {
    // Make sure there is a div for us to render into
    var el = document.getElementById(id);

    if (!el) {
      var container = document.createElement('div');
      container.id = id;
      var target = document.getElementById('amp-container-content') || document.body;
      target.appendChild(container);
      return container;
    }

    return el;
  };
};

export default getDomElementGetter;