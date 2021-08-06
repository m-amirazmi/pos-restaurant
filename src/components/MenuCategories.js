import React, { useState } from 'react'
import { Card } from 'reactstrap'
import styles from '../assets/scss/components/MenuCategories.module.scss'

export const MenuCategories = (props) => {

    const renderCategory = () => props.categories.map((category) => {
        const active = category.id === props.selectedCategory.id && styles.active
        return (
            <div className={styles.category} onClick={() => props.setSelectedCategory(category)}>
                <Card body className={`${styles.categoryCard} ${active} rounded me-3`} key={category.id}>
                    <p className="m-0 fs-5 text-center text-capitalize">
                        {category.name}
                    </p>
                </Card>
            </div>
        )
    })

    return (
        <div className="mt-4">
            {renderCategory()}
        </div>
    )
}
