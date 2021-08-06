import React, { useState } from 'react'
import { MenuCard } from './MenuCard'
import { Row } from 'reactstrap'
import styles from '../assets/scss/components/MenuListing.module.scss'
import creamy_chicken_rice_casserole from '../assets/images/creamy-chicken-rice-casserole.jpeg'

export const MenuListing = (props) => {

    const [menuList, setMenuList] = useState([
        { id: 1, name: 'Creamy Chicken and Rice Casserole', category: 'rice', image: creamy_chicken_rice_casserole, price: 17.90, description: 'chicken, campbell soup, casserole and rice, campbell soup, casserole and rice' },
        { id: 2, name: 'Creamy Chicken and Rice Casserole', category: 'snacks', image: creamy_chicken_rice_casserole, price: 17.90, description: 'chicken, campbell soup, casserole and rice, campbell soup, casserole and rice' },
        { id: 3, name: 'Creamy Chicken and Rice Casserole', category: 'rice', image: creamy_chicken_rice_casserole, price: 17.90, description: 'chicken, campbell soup, casserole and rice, campbell soup, casserole and rice' },
        { id: 4, name: 'Creamy Chicken and Rice Casserole', category: 'soup', image: creamy_chicken_rice_casserole, price: 17.90, description: 'chicken, campbell soup, casserole and rice, campbell soup, casserole and rice' },
        { id: 5, name: 'Creamy Chicken and Rice Casserole', category: 'rice', image: creamy_chicken_rice_casserole, price: 17.90, description: 'chicken, campbell soup, casserole and rice, campbell soup, casserole and rice' },
    ])

    const [selectedMenuCard, setSelectedMenuCard] = useState()

    const renderTitle = () => {
        return (
            <h3 className="text-capitalize mb-3">
                {props.selectedCategory.name} menu
            </h3>
        )
    }

    const renderMenuCard = () => {
        let filtered = menuList
        if (props.selectedCategory.name !== 'all') filtered = menuList.filter((menu) => menu.category.includes(props.selectedCategory.name))
        return filtered.map((menu) => {
            const selectedStyles = selectedMenuCard?.id === menu.id ? styles.selected : 'border-white'
            return (
                <MenuCard menu={menu} setSelectedMenuCard={setSelectedMenuCard} selectedMenuCard={selectedMenuCard} selectedStyles={selectedStyles} />
            )
        })
    }

    return (
        <div className="mt-5">
            {renderTitle()}
            <Row className="gx-5">
                {renderMenuCard()}
            </Row>
        </div>
    )
}
