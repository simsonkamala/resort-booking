import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const UpdateData = () => {

    let [Id, setId] = useState('');
    let [rooms, setRooms] = useState('');
    let [images, setImages] = useState('');

    const {id} = useParams()

    const getdata = () => {
        let url = "http://localhost:1111/main/" + id;
        try{
            fetch(url)
            .then( res => res.json() )
            .then( info => {
                setId(info._id);
                setRooms(info.rooms);
                setImages(info.image)                
            })

        }catch(error){
            console.log(" Data processing vailed..... ")
        }
    }

    useEffect( () => {
        getdata()
    }, [])

    const handle = (e) => {
        e.preventDefault()

        let datauploads = {
            ids : Id,
            updaterooms : rooms,
            updateimages : images
        }

        let url = "http://localhost:1111/main/apploaddata"

        let postdata = {
            headers : { 'Content-Type' : 'application/json' },
            method  : 'put',
            body    : JSON.stringify(datauploads) 
        }

        try{
            fetch(url,postdata)
            .then( res => res.json() )
            .then( info => {
                console.log( info.message )
            })

        }catch(error){
            console.log(" Data Process error.... ")
        } 
    }

    return(
        <div className="container" >
            <div className="row mt-5" >
                <h2 className="text-center mb-4 text-danger fw-bold" >Update Value</h2>
                <div className="col-lg-4" ></div>
                <div className="col-lg-4" >
                    <form className="col-12" onSubmit={handle}>
                        
                        <div className="row mt-3" >
                            <div className="col-4" >
                                Id 
                            </div>
                            <div className="col-8" >
                                <input type="text" value={Id}  className=" form-control " name="id" onChange={(e) => setId(e.target.value)} placeholder="Enter Your Name" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-4" >
                                Room-Name 
                            </div>
                            <div className="col-8" >
                                <input type="text" value={rooms}  className=" form-control " name="Room-Name" onChange={(e) => setRooms(e.target.value)} placeholder="Enter Your email" />
                            </div>
                        </div>
        
                        <div className="row mt-3" >
                            <div className="col-4" >
                                Image url 
                            </div>
                            <div className="col-8" >
                                <input type="text"  value={images}  className=" form-control " name="Image" onChange={(e) => setImages(e.target.value)} placeholder="Enter Your Number" />
                            </div>
                        </div>

                        <div className="row mt-3" >
                            <div className="col-3" >
                                <button type="submit" className="btn btn-primary" >Submit</button>   
                            </div>
                        </div>   
                            
                    </form>
                </div>
                <div className="col-lg-4" ></div>
            </div>
        </div>
    )
}

export default UpdateData