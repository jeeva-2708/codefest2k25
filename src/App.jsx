
import Background from './components/Background'
import './App.css'
import Mcode from './components/Mcode'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
 
  return (
    <>
      <Background/>
      <Mcode/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<home/>} />
          <Route path='/components/AboutUs' element={<AboutUs/>} />
          <Route path='/components/Events' element={<Events/>} />
          <Route path='/components/Instructions' element={<Instructions/>} />
        </Routes>
      </BrowserRouter> */}
   </>
  )
}

export default App
