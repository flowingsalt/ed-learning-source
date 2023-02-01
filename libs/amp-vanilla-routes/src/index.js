import { VANILLA_ROUTES, VANILLA_ROUTE_EXCLUSIONS } from './constants';
export var isVanillaRoute = function isVanillaRoute() {
  /* eslint-disable-next-line no-restricted-globals */
  return VANILLA_ROUTES.some(function (route) {
    return location.href.includes(route);
  });
};
export { VANILLA_ROUTE_EXCLUSIONS };