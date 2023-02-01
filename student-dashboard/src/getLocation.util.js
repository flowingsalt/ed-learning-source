function getLocation() {
  var location = window.location.hash;
  location = location.replace('#/', '');
  return location;
}

export default getLocation;