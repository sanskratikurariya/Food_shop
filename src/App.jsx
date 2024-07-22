
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notf from './pages/Notf'
import Menupages from './pages/Menupages'



// routes container ka kaam karta hai
// route ki help se hum route set kar skte hai

function App() {
  

  return (
    <>
    {/* outlay me cheezo ko wrap karige */}
    {/* <Outlay>
      </Outlay> */}
      {/* hum browserRouter ko hum html tag ki  tarah use karige usme routes ka container create karige .isme hame route add karne hai  .hame path dena pdta hai kon sa componenets hame show karna hai vo batana pdta hai*/}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menupages/>} />
        <Route path='/contact' element={<Contact/>} />
         <Route path='*' element={<Notf/>} />
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
