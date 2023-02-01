import { logOut } from '../utils/logout.util';
export function testApolloError(networkError) {
  if (networkError) {
    if (urlCheckPasses() && networkError.statusCode >= 401 && networkError.statusCode < 500 && networkError.statusCode !== 404) {
      logOut();
    }
  }
}
export function testAxiosError(error) {
  if (urlCheckPasses() && error.response.status >= 401 && error.response.status < 500 && error.response.status !== 404 && error.response.status !== 409) {
    logOut();
  }
}

function urlCheckPasses() {
  var currentUrl = window.location.href;

  if (!currentUrl.includes('contentProvider') && !currentUrl.includes('login') && !currentUrl.includes('register') && !currentUrl.includes('forgot-password') && !currentUrl.includes('new-password')) {
    return true;
  }

  return false;
}