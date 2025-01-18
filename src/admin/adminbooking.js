
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Adminbooking = () => {

    let [alldatas, setdatas] = useState([])    
    const getdata = () => {

        const url = "http://localhost:1111/main/formlist"
        try{
            fetch(url)
            .then( res => res.json() )
            .then( info => {
                setdatas(info)
            })
        }catch(error){
            console.log(" Data fetch error... ");
        }
    }

    useEffect( () => {
        getdata()
    },[])
    return(
        <div className="container">
            <h1 className=" text-center mt-5" >List of Rooms</h1>
            <div className="row justify-content-center mt-5">
            <Link to="/" > <button className="btn btn-primary" > Admin List </button> </Link>
                <div className="col-8 " >
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alldatas.map( (value, index) => {
                                    return(
                                        <tr key={index} >
                                            <td> {value._id} </td>
                                            <td> {value.name} </td>
                                            <td> {value.email} </td>
                                            <td> {value.phoneNo} </td>
                                            <td> {value.address} </td>
                                            <td> <Link to={'/updatebooking/' + value._id} > <button className="btn btn-primary" > Edit </button> </Link> </td>
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

export default Adminbooking