import React, { useState } from 'react'
import { Card, Row, Col } from 'reactstrap'
import { useCart } from '../contexts/CartContext'
import styles from '../assets/scss/components/MenuCart.module.scss'

export const MenuCart = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
    const [paymentMedhods, setPaymentMethods] = useState([
        { id: '1', name: 'cash', icon: <i className="far fa-money-bill-alt"></i> },
        { id: '2', name: 'credit card', icon: <i class="far fa-credit-card"></i> }
    ])

    const { cart, removeFromCart } = useCart()

    const handleRemoveFromCart = (menu) => {
        const removedList = removeFromCart(menu)
        console.log(removedList)
    }

    const renderAddedMenu = () => {
        const menuList = cart.map((menu) => {
            return (
                <Card body className="mt-2 border-0">
                    <Row>
                        <Col md={3} className={styles.image}>
                            <img src={menu.image} alt={menu.id} width="100%" height="100%" className="rounded" />
                        </Col>
                        <Col md={9} className="d-flex flex-column">
                            <div className={styles.title}>
                                <h6>{menu.name}</h6>
                            </div>
                            <div className={`${styles.price} ms-auto`}>
                                <p className="fs-6 mb-0">RM {menu.price.toFixed(2)}</p>
                            </div>
                            <div className={`${styles.item} ms-auto mt-auto text-danger`} onClick={() => handleRemoveFromCart(menu)}>
                                <i className="fas fa-times"></i>
                                <span className="ms-2">Remove</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            )
        })
        return (
            <div className="mt-5">
                <h4 className="mb-4">Added Menu</h4>
                <div className="p-2 border border-primary rounded">
                    <div className={`${styles.menu}`}>
                        {menuList}
                    </div>
                </div>
            </div>
        )
    }

    const renderTotal = () => {
        let tax = 0.00
        const subTotal = cart.reduce((acc, curr) => +curr.price + acc, 0).toFixed(2)
        tax = +(subTotal * 0.1).toFixed(2)
        const total = +(+subTotal + +tax).toFixed(2)

        return (
            <div className="mt-5">
                <h6 className="d-flex flex-row">
                    <span>SubTotal</span>
                    <span className="ms-auto">RM {subTotal}</span>
                </h6>
                <h6 className={`${styles.tax} d-flex flex-row`}>
                    <span>Tax (10%)</span>
                    <span className="ms-auto">RM {tax.toFixed(2)}</span>
                </h6>
                <hr />
                <h5 className="d-flex flex-row">
                    <span>Total</span>
                    <span className="ms-auto">RM {total.toFixed(2)}</span>
                </h5>
            </div>
        )
    }

    const renderPaymentMethod = () => {

        const paymentMethodList = paymentMedhods.map((pay) => {
            const selectedStyle = pay.id === selectedPaymentMethod.id && styles.selectedPayment
            return (
                <Col md={6}>
                    <div className={`${styles.paymentMethod} ${selectedStyle} d-flex flex-column justify-content-center align-items-center`} onClick={() => setSelectedPaymentMethod(pay)}>
                        {pay.icon}
                        <span className="text-capitalize">{pay.name}</span>
                    </div>
                </Col>
            )
        })

        return (
            <div className="mt-auto">
                <h4 className="mb-4">Payment Method</h4>
                <Row>
                    {paymentMethodList}
                </Row>
            </div>
        )
    }

    return (
        <div className="p-4 d-flex flex-column h-100">
            {renderAddedMenu()}
            {renderTotal()}
            {renderPaymentMethod()}
        </div>
    )
}
