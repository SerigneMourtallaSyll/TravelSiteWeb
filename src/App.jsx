import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home';
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      {/* <Home /> */}
      <Main />
      <Footer />
    </>
  )
}

export default App
