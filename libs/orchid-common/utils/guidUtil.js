function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export var getRandomId = function getRandomId() {
  var blocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1; // generate an id with length 4 x blocks

  var id = '';

  for (var i = 0; i < blocks; i++) {
    id += s4();
  }

  return id;
};
export var getRandomGuid = function getRandomGuid() {
  return "".concat(getRandomId(2), "-").concat(getRandomId(), "-").concat(getRandomId(), "-").concat(getRandomId(), "-").concat(getRandomId(3));
};