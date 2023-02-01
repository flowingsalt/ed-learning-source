import { HnmKeyValsParser } from '@hnm/utils';
import { HeinemannProduct } from '@hnm/types';

const mapProduct = (product, allocation): HeinemannProduct => {
  const parsedProduct = HnmKeyValsParser.parse(product);
  parsedProduct.expirationDate = allocation.expirationDate;
  parsedProduct.quantity =
    Number(allocation.quantityAllocated ?? 0) +
    Number(allocation.quantityUnallocated ?? 0);
  parsedProduct.quantityAllocated = allocation.quantityAllocated;
  parsedProduct.quantityUnallocated = allocation.quantityUnallocated;
  parsedProduct.allocationId = allocation.id;
  return parsedProduct;
};

export default mapProduct;
