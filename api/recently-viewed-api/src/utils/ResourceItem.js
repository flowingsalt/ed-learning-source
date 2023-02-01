import _classCallCheck from "@babel/runtime/helpers/classCallCheck"; // This class creates objects that are used to store for the recently viewed content
// feature. This ensures compatibility of data with the HMH Go (HMH Player replacement) application

var ResourceItem = function ResourceItem(props) {
  _classCallCheck(this, ResourceItem);

  this.connectedPartnerLaunch = props.connectedPartnerLaunch;
  this.title = props.title;
  this.hmhId = props.hmhId;
  this.itemId = props.itemId;
  this.id = props.id;
  this.programRefId = props.programRefId;
  this.programTitle = props.programTitle;
  this.imageUrl = props.imageUrl;
  this.icon = props.icon;
  this.launchType = props.launchType;
  this.href = props.href;
  this.organisationId = props.organisationId;
  this.mediaType = props.mediaType;
  this.resourceType = props.resourceType;
};

export default ResourceItem;