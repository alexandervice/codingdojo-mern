import React, { useState } from 'react'

const DeclareColor = (props) => {
    const [color, setColor] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='color'>Set Color</label>
                <input type="color" name="color"/>
                <input type='' value="Add Box"  />
            </form>
        </div>
    )
}

export default DeclareColor