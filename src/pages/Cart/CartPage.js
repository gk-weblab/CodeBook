import {CartEmpty,CartList} from "./components";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const {cartList} = useCart();
  useTitle(`Cart [${cartList.length}]`);
  return (
    <main>  
      {cartList.length ? <CartList/>: <CartEmpty/>}        
    </main>
  )
}
