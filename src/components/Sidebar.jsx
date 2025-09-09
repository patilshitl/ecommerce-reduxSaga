import React from 'react'

function Sidebar() {
  return (
    <>
      <div className='sidebar p-3' style={{width:"20%"}}>
        <h3>Categories</h3>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li className='p-2'>All</li>
            <li className='p-2'>Men's Clothing</li>
            <li className='p-2'>women's clothing</li>
            <li className='p-2'>jewelery</li>
            <li className='p-2'>electronics</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
