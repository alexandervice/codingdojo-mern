import React, {useState} from 'react'



const CreateBox = (props) => {
    const boxStyle = {
        height: "100px",
        width: "100px",
        color: {props.color}
    }
    const makeBox = () => {

    }
    return (
        <div className= {boxStyle} ></div>
    )
}

export default CreateBox