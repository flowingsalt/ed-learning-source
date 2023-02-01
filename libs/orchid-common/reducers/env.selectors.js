export var getEnvFromStore = function getEnvFromStore(state) {
  if (state.env) {
    return state.env;
  }

  return {};
};