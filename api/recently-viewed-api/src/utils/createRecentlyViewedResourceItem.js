// This just maps a resource item that we get back from the server to
// an object of the ResourceItem class
import ResourceItem from './ResourceItem';
import getOfflineAppLaunchType from './getOfflineAppLaunchType';
export var getContentImageUrl = function getContentImageUrl(programid, resource) {
  var _resource$item, _resource$item$;

  var num = (_resource$item = resource.item) === null || _resource$item === void 0 ? void 0 : (_resource$item$ = _resource$item[0]) === null || _resource$item$ === void 0 ? void 0 : _resource$item$.hierarchy;

  if (programid && num) {
    return "/content/ui/manifest/".concat(programid, "/images/").concat(num, ".jpg");
  }

  return null;
};
export var getTitle = function getTitle(programDetails, resource) {
  var _categoryKey$content, _resource$item2;

  var productCategory = resource.productCategory;
  var categoryKey = programDetails.key.find( // eslint-disable-next-line camelcase
  function (item) {
    var _item$content, _item$content$;

    return ((_item$content = item.content) === null || _item$content === void 0 ? void 0 : (_item$content$ = _item$content[0]) === null || _item$content$ === void 0 ? void 0 : _item$content$.api_id) === productCategory;
  });
  var category = categoryKey === null || categoryKey === void 0 ? void 0 : (_categoryKey$content = categoryKey.content) === null || _categoryKey$content === void 0 ? void 0 : _categoryKey$content[0].title;

  if (category !== resource.productDisplayTitle) {
    return "".concat(resource.title, ": ").concat(resource.productDisplayTitle);
  }

  var itemTitle = (_resource$item2 = resource.item) === null || _resource$item2 === void 0 ? void 0 : _resource$item2[0].title;

  if (itemTitle && itemTitle !== resource.title) {
    return "".concat(resource.title, ": ").concat(resource.item[0].title);
  }

  return (resource === null || resource === void 0 ? void 0 : resource.title) || '';
};

var createRecentlyViewedResourceItem = function createRecentlyViewedResourceItem(resource, verboseResource, programId, programTitle, programDetails, icon, carouselItems) {
  var _verboseResource$matc, _verboseResource$matc2, _verboseResource$matc3;

  var connectedPartnerLaunch = resource.connectedPartnerLaunch,
      hmhId = resource.hmhId,
      refId = resource.refId,
      identifier = resource.identifier,
      organisationId = resource.organisationId,
      mediaType = resource.mediaType,
      resourceType = resource.resourceType;
  var itemId = refId || identifier;
  var isCarouselItem = carouselItems.find(function (item) {
    var _item$studentEdition;

    return ((_item$studentEdition = item.studentEdition) === null || _item$studentEdition === void 0 ? void 0 : _item$studentEdition.identifier) === identifier;
  });
  var id = itemId;
  var title = getTitle(programDetails[programId], resource);
  var programRefId = programId;
  var imageUrl = isCarouselItem ? getContentImageUrl(programId, resource) : '';
  var launchType = getOfflineAppLaunchType(resource);
  var href = ((_verboseResource$matc = verboseResource.matches) === null || _verboseResource$matc === void 0 ? void 0 : (_verboseResource$matc2 = _verboseResource$matc.resource) === null || _verboseResource$matc2 === void 0 ? void 0 : (_verboseResource$matc3 = _verboseResource$matc2.file) === null || _verboseResource$matc3 === void 0 ? void 0 : _verboseResource$matc3[0].href) || '';
  var props = {
    connectedPartnerLaunch: connectedPartnerLaunch,
    title: title,
    hmhId: hmhId,
    itemId: itemId,
    id: id,
    programRefId: programRefId,
    programTitle: programTitle,
    imageUrl: imageUrl,
    icon: icon,
    launchType: launchType,
    href: href,
    organisationId: organisationId,
    mediaType: mediaType,
    resourceType: resourceType
  };
  return new ResourceItem(props);
};

export default createRecentlyViewedResourceItem;