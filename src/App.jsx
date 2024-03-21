import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Product } from './components/Product'
import Class from './components/Ass'
import NewProduct from './components/NewProduct'


function App() {
  const theContents =  [
    {
        productImage: `./src/assets/images/game.jpg`,
        productName: `Game Counsole`,
        productPrice: `#80,000`
    },

    {
        productImage: ``,
        productName: `Drone`,
        productPrice: `#75,000`
    },

    {
        productImage: ``,
        productName: `System`,
        productPrice: `#45,000`
    },

    {
        productImage: ``,
        productName: `Macbook`,
        productPrice: `#340,000`
    },

    {
        productImage: ``,
        productName: `Mikano`,
        productPrice: `750,000`
    }
]

  return (
    <>
      <h1>Product Page</h1>

      {
        theContents.map((show, index)=>{
          return(<NewProduct productName={show.productName}></NewProduct>)
        })
      }





      {/* <div style={{display: `flex`, gap: 20}}>
        <Product productImage="./src/assets/images/game.jpg" productName="Game Console" productPrice="90,000"></Product>
        <Product productImage="./src/assets/images/drone.jpg" productName="Drone" productPrice="190,000"></Product>
        <Product productImage="./src/assets/images/headset.jpg" productName="Hedset" productPrice="290,000"></Product>
        <Product productImage="./src/assets/images/system.jpg" productName="System" productPrice="80,000"></Product>
      </div> */}

      
    </>
  )
}

export default App
