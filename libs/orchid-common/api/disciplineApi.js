import requestFactory from 'orchid-common/api/requestFactory';
var url = '/api/onesearch/v1/discipline';
export default {
  fetchDisciplines: function fetchDisciplines(_ref) {
    var sif = _ref.sif;
    return requestFactory(url, 'get', sif)["catch"](function (error) {
      return {
        error: error
      };
    });
  }
};