
const NewProduct = (probs)=>{
    return(
        <div>
            <img src={probs.productImage} alt="" />
            <h2>{probs.productName}</h2>
            <p>{probs.productPrice}</p>
        </div>
    )
}

export default NewProduct