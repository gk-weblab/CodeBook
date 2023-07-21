import { useContext,useReducer } from "react"

import {cartReducer} from "../reducers"

const { createContext } = require("react")

const CartInitialState = {
    cartList:[],

}
const cartContext = createContext(CartInitialState)
export const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(cartReducer,CartInitialState);
    function addToCart(product){
        const updatedCart = state.cartList.concat(product)
       console.log(state.cartList)
         dispatch({
            type: "ADD_TO_CART",
            payload:updatedCart
        })
        
    }
    function removeFromCart(product){
        const updatedCart = state.cartList.filter(item => item.id !== product.id)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:updatedCart
        })
    }
    function removeOneFromCart(product){
        //if you try to directly copy it will create a reference to array
        const copiedCartList = state.cartList.slice()
        const index = copiedCartList.findIndex((item) => item.id === product.id)
        copiedCartList.splice(index,1)
        //console.log(updateCart,index,copiedCartList)
        dispatch({
            type: "REMOVE_ONE_FROM_CART",
            payload:copiedCartList
        })
    }
    function clearCart(){
          dispatch({
            type: "CLEAR_CART",
            payload:CartInitialState
          })
    }
    const grouped = (array) => {
        const group = {}
        array.forEach(item => {
      
          if(!group[item.id]){
            group[item.id] = []
          }
          group[item.id].push(item)
          
        })
        return Object.values(group)
        //group is object as with key id and values being an array of product object with same id
        //Object.values returns a array of
        // array of (products a.k.a objects) as values
        //Example [ 0:[{},{}], 1:[{}]]
       }
    const value = {
        cartList:state.cartList,
        total:state.cartList.reduce((acc,item)=> acc + item.price,0),
        groupedCartList:grouped(state.cartList),
        addToCart,removeFromCart,clearCart
        ,removeOneFromCart,grouped

    }

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}
export const useCart = () => {
    const context = useContext(cartContext)
    return context
}