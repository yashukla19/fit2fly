import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { TAppDispatch, TRootState } from "../../../src/redux/store"
import styled from "styled-components"
import { dashboardStyles } from "./dashboard.styles"
import { fetchTheme } from "../../../src/redux/asyncActions/themeAsyncActions"
import { loginUser } from "../../../src/redux/asyncActions/userAsyncActions"

type DashboardProps = {
    className?: string
}

const DashboardComponent: React.FC<DashboardProps> = ({ className }) => {
    const dispatch: TAppDispatch = useDispatch()

    const user = useSelector((state: TRootState) => state.user.currentUser)
    const isFetchingUser = useSelector((state: TRootState) => state.user.isFetching)

    if (isFetchingUser) {
        return (<h2>Fetching user details...</h2>)
    }

    if (!user) {
        return <h2>User is not logged in, <button onClick={() => dispatch(loginUser())}>Login User</button></h2>
    }

    return (
        <div className={className}>
            <div className="dashboardHeader">
                <button onClick={() => dispatch(fetchTheme())}>Refresh theme</button>
                <button onClick={() => dispatch(loginUser())}>Log out</button>
            </div>
            <div className="dashboardContent">
                <div className="dashboardLeftNav">
                    <NavLink to="/dashboard/passengers">Passenger</NavLink>
                    <NavLink to="/dashboard/admin">Admin</NavLink>
                    <NavLink to="/dashboard/doctor">Doctor</NavLink>
                </div>
                <div className="dashboardMainArea">
                    <h1>Hi {user}, This is your Dashboard </h1>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

const Dashboard = styled(DashboardComponent)`
    ${({ theme }) => dashboardStyles(theme)};
`

export default Dashboard