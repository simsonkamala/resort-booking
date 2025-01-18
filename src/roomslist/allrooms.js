import { useState, useEffect } from "react";
import "../defaultresort/roomcarts.css";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AllRoomsList = () => {

    const [store, setStore] = useState([]);
    const [loading, setLoading] = useState(true);

    const getdata = async () => {
        try{
            await fetch("http://localhost:1111/main/list")
            .then( res => res.json() )
            .then( info => {
                setStore(info)
                // console.log(info)
            })
        }catch(error){
            console.error(" Data fetching is not processed ")
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="fw-bolder ms-md-5">LIST OF ROOM AVAILABLE</h2>
            <div className="row">

                {/* here " Array.from({ length: 6 }).map((_, index) " creating the new array for length 6 for the skeleton
                    and maping the array data will be empty or undefined , so we can use the underscore "_" */}
                {loading
                    ? Array.from( {length:9} ).map((_, index) => (
                          <div className="col-md-4 mt-4" key={index}>
                              <div className="card hovers rounded-5 p-2">
                                  <Skeleton height={200} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                                  <div className="card-body">
                                      <h3 className="card-title fw-bold">
                                          <Skeleton width={`60%`} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                                      </h3>
                                      <Skeleton count={2} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                                      <h3 className="fw-bold">
                                          <Skeleton width={`40%`} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      ))
                    : store.map((value, index) => (
                          <div className="col-md-4 mt-4" key={index}>
                              <div className="card hovers rounded-5 p-2">
                                  <img
                                      src={value.image}
                                      alt="images"
                                      className="p-2 rounded-5"
                                  />
                                  <div className="card-body">
                                      <h3 className="card-title fw-bold">
                                          Room: {value.rooms}
                                      </h3>
                                      <div>
                                          1hr/50m <br /> Tue 18/2 to Sat 22/2
                                      </div>
                                      <h3 className="fw-bold">from: $200</h3>
                                  </div>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default AllRoomsList;
