import React, { useState } from 'react'

const DeclareColor = (props) => {
    const {boxData, setBoxData} = props;

    const [color, setColor] = useState("#000000");
    const [dimension, setDimension] = useState(100);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxData([...boxData, 
            {
                color: color,
                dimension: dimension + "px"
            }
        ]);
        setColor("#000000");
        setDimension(100);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='color'>Set Color</label>
                    <input type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='dimension'>Set Dimensions</label>
                    <input type="number" name="dimension" value={dimension} onChange={(e) => setDimension(e.target.value)}/>
                </div>
                <input type='submit' value="Add Box"/>
            </form>
        </div>
    )
}

export default DeclareColor