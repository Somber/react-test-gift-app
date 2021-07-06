import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GiftGrid } from './Components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Marvel']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />            
            <ol>
                { 
                    categories.map( ( category ) => (
                        <GiftGrid 
                            key= { category } 
                            category = { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

