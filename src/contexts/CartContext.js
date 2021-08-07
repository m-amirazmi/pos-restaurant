import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (menu) => {
        const copyCart = [...cart]
        copyCart.push(menu)
        setCart(copyCart)
        return cart
    }

    const removeFromCart = (menu) => {
        const filteredOut = cart.filter((m) => m.id !== menu.id)
        setCart(filteredOut)
        return filteredOut
    }

    const value = { cart, addToCart, removeFromCart }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}