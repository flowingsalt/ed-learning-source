import env from './env';
import user, { userAccessToken, userRole } from './user';
import selectedState from './selectedState';
import selectCarouselItem from './carousel';
import entities from './entities';
import programDetails from './programDetails';
import manifestResources from './manifestResources';
export var getUserAccessToken = function getUserAccessToken(state) {
  return userAccessToken(state.user);
};
export var getUserRole = function getUserRole(state) {
  return userRole(state.user);
};
var rootReducers = {
  env: env,
  user: user,
  selectedState: selectedState,
  entities: entities,
  selectCarouselItem: selectCarouselItem,
  manifestResources: manifestResources,
  programDetails: programDetails
};
export default rootReducers;
export { default as env } from './env';
export { default as user } from './user';
export * from './env.selectors';
export * from './user.selectors';