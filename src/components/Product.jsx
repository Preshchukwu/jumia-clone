import './Product.css'



export const Product = (probs)=>{
    const {productImage, productName, productPrice} = probs

    return(
        <>
            <div className='ProductContainer'>
                <img src={productImage} alt="product image" />
                <p>{productName}</p>
                <h6>#{productPrice}</h6>
            </div>
        </>
    )
}


