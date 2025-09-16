import React from 'react'
import {Link} from 'react-router-dom'
import { fetchProductByCategory } from '../redux/ProductSlice'
import { useDispatch } from 'react-redux'

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <>
      <div className='sidebar p-3' style={{width:"20%"}}>
        <h3>Categories</h3>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li className='p-2' onClick={() => dispatch(fetchProductByCategory(""))}>All</li>
            <li className='p-2' onClick={() => dispatch(fetchProductByCategory("men's clothing"))}>Men's Clothing</li>

            <li className='p-2' onClick={() => dispatch(fetchProductByCategory("women's clothing"))}>women's clothing</li>

            <li className='p-2'>jewelery</li>
            <li className='p-2'>electronics</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
