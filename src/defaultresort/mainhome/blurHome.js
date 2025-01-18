
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BlurHome = () => {

    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 roomcontainer">
                <div className="row indexing rounded">
                    <Skeleton height={120} width="100%" duration={0.8} baseColor="#c0c0c0" highlightColor="#f0f0f0" />
                </div>
            </div>
          </div>
        </div>
      );
}

export default BlurHome