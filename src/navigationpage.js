import { Link, useLocation } from "react-router-dom"
import "./navigationpage.css"

const Navigation = () => {
    const location = useLocation()
    const currentpath = location.pathname;
    return(
        <nav className={`navbar navbar-expand-lg navbar-light ${currentpath == "/" ? "position-absolute" : "position-relative"} navigations `} >
            <div className="container ">
                <h3 className={`navbar-brand fw-bolder ${currentpath == "/" ? "text-white" : "text-dark" } mt-3 `} href="#">Resort BooK</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav justify-content-lg-center w-100">
                        <li className="nav-item">
                            <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `}  to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `} to="/resortlist" >Resort List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `} to="/forms" >Forms</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `} to="/login" > login </Link>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `} to="/login" > login </Link>
                        </li>
                    </ul>
                </div>
                {/* <Link className={`nav-link active ${currentpath == "/" ? "text-white" : "text-dark"} `} to="/login" > login </Link> */}
            </div>
        </nav>
    )
} 

export default Navigation