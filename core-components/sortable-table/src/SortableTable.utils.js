// Material UI sorting helper - https://material-ui.com/components/tables/#EnhancedTable.js
// The following helper functions and consts are used to create and sort dummy data for the storybook file
export var stableSort = function stableSort(array, sortFunction) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = sortFunction(a[0], b[0]);

    if (order !== 0) {
      return order;
    }

    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
};
export var isNumber = function isNumber(value) {
  return typeof value === 'number' || value && "".concat(parseInt(value, 10)) === value;
};
export var formatSortValue = function formatSortValue(data, orderBy) {
  var value = data[orderBy] && Object.prototype.hasOwnProperty.call(data[orderBy], 'raw') ? data[orderBy].raw : data[orderBy];

  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  return value;
};
export var desc = function desc(a, b, orderBy, customFormat) {
  var formatValue = customFormat || formatSortValue;
  var aValue = formatValue(a, orderBy);
  var bValue = formatValue(b, orderBy); // allow for better sorting with numbers while being consistent for mixed content like grades

  if (!customFormat && isNumber(aValue) && isNumber(bValue)) {
    aValue = parseInt(aValue, 10);
    bValue = parseInt(bValue, 10);
  }

  if (bValue < aValue) {
    return -1;
  }

  if (bValue > aValue) {
    return 1;
  }

  return 0;
};
export var getSorting = function getSorting(direction, orderBy, customFormat) {
  return direction === 'desc' ? function (a, b) {
    return desc(a, b, orderBy, customFormat);
  } : function (a, b) {
    return -desc(a, b, orderBy, customFormat);
  };
};

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export var topNavHeight = function topNavHeight() {
  var topNavHeightValue = getComputedStyle(document.documentElement).getPropertyValue('--ebl-nav-height');
  topNavHeightValue = topNavHeightValue.replace('rem', '');
  topNavHeightValue = convertRemToPixels(topNavHeightValue);
  return topNavHeightValue;
};