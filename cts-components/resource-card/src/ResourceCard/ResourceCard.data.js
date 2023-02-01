/* eslint-disable import/prefer-default-export */
var onClick = function onClick(buttonType) {
  alert(buttonType);
};

export var mockResources = function mockResources(num) {
  var arr = [];

  for (var i = 0; i < num; i += 1) {
    arr.push({
      refId: "".concat(i),
      title: 'Martian Metropolis Text Sketch',
      dueDate: 'Due: Today - May 29, 2019',
      sectionName: 'Grade-6_Demons',
      dueDateStatus: i / 2 === 0 ? 'overdue' : 'dueToday',
      activities: [{
        sourceObject: {
          attributes: {
            mediaType: 'someMediaType'
          }
        }
      }],
      buttons: [{
        text: "I'm Done",
        arialabel: "I'm Done",
        variant: 'text',
        buttonType: 'iamdone',
        id: 'button-1'
      }, {
        text: 'Continue',
        arialabel: 'Continue',
        variant: 'contained',
        buttonType: 'continue',
        id: 'button-2'
      }],
      onClick: onClick
    });
  }

  return arr;
};
var dropdownPrefix = 'studentDashboard.assignmentsCenter.dropdown';
export var DROPDOWN_VALUES = [{
  value: 'viewAll',
  name: "".concat(dropdownPrefix, ".viewAll")
}, {
  value: 'dueToday',
  name: "".concat(dropdownPrefix, ".dueToday")
}, {
  value: 'overdue',
  name: "".concat(dropdownPrefix, ".overdue")
}];