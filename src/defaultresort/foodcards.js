
import "./roomcarts.css"


const FoodCards = () => {
  return (
    <>
      <div className="container mt-5 " >
        <div className="row justify-content-center " >
            <div className="col-lg-4 text-center shadow-none " >
                <h1 className=" text-danger  " > Resort Details   </h1>
                <p className="mt-5 " >Discover the ultimate escape at our luxurious resort, where tranquility meets adventure. Nestled in breathtaking surroundings, our resort offers a perfect blend of comfort, relaxation, and unforgettable experiences.</p>
                <p>Indulge in our world-class amenities designed to cater to your every need. Enjoy gourmet dining, a rejuvenating spa, infinity pools, and state-of-the-art fitness centers, all set within a stunning natural landscape.</p>
            </div>
            <div className="col-lg-6 text-lg-end text-sm-center mt-4 mb-5" >
                <img className="img-fluid rounded-5 images-body mt-5 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKxVwXGC5kGVDnEQi3k3ujzn_vEw-qPszsw&s" alt="" />
            </div>
        </div>

        <div className="row justify-content-center mt-5 " >
          <div className="col-lg-6 text-lg-start text-sm-center mt-4 mb-5" >
            <img className="img-fluid rounded-5 images-body mt-5 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjnsuqM9Ek-wnowNwnEzh__-BSwV6DEtQqQ&s" alt="" />
          </div>
          <div className="col-lg-4 text-center shadow-none " >
            <h1 className=" text-danger text-center shadow-none " > About </h1>
            <p className="mt-5" >Discover the ultimate escape at our luxurious resort, where tranquility meets adventure. Nestled in breathtaking surroundings, our resort offers a perfect blend of comfort, relaxation, and unforgettable experiences.</p>
            <p>Indulge in our world-class amenities designed to cater to your every need. Enjoy gourmet dining, a rejuvenating spa, infinity pools, and state-of-the-art fitness centers, all set within a stunning natural landscape.</p>
          </div>
        </div>
      </div>

      <div className=" container-fluid bg-dark text-white  " >
        <div className=" row justify-content-center pt-5 pb-3" >
          <div className=" col-5 text-center shadow-none " >
            <span>All material herein</span><span> &copy; 2024-2025 </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum non unde maiores quaerat cupiditate veniam illum quos.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCards;
