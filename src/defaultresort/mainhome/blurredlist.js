
import "../home.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const BlurredList = () => {
    useGSAP( () => {
        gsap.to(".box1",{
            x: 250,
            duration: 1,
            repeat: 10,
            ease: "power1.inOut"
        })
    },[])
    return(
        <div className="container blurred-loading">
            <div className="row loading-columns flex-md-nowrap ">
                <div className="col-md-4 ms-lg-5 mb-5 mt-4 loading-column ">
                    <p className="box1 flex-md-nowrap"></p>
                </div>
                <div className="col-md-4 mb-5 mt-4 loading-column">
                    <p className="box1 flex-md-nowrap"></p>
                </div>
                <div className="col-md-4 mb-5 mt-4 loading-column">
                    <p className="box1 flex-md-nowrap"></p>
                </div>
            </div>
        </div>
    )
}

export default BlurredList