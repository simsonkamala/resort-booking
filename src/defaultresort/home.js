import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="image">
      <img className="img-fluid"  src="https://media2.thrillophilia.com/images/photos/000/100/904/original/1473771883_5551_ho_00_p_1024x768.jpg?w=753&h=450&dpr=1.5"  alt="Images" />
      <div className="container-fluid mt-sm-5 mt-md-5 mt-lg-0" >
        <div className="row">
          <h2 className=" col-md-12 text-center fs-1 fw-bold big-heading" >Helping You To Find The Most Comfortable Place <br></br> Book Your Perfect Resort </h2>
        </div>
        <div className="row  " >
          <div className=" col-12 para1  text-center " > Escape to paradise with our luxurious resort bookings, where relaxation meets adventure. <br></br>  Book now to create unforgettable memories in breathtaking destinations. </div>          
        </div>
      </div>
    </div>
  );
};

export default Home;
