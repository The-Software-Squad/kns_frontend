import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export function CartProvider({ children }) {

    const ls = typeof window !== "undefined" ? localStorage : null
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        if(cartProducts.length > 0){
            ls?.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    },[cartProducts])

    useEffect(() => {
        if(ls && ls.getItem("cartProducts")){
            setCartProducts(JSON.parse(ls.getItem("cartProducts"))) 
        }
    },[])
    function addProduct(productId){
        setCartProducts([...cartProducts, productId])
    }
    function removeProduct(productId){
        setCartProducts(prev => {
            const index = prev.indexOf(productId)
            if(index !== -1){
                if(prev.length === 1) {
                    clearCart()
                }
               return prev.filter((_, i) => i !== index)
            }
            return prev
        })
    }

    function clearCart(){
        ls?.removeItem("cartProducts");
        setCartProducts([]);
      }
    return (
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct, removeProduct, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}