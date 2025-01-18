import React from "react"
import "./roomcarts.css"

const RoomCarts = () => {
  return (
    <>
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-10 roomcontainer " >
                    <div className="row bg-white shadow-lg indexing rounded ">
                        <div className="col-md-3 mt-4 mb-4  text-center ">
                            <p className=" text-danger fw-bold  " >Rooms</p>
                            <p className="mb-4 " >Rooms Are Available </p>
                        </div>
                        <div className="col-md-3 mt-4 mb-4  text-center ">
                            <p className=" text-danger fw-bold " > Available </p>
                            <p> 24/7 hours </p>
                        </div>
                        <div className="col-md-3 mt-4 mb-4  text-center ">
                            <p className="text-danger fw-bold " >  Facilities </p>
                            <p> Dinner, AC, wi-fi, Trucking </p>
                        </div>
                        <div className="col-md-3 mt-4 mb-4 align-content-center text-center ">
                            <p className="fw-bold text-danger " > Book And Enjoy </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </> 
  );
};

export default RoomCarts;
