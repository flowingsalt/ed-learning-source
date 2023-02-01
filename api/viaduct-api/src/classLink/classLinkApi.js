import { createAxiosCancelable } from '@hmhco/core-network/src/axiosHelpers';
import requestHelper from '@hmhco/core-network/src/utils/requestHelper';
import { VIADUCT_BASE_URL, CLASSLINK_ENDPOINT } from '../constants';
/**
 * Class Link Api is used to create a relationship between Ed and third party classes
 *
 * Class Linking is currently an ad-hoc/many-to-many relationship relationship between an Ed Class and a third party app class i.e Google Classroom
 * Logically, most Users would be treating the relationship as a 1:1 mapping but should cater for edge cases.
 *
 * https://confluence.hmhco.com/pages/viewpage.action?spaceKey=EDUED&title=Class+Linking
 */

var classLinkApi = function classLinkApi() {
  var pactConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _createAxiosCancelabl = createAxiosCancelable(),
      client = _createAxiosCancelabl.client,
      cancel = _createAxiosCancelabl.cancel,
      cancelToken = _createAxiosCancelabl.cancelToken,
      isCancel = _createAxiosCancelabl.isCancel;

  var request = requestHelper({
    client: client,
    cancelToken: cancelToken,
    isCancel: isCancel,
    baseURL: VIADUCT_BASE_URL,
    pactConfig: pactConfig
  });
  return {
    /**
     *
     * @param {object} classLinkData
     * @param {string} classLinkData.hmhSectionRefId The Ed classes sectionRefId
     * @param {string} classLinkData.clientSectionId The client's(e.g. google's) corresponding "sectionId". I.e. For Google it's courseId
     * @param {string} thirdPartyClient Third party client app. e.g. googleclassroom
     */
    createClassLink: function createClassLink(classLinkData, thirdPartyClient) {
      var params = {
        client: thirdPartyClient
      };
      var queryParams = "?".concat(new URLSearchParams(params).toString());
      return request.post("".concat(CLASSLINK_ENDPOINT).concat(queryParams), classLinkData);
    },

    /**
     *
     * @param {string} hmhSectionRefId The Ed classes sectionRefId
     * @param {string} thirdPartyClient Third party client app. e.g. googleclassroom
     */
    fetchClassLink: function fetchClassLink(hmhSectionRefId, thirdPartyClient) {
      var params = {
        client: thirdPartyClient,
        hmhSectionRefId: "".concat(hmhSectionRefId)
      };
      var queryParams = "?".concat(new URLSearchParams(params).toString());
      return request.get("".concat(CLASSLINK_ENDPOINT).concat(queryParams));
    },

    /**
     *
     * @param {string} thirdPartyClient Third party client app. e.g. googleclassroom
     */
    fetchAllClassLinks: function fetchAllClassLinks(thirdPartyClient) {
      var params = {
        client: thirdPartyClient
      };
      var queryParams = "?".concat(new URLSearchParams(params).toString());
      return request.get("".concat(CLASSLINK_ENDPOINT, "/user").concat(queryParams));
    },

    /**
     *
     * @param {string} classLinkId the unique ID created when a class link is created.
     * @param {object} classLinkData
     * @param {string} classLinkData.hmhSectionRefId The Ed classes sectionRefId
     * @param {string} classLinkData.clientSectionId The client's(e.g. google's) corresponding "sectionId". I.e. For Google it's courseId
     * @param {string} thirdPartyClient Third party client app. e.g. googleclassroom
     */
    updateClassLink: function updateClassLink(classLinkId, classLinkData, thirdPartyClient) {
      var params = {
        client: thirdPartyClient
      };
      var queryParams = "?".concat(new URLSearchParams(params).toString());
      return request.patch("".concat(CLASSLINK_ENDPOINT, "/").concat(classLinkId).concat(queryParams), classLinkData);
    },

    /**
     *
     * @param {string} classLinkId the unique ID created when a class link is created.
     * @param {string} thirdPartyClient Third party client app. e.g. googleclassroom
     */
    deleteClassLink: function deleteClassLink(classLinkId, thirdPartyClient) {
      var params = {
        client: thirdPartyClient
      };
      var queryParams = "?".concat(new URLSearchParams(params).toString());
      return request["delete"]("".concat(CLASSLINK_ENDPOINT, "/").concat(classLinkId).concat(queryParams));
    },
    cancel: cancel
  };
};

export default classLinkApi;