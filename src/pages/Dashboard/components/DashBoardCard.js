import { useCart } from "../../../context"

import { Link } from "react-router-dom"
export const DashBoardCard = ({card}) => {
    const {grouped} = useCart()
    const {cartList,amount_paid,id} = card
    const groupedCartList = grouped(cartList)
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {id}</span>
            <span>Total: {amount_paid}</span>
        </div>
       {groupedCartList.map((products,i)=>{
        return <div key={i} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
         <div className="flex">
             <Link to={`/products/${products[0].id}`}>
                 <img className="w-32 rounded" src={`${products[0].poster}`} alt="" />
             </Link>
             <div className="">
                 <Link to={`/products/${products[0].id}`}>
                     <p className="text-lg ml-2 dark:text-slate-200">{products[0].name}</p>
                 </Link>
                 <div className="text-lg m-2 dark:text-slate-200 flex gap-4">
                     <span>${products[0].price * products.length}</span>
                     <span>Qty: {products.length}</span>
                 </div>
             </div>
         </div>
     </div>
       })}
    </div>
  )
}
