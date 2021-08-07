import React, { useState } from 'react'
import { Card, Row, Col, Button, Input } from 'reactstrap'
import { useCart } from '../contexts/CartContext'
import styles from '../assets/scss/components/MenuCart.module.scss'

export const MenuCart = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
    const [paymentMedhods, setPaymentMethods] = useState([
        { id: '1', name: 'cash', icon: <i className="far fa-money-bill-alt"></i> },
        { id: '2', name: 'credit card', icon: <i class="far fa-credit-card"></i> }
    ])
    const [proceedPay, setProceedPay] = useState(false)
    const [input, setInput] = useState({ payment: 0 })

    const { cart, removeFromCart } = useCart()

    const handleRemoveFromCart = (menu) => {
        const removedList = removeFromCart(menu)
        console.log(removedList)
    }

    const handleInput = ({ target }) => {
        console.log(target)
        setInput({ ...input, [target.name]: target.value })
    }

    const renderCashier = () => {
        return (
            <div className="ms-auto text-end">
                <h5 className="mb-0">Muhamad Amir</h5>
                <p className="mb-0">Cashier</p>
            </div>
        )
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
            <div className="mt-2">
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
        const total = Math.round(+(+subTotal + +tax).toFixed(2))

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
            <div className="mt-auto mb-4">
                <h4 className="mb-4">Payment Method</h4>
                <Row className="mb-4">
                    {paymentMethodList}
                </Row>
                <div>
                    <Button className="w-100" color="primary" onClick={() => setProceedPay(!proceedPay)}>Proceed</Button>
                </div>
            </div>
        )
    }

    const renderPayCash = () => {
        let tax = 0.00
        const subTotal = cart.reduce((acc, curr) => +curr.price + acc, 0).toFixed(2)
        tax = +(subTotal * 0.1).toFixed(2)
        const total = Math.round(+(+subTotal + +tax).toFixed(2))

        const balance = +input.payment - +total

        return (
            <div className="mt-auto mb-4">
                <div className="mb-2 d-flex flex-row align-items-center text-primary" onClick={() => setProceedPay(!proceedPay)} style={{ cursor: 'pointer' }}>
                    <i className="fas fa-long-arrow-alt-left me-2"></i>
                    <span>Back</span>
                </div>
                <div className="mb-3">
                    <h4>Pay with Cash</h4>
                    <small>Please make sure to ask customer for exact change.</small>
                </div>
                <Row className="d-flex align-items-center mb-3">
                    <Col md={6}>
                        <p className="m-0 fs-4">Customer pays:</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center fs-4 fw-bold">
                        <p className="m-0 me-2">RM</p>
                        <Input type="number" className={`${styles.input} p-0 fs-4 border-primary fw-bold text-center`} name="payment" id="cash" placeholder="eg: 10.50" step=".10" value={input.payment} onChange={handleInput} />
                    </Col>
                </Row>

                <Row className="d-flex align-items-center">
                    <Col md={6}>
                        <p className="m-0 fs-4">Balance:</p>
                    </Col>
                    <Col md={6} className="d-flex align-items-center fs-4 fw-bold">
                        <p className="m-0 me-2">RM</p>
                        <Input type="number" disabled className={`bg-white border-0 p-0 fs-4 fw-bold text-center`} value={balance.toFixed(2)} />
                    </Col>
                </Row>

                <div className="mt-3">
                    <Button className="w-100" color="primary">Confirm</Button>
                </div>

            </div>
        )
    }

    const renderPaymentSwitch = () => {

        if (proceedPay && selectedPaymentMethod.id === '1') return renderPayCash()
        if (proceedPay && selectedPaymentMethod.id === '2') return (
            <div>
                This is credit card pay
            </div>
        )
        if (!proceedPay) return renderPaymentMethod()
    }

    return (
        <div className="p-4 d-flex flex-column h-100">
            {renderCashier()}
            {renderAddedMenu()}
            {renderTotal()}
            {renderPaymentSwitch()}
        </div>
    )
}
