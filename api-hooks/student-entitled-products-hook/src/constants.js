import getConfigForCurrentEnv from '@hmhco/amp-core-env/src/getConfig';
import { PRODUCT_ENDPOINT } from '@hmhco/onesearch-product-api/src/product/productAPI';

var _getConfigForCurrentE = getConfigForCurrentEnv(),
    baseURL = _getConfigForCurrentE.baseURL,
    onesearch = _getConfigForCurrentE.onesearch;

export var MAX_CHARACTERS_PERMITTED_IN_URL = 2000;
export var PRODUCTS_ONESEARCH_URL = new URL("".concat(baseURL).concat(onesearch, "/").concat(PRODUCT_ENDPOINT));
export var PRODUCTS = {
  iRead: 'iRead',
  amira: 'Amira',
  waggle: 'Waggle',
  waggleEla: 'Waggle ELA',
  waggleMath: 'Waggle Math',
  writable: 'Writable',
  writingTask: 'Writing Task',
  math180: 'Math 180',
  read180: 'Read 180'
};