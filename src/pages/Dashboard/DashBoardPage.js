import { useEffect, useState } from "react";

import { DashBoardCard } from "./components/DashBoardCard";
import { DashBoardEmpty } from "./components/DashBoardEmpty";
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";
export const DashBoardPage = () => {
 
  const [order, setOrder] = useState(null);

  useEffect(()=> {
    getUserOrders().then((data)=>{setOrder(data)});
    
  },[])
  useTitle("DashBoard")
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        
      </section>
      
      <section>
     
      {order && (order.length === 0 ?  <DashBoardEmpty/> : 
      order.map((card)=>{
       return <DashBoardCard key={card.id} card={card} />
      }))
      }

      </section>
    </main>
  )
}
