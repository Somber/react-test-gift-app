import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
 import { GriftGridItem } from './GriftGridItem';

export const GiftGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifts( category );

    return (
        <>
            <h3 className=" animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className=" animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                { images.map( ( img ) => (
                    <GriftGridItem 
                        key= { img.id } 
                        { ...img}
                    />
                ) ) }
            </div>
        </>
    )
}
