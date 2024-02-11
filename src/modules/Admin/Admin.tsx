import { useSelector } from "react-redux";
import { TRootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import React from "react";

const AdminHome: React.FC = () => {
    const user = useSelector((state: TRootState) => state.user.currentUser)

    const navigate = useNavigate()

    if(user){
        return <h1>Hi {user} welcome to admin panel</h1>
    } else {
        setTimeout(() => navigate(-1), 3000)
        return (<h1>You are not logged in. Taking you back.</h1>)
    }
}

export default AdminHome
