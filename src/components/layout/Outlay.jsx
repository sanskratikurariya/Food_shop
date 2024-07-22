import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Outlay = ({children}) => {
  return (
    <>
      <Header/>
      <div>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Outlay
