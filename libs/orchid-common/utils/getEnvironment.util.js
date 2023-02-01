export var getEnvironment = function getEnvironment() {
  if (window.location.href.includes('int.hmhone.app.hmhco.com')) {
    return 'int';
  }

  if (window.location.href.includes('local.hmhone.hmhco.com')) {
    return 'local';
  }

  if (window.location.href.includes('cert.hmhco.com')) {
    return 'cert';
  }

  if (window.location.href.includes('www.hmhco.com')) {
    return 'prod';
  }

  return 'int';
};