import { useState } from "react"
import { CartCard } from "./CartCard"
import { Checkout } from "./Checkout"
import { useCart } from "../../../context"
export const CartList = () => {
  const {cartList,total,groupedCartList} = useCart()
  const [placeOrder,setPlaceOrder] = useState()


 
  return (
    <>
      <section>
        <p className="text-2xl font-semithin dark:text-slate-100 my-10 ">
          My Cart: {cartList.length}
        </p>
      </section>
      
      <section>
        
        {groupedCartList.map((product,i) => {
          return <CartCard key={i} product={product[0]} quantity={product.length}/>
        })}
      </section>

      <section className="">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button onClick={()=>setPlaceOrder(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
          {placeOrder && <Checkout setPlaceOrder={setPlaceOrder}/> }
        </div>
      </section>
    </>
  )
}
