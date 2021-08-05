import React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import { Input, Row, Col } from 'reactstrap'
import styles from '../assets/scss/components/Menu.module.scss'

export const Menu = () => {

    const renderMenu = () => {
        return (
            <div className={styles.menu}>
                <Row className={styles.menuHeader}>
                    <Col md={6}>
                        <h2>Choose Category</h2>
                    </Col>
                    <Col md={{ size: 4, offset: 2 }}>
                        <Input type="email" name="email" className="rounded ms-auto w-100 border-0 py-3 px-4" id="exampleEmail" placeholder="Search category or menu..." />
                    </Col>
                </Row>
            </div>
        )
    }

    const renderCart = () => {
        return (
            <div className={`${styles.cart}`}>
                this is the right side cart
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
