import { Link } from 'react-router-dom';

const Error = () => {

    return(
        <div className="row h-100 justify-content-center align-items-center">
            <div>	
                <div className="row justify-content-center">
                    <h1><span className="error-sign">Ooops!</span></h1>
                </div>
                <div className="row justify-content-center">
                    <h2 className="error-title" > {{errorTitle}} </h2>
                </div>
                <div className="row justify-content-center">
                    <p> {{errorText}} </p>
                </div>
                <div className="row justify-content-center">
                    <Link to="/" className="btn py-3 px-4 btn-primary">Go To List</Link>
                </div>	
            </div>		  		
        </div>
    );

}

export default Error;