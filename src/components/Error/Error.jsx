import React from "react";

const Error = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1 style={{ fontSize: "72px", color: "#f44336", marginBottom: "20px" }}>
                404
            </h1>
            <p style={{ fontSize: "24px", marginBottom: "40px" }}>
                Oops! The page you are looking for could not be found.
            </p>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "20px",
                    borderRadius: "5px",
                    backgroundColor: "#f44336",
                    color: "white",
                    cursor: "pointer",
                }}
                onClick={() => window.history.back()}
            >
                Go Back
            </button>
        </div>
    );
};

export default Error;
