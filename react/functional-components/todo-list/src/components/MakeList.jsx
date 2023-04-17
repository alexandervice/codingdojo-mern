import React, { useState } from 'react'

const MakeList = (props) => {
  const {todoArray, setTodoArray} = props;
  
  const [todoItem, setTodoItem] = useState("");

  return (
    <div>MakeList</div>
  )
}

export default MakeList