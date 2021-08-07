import React from 'react'
import { useCart } from '../contexts/CartContext'

export const MenuCart = () => {

    const { cart } = useCart()

    console.log(cart)

    const renderAddedMenu = () => {
        return cart.map((menu) => {
            return (
                <h1>
                    {menu.name}
                </h1>
            )
        })
    }

    return (
        <div>
            This is cart section
            {renderAddedMenu()}
        </div>
    )
}
