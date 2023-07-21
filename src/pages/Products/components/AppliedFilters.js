
import { useFilter } from "../../../context";

export const AppliedFilters = ({ setShow }) => {
  const { state, dispatch } = useFilter();
  const { inStockOnly, bestSellerOnly, rating, sortBy } = state;
  const filters = bestSellerOnly || inStockOnly || rating > 0 || sortBy !== null;

  return (
    <div className="flex mb-5 mx-3 items-center content-center gap-4">
      <div
        onClick={() => setShow(true)}
        className="hover:text-blue-400 ml-3 p-1.5 px-4 dark:bg-slate-700 bg-slate-200 border-solid rounded-full text-gray-600 dark:text-gray-100"
      >
        <i className={`${filters ? "bi-funnel-fill" : "bi-funnel"} bi`}></i>
      </div>
      {filters && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100">
          <span className="font-saira flex items-center justify-center p-1.5  px-4">Reset</span>
          <i
            onClick={() => {
              dispatch({ type: "CLEAR_FILTERS" });
            }}
            className="transform scale-110 mr-0.5 dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-x-circle-fill dark:hover:text-rose-500 hover:text-rose-500"
          ></i>
        </div>
      )}
      {sortBy === "descending" && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100 ">
          <span className="font-saira flex items-center justify-center p-1.5  px-4" >Price High to Low</span>
          <i
            onClick={() => {
              dispatch({ type: "SORT_BY", payload: "ascending" });
            }}
            className="transform scale-110  dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-sort-down mr-3 dark:hover:text-emerald-500 hover:text-emerald-300"
        
          ></i>
        </div>
      )}
      {sortBy === "ascending" && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100 ">
          <span className="font-saira flex items-center justify-center p-1.5  px-4">Price Low to High</span>
          <i
            onClick={() => {
              dispatch({ type: "SORT_BY", payload: "descending" });
            }}
            className="transform scale-110  dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-sort-down-alt mr-3 dark:hover:text-emerald-500 hover:text-emerald-500"
        
          ></i>
        </div>
      )}
      {bestSellerOnly && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100 ">
          <span className="font-saira flex items-center justify-center p-1.5  px-4">Best Sellers</span>
          <i
            onClick={() => {
              dispatch({ type: "BEST_SELLERS", payload: !bestSellerOnly });
            }}
            className="transform scale-110 mr-0.5 dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-x-circle-fill dark:hover:text-rose-500 hover:text-rose-500"
        
          ></i>
        </div>
      )}
      {inStockOnly && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100 ">
          <span className="font-saira flex items-center justify-center p-1.5  px-4">In Stock</span>
          <i
            onClick={() => {
              dispatch({ type: "IN_STOCK", payload: !inStockOnly });
            }}
            className="transform scale-110 mr-0.5 dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-x-circle-fill dark:hover:text-rose-500 hover:text-rose-500"
        
          ></i>
        </div>
      )}
      {rating > 0 && (
        <div className="flex  justify-between dark:bg-slate-700 bg-slate-200 border-solid  rounded-full text-gray-600 dark:text-gray-100 ">
          <span className="font-saira flex items-center justify-center p-1.5  px-4">
            <strong className="font-bold not-italic">{rating}</strong>
            <i className="text-yellow-500 mx-2 bi bi-star-fill"></i>and above
          </span>
          <i
            onClick={() => {
              dispatch({ type: "RATING", payload: 0 });
            }}
            className="transform scale-110 mr-0.5 dark:text-slate-500  overflow-hidden text-3xl leading-3 flex items-center justify-center  bi bi-x-circle-fill dark:hover:text-rose-500 hover:text-rose-500"
        
          ></i>
        </div>
      )}
    </div>
  );
};
