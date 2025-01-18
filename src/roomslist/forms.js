
import { useState } from "react"

const Forms = () => {
    const [fieldsdata, setData] = useState({})

    const handle = (e) => {
        setData({...fieldsdata, [e.target.name] : e.target.value })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        let url = "http://localhost:1111/main/insert"
        let postdata = {
            headers  : { 'Content-Type' : 'application/json' },
            method   : 'post',
            body     : JSON.stringify(fieldsdata)
        }

        try{
            fetch(url, postdata)
            .then( res => res.json() )
            .then( info => {
                alert(info.message)
                // the input field will be reseted
                e.target.reset()
            })
        }catch(error){
            console.log(" Data processing failed......");
        }

    }

    return(
        <div className="container">
            <h2 className="fw-bold mt-5 text-danger text-center shadow-none">Fill the Details </h2>
            <div className="row" >
                <div className="col-lg-4" ></div>
                <div className="col-lg-4 mt-4" >
                    <form className="col-12" onSubmit={handlesubmit}>
                            
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Name 
                            </div>
                            <div className="col-9" >
                                <input type="text" className=" form-control " name="names" onChange={handle} placeholder="Enter Your Name" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Email 
                            </div>
                            <div className="col-9" >
                                <input type="email" className=" form-control " name="emails" onChange={handle} placeholder="Enter Your email" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Phone No 
                            </div>
                            <div className="col-9" >
                                <input type="number" className=" form-control " name="phoneno" onChange={handle} placeholder="Enter Your Number" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Address     
                            </div>
                            <div className="col-9" >
                                <textarea placeholder="Address" name="address" onChange={handle} className="form-control" ></textarea>
                            </div>
                        </div>

                        <div className="row mt-3" >
                            <div className="col-3" >
                                <button className="btn btn-primary" >Submit</button>   
                            </div>
                        </div>   
                            
                    </form>
                </div>
                <div className="col-lg-4" ></div>
            </div>
        </div>
    )
}

export default Forms