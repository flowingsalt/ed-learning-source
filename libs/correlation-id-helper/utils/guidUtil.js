function s4() {
  if (window.crypto) {
    var _randomNumber = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return _randomNumber.toString(16).substring(0, 4);
  }

  var randomNumber = (1 + Math.random()) * 0x10000;
  return Math.floor(randomNumber).toString(16).substring(1);
}

export var getRandomId = function getRandomId() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1; // generate an id with length 4 x blocks

  var id = '';

  for (var i = 0; i < blocks; i += 1) {
    id += s4();
  }

  return id;
};
export var getRandomGuid = function getRandomGuid() {
  return "".concat(getRandomId(2), "-").concat(getRandomId(), "-").concat(getRandomId(), "-").concat(getRandomId(), "-").concat(getRandomId(3));
};