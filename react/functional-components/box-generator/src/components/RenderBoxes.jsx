import React from 'react'

const RenderBoxes = (props) => {
    const {boxData} = props;

    return (
        <div>
            {
                boxData.map((box, index) =>(
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: box.dimension,
                        width: box.dimension,
                        backgroundColor: box.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default RenderBoxes