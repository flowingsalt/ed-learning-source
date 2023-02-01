import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

var removeAccordionItem = function removeAccordionItem(prevState, level) {
  var tempArr = _toConsumableArray(prevState);

  var index = tempArr.indexOf(level);
  tempArr.splice(index, 1);
  return tempArr;
};

export default removeAccordionItem;