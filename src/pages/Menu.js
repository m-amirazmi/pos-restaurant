import React, { useState } from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { MenuCategories } from '../components/MenuCategories'
import { Input, Row, Col } from 'reactstrap'
import styles from '../assets/scss/components/Menu.module.scss'
import { MenuListing } from '../components/MenuListing'
import { MenuCart } from '../components/MenuCart'

export const Menu = () => {

    const [selectedCategory, setSelectedCategory] = useState({ id: 6, name: 'all' })
    const [categories, setCategories] = useState([
        { id: 6, name: 'all' },
        { id: 1, name: 'drinks' },
        { id: 2, name: 'rice' },
        { id: 4, name: 'noodles' },
        { id: 5, name: 'snacks' },
        { id: 7, name: 'soup' },
        { id: 3, name: 'dessert' },
    ])


    const renderMenuTitle = () => {
        return (
            <Row className={styles.menuHeader}>
                <Col md={6}>
                    <h2>Choose Category</h2>
                </Col>
                <Col md={{ size: 4, offset: 2 }} className="pe-0">
                    <Input type="email" name="email" className="rounded w-100 border-0 py-3 px-4" id="exampleEmail" placeholder="Search category or menu..." />
                </Col>
            </Row>
        )
    }

    const renderMenu = () => {
        return (
            <div className={styles.menu}>
                {renderMenuTitle()}
                <MenuCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <MenuListing selectedCategory={selectedCategory} />
            </div>
        )
    }

    const renderCart = () => {
        return (
            <div className={`${styles.cart}`}>
                <MenuCart />
            </div>
        )
    }


    return (
        <MainLayout>
            <div className="d-flex flex-row">
                {renderMenu()}
                {renderCart()}
            </div>
        </MainLayout>
    )
}
