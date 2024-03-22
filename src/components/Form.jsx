import { useState } from "react"



const Form = ()=>{
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setUserDetails(
            (prevState)=>({...prevState, [name]: value}))
    }

    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email, password);
    }

    return(
        <>
            <form onSubmit={handleSubmit}  style={{backgroundColor: `#bca0dc`, padding: `120px`, borderRadius: `32px`} }>
                <div className="formControl" >
                    <label htmlFor="email"> Enter Email</label> <br></br>
                    <input type="text" name="email" placeholder="Enter Email" id="email" value={userDetails.email} onChange={handleChange} />
                </div>

                <div className="formControl">
                <label htmlFor="password"> Enter Password</label> <br></br>
                    <input type="password" name="password" placeholder="Enter Password" id="password" value={userDetails.password} onChange={handleChange} />
                </div>

                {/* <div className="formControl">
                    <input type="password" name="username" placeholder="Enter Name"  />
                </div> */}

                <h1>
                    email: {email}
                </h1>


                <h2>
                    password: {password}
                </h2>

                <button type="submit">Submit</button>
            </form>

            
        </>
    )
}

export default Form