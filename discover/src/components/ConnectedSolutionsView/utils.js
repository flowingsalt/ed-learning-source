export default function launchIRead(accessToken, env, callback, location, isLearner) {
  if (isLearner) {
    callback(accessToken, env);
  } else {
    window.location.href = location;
  }
}