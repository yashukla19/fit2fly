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

const DashboardComponent: React.FC<DashboardProps> = () => {
    const dispatch: TAppDispatch = useDispatch();
    const user = useSelector((state: TRootState) => state.user.currentUser);
    const isFetchingUser = useSelector((state: TRootState) => state.user.isFetching);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    if (isFetchingUser) {
        return (<h2>Fetching user details...</h2>);
    }

    if (!user) {
        return <h2>User is not logged in, <button onClick={() => dispatch(loginUser())}>Login User</button></h2>;
    }

    const StyledNavbar = styled(Navbar)`${({ theme }) => headerStyles(theme)};`;
    const Sidebar = styled.div`${({ theme }) => sidebarStyles(theme)};`;
    const MainContent = styled.div`${({ theme }) => mainContentStyles(theme)};`;

    return (
        <>
            <StyledNavbar fixed="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/dashboard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle className="d-block d-md-none" onClick={() => setIsNavExpanded(!isNavExpanded)} aria-controls="basic-navbar-nav" />
                    {isNavExpanded &&
                        <Navbar.Collapse id="basic-navbar-nav" className="d-block d-md-none">
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/dashboard/admin">Admin</Nav.Link>
                                <Nav.Link as={NavLink} to="/dashboard/passengers">Passengers</Nav.Link>
                            </Nav>
                            <button onClick={() => dispatch(fetchTheme())}>Refresh Theme</button>
                        </Navbar.Collapse>
                    }
                </Container>
            </StyledNavbar>
            <Container fluid className="d-flex vh-100 p-0">
                <Row className="flex-nowrap w-100">
                    <Col xs={12} md={2} className="d-none d-md-block p-0">
                        <Sidebar className="vh-100 overflow-auto ">
                            <Nav className="flex-column">
                                <Nav.Link as={NavLink} to="/dashboard/admin">Admin</Nav.Link>
                                <Nav.Link as={NavLink} to="/dashboard/passengers">Passengers</Nav.Link>
                            </Nav>
                        </Sidebar>
                    </Col>
                    <Col xs={12} md={10} className="p-0">
                        <MainContent className="overflow-auto vh-100">
                            <Outlet />
                        </MainContent>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const Dashboard = styled(DashboardComponent)``

export default Dashboard