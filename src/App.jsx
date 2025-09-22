import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/Store'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <div className='d-flex'>
          <Sidebar />
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App
