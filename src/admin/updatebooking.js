
import { useState } from "react";
import { useParams } from "react-router-dom"

const UpdateBooking = () => {

    const {bookingID} = useParams('');
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phoneNo, setPhoneNo] = useState('');
    let [address, setAddress] = useState('')

    const getdatas = () => {
        const url = "http://localhost:1111/main/updatebooking/" + bookingID;

        try{
            fetch(url)
            .then( res => res.json() )
            .then( info => {
                setName( info.name )
                setEmail( info.email )
                setPhoneNo( info.phoneNo );
                setAddress( info.address )
            })
        }catch(error){
            console.log(" Data Processing eroor.... ")
        }
    }

    useState( () => {
        getdatas()
    },[])

    const handlesubmit = (e) => {
        e.preventDefault()

        let alldata = {
            Idsbooking : bookingID,
            updatename : name,
            updateemail : email,
            updatephoneNo : phoneNo,
            updateaddress : address
        }
        const url = "http://localhost:1111/main/postdatabooking/"
        const postdata = {
            headers : { 'Content-Type' : 'application/json' },
            method  : 'put',
            body    : JSON.stringify(alldata)
        }

        try{
            fetch(url, postdata)
            .then( res => res.json() )
            .then( info => {
                console.log( info );
            })
        }catch(error){
            console.log(" Data processed failed..... ")
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
                                <input type="text" value={name} className=" form-control " name="names" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Email 
                            </div>
                            <div className="col-9" >
                            <input type="email" value={email} className=" form-control " name="emails" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your email" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Phone No 
                            </div>
                            <div className="col-9" >
                                <input type="number" value={phoneNo} className=" form-control " name="phoneno" onChange={(e) => setPhoneNo(e.target.value)} placeholder="Enter Your Number" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-3" >
                                Address     
                            </div>
                            <div className="col-9" >
                                <textarea placeholder="Address" value={address} name="address" onChange={(e) => setAddress(e.target.value)} className="form-control" ></textarea>
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

export default UpdateBooking