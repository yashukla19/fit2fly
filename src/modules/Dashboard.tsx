import { NavLink, Outlet } from "react-router-dom"

type DashboardProps = {
    userName?: string
}

const Dashboard: React.FC<DashboardProps> = (props) => {
    return (
        <>
            <h1>Hi {props.userName}, This is your Dashboard </h1>
            <NavLink to="/dashboard/passengers">Passenger</NavLink>
            <br />
            <NavLink to="/dashboard/admin">Admin</NavLink>
            <br />
            <NavLink to="/dashboard/doctor">Doctor</NavLink>
            <br />
            <Outlet />
        </>
    )
}

export default Dashboard