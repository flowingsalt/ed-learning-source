export default function gradeFormatter(value) {
  var sorter = function sorter(a, b) {
    return a - b;
  };

  var isK = function isK(v) {
    return v === 'k' || v === 'K';
  };

  var mapper = function mapper(v) {
    return isK(v) ? 0 : parseInt(v, 10);
  };

  var filter = function filter(v) {
    return !Number.isNaN(Number(v));
  };

  var isLast = function isLast(v, idx, arr) {
    return idx === arr.length - 1;
  };

  var hasNextAndPrevious = function hasNextAndPrevious(v, idx, arr) {
    return idx !== 0 && v + 1 === arr[idx + 1] && v - 1 === arr[idx - 1];
  };

  var isFirstOfGroup = function isFirstOfGroup(v, idx, arr) {
    return v + 1 === arr[idx + 1];
  };

  var base = value.map(mapper).sort(sorter).filter(filter);
  return base.map(function (v, idx, arr) {
    if (isLast(v, idx, arr)) {
      return v;
    }

    if (hasNextAndPrevious(v, idx, arr)) {
      return '';
    }

    if (isFirstOfGroup(v, idx, arr)) {
      return "".concat(v, "-");
    }

    return "".concat(v, ", ");
  }).join('').replace(/^0/, 'K');
}