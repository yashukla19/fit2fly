import React from "react";
import { Link } from "react-router-dom";

const AddPassenger: React.FC = () => {
    return (
        <>
            <h1>Add Passenger</h1>
            <Link to="/dashboard/passengers"> Go Back to List </Link>
            <br />
        </>
    )
}

export default AddPassenger