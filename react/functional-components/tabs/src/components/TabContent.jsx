import React from 'react'

const TabContent = ({tabArray, tabIndex}) => {
  return (
    <div className="tabContent">
      {tabArray[tabIndex].content}
    </div>
  )
}

export default TabContent