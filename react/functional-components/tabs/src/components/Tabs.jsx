import React from 'react'

const Tabs = ({tabArray, tabIndex, setTabIndex}) => {
  
  const updateTabIndex = (e) => {
    e.preventDefault();
    setTabIndex(e.target.value);
  }
  return (
    <div>
      {tabArray.map((list, index) => (
        <div key={index} className='tab'>
          <button className='tabLabel' value={index+1} onClick={updateTabIndex}>{list.label}</button>
        </div>
      ))
      }
      <div className="tabContent">
        {tabArray.content[tabIndex]}
      </div>
    </div>
  )
}

export default Tabs