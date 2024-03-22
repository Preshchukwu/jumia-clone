import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Product } from './components/Product'
import NewProduct from './components/NewProduct'
import Form from './components/Form'


function App() {
  const theContents =  [
    {
        productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0316842/1.jpg?2373https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/0316842/1.jpg?2373`,
        productName: `Game Counsole`,
        productPrice: `#80,000`
    },

    {
        productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/88/6995942/1.jpg?1718`,
        productName: `Drone`,
        productPrice: `#75,000`
    },

    {
        productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/7917322/1.jpg?9021`,
        productName: `Tiger`,
        productPrice: `#45,000`
    },

    {
        productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/342027/1.jpg?0825`,
        productName: `Macbook`,
        productPrice: `#340,000`
    } 
]

  const [logged, setlog] = useState(false)

  const toogle = ()=>{
    const presentState = logged
    setlog(!presentState)
  }
  return (

      

    <>

      {/* <h1>Product Page</h1>
      <button onClick={()=> {toogle()}}>{logged ? `Logout`: `Login`}</button>

      {logged ?  <div className="container">
       {
        theContents.map((show, index)=>{
          return(<NewProduct key={index} productImage={show.productImage} productName={show.productName} productPrice={show.productPrice}></NewProduct>)
        })
        }
     </div> : `Please log in and buy market`} */}


     
    <Form></Form>
    </>
  )
}

export default App
