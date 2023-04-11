import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faBug } from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    return (
        <div className="h-screen grid place-items-center">
            <div className="error-div text-center">
                <h1 className="text-7xl font-black text-rose-600 mb-8">
                    404 <FontAwesomeIcon icon={faBug} />
                </h1>
                <p className="text-2xl mb-12">
                    <span className="text-red-600 font-extrabold">Oops!</span> The page you are looking for could not be found.
                </p>
                <button className="btn cmn-btn-clr" onClick={() => window.history.back()}>
                    <FontAwesomeIcon icon={faAngleLeft} />&nbsp; Go Back
                </button>
            </div>
        </div>
    );
};

export default Error;
