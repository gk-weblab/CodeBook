import { useState, useEffect } from "react";
import { ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"
import { AppliedFilters } from "./components/AppliedFilters";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProducts } from "../../services";
import { ErrorComponent, } from "../../components";

export const ProductsList = () => {
  const [error, setError] = useState(null);
  useTitle('Explore our eBooks collection')
  const { products, initializeProducts } = useFilter()
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q") || '';

  useEffect(() => {
    getProducts(searchTerm).then((data)=>{ initializeProducts(data)},
    (reason) => {
      setError(reason);
    })
  }, [searchTerm]);


  if(error) { return (<ErrorComponent error={error} name={"products"}/>)}
  return (
    <main>
      <section className="my-5">
        <div className="mb-2 mt-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">{searchTerm ? `Results for "${searchTerm}"`: 'All Ebooks'} ({products.length})</span>
          <span>
            <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </span>
        </div>
        <AppliedFilters setShow={setShow} />

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products && products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}

        </div>
      </section>
      {show && (<FilterBar setShow={setShow} />)}
    </main>
  )
}
