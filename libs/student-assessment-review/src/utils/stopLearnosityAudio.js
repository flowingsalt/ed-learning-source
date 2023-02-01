import _typeof from "@babel/runtime/helpers/typeof";

var stopAllLearnosityAudio = function stopAllLearnosityAudio(LearnosityAppObject) {
  if (_typeof(LearnosityAppObject) === 'object') {
    var allQuestionFeatures = LearnosityAppObject.simpleFeatures();
    Object.keys(allQuestionFeatures).forEach(function (feature) {
      var _allQuestionFeatures$, _allQuestionFeatures$2;

      (_allQuestionFeatures$ = allQuestionFeatures[feature]) === null || _allQuestionFeatures$ === void 0 ? void 0 : (_allQuestionFeatures$2 = _allQuestionFeatures$.audio) === null || _allQuestionFeatures$2 === void 0 ? void 0 : _allQuestionFeatures$2.pause();
    });
  }
};

export default stopAllLearnosityAudio;