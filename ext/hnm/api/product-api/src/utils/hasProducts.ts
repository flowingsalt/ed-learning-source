const hasProducts = (allocation): boolean => {
  return (
    allocation?.productBundle?.bundleMemberships &&
    allocation.productBundle.bundleMemberships.some(
      membership => membership?.product,
    )
  );
};

export default hasProducts;
