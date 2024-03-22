import NewProduct from "./NewProduct"


const Class = ()=>{
    // const {productImage, productName, productPrice} = probs



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

    return(
        theContents.map((show, index)=>{
            return (
                <NewProduct ></NewProduct>
            )
        })
    )
}

export default Class