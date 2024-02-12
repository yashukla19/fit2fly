import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { TAppDispatch, TRootState } from "../../../src/redux/store"
import styled from "styled-components"
import { headerStyles, sidebarStyles, mainContentStyles } from "./dashboard.styles"
import { loginUser } from "../../../src/redux/asyncActions/userAsyncActions"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { fetchTheme } from "../../../src/redux/asyncActions/themeAsyncActions"
import { useState } from "react"

type DashboardProps = {
    className?: string
}

const DashboardComponent: React.FC<DashboardProps> = ({ className }) => {
    const dispatch: TAppDispatch = useDispatch();
    const user = useSelector((state: TRootState) => state.user.currentUser);
    const isFetchingUser = useSelector((state: TRootState) => state.user.isFetching);

    if (isFetchingUser) {
        return (<h2>Fetching user details...</h2>);
    }

    if (!user) {
        return <h2>User is not logged in, <button onClick={() => dispatch(loginUser())}>Login User</button></h2>;
    }

    const StyledHeaderRow = styled(Row)`${({ theme }) => headerStyles(theme)};`;
    const SidebarCol = styled(Col)`${({ theme }) => sidebarStyles(theme)};`;
    const MainContentCol = styled(Col)`${({ theme }) => mainContentStyles(theme)};`;

    return (
        <div className={className}>
            <Container fluid className="main-container">
                <StyledHeaderRow className="d-flex align-items-center">
                    <Col xs={12}><h2>Dashboard</h2></Col>
                </StyledHeaderRow>
                <Row className="flex-nowrap">
                    <SidebarCol xs={12} md={2} className="d-none d-md-block">
                        <Nav className="flex-column">
                            <Nav.Link as={NavLink} to="/dashboard/admin">Admin</Nav.Link>
                            <Nav.Link as={NavLink} to="/dashboard/passengers">Passengers</Nav.Link>
                        </Nav>
                    </SidebarCol>
                    <MainContentCol xs={12} md={10}>
                        <Outlet />
                    </MainContentCol>
                </Row>
            </Container>
        </div>
    );
}

const Dashboard = styled(DashboardComponent)``

export default Dashboard