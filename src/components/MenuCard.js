import React from 'react'
import { Card, Row, Col, InputGroup, Input, Button, InputGroupAddon } from 'reactstrap'
import styles from '../assets/scss/components/MenuCard.module.scss'
import { useCart } from '../contexts/CartContext'

export const MenuCard = (props) => {

    const { cart, addToCart } = useCart()

    const handleAddToCart = () => {
        const menu = { ...props.menu }
        addToCart(menu)
    }

    const renderMenu = () => {
        return (
            <Col md={6}>
                <Card body className={`${styles.menu} ${props.selectedStyles}`} onClick={() => props.setSelectedMenuCard(props.menu)}>
                    <Row>
                        <Col md={3} className={styles.image}>
                            <img src={props.menu.image} alt={props.menu.id} width="100%" height="100%" className="rounded" />
                        </Col>
                        <Col md={9}>
                            <div className={styles.title}>
                                <h4>{props.menu.name}</h4>
                            </div>
                            <div className={styles.description}>
                                <p>{props.menu.description}</p>
                            </div>
                            <div className={styles.price}>
                                <p className="fs-2 mb-0">RM {props.menu.price.toFixed(2)}</p>
                            </div>
                        </Col>
                    </Row>
                    <Button color="primary" className={`${styles.addButton} px-3 mt-3 w-100`} onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </Card>
            </Col>
        )
    }
    return renderMenu()
}
