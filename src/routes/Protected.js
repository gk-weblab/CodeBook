import { Navigate } from "react-router-dom";
export const Protected = ({children}) => {
    const token = sessionStorage.getItem("token");
  return  token ? children : <Navigate to="/login"/>
  
}
