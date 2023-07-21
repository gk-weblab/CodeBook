import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const initialFilter = {
  productList: [],
  sortBy: null,
  rating: 0,
  inStockOnly: false,
  bestSellerOnly: false,
};

const FilterContext = createContext(initialFilter);

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilter);
  const initializeProducts = (products) => {
    dispatch({
      type: "PRODUCT_LIST",
      payload: products,
    });
  };
  const sortBy = (products) => {
    if (state.sortBy === "ascending") {
      return products.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });
    } else if (state.sortBy === "descending") {
      return products.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    } else {
      return products;
    }
  };
  const rating = (products) => {
    if (state.rating) {
      return products.filter((product) => {
        return product.rating >= state.rating;
      });
    } else {
      return products;
    }
  };
  const inStockOnly = (products) => {
    if (state.inStockOnly) {
      return products.filter((product) => product.in_stock);
    } else {
      return products;
    }
  };
  const bestSellerOnly = (products) => {
    if (state.bestSellerOnly) {
      return products.filter((product) => product.best_seller);
    } else {
      return products;
    }
  };
  
  const value = {
    products: bestSellerOnly(inStockOnly(rating(sortBy(state.productList)))),
    initializeProducts, state, dispatch,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
