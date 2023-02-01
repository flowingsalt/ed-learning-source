import isString from 'lodash/isString'; // This has been ported over from jsonUtil in Arvo

export var attemptToParseJson = function attemptToParseJson(possibleJson) {
  if (!possibleJson) {
    return {};
  }

  var json = {};

  try {
    json = fromJSON(possibleJson);
  } catch (error) {// We can ignore this. We use this util mainly on messages from event listeners which can contain non-json.
  }

  return json;
}; // Replica of angular.fromJSON method

function fromJSON(json) {
  return isString(json) ? JSON.parse(json) : json;
}