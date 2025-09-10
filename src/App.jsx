import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Header />

      <div className='d-flex'>
        <Sidebar />
        <Home />
      </div>
      
      <Footer />
    </Provider>
      
    </>
  )
}

export default App
