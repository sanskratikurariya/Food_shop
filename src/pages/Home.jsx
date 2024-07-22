import React from 'react'
import Outlay from '../components/layout/Outlay'
import { Link } from 'react-router-dom'
import Banner from '../images/khana.jpg'
import'../style/home.css';

const Home = () => {
  return (
<Outlay>
    <div className="home" style={{backgroundImage:`url(${Banner})`}}>
      <div className="container">
        <h1> Food Website</h1>
        <p>best food in india</p>
        {/* button ko hum link componenet se wrape kr dige taki hum button ko menupage per import kr ske */}
        <Link to="/menu">
        <button>
          Order Now
        </button>
        </Link>
        
      </div>
    </div>
</Outlay>
  )
}

export default Home
