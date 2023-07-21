export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productList: payload };
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "RATING":
      return { ...state, rating: payload };

    case "IN_STOCK":
      return { ...state, inStockOnly: payload };

    case "BEST_SELLERS":
      return { ...state, bestSellerOnly: payload };

    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBy: null,
        rating: null,
        inStockOnly: false,
        bestSellerOnly: false,
      };
    default:
      throw new Error(`${type} does not exists in Reducer switch case`);
  }
};
