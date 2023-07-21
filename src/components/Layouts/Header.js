import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {Search} from "../"
import { DropdownLoggedIn,DropdownLoggedOut } from "../";
import { useCart } from "../../context";
import Logo from "../../assets/logo.png";
export const Header = () => {
  const {cartList} = useCart();
  const token = sessionStorage.getItem("token") || false;
  const dropRef = useRef(null)
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false);
  //show dropdownlogged in
  const[show,setShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("dark", dark);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const [searchDisplay,setSearchDisplay] = useState(false);

  const closeDropDown = (e) => {
    if (dropRef.current && show && !dropRef.current.contains(e.target)) {
      setShow(false);  
    }
  }
  useEffect(() => {
    document.addEventListener("click", closeDropDown)
  }, [show])
  
  
  return (
    <header className="z-50 w-full fixed">
      <nav className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span onClick={()=>setSearchDisplay(!searchDisplay)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span ref={dropRef} onClick={()=>{setShow(!show);}} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
         {show && 
        ( token ? <DropdownLoggedIn token={token} setShow={setShow}/> : <DropdownLoggedOut setShow={setShow}/>)
         
         }
         </div>
        </div>
      </nav>
    {searchDisplay && <Search setSearchDisplay={setSearchDisplay}/> }
    </header>
  );
};
