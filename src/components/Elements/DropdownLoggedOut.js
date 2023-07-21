import { Link } from "react-router-dom"
export const DropdownLoggedOut = ({setShow}) => {
  return (
    <div id="dropdownAvatar" className="  select-none	absolute top-10 backdrop-blur-sm z-10 w-44 bg-white/90 rounded divide-y divide-gray-100 shadow dark:bg-gray-700/90 dark:divide-gray-300">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
                <Link onClick={()=>setShow(false)}to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-600 backdrop-blur-0 dark:hover:text-white">All eBooks</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)}to="login" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-600 backdrop-blur-0 dark:hover:text-white">Login</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)}to="register" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-slate-600 backdrop-blur-0 dark:hover:text-white">Register</Link>
            </li>
        </ul>
    </div>
  )
}
