
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const FoodCardsBlur = () => {
    return(
        <>
            <div className="container mt-5 " >
            <div className="row justify-content-center " >
                <div className="col-md-4 text-center shadow-none " >
                    <h1 className=" text-danger  " > <Skeleton height={42} width={216} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />  </h1>
                    <p className="mt-5 " > <Skeleton count={10} width={216} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" /> </p>
                    
                </div>
                <div className="col-md-6 text-end mt-4 mb-5" >
                    <Skeleton height="100%" width="78%" duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                </div>
            </div>

            <div className="row justify-content-center mt-5 " >
            <div className="col-md-6 mt-4 mb-5" >
                <Skeleton height="100%" width="78%" duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
            </div>
            <div className="col-md-4 text-center shadow-none " >
                <h1 className=" text-danger text-center shadow-none " > <Skeleton height={42} width={216} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" /> </h1>
                <p className="mt-5" ><Skeleton count={10} width={216} duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />.</p>
                
            </div>
            </div>
        </div>

        <div className=" container-fluid " >
            <Skeleton height={190} width="100%" duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
        </div>
        </>
    )
}

export default FoodCardsBlur