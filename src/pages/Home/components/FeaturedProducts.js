import { useState,useEffect } from "react";
import {ProductCard} from "../../../components";
import { getProducts } from "../../../services";
import { ErrorComponent, } from "../../../components";
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null);
  useEffect(() => {
      getProducts(null,'featured').then((data)=>{setProducts(data)},
			(reason) => {
				setError(reason);
			})
  }, []);
  if(error) { return (<ErrorComponent error={error} name={"products"}/>)}
  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products && products.map((product) => {
           return <ProductCard key={product.id} product={product} />
          })}
        </div>
    </section>
  )
}
