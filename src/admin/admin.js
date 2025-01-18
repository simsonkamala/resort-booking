
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Admin = () => {

    let [alldata, setdata] =  useState([])

    const getdata = () => {

        const url = "http://localhost:1111/main/list";

        try{
            fetch(url)
            .then( res => res.json() )
            .then( info => {
                setdata(info)
            })
        }catch(error){
            console.log(" Loading error... ");
            
        }
    }

    useEffect( () => {
        getdata()
    }, [])

    return(
        <div className="container">
            <h1 className=" text-center mt-5" >List of Rooms</h1>
            <div className="row justify-content-center mt-5">
            <Link to="/adminbook" > <button className="btn btn-primary" > Booking List </button> </Link>
                <div className="col-8 " >
                    <table className="table table-striped mb-5 " >
                        <thead>
                            <tr>
                                <th>Room_Name</th>
                                <th>Room Id</th>
                                <th>Image Address</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alldata.map( (value, index) => {
                                    return(
                                        <tr key={index} >
                                            <td> {value.rooms} </td>
                                            <td> {value._id} </td>
                                            <td> {value.image} </td>
                                            {/* <td> <button className="btn btn-primary" onClick={ <Link to={"/updete" + value._id} ></Link> } > Edite </button> </td> */}
                                            <td> <Link to={`/updete/${value._id}`} > <button className="btn btn-primary" > Edite </button> </Link> </td>
                                            <td> <button className="btn btn-danger" > Delete </button> </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin