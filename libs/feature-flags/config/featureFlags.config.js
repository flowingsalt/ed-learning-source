export var Criteria = [{
  id: 'allowDistrictIDs',
  check: function check(userObject) {
    var _userObject$userConte;

    return userObject.value.includes((_userObject$userConte = userObject.userContext) === null || _userObject$userConte === void 0 ? void 0 : _userObject$userConte.districtPid);
  }
}, {
  id: 'allowedUserType',
  check: function check(userObject) {
    var _userObject$userConte2;

    return userObject.value.includes((_userObject$userConte2 = userObject.userContext) === null || _userObject$userConte2 === void 0 ? void 0 : _userObject$userConte2.role);
  }
}];
export var Features = [{
  id: 'selectDistrict',
  criteria: {
    allowDistrictIDs: true
  }
}, {
  id: 'selectUserType',
  criteria: {
    allowedUserType: true
  }
}];