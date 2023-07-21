import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, DashBoardPage,PageNotFound } from "../pages";
import { Protected } from "./Protected";

export const AllRoutes = () => {
  return (
    <div className="pt-16">
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail/>} />
        
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="cart" element={<Protected><CartPage/></Protected>}/>
        <Route path="order-summary" element={<Protected><OrderPage/></Protected>}/>
        <Route path="dashboard" element={<Protected><DashBoardPage/></Protected>}/>
        <Route path="*" element={<PageNotFound/>}/>

        
    </Routes>
    </div>
  )
}
