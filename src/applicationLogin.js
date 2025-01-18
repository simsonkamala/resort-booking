import { useState } from "react"

const ApplicationLogin = () => {

    const [data, setfield] = useState({});

    const handelinput = (e) => {
        setfield( {...data, [e.target.name] : e.target.value} )
    }

    const validate = (e) => {
        e.preventDefault();

        if( data.user == "jesus" && data.passowrd == "jesus123" ){
            localStorage.setItem("username", data.user)
            window.location.reload()
            window.location.href = '/admin'   
                     
        }else{
            alert("Invalide data...")
        }
    }

    return(
        <div className="container" >

            <div className="row mt-5 justify-content-center " >
                <div className="col-lg-2"></div>
                <div className="col-lg-5 ">

                    <form onSubmit={validate} className="shadow-lg p-3 mt-5 pb-5 pt-5 rounded-4">
                        <h1 className="text-danger fw-bold text-center shadow-none" >Login</h1>

                        <div className=" input-group mt-4 " >
                            <div className="input-group-text text-bg-danger " > <i className="fa-solid fa-user text-white " ></i> </div>
                            <input type="text" name="user" onChange={handelinput} className="form-control border-danger" placeholder="Enter th UserId" /> 
                        </div>

                        <div className="input-group mt-3" >
                            <div className="input-group-text text-bg-danger " > <i className="fa-solid fa-lock text-white " ></i> </div>
                            <input type="text" name="passowrd" onChange={handelinput} placeholder="Enter the Password" className="form-control border-danger " />
                        </div>

                        <div>
                            <button className="mt-4 form-control btn btn-danger" ><h5>Login</h5></button>
                        </div>
                    </form>

                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}

export default ApplicationLogin