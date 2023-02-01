var getViewType = function getViewType(currentQueryString) {
  if (currentQueryString.includes('keyresources-view')) {
    return 'keyresources-view';
  }

  if (currentQueryString.includes('content-view')) {
    return 'content-view';
  }

  if (currentQueryString.includes('standards-view')) {
    return 'standards-view';
  }

  if (currentQueryString.includes('connected-view')) {
    return 'connected-view';
  }

  return 'content-view';
};

export default getViewType;