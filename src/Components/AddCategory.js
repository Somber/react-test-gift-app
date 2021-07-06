import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [busquedaValue, setbusquedaValue] = useState('');

    const handleInputChange = (e) =>{
        setbusquedaValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (busquedaValue.trim().length > 2){
            setCategories((cat)=>[busquedaValue]);
        }
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = "text"
                value = { busquedaValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
