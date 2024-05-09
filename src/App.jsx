import React from 'react'
import googlelogo from "./assets/googlelogo.png"
import mick from './assets/mick.svg'
import camera from './assets/camera.svg'
import search from './assets/search.svg'
import dor from './assets/dor.svg'
import unnamed from './assets/unnamed.jpg'

const App = () => {
  return (
    <>
        <div className='upTag'>
          <p>Gmail</p>
          <p>Image</p>
           <img src={dor} alt="" />
           <img src={unnamed} alt="" />
        </div>
      <div className='div1'>


        {/* <h1 style={style}>hello everyone am trying this </h1> */}
        <img src={googlelogo} alt="" />

        <div className='divTag'>
          <img src={search} alt="" />
          <input style={{ border: "none"}} type="text" />
          <img src={mick} alt="" />
          <img style={{ width: "25px" }} src={camera} alt="" />
        </div>

        <div className='but'>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>

        <div className='buildTag'>
          <h5>Google offered in:</h5>
          <a href="">Hausa</a>
          <a href="">Igbo</a>
          <a href="">Ede Yoruba</a>
          <a href="">Nigerian Pidgin</a>
        </div>
      </div>
    </>
  )
}

export default App