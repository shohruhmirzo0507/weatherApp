import React from 'react'
import Application from './Application'
import "./Main.css"
import Nav from './Nav'
// import gif from "../../assets/lo.gif"
function Main() {
  return (
    <div className='banner'>
        <Nav/>
        <Application/>
    </div>
  )
}

export default Main